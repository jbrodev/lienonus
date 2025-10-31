import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Trash2, ArrowUpDown } from "lucide-react";
import Navigation from "@/components/Navigation";

interface AnalyticsData {
  id: string;
  provider_name: string;
  provider_id: number;
  event_type: string;
  specialty: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const [filteredAnalytics, setFilteredAnalytics] = useState<AnalyticsData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [eventTypeFilter, setEventTypeFilter] = useState("all");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");
  const [sortField, setSortField] = useState<keyof AnalyticsData>("created_at");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
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
      setFilteredAnalytics(data || []);
    } catch (error: any) {
      toast.error("Failed to load analytics data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = [...analytics];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.provider_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.provider_id.toString().includes(searchTerm)
      );
    }

    // Apply event type filter
    if (eventTypeFilter !== "all") {
      filtered = filtered.filter((item) => item.event_type === eventTypeFilter);
    }

    // Apply specialty filter
    if (specialtyFilter !== "all") {
      filtered = filtered.filter((item) => item.specialty === specialtyFilter);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (sortField === "created_at") {
        const aTime = new Date(aValue as string).getTime();
        const bTime = new Date(bValue as string).getTime();
        return sortDirection === "asc" ? aTime - bTime : bTime - aTime;
      }
      
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });

    setFilteredAnalytics(filtered);
  }, [analytics, searchTerm, eventTypeFilter, specialtyFilter, sortField, sortDirection]);

  const formatEventType = (eventType: string) => {
    return eventType
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleSort = (field: keyof AnalyticsData) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const uniqueEventTypes = Array.from(new Set(analytics.map((item) => item.event_type)));
  const uniqueSpecialties = Array.from(new Set(analytics.map((item) => item.specialty)));

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

  const handleExport = () => {
    // Prepare CSV data
    const headers = ["Provider ID", "Provider Name", "Specialty", "Event Type", "Date & Time"];
    const csvData = filteredAnalytics.map((item) => [
      item.provider_id,
      item.provider_name,
      item.specialty,
      formatEventType(item.event_type),
      new Date(item.created_at).toLocaleString(),
    ]);

    // Create CSV content
    const csvContent = [
      headers.join(","),
      ...csvData.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `provider_analytics_${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Data exported successfully");
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
      <div className="container mx-auto py-8 px-4 pt-24">
        <Card>
          <CardHeader>
            <CardTitle>Provider Analytics Dashboard</CardTitle>
            <CardDescription>
              View and manage all provider interaction analytics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 flex-1">
                <Input
                  placeholder="Search by provider name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="md:w-64"
                />
              <Select value={eventTypeFilter} onValueChange={setEventTypeFilter}>
                <SelectTrigger className="md:w-48">
                  <SelectValue placeholder="Filter by event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  {uniqueEventTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {formatEventType(type)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                <SelectTrigger className="md:w-48">
                  <SelectValue placeholder="Filter by specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  {uniqueSpecialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              </div>
              <Button onClick={handleExport} variant="outline">
                Export to Excel
              </Button>
            </div>

            {filteredAnalytics.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                {analytics.length === 0
                  ? "No analytics data available yet."
                  : "No results found matching your filters."}
              </p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSort("provider_id")}
                          className="h-auto p-0 hover:bg-transparent"
                        >
                          Provider ID
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </Button>
                      </TableHead>
                      <TableHead>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSort("provider_name")}
                          className="h-auto p-0 hover:bg-transparent"
                        >
                          Provider Name
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </Button>
                      </TableHead>
                      <TableHead>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSort("specialty")}
                          className="h-auto p-0 hover:bg-transparent"
                        >
                          Specialty
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </Button>
                      </TableHead>
                      <TableHead>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSort("event_type")}
                          className="h-auto p-0 hover:bg-transparent"
                        >
                          Event Type
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </Button>
                      </TableHead>
                      <TableHead>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSort("created_at")}
                          className="h-auto p-0 hover:bg-transparent"
                        >
                          Date & Time
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </Button>
                      </TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAnalytics.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.provider_id}</TableCell>
                        <TableCell>{item.provider_name}</TableCell>
                        <TableCell>{item.specialty}</TableCell>
                        <TableCell>{formatEventType(item.event_type)}</TableCell>
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