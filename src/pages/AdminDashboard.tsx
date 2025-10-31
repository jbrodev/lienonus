import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { Loader2, Trash2 } from "lucide-react";
import Navigation from "@/components/Navigation";

interface AnalyticsData {
  id: string;
  provider_name: string;
  event_type: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      const { data: roles, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin");

      if (error || !roles || roles.length === 0) {
        toast.error("Access denied. Admin privileges required.");
        navigate("/");
        return;
      }

      setIsAdmin(true);
      fetchAnalytics();
    } catch (error) {
      console.error("Error checking admin access:", error);
      navigate("/auth");
    }
  };

  const fetchAnalytics = async () => {
    try {
      const { data, error } = await supabase
        .from("provider_analytics")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setAnalytics(data || []);
    } catch (error: any) {
      toast.error("Failed to load analytics data");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("provider_analytics")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      setAnalytics(analytics.filter(item => item.id !== id));
      toast.success("Record deleted successfully");
    } catch (error: any) {
      toast.error("Failed to delete record");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto py-8 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Provider Analytics Dashboard</CardTitle>
            <CardDescription>
              View and manage all provider interaction analytics
            </CardDescription>
          </CardHeader>
          <CardContent>
            {analytics.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No analytics data available yet.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Provider Name</TableHead>
                      <TableHead>Event Type</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {analytics.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.provider_name}</TableCell>
                        <TableCell>{item.event_type}</TableCell>
                        <TableCell>
                          {new Date(item.created_at).toLocaleString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;