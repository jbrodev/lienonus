import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Mock provider data
const providers = [
  {
    id: 1,
    name: "Dr. Korey Tovar",
    specialty: "Anime Anatomy",
    location: "Los Angeles, CA",
    phone: "(555) 123-4567",
    email: "dr.tovar@example.com",
    website: "https://example.com/dr-tovar",
    acceptsLiens: true,
  },
  {
    id: 2,
    name: "Dr. James Chen",
    specialty: "Neurology",
    location: "San Francisco, CA",
    phone: "(555) 234-5678",
    email: "dr.chen@example.com",
    website: "https://example.com/dr-chen",
    acceptsLiens: true,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Physical Therapy",
    location: "San Diego, CA",
    phone: "(555) 345-6789",
    email: "dr.rodriguez@example.com",
    website: "https://example.com/dr-rodriguez",
    acceptsLiens: true,
  },
  {
    id: 4,
    name: "Dr. Michael Thompson",
    specialty: "Chiropractic",
    location: "Sacramento, CA",
    phone: "(555) 456-7890",
    email: "dr.thompson@example.com",
    website: "https://example.com/dr-thompson",
    acceptsLiens: true,
  },
  {
    id: 5,
    name: "Dr. Lisa Anderson",
    specialty: "Pain Management",
    location: "Los Angeles, CA",
    phone: "(555) 567-8901",
    email: "dr.anderson@example.com",
    website: "https://example.com/dr-anderson",
    acceptsLiens: true,
  },
  {
    id: 6,
    name: "Dr. David Kim",
    specialty: "Orthopedic Surgery",
    location: "San Jose, CA",
    phone: "(555) 678-9012",
    email: "dr.kim@example.com",
    website: "https://example.com/dr-kim",
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
  const [searchParams] = useSearchParams();
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [searchTerm, setSearchTerm] = useState("");

  const trackProviderClick = async (providerId: number, providerName: string, eventType: string) => {
    try {
      const { error } = await (supabase as any)
        .from('provider_analytics')
        .insert({
          provider_id: providerId,
          provider_name: providerName,
          event_type: eventType,
        });

      if (error) {
        console.error('Error tracking click:', error);
      }
    } catch (err) {
      console.error('Error tracking click:', err);
    }
  };

  const handleVisitWebsite = (provider: typeof providers[0]) => {
    trackProviderClick(provider.id, provider.name, 'website_click');
    window.open(provider.website, '_blank');
  };

  const handleEmailClick = (provider: typeof providers[0]) => {
    trackProviderClick(provider.id, provider.name, 'email_click');
  };

  const handlePhoneClick = (provider: typeof providers[0]) => {
    trackProviderClick(provider.id, provider.name, 'phone_click');
  };

  // Apply search from URL parameters
  useEffect(() => {
    const urlSearch = searchParams.get("search");
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
  }, [searchParams]);

  const filteredProviders = providers.filter((provider) => {
    const matchesSpecialty =
      selectedSpecialty === "All Specialties" || provider.specialty === selectedSpecialty;
    const matchesSearch =
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.specialty.toLowerCase().includes(searchTerm.toLowerCase());
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
                placeholder="Search by name, location, or specialty..."
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
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{provider.name}</CardTitle>
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
                        {provider.specialty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin size={16} className="mr-2 text-primary" />
                    {provider.location}
                  </div>
                  <button
                    onClick={() => handlePhoneClick(provider)}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors w-full"
                  >
                    <Phone size={16} className="mr-2 text-primary" />
                    {provider.phone}
                  </button>
                  <button
                    onClick={() => handleEmailClick(provider)}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors w-full"
                  >
                    <Mail size={16} className="mr-2 text-primary" />
                    {provider.email}
                  </button>
                  <div className="pt-2 space-y-2">
                    <Badge variant="outline" className="text-secondary border-secondary">
                      ✓ Accepts Liens
                    </Badge>
                    <Button 
                      onClick={() => handleVisitWebsite(provider)}
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                    >
                      Visit Website <ExternalLink size={14} className="ml-2" />
                    </Button>
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
