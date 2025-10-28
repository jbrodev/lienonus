import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Phone, Mail, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// Mock provider data with zip codes
const providers = [
  {
    id: 1,
    name: "Dr. Korey Tovar",
    specialty: "Anime Anatomy",
    location: "Los Angeles, CA",
    zipCode: "90001",
    phone: "(555) 123-4567",
    email: "dr.tovar@example.com",
    acceptsLiens: true,
  },
  {
    id: 2,
    name: "Dr. James Chen",
    specialty: "Neurology",
    location: "San Francisco, CA",
    zipCode: "94102",
    phone: "(555) 234-5678",
    email: "dr.chen@example.com",
    acceptsLiens: true,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Physical Therapy",
    location: "San Diego, CA",
    zipCode: "92101",
    phone: "(555) 345-6789",
    email: "dr.rodriguez@example.com",
    acceptsLiens: true,
  },
  {
    id: 4,
    name: "Dr. Michael Thompson",
    specialty: "Chiropractic",
    location: "Sacramento, CA",
    zipCode: "95814",
    phone: "(555) 456-7890",
    email: "dr.thompson@example.com",
    acceptsLiens: true,
  },
  {
    id: 5,
    name: "Dr. Lisa Anderson",
    specialty: "Pain Management",
    location: "Los Angeles, CA",
    zipCode: "90015",
    phone: "(555) 567-8901",
    email: "dr.anderson@example.com",
    acceptsLiens: true,
  },
  {
    id: 6,
    name: "Dr. David Kim",
    specialty: "Orthopedic Surgery",
    location: "San Jose, CA",
    zipCode: "95113",
    phone: "(555) 678-9012",
    email: "dr.kim@example.com",
    acceptsLiens: true,
  },
];

const specialties = [
  "All Specialties",
  "Orthopedic Surgery",
  "Neurology",
  "Physical Therapy",
  "Chiropractic",
  "Pain Management",
];

const Providers = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({});

  // Track provider views
  const trackProviderView = async (providerId: number, providerName: string) => {
    try {
      await supabase.from("provider_analytics").insert({
        provider_id: providerId,
        provider_name: providerName,
        event_type: "view",
      });
    } catch (error) {
      console.error("Error tracking provider view:", error);
    }
  };

  // Track provider clicks
  const trackProviderClick = async (providerId: number, providerName: string) => {
    try {
      await supabase.from("provider_analytics").insert({
        provider_id: providerId,
        provider_name: providerName,
        event_type: "click",
      });
    } catch (error) {
      console.error("Error tracking provider click:", error);
    }
  };

  // Fetch view counts for all providers
  useEffect(() => {
    const fetchViewCounts = async () => {
      try {
        const { data, error } = await supabase
          .from("provider_analytics")
          .select("provider_id")
          .eq("event_type", "view");

        if (error) throw error;

        const counts: Record<number, number> = {};
        data?.forEach((record) => {
          counts[record.provider_id] = (counts[record.provider_id] || 0) + 1;
        });
        setViewCounts(counts);
      } catch (error) {
        console.error("Error fetching view counts:", error);
      }
    };

    fetchViewCounts();
  }, []);

  const filteredProviders = providers.filter((provider) => {
    const matchesSpecialty =
      selectedSpecialty === "All Specialties" || provider.specialty === selectedSpecialty;
    const matchesSearch =
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.zipCode.includes(searchTerm);
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Find Your Provider
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our elite network of medical professionals accepting liens
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search by name, location, or zip code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Specialty Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {specialties.map((specialty) => (
                <Button
                  key={specialty}
                  variant={selectedSpecialty === specialty ? "default" : "outline"}
                  onClick={() => setSelectedSpecialty(specialty)}
                  size="sm"
                >
                  {specialty}
                </Button>
              ))}
            </div>
          </div>

          {/* Provider Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider) => (
              <Card
                key={provider.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/50 cursor-pointer"
                onClick={() => {
                  trackProviderClick(provider.id, provider.name);
                  trackProviderView(provider.id, provider.name);
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{provider.name}</CardTitle>
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
                        {provider.specialty}
                      </Badge>
                    </div>
                    {viewCounts[provider.id] && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Eye size={14} />
                        <span>{viewCounts[provider.id]}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin size={16} className="mr-2 text-primary" />
                    {provider.location} {provider.zipCode}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone size={16} className="mr-2 text-primary" />
                    {provider.phone}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail size={16} className="mr-2 text-primary" />
                    {provider.email}
                  </div>
                  <div className="pt-2">
                    <Badge variant="outline" className="text-secondary border-secondary">
                      ✓ Accepts Liens
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProviders.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No providers found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Providers;
