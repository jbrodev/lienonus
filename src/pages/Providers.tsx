import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Mock provider data
const providers = [
  // Provider list will be added here
];

const specialties = [
  "All Specialties",
  "Acupuncture",
  "Aquatic Therapy",
  "Chiropractic",
  "Dentist",
  "ENT",
  "Internal Medicine",
  "Massage Therapy",
  "MRI",
  "Neurologist",
  "Neurosurgeon",
  "Ophthalmologist",
  "Orthopedics",
  "Pain Management",
  "Pharmacy",
  "Physical Therapy",
  "Podiatrist",
  "Psychologist",
];

const Providers = () => {
  const [searchParams] = useSearchParams();
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [searchTerm, setSearchTerm] = useState("");

  const trackProviderClick = async (providerId: number, providerName: string, specialty: string, eventType: string) => {
    try {
      const { error } = await supabase.functions.invoke('track-provider-analytics', {
        body: {
          provider_id: providerId,
          provider_name: providerName,
          specialty: specialty,
          event_type: eventType,
        },
      });

      if (error) {
        console.error('Error tracking click:', error);
      }
    } catch (err) {
      console.error('Error tracking click:', err);
    }
  };

  const handleVisitWebsite = (provider: typeof providers[0]) => {
    trackProviderClick(provider.id, provider.name, provider.specialty, 'website_click');
    window.open(provider.website, '_blank');
  };

  const handleEmailClick = (provider: typeof providers[0]) => {
    trackProviderClick(provider.id, provider.name, provider.specialty, 'email_click');
  };

  const handlePhoneClick = (provider: typeof providers[0]) => {
    trackProviderClick(provider.id, provider.name, provider.specialty, 'phone_click');
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
            <div className="max-w-xs mx-auto">
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by specialty" />
                </SelectTrigger>
                <SelectContent className="bg-background z-50">
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                  {provider.phone && (
                    <button
                      onClick={() => handlePhoneClick(provider)}
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors w-full"
                    >
                      <Phone size={16} className="mr-2 text-primary" />
                      {provider.phone}
                    </button>
                  )}
                  {provider.email && (
                    <button
                      onClick={() => handleEmailClick(provider)}
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors w-full"
                    >
                      <Mail size={16} className="mr-2 text-primary" />
                      {provider.email}
                    </button>
                  )}
                  <div className="pt-2 space-y-2">
                    <Badge variant="outline" className="text-secondary border-secondary">
                      ✓ Accepts Liens
                    </Badge>
                    {provider.website && (
                      <Button 
                        onClick={() => handleVisitWebsite(provider)}
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                      >
                        Visit Website <ExternalLink size={14} className="ml-2" />
                      </Button>
                    )}
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
