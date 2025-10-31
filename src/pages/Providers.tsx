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
  {
    id: 7,
    name: "Agape Wellness Center",
    specialty: "Acupuncture",
    location: "1182 Bristol St., Costa Mesa, CA 92626",
    phone: "(714) 957-2685",
    email: "pi@agapewellnesscenter.com",
    website: "https://agapewellnesscenter.com",
    acceptsLiens: true,
  },
  {
    id: 8,
    name: "West Star Physical Therapy Network - Hawthorne",
    specialty: "Acupuncture",
    location: "11633 Hawthorne Blvd, Suite 402, Hawthorne, CA 90250",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 9,
    name: "West Star Physical Therapy Network - San Bernardino",
    specialty: "Acupuncture",
    location: "1906 Commercenter E., Suite 108, San Bernardino, CA 92408",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 10,
    name: "West Star Physical Therapy Network - Rancho Cucamonga",
    specialty: "Acupuncture",
    location: "9600 Base Line Rd., Rancho Cucamonga, CA 91701",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 11,
    name: "West Star Physical Therapy Network - Pico Rivera",
    specialty: "Acupuncture",
    location: "9048 Slauson Ave., Pico Rivera, CA 90660",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 12,
    name: "West Star Physical Therapy Network - Palmdale",
    specialty: "Acupuncture",
    location: "1850 E Palmdale Blvd., Palmdale, CA 93550",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 13,
    name: "West Star Physical Therapy Network - Northridge",
    specialty: "Acupuncture",
    location: "18531 Roscoe Blvd., Suite 215, Northridge, CA 91324",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 14,
    name: "West Star Physical Therapy Network - Los Angeles (Pico)",
    specialty: "Acupuncture",
    location: "9202 W Pico Blvd., Los Angeles, CA 90035",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 15,
    name: "West Star Physical Therapy Network - Los Angeles (Santa Monica)",
    specialty: "Acupuncture",
    location: "11901 Santa Monica Blvd., Suite 209, Los Angeles, CA 90025",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 16,
    name: "West Star Physical Therapy Network - Long Beach",
    specialty: "Acupuncture",
    location: "2880 Atlantic Ave., Suite 250, Long Beach, CA 90806",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 17,
    name: "West Star Physical Therapy Network - Garden Grove",
    specialty: "Acupuncture",
    location: "12555 Garden Grove Blvd., Suite 205, Garden Grove, CA 92843",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 18,
    name: "West Star Physical Therapy Network - Encinitas",
    specialty: "Acupuncture",
    location: "535 Encinitas Blvd., Suite 112, Encinitas, CA 92024",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 19,
    name: "West Star Physical Therapy Network - Downey",
    specialty: "Acupuncture",
    location: "9901 Paramount Blvd., Suite 116, Downey, CA 90240",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 20,
    name: "West Star Physical Therapy Network - Covina",
    specialty: "Acupuncture",
    location: "275 W. San Bernardino Rd., Covina, CA 91723",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 21,
    name: "West Star Physical Therapy Network - Chatsworth",
    specialty: "Acupuncture",
    location: "21049 Devonshire St., Suite 102, Chatsworth, CA 91311",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 22,
    name: "West Star Physical Therapy Network - Buena Park",
    specialty: "Acupuncture",
    location: "4600 Beach Blvd., Suite O, Buena Park, CA 90621",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 23,
    name: "West Star Physical Therapy Network - Anaheim",
    specialty: "Acupuncture",
    location: "504 S Brookhurst St, Anaheim, CA 92804",
    phone: "(714) 589-2267",
    email: "ptreferral@apmi.net",
    website: "https://wsptn.com",
    acceptsLiens: true,
  },
  {
    id: 24,
    name: "Advanced Chiropractic Wellness Center - Van Nuys",
    specialty: "Chiropractic",
    location: "14545 Victory Blvd., Suite 500, Van Nuys, CA 91411",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 25,
    name: "Advanced Chiropractic Wellness Center - Burbank",
    specialty: "Chiropractic",
    location: "207 W. Alameda Ave., Suite 205, Burbank, CA 91502",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 26,
    name: "Agape Wellness Center",
    specialty: "Chiropractic",
    location: "1182 Bristol St., Costa Mesa, CA 92626",
    phone: "(714) 957-2685",
    email: "pi@agapewellnesscenter.com",
    website: "https://agapewellnesscenter.com",
    acceptsLiens: true,
  },
  {
    id: 27,
    name: "Airport Chiropractic Center",
    specialty: "Chiropractic",
    location: "6228 W. Manchester Ave, Los Angeles, CA 90045",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 28,
    name: "Allied Chiropractic",
    specialty: "Chiropractic",
    location: "1314 W. Ave. J, Lancaster, CA 93534",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 29,
    name: "Back to Balance - Torrance",
    specialty: "Chiropractic",
    location: "2733 Pacific Coast Highway, Torrance, CA 90505",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 30,
    name: "Back to Balance - Pasadena",
    specialty: "Chiropractic",
    location: "39 Mills Place, Pasadena, CA 91105",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 31,
    name: "Back to Balance - Orange",
    specialty: "Chiropractic",
    location: "20 City Blvd., West Building C3, Orange, CA 92868",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 32,
    name: "Back to Balance - Santa Monica",
    specialty: "Chiropractic",
    location: "1358 4th Street, Santa Monica, CA 90403",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 33,
    name: "Back to Balance - Mission Viejo",
    specialty: "Chiropractic",
    location: "27741 Crown Valley Parkway, Mission Viejo, CA 92691",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 34,
    name: "Back to Balance - Sherman Oaks",
    specialty: "Chiropractic",
    location: "15301 Ventura Blvd., Sherman Oaks, CA 91404",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 35,
    name: "Back to Balance - West Hollywood",
    specialty: "Chiropractic",
    location: "8000 Sunset Blvd., West Hollywood, CA 90046",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 36,
    name: "Cedar Pointe Chiropractic Group - Pomona",
    specialty: "Chiropractic",
    location: "140 W. Orange Grove Ave., Pomona, CA 91768",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 37,
    name: "Cedar Pointe Chiropractic Group - Victorville",
    specialty: "Chiropractic",
    location: "17072 Silica Rd., Suite 101, Victorville, CA 92395",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 38,
    name: "Cedar Pointe Chiropractic Group - San Bernardino",
    specialty: "Chiropractic",
    location: "1325 S. Camino Real, Suite 130, San Bernardino, CA 92408",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 39,
    name: "Cedar Pointe Chiropractic Group - Upland",
    specialty: "Chiropractic",
    location: "1113 Alta Ave., Suite 103, Upland, CA 91783",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 40,
    name: "Cedar Pointe Chiropractic Group - Bakersfield",
    specialty: "Chiropractic",
    location: "5500 Ming Ave. Ste 374, Bakersfield, CA 93309",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 41,
    name: "Cedar Pointe Chiropractic Group - Ontario",
    specialty: "Chiropractic",
    location: "235 N. Laurel Ave., Ontario, CA 91762",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 42,
    name: "Cedar Pointe Chiropractic Group - Corona",
    specialty: "Chiropractic",
    location: "623 N. Main St., D6, Corona, CA 92880",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 43,
    name: "Cedar Pointe Chiropractic Group - Fontana",
    specialty: "Chiropractic",
    location: "16814 E. Foothill Blvd., Fontana, CA 92335",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 44,
    name: "Cedar Pointe Chiropractic Group - Moreno Valley",
    specialty: "Chiropractic",
    location: "23470 Olive Wood Plaza, Suite 150, Moreno Valley, CA 92553",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 45,
    name: "Cedar Pointe Chiropractor Group - Riverside",
    specialty: "Chiropractic",
    location: "6828 Streeter Ave., Riverside, CA 92504",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 46,
    name: "Center For Orthopedics and Rehabilitation",
    specialty: "Chiropractic",
    location: "1405 W Rancho Vista Blvd., Palmdale, CA 93551",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 47,
    name: "Costa Vista Chiropractic Barnette Corporation - Corona",
    specialty: "Chiropractic",
    location: "910 E Washburn Ave., Suite E, Corona, CA 92882",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 48,
    name: "Costa Vista Chiropractic Barnette Corporation - Santa Ana",
    specialty: "Chiropractic",
    location: "2218 N Main St., Santa Ana, CA 92706",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 49,
    name: "Hunt Chiropractic",
    specialty: "Chiropractic",
    location: "12900 Paramount Blvd., Downey, CA 90242",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 50,
    name: "Icon Chiropractic",
    specialty: "Chiropractic",
    location: "281 E. Hamilton Ave., Suite 8, Campbell, CA 95008",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 51,
    name: "Marina Wellness",
    specialty: "Chiropractic",
    location: "428 Alice Street, Suite 110, Oakland, CA 94607",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 52,
    name: "Mina Iskander, DC - Orange",
    specialty: "Chiropractic",
    location: "845 W La Veta Ave., Suite 106, Orange, CA 92868",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 53,
    name: "Mina Iskander, DC - Culver City",
    specialty: "Chiropractic",
    location: "4323 Sepulveda Blvd., Culver City, CA 90203",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 54,
    name: "MLC Health Group, Inc - San Leandro",
    specialty: "Chiropractic",
    location: "13847 E. 14th St., Suite 110, San Leandro, CA 94578",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 55,
    name: "MLC Health Group, Inc - El Monte",
    specialty: "Chiropractic",
    location: "11100 Valley Blvd., Suite 109, El Monte, CA 91731",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 56,
    name: "MLC Health Group, Inc - Reseda",
    specialty: "Chiropractic",
    location: "19231 Victory Blvd., Suite 150, Reseda, CA 91335",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 57,
    name: "MLC Health Group | Inglewood Injury Center",
    specialty: "Chiropractic",
    location: "301 Prairie Avenue Suite 610, Inglewood, CA 90301",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 58,
    name: "New Wave Chiropractor | Alfred Derakhshesh, DC",
    specialty: "Chiropractic",
    location: "231 W. Vernon Ave., Suite 110, Los Angeles, CA 90037",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 59,
    name: "New Wave Health Care Center | Alfred Derakhshesh, DC",
    specialty: "Chiropractic",
    location: "1016 S. Robertson Blvd., Los Angeles, CA 90035",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 60,
    name: "Payman Javaherian, DC",
    specialty: "Chiropractic",
    location: "1400 S. Grand Ave., Los Angeles, CA 90015",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 61,
    name: "Robinson Health Wellness | Dan Robinson, DC",
    specialty: "Chiropractic",
    location: "19127 Romar Street, Northridge, CA 91324",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 62,
    name: "Sacramento Health Group",
    specialty: "Chiropractic",
    location: "1765 Challenge Way, Ste. 125, Sacramento, CA 95815",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 63,
    name: "San Bernardino Injury Center",
    specialty: "Chiropractic",
    location: "1255 E. Highland Ave., Suite 106, San Bernardino, CA 92404",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 64,
    name: "San Jose Auto Injury Clinic",
    specialty: "Chiropractic",
    location: "1150 S. Bascom Ave., Suite 17, San Jose, CA 95128",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 65,
    name: "SoCal Pi Chiropractic",
    specialty: "Chiropractic",
    location: "11234 Whittier Blvd., Whittier, CA 90606",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 66,
    name: "Sparks Chiropractic",
    specialty: "Chiropractic",
    location: "8501 Camino Media, Bakersfield, CA 93311",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 67,
    name: "Star Chiropractic & Rehabilitation",
    specialty: "Chiropractic",
    location: "18055 Ventura Blvd., Encino, CA 91316",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 68,
    name: "Stewart Chiropractic & Rehabilitation Centers, Inc - Chino",
    specialty: "Chiropractic",
    location: "5343 Riverside Drive, Chino, CA 91710",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 69,
    name: "Stewart Chiropractic & Rehabilitation Centers, Inc - Indio",
    specialty: "Chiropractic",
    location: "80250 Hwy 111, Suite C102, Indio, CA 92201",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 70,
    name: "Stewart Chiropractic & Rehabilitation Centers, Inc - Palm Desert",
    specialty: "Chiropractic",
    location: "74075 El Paseo, Unit B3, Palm Desert, CA 92260",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 71,
    name: "Stewart Chiropractic & Rehabilitation Centers, Inc - Palm Springs",
    specialty: "Chiropractic",
    location: "2500 N. Palm Canyon Dr., Suite A10, Palm Springs, CA 92262",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 72,
    name: "Stewart Chiropractic & Rehabilitation Centers, Inc - Redlands",
    specialty: "Chiropractic",
    location: "1200 Arizona St., Suite A5, Redlands, CA 92374",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
  {
    id: 73,
    name: "Stewart Chiropractic & Rehabilitation Centers, Inc - Banning",
    specialty: "Chiropractic",
    location: "2781 W. Ramsey St., Suite 1, Banning, CA 92220",
    phone: "",
    email: "",
    website: "",
    acceptsLiens: true,
  },
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
