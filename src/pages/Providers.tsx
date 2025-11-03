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

const providers = [
  // ACUPUNCTURE
  { id: 1, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "504 S Brookhurst St, Anaheim, CA 92804", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 2, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Acupuncture", location: "4248 Maine Ave, Baldwin Park, CA 91706", phone: "(626) 851-8083", email: "limrehabbaldwinpark@gmail.com", website: "", acceptsLiens: true },
  { id: 3, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Acupuncture", location: "7800 Commonwealth Ave, Suite 201, Buena Park, CA 90621", phone: "(714) 228-5949", email: "limrehabBP@gmail.com", website: "", acceptsLiens: true },
  { id: 4, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "4600 Beach Blvd, Suite O, Buena Park, CA 90621", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 5, name: "Agape Wellness Center", specialty: "Acupuncture", location: "1182 Bristol St, Costa Mesa, CA 92626", phone: "(714) 957-2685", email: "pi@agapewellnesscenter.com", website: "https://agapewellnesscenter.com", acceptsLiens: true },
  { id: 6, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "21049 Devonshire St, Suite 102, Chatsworth, CA 91311", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 7, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "275 W San Bernardino Rd, Covina, CA 91723", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 8, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "9901 Paramount Blvd, Suite 116, Downey, CA 90240", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 9, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "535 Encinitas Blvd, Suite 112, Encinitas, CA 92024", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 10, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "12555 Garden Grove Blvd, Suite 205, Garden Grove, CA 92843", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 11, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "2015 W Redondo Beach Blvd, Unit F, Gardena, CA 90247", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 12, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "411 N Central Ave, Suite 610, Glendale, CA 91203", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 13, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "11633 Hawthorne Blvd, Suite 402, Hawthorne, CA 90250", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 14, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "2880 Atlantic Ave, Suite 250, Long Beach, CA 90806", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 15, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Acupuncture", location: "919 S Soto St, Suite 5, Los Angeles, CA 90023", phone: "(323) 264-7878", email: "limrehabeastla@gmail.com", website: "", acceptsLiens: true },
  { id: 16, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Acupuncture", location: "8516 S Figueroa St, Los Angeles, CA 90003", phone: "(323) 751-1000", email: "limrehabsouthla@gmail.com", website: "", acceptsLiens: true },
  { id: 17, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Acupuncture", location: "600 S Harvard Blvd, Suite 106, Los Angeles, CA 90005", phone: "(213) 382-3676", email: "harvardrehabla@gmail.com", website: "", acceptsLiens: true },
  { id: 18, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "3000 W Olympic Blvd, Suite 308, Los Angeles, CA 90006", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 19, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "11901 Santa Monica Blvd, Suite 209, Los Angeles, CA 90025", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 20, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "9202 W Pico Blvd, Los Angeles, CA 90035", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 21, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "18531 Roscoe Blvd, Suite 215, Northridge, CA 91324", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 22, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "1850 E Palmdale Blvd, Palmdale, CA 93550", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 23, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "9048 Slauson Ave, Pico Rivera, CA 90660", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 24, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "9600 Base Line Rd, Rancho Cucamonga, CA 91701", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 25, name: "MLC Health Group, Inc.", specialty: "Acupuncture", location: "19231 Victory Blvd, Suite 150, Reseda, CA 91335", phone: "(818) 342-6200", email: "mlchealthgroup07@gmail.com", website: "https://mlchealthgroup.com", acceptsLiens: true },
  { id: 26, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Acupuncture", location: "6780 Indiana Ave, Suite 160, Riverside, CA 92506", phone: "(951) 779-2997", email: "limrehabriverside@gmail.com", website: "", acceptsLiens: true },
  { id: 27, name: "West Star Physical Therapy Network", specialty: "Acupuncture", location: "1906 Commercenter E, Suite 108, San Bernardino, CA 92408", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 28, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Acupuncture", location: "615 S Main St, Santa Ana, CA 92701", phone: "(714) 550-8001", email: "limrehabsantaana@gmail.com", website: "", acceptsLiens: true },
  { id: 29, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Acupuncture", location: "7648 Painter Ave, Suite C, Whittier, CA 90602", phone: "(562) 464-4400", email: "limrehabwhittier@gmail.com", website: "", acceptsLiens: true },

  // AQUATIC THERAPY
  { id: 30, name: "West Star Physical Therapy Network", specialty: "Aquatic Therapy", location: "275 W San Bernardino Rd, Covina, CA 91723", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 31, name: "West Star Physical Therapy Network", specialty: "Aquatic Therapy", location: "6801 Long Beach Blvd, Long Beach, CA 90805", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },

  // CHIROPRACTIC
  { id: 32, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Chiropractic", location: "4248 Maine Ave, Baldwin Park, CA 91706", phone: "(626) 851-8083", email: "limrehabbaldwinpark@gmail.com", website: "", acceptsLiens: true },
  { id: 33, name: "California Chiropractic", specialty: "Chiropractic", location: "8501 Camino Media, Bakersfield, CA 93311", phone: "(661) 765-2225", email: "info@calichiropractor.com", website: "https://calichiropractor.com", acceptsLiens: true },
  { id: 33, name: "Cedar Pointe Chiropractic Group", specialty: "Chiropractic", location: "5500 Ming Ave, Ste 374, Bakersfield, CA 93309", phone: "(661) 694-9494", email: "scheduling@cedarpointechiro.com", website: "https://cedarpointechiro.com", acceptsLiens: true },
  { id: 34, name: "Stewart Chiropractic & Rehabilitation Centers, Inc.", specialty: "Chiropractic", location: "2781 W Ramsey St, Suite 1, Banning, CA 92220", phone: "(951) 797-0086", email: "Darrenstewartchirobanning@gmail.com", website: "", acceptsLiens: true },
  { id: 35, name: "New Wave Health Care Center", specialty: "Chiropractic", location: "1016 S Robertson Blvd, Los Angeles, CA 90035", phone: "(323) 238-0200", email: "vanessa.newwavehealth@gmail.com", website: "https://newwavehealth.com", acceptsLiens: true },
  { id: 36, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Chiropractic", location: "7800 Commonwealth Ave, Suite 201, Buena Park, CA 90621", phone: "(714) 228-5949", email: "limrehabBP@gmail.com", website: "", acceptsLiens: true },
  { id: 37, name: "Advanced Chiropractic Wellness Center", specialty: "Chiropractic", location: "207 W Alameda Ave, Suite 205, Burbank, CA 91502", phone: "(818) 779-7877", email: "", website: "", acceptsLiens: true },
  { id: 38, name: "Cedar Pointe Chiropractic Group", specialty: "Chiropractic", location: "623 N Main St, D6, Corona, CA 92880", phone: "(951) 356-0000", email: "corona@cedarpointechiro.com", website: "https://cedarpointechiro.com", acceptsLiens: true },
  { id: 39, name: "Costa Vista Chiropractic Barnette Corporation", specialty: "Chiropractic", location: "910 E Washburn Ave, Suite E, Corona, CA 92882", phone: "(714) 804-2275", email: "Info@costavistachiro.com", website: "https://costavistachiro.com", acceptsLiens: true },
  { id: 40, name: "Agape Wellness Center", specialty: "Chiropractic", location: "1182 Bristol St, Costa Mesa, CA 92626", phone: "(714) 957-2685", email: "pi@agapewellnesscenter.com", website: "https://agapewellnesscenter.com", acceptsLiens: true },
  { id: 41, name: "Stewart Chiropractic & Rehabilitation Centers, Inc.", specialty: "Chiropractic", location: "5343 Riverside Dr, Chino, CA 91710", phone: "(909) 628-2199", email: "Darrenstewartchirochino@gmail.com", website: "", acceptsLiens: true },
  { id: 42, name: "Mina Iskander, DC", specialty: "Chiropractic", location: "4323 Sepulveda Blvd, Culver City, CA 90230", phone: "(562) 201-5121", email: "drminaiskander@gmail.com", website: "https://culverspineca.com", acceptsLiens: true },
  { id: 43, name: "Hunt Chiropractic", specialty: "Chiropractic", location: "12900 Paramount Blvd, Downey, CA 90242", phone: "(562) 923-6330", email: "huntchiropractic@verizon.net", website: "https://www.huntchiropracticcenter.info", acceptsLiens: true },
  { id: 44, name: "El Monte Injury Center", specialty: "Chiropractic", location: "11100 Valley Blvd, Suite 109, El Monte, CA 91731", phone: "(626) 448-0400", email: "elmonte@mlchealthgroup.com", website: "https://mlchealthgroup.com", acceptsLiens: true },
  { id: 45, name: "Star Chiropractic & Rehabilitation", specialty: "Chiropractic", location: "18055 Ventura Blvd, Encino, CA 91316", phone: "(818) 521-9470", email: "", website: "", acceptsLiens: true },
  { id: 46, name: "Cedar Pointe Chiropractic Group", specialty: "Chiropractic", location: "16814 E Foothill Blvd, Fontana, CA 92335", phone: "(909) 428-6989", email: "fontana@cedarpointechiro.com", website: "https://cedarpointechiro.com", acceptsLiens: true },
  { id: 47, name: "Stewart Chiropractic & Rehabilitation Centers, Inc.", specialty: "Chiropractic", location: "80250 Hwy 111, Suite C102, Indio, CA 92201", phone: "(442) 400-3708", email: "Darrenstewartchiroindio@gmail.com", website: "", acceptsLiens: true },
  { id: 48, name: "Inglewood Injury Center", specialty: "Chiropractic", location: "301 Prairie Ave, Suite 610, Inglewood, CA 90301", phone: "(310) 671-9400", email: "inglewood@mlchealthgroup.com", website: "https://mlchealthgroup.com", acceptsLiens: true },
  { id: 49, name: "Allied Chiropractic", specialty: "Chiropractic", location: "1314 W Ave J, Lancaster, CA 93534", phone: "(661) 945-4441", email: "records@alliedphysical.com", website: "https://teamwellness.co", acceptsLiens: true },
  { id: 50, name: "Airport Chiropractic Center", specialty: "Chiropractic", location: "6228 W Manchester Ave, Los Angeles, CA 90045", phone: "(310) 645-5800", email: "segaldcinc@gmail.com", website: "", acceptsLiens: true },
  { id: 51, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Chiropractic", location: "919 S Soto St, Suite 5, Los Angeles, CA 90023", phone: "(323) 264-7878", email: "limrehabeastla@gmail.com", website: "", acceptsLiens: true },
  { id: 52, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Chiropractic", location: "8516 S Figueroa St, Los Angeles, CA 90003", phone: "(323) 751-1000", email: "limrehabsouthla@gmail.com", website: "", acceptsLiens: true },
  { id: 53, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Chiropractic", location: "600 S Harvard Blvd, Suite 106, Los Angeles, CA 90005", phone: "(213) 382-3676", email: "harvardrehabla@gmail.com", website: "", acceptsLiens: true },
  { id: 54, name: "New Wave Health Care Center", specialty: "Chiropractic", location: "231 W Vernon Ave, Suite 110, Los Angeles, CA 90037", phone: "(323) 238-0200", email: "", website: "https://newwavehealth.com", acceptsLiens: true },
  { id: 55, name: "Payman Javaherian, DC", specialty: "Chiropractic", location: "1513 S Grand Ave, Suite 380, Los Angeles, CA 90015", phone: "(818) 521-9470", email: "", website: "https://thespinemd.com", acceptsLiens: true },
  { id: 56, name: "Back to Balance", specialty: "Chiropractic", location: "27741 Crown Valley Pkwy, Mission Viejo, CA 92691", phone: "(310) 463-4111", email: "back2balance@aol.com", website: "https://backtobalance.com", acceptsLiens: true },
  { id: 57, name: "Cedar Pointe Chiropractic Group", specialty: "Chiropractic", location: "23470 Olive Wood Plaza Dr, Suite 150, Moreno Valley, CA 92553", phone: "(951) 247-4976", email: "MorenoValley@cedarpointechiro.com", website: "https://cedarpointechiro.com", acceptsLiens: true },
  { id: 58, name: "Robinson Health Wellness", specialty: "Chiropractic", location: "19127 Romar St, Northridge, CA 91324", phone: "(703) 624-9876", email: "drdanwrobinson@hotmail.com", website: "", acceptsLiens: true },
  { id: 59, name: "Marina Wellness", specialty: "Chiropractic", location: "420 3rd St #110, Oakland, CA 94607", phone: "(510) 835-7000", email: "Mwellnessoffice@gmail.com", website: "https://marinawellnesshealth.com", acceptsLiens: true },
  { id: 60, name: "Cedar Pointe Chiropractic Group", specialty: "Chiropractic", location: "235 N Laurel Ave, Ontario, CA 91762", phone: "(909) 988-2554", email: "Ontario@cedarpointechiro.com", website: "https://cedarpointechiro.com", acceptsLiens: true },
  { id: 61, name: "Back to Balance", specialty: "Chiropractic", location: "20 City Blvd West, Bldg C3, Orange, CA 92868", phone: "(310) 463-4111", email: "back2balance@aol.com", website: "https://backtobalance.com", acceptsLiens: true },
  { id: 62, name: "Mina Iskander, DC", specialty: "Chiropractic", location: "845 W La Veta Ave, Suite 106, Orange, CA 92868", phone: "(562) 201-5121", email: "drminaiskander@gmail.com", website: "https://culverspineca.com", acceptsLiens: true },
  { id: 63, name: "Stewart Chiropractic & Rehabilitation Centers, Inc.", specialty: "Chiropractic", location: "74075 El Paseo, Unit B3, Palm Desert, CA 92260", phone: "(442) 274-2093", email: "Stewartchiropracticpalmdesert@gmail.com", website: "", acceptsLiens: true },
  { id: 64, name: "Stewart Chiropractic & Rehabilitation Centers, Inc.", specialty: "Chiropractic", location: "2500 N Palm Canyon Dr, Suite A10, Palm Springs, CA 92262", phone: "(760) 327-5202", email: "Darrenstewartchiropracticpalms@gmail.com", website: "", acceptsLiens: true },
  { id: 65, name: "Back to Balance", specialty: "Chiropractic", location: "39 Mills Pl, Pasadena, CA 91105", phone: "(310) 463-4111", email: "back2balance@aol.com", website: "https://backtobalance.com", acceptsLiens: true },
  { id: 66, name: "Cedar Pointe Chiropractic Group", specialty: "Chiropractic", location: "140 W Orange Grove Ave, Pomona, CA 91768", phone: "(909) 375-0000", email: "Pomona@cedarpointechiro.com", website: "https://cedarpointechiro.com", acceptsLiens: true },
  { id: 67, name: "Stewart Chiropractic & Rehabilitation Centers, Inc.", specialty: "Chiropractic", location: "1200 Arizona St, Suite A5, Redlands, CA 92374", phone: "(909) 792-2199", email: "Darrenstewartchiropractic@gmail.com", website: "", acceptsLiens: true },
  { id: 68, name: "MLC Health Group, Inc.", specialty: "Chiropractic", location: "19231 Victory Blvd, Suite 150, Reseda, CA 91335", phone: "(818) 342-6200", email: "mlchealthgroup07@gmail.com", website: "https://mlchealthgroup.com", acceptsLiens: true },
  { id: 69, name: "Cedar Pointe Chiropractic Group", specialty: "Chiropractic", location: "6828 Streeter Ave, Riverside, CA 92504", phone: "(951) 374-0000", email: "Riverside@cedarpointechiro.com", website: "https://cedarpointechiro.com", acceptsLiens: true },
  { id: 70, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Chiropractic", location: "6780 Indiana Ave, Suite 160, Riverside, CA 92506", phone: "(951) 779-2997", email: "limrehabriverside@gmail.com", website: "", acceptsLiens: true },
  { id: 71, name: "Sacramento Health Group", specialty: "Chiropractic", location: "1765 Challenge Way, Ste 125, Sacramento, CA 95815", phone: "(916) 627-1088", email: "Sacramento@mlchealthgroup.com", website: "https://mlchealthgroup.com", acceptsLiens: true },
  { id: 72, name: "Cedar Pointe Chiropractic Group", specialty: "Chiropractic", location: "1325 S Camino Real, Suite 130, San Bernardino, CA 92408", phone: "(909) 352-5252", email: "sb@cedarpointechiro.com", website: "https://cedarpointechiro.com", acceptsLiens: true },
  { id: 73, name: "San Bernardino Injury Center", specialty: "Chiropractic", location: "1255 E Highland Ave, Suite 106, San Bernardino, CA 92404", phone: "(909) 882-6241", email: "Sanbernardino@mlchealthgroup.com", website: "https://mlchealthgroup.com", acceptsLiens: true },
  { id: 74, name: "San Jose Auto Injury Clinic", specialty: "Chiropractic", location: "1150 S Bascom Ave, Suite 17, San Jose, CA 95128", phone: "(408) 295-5559", email: "admin@sjaic.com", website: "https://sjaic.com", acceptsLiens: true },
  { id: 75, name: "NorCal Health Group", specialty: "Chiropractic", location: "13847 E 14th St, Suite 110, San Leandro, CA 94578", phone: "(510) 363-9781", email: "norcal@mlchealthgroup.com", website: "https://mlchealthgroup.com", acceptsLiens: true },
  { id: 76, name: "Costa Vista Chiropractic Barnette Corporation", specialty: "Chiropractic", location: "2218 N Main St, Santa Ana, CA 92706", phone: "(714) 804-2275", email: "Info@costavistachiro.com", website: "https://www.costavistachiro.com", acceptsLiens: true },
  { id: 77, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Chiropractic", location: "615 S Main St, Santa Ana, CA 92701", phone: "(714) 550-8001", email: "limrehabsantaana@gmail.com", website: "", acceptsLiens: true },
  { id: 78, name: "Back to Balance", specialty: "Chiropractic", location: "1358 4th St, Santa Monica, CA 90403", phone: "(310) 463-4111", email: "back2balance@aol.com", website: "https://backtobalance.com", acceptsLiens: true },
  { id: 79, name: "Back to Balance", specialty: "Chiropractic", location: "15301 Ventura Blvd, Sherman Oaks, CA 91403", phone: "(310) 463-4111", email: "back2balance@aol.com", website: "https://backtobalance.com", acceptsLiens: true },
  { id: 80, name: "Back to Balance", specialty: "Chiropractic", location: "2733 Pacific Coast Hwy, Torrance, CA 90505", phone: "(310) 463-4111", email: "back2balance@aol.com", website: "https://backtobalance.com", acceptsLiens: true },
  { id: 81, name: "Advanced Chiropractic Wellness Center", specialty: "Chiropractic", location: "14545 Victory Blvd, Suite 500, Van Nuys, CA 91411", phone: "(818) 779-7877", email: "chiromp555@yahoo.com", website: "", acceptsLiens: true },
  { id: 82, name: "Cedar Pointe Chiropractic Group", specialty: "Chiropractic", location: "1113 Alta Ave, Suite 103, Upland, CA 91786", phone: "(909) 774-0000", email: "upland@cedarpointechiro.com", website: "https://cedarpointechiro.com", acceptsLiens: true },
  { id: 83, name: "Cedar Pointe Chiropractic Group", specialty: "Chiropractic", location: "17072 Silica Rd, Suite 101, Victorville, CA 92395", phone: "(760) 493-9393", email: "Victorville@cedarpointechiro.com", website: "https://cedarpointechiro.com", acceptsLiens: true },
  { id: 84, name: "Back to Balance", specialty: "Chiropractic", location: "8000 Sunset Blvd, West Hollywood, CA 90046", phone: "(310) 463-4111", email: "back2balance@aol.com", website: "https://backtobalance.com", acceptsLiens: true },
  { id: 85, name: "Lim Rehabilitation & Chiropractic, Inc.", specialty: "Chiropractic", location: "7648 Painter Ave, Suite C, Whittier, CA 90602", phone: "(562) 464-4400", email: "limrehabwhittier@gmail.com", website: "", acceptsLiens: true },
  { id: 86, name: "SoCal Pi Chiropractic", specialty: "Chiropractic", location: "11234 Whittier Blvd, Whittier, CA 90606", phone: "(562) 695-7759", email: "socalchiropi@gmail.com", website: "https://www.socalpichiro.com", acceptsLiens: true },

  // ENT
  { id: 87, name: "Los Angeles Center for Ears, Nose, Throat and Allergy", specialty: "ENT", location: "41250 12th St West, Suite C, Palmdale, CA 93551", phone: "(949) 200-7667 Ext. 406", email: "pi@laent.com", website: "https://www.laent.com", acceptsLiens: true },
  { id: 88, name: "Los Angeles Center for Ears, Nose, Throat and Allergy", specialty: "ENT", location: "14650 Aviation Blvd., Suite 100, South Bay, CA 90250", phone: "(949) 200-7667 Ext. 406", email: "pi@laent.com", website: "https://www.laent.com", acceptsLiens: true },

  // INTERNAL MEDICINE
  { id: 89, name: "SCV Medical Group", specialty: "Internal Medicine", location: "27141 Hidaway Ave., Suite 106, Canyon Country, CA 91351", phone: "(661) 252-8469", email: "referrals@anildatemd.com", website: "https://scvmedicalgroup.com", acceptsLiens: true },
  { id: 90, name: "SCV Medical Group", specialty: "Internal Medicine", location: "4477 W. 118th St., Suite 501, Hawthorne, CA 90250", phone: "(661) 252-8469", email: "referrals@anildatemd.com", website: "https://scvmedicalgroup.com", acceptsLiens: true },
  { id: 91, name: "SCV Medical Group", specialty: "Internal Medicine", location: "3250 Wilshire Blvd., Suite 150, Los Angeles, CA 90010", phone: "(661) 252-8469", email: "referrals@anildatemd.com", website: "https://scvmedicalgroup.com", acceptsLiens: true },

  // MASSAGE THERAPY
  { id: 92, name: "Agape Wellness Center", specialty: "Massage Therapy", location: "1182 Bristol St, Costa Mesa, CA 92626", phone: "(714) 957-2685", email: "pi@agapewellnesscenter.com", website: "https://agapewellnesscenter.com", acceptsLiens: true },
  { id: 93, name: "Allied Chiropractic", specialty: "Massage Therapy", location: "1314 W. Ave. J, Lancaster, CA 93534", phone: "(661) 945-4441", email: "", website: "https://teamwellness.co", acceptsLiens: true },
  { id: 94, name: "Robinson Health Wellness", specialty: "Massage Therapy", location: "19127 Romar Street, Northridge, CA 91324", phone: "(703) 624-9876", email: "drdanwrobinson@hotmail.com", website: "", acceptsLiens: true },

  // MRI
  { id: 95, name: "Precise Imaging", specialty: "MRI", location: "3450 Hillcrest Ave., Antioch, CA 94531", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 96, name: "Precise Imaging", specialty: "MRI", location: "1900 E. La Palma Ave., Suite D, Anaheim, CA 92805", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 97, name: "Precise Imaging", specialty: "MRI", location: "3174 W. Lincoln Ave., Suite 108, Anaheim, CA 92801", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 98, name: "Expert MRI", specialty: "MRI", location: "9802 Stockdale Hwy., Suite 106A, Bakersfield, CA 93311", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 99, name: "Precise Imaging", specialty: "MRI", location: "31 S. Real Rd., A-6, Bakersfield, CA 93309", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 100, name: "Expert MRI", specialty: "MRI", location: "9500 Artesia Blvd., Bellflower, CA 90706", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 101, name: "Expert MRI", specialty: "MRI", location: "5757 Wilshire Blvd., Suite 8, Los Angeles, CA 90036", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 102, name: "Precise Imaging", specialty: "MRI", location: "8370 Wilshire Blvd., Suite 110, Beverly Hills, CA 90211", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 103, name: "Precise Imaging", specialty: "MRI", location: "99 N. La Cienega Blvd., Suite 103, Beverly Hills, CA 90211", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 104, name: "Precise Imaging", specialty: "MRI", location: "155 N. San Vicente Blvd., 1st Floor, Beverly Hills, CA 90211", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 105, name: "Precise Imaging", specialty: "MRI", location: "9134 W. Olympic Blvd., Beverly Hills, CA 90212", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 106, name: "Precise Imaging", specialty: "MRI", location: "6185 Paseo Del Norte, Suite 110, Carlsbad, CA 92011", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 107, name: "Precise Imaging", specialty: "MRI", location: "4937 Las Virgenes Rd., Suite 104, Calabasas, CA 91302", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 108, name: "Precise Imaging", specialty: "MRI", location: "21030 Redwood Rd., Suite B, Castro Valley, CA 94546", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 109, name: "Precise Imaging", specialty: "MRI", location: "17215 Studebaker Rd., Cerritos, CA 90703", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 110, name: "Precise Imaging", specialty: "MRI", location: "5562 Philadelphia St., Suite 100, Chino, CA 91710", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 111, name: "Precise Imaging", specialty: "MRI", location: "900 E. Washington St., Suite 150, Colton, CA 92324", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 112, name: "Precise Imaging", specialty: "MRI", location: "1401 Willow Pass Rd., Suite 110, Concord, CA 94520", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 113, name: "Precise Imaging", specialty: "MRI", location: "2045 California Ave., Suite 106, Corona, CA 92881", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 114, name: "Precise Imaging", specialty: "MRI", location: "1433 N. Hollenbeck Ave., Suite 105, Covina, CA 91722", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 115, name: "Expert MRI", specialty: "MRI", location: "9832 Venice Blvd., Culver City, CA 90232", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 116, name: "Precise Imaging", specialty: "MRI", location: "455 Hickey Blvd., Suite 200, Daly City, CA 94015", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 117, name: "Precise Imaging", specialty: "MRI", location: "10226 Lakewood Blvd., Downey, CA 90241", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 118, name: "Precise Imaging", specialty: "MRI", location: "8628 Imperial Hwy., Downey, CA 90242", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 119, name: "Precise Imaging", specialty: "MRI", location: "11436 Garvey Ave., Suite D, El Monte, CA 91732", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 120, name: "Precise Imaging", specialty: "MRI", location: "1550 Pepper Dr. Suite G, El Centro, CA 92243", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 121, name: "Precise Imaging", specialty: "MRI", location: "17323 Ventura Blvd., Suite 101, Encino, CA 91316", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 122, name: "Precise Imaging", specialty: "MRI", location: "499 N. El Camino Real, C 100, Encinitas, CA 92024", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 123, name: "Precise Imaging", specialty: "MRI", location: "345 Saxony Rd., Suite 106, Encinitas, CA 92024", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 124, name: "Precise Imaging", specialty: "MRI", location: "39180 Farwell Dr., Suite 110, Fremont, CA 94538", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 125, name: "Precise Imaging", specialty: "MRI", location: "39465 Paseo Padre Parkway, Suite 1000, Fremont, CA 94538", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 126, name: "Precise Imaging", specialty: "MRI", location: "108 West Shaw Ave., Fresno, CA 93711", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 127, name: "Precise Imaging", specialty: "MRI", location: "5707 N. West Ave., Fresno, CA 93711", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 128, name: "Precise Imaging", specialty: "MRI", location: "2540 W. Shaw Lane, Suite 112-A, Fresno, CA 93711", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 129, name: "Expert MRI", specialty: "MRI", location: "301 W Bastanchury Rd., Fullerton, CA 92835", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 130, name: "Excel Imaging Center", specialty: "MRI", location: "13071 Brookhurst Street, suite 100, Garden Grove, CA 92843", phone: "(714) 583-8126", email: "excelimagingcenter@gmail.com", website: "https://www.excelimagingcenter.com", acceptsLiens: true },
  { id: 131, name: "Precise Imaging", specialty: "MRI", location: "8359 Church St., Gilroy, CA 95020", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 132, name: "Precise Imaging", specialty: "MRI", location: "1809 Verdugo Blvd., Suite 100, Glendale, CA 91208", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 133, name: "Precise Imaging", specialty: "MRI", location: "10515 Balboa Blvd., Suite 240, Granada Hills, CA 91344", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 134, name: "Precise Imaging", specialty: "MRI", location: "430 w. Stetson Ave., Hemet, CA 92543", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 135, name: "Precise Imaging", specialty: "MRI", location: "15775 Laguna Canyon Rd., Suite 140, Irvine, CA 92618", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 136, name: "Precise Imaging", specialty: "MRI", location: "970 Dewing Avenue, Suite 100, Lafayette, CA 94549", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 137, name: "Precise Imaging", specialty: "MRI", location: "24022 Calle De La Plata, Suite 100, Laguna Hills, CA 92653", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 138, name: "Precise Imaging", specialty: "MRI", location: "42455 10th St. West, Lancaster, CA 93534", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 139, name: "Precise Imaging", specialty: "MRI", location: "801 S. Ham Lane Suites, Suite Q and R, Lodi, CA 95242", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 140, name: "Expert MRI", specialty: "MRI", location: "231 W. Vernon Ave., Suite 111, Los Angeles, CA 90037", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 141, name: "Precise Imaging", specialty: "MRI", location: "4151 West 3rd St., Suite 13, Los Angeles, CA 90020", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 142, name: "Precise Imaging", specialty: "MRI", location: "1711 W. Temple St., Los Angeles, CA 90026", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 143, name: "Precise Imaging", specialty: "MRI", location: "231 W. Vernon Ave., Suite 111, Los Angeles, CA 90037", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 144, name: "Precise Imaging", specialty: "MRI", location: "1125 N. Vermont Ave., Los Angeles, CA 90029", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 145, name: "Precise Imaging", specialty: "MRI", location: "5757 Wilshire Blvd, Suite 100, Los Angeles, CA 90036", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 146, name: "Precise Imaging", specialty: "MRI", location: "14651 Bascom Ave., Suite 120, Los Gatos, CA 95032", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 147, name: "Precise Imaging", specialty: "MRI", location: "15405 Los Gatos Blvd. Suite 104, Los Gatos, CA 95032", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 148, name: "Precise Imaging", specialty: "MRI", location: "665 Munras Ave., Suite 109, Monterey, CA 93940", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 149, name: "Precise Imaging", specialty: "MRI", location: "8891 Central Ave., Suite C, Montclair, CA 91763", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 150, name: "Precise Imaging", specialty: "MRI", location: "105 South Dr., Suite 110, Mountain View, CA 94040", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 151, name: "Expert MRI", specialty: "MRI", location: "301 Bayview Circle, Suite 105, Newport Beach, CA 92660", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 152, name: "Precise Imaging", specialty: "MRI", location: "301 Bayview Circle, Suite 105, Newport Beach, CA 92660", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 153, name: "Precise Imaging", specialty: "MRI", location: "1300 Clay St., Suite 165, Oakland, CA 94612", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 154, name: "Precise Imaging", specialty: "MRI", location: "3115 E. Guasti Rd., Ontario, CA 91761", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 155, name: "Precise Imaging", specialty: "MRI", location: "1851 Holser Walk, Suite 200, Oxnard, CA 93036", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 156, name: "Precise Imaging", specialty: "MRI", location: "747 Union St., Pasadena, CA 91101", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 157, name: "Precise Imaging", specialty: "MRI", location: "8337 Telegraph Rd., Suite 124, Pico Rivera, CA 90660", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 158, name: "Precise Imaging", specialty: "MRI", location: "1555 N. Orange Grove Ave., Pomona, CA 91767", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 159, name: "Rancho Open MRI Medical Corp", specialty: "MRI", location: "9373 Haven Ave., Suite 150, Rancho Cucamonga, CA 91730", phone: "(909) 476-4474", email: "schedule@ranchoopenmri.com", website: "https://ranchoopenmrimc.com", acceptsLiens: true },
  { id: 160, name: "Precise Imaging", specialty: "MRI", location: "1690 Barton Road, Suite 107 and 108, Redlands, CA 92373", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 161, name: "Precise Imaging", specialty: "MRI", location: "345 Convention Way, Suite D-1, Redwood City, CA 94063", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 162, name: "Expert MRI", specialty: "MRI", location: "4381 Brockton Ave., Riverside, CA 92501", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 163, name: "Precise Imaging", specialty: "MRI", location: "10111 Hole Ave., Riverside, CA 92503", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 164, name: "Precise Imaging", specialty: "MRI", location: "6276 River Crest Dr., Suite D, Riverside, CA 92507", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 165, name: "Riverside Elite Imaging Medical Corp", specialty: "MRI", location: "21828 Cactus Ave., Riverside, CA 92518", phone: "(951) 900-3000", email: "schedule@riversideeliteimaging.com", website: "https://ranchoopenmrimc.com", acceptsLiens: true },
  { id: 166, name: "Precise Imaging", specialty: "MRI", location: "165 W. Hospitality Lane, San Bernardino, CA 92408", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 167, name: "Precise Imaging", specialty: "MRI", location: "225 W. Hospitality Ln., Suite 100, San Bernardino, CA 92408", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 168, name: "Precise Imaging", specialty: "MRI", location: "635 Camino De Los Mares, Suite 101 and 102, San Clemente, CA 92673", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 169, name: "Expert MRI", specialty: "MRI", location: "5395 Ruffin Rd., Suite 100, San Diego, CA 92123", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 170, name: "Precise Imaging", specialty: "MRI", location: "3902 El Cajon Blvd. Suite A, San Diego CA 92105", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 171, name: "Precise Imaging", specialty: "MRI", location: "800 Pollard Rd., Suite B101, San Diego, CA 95032", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 172, name: "Precise Imaging", specialty: "MRI", location: "4570 Executive Dr., Suite 100, San Diego, CA 92121", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 173, name: "Precise Imaging", specialty: "MRI", location: "8901 Activity Rd., Suite 103, San Diego, CA 92126", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 174, name: "Precise Imaging", specialty: "MRI", location: "1180 Post St., San Francisco, CA 94109", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 175, name: "Precise Imaging", specialty: "MRI", location: "325 Sacramento St., San Francisco, CA 94111", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 176, name: "Precise Imaging", specialty: "MRI", location: "1005 Van Ness Ave., San Francisco, CA 94109", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 177, name: "Precise Imaging", specialty: "MRI", location: "600 Gateway Blvd., Suite 101, South San Francisco, CA 94080", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 178, name: "Expert MRI", specialty: "MRI", location: "438 W. Las Tunas Drive, San Gabriel, CA 91770", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 179, name: "Precise Imaging", specialty: "MRI", location: "2365 Quimby Rd., Suite 100, San Jose, CA 95122", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 180, name: "Precise Imaging", specialty: "MRI", location: "101 S. San Mateo Dr., Suite 201, San Mateo, CA 94401", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 181, name: "Precise Imaging", specialty: "MRI", location: "2242 Camino Ramon, Suite 100, San Ramon, CA 94583", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 182, name: "Precise Imaging", specialty: "MRI", location: "4144 Redwood Hwy., Suite B, San Rafael, CA 94903", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 183, name: "Expert MRI", specialty: "MRI", location: "3731 South Plaza Dr., Santa Ana, CA 92704", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 184, name: "Precise Imaging", specialty: "MRI", location: "2414 S. Fairview St., Suite 202B, Santa Ana, CA 92704", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 185, name: "Precise Imaging", specialty: "MRI", location: "1125 E. 17th St., Suite W125, Santa Ana, CA 92701", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 186, name: "Precise Imaging", specialty: "MRI", location: "1401 N. Tustin Ave., Suite 170, Santa Ana, CA 92705", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 187, name: "Precise Imaging", specialty: "MRI", location: "1825 Civic Center Drive, Santa Clara, CA 95050", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 188, name: "Expert MRI", specialty: "MRI", location: "4911 Van Nuys Blvd., Suite 103, Sherman Oaks, CA 91403", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 189, name: "Precise Imaging", specialty: "MRI", location: "12600 Beach Blvd., Suite A1, Stanton, CA 90680", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 190, name: "Precise Imaging", specialty: "MRI", location: "546 East Pine St., Stockton, CA 95204", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 191, name: "Expert MRI", specialty: "MRI", location: "9375 San Fernando Rd., Sun Valley, CA 91352", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 192, name: "Precise Imaging", specialty: "MRI", location: "375 Rolling Oaks Drive, Suite 130, Thousand Oaks, CA 91361", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 193, name: "Precise Imaging", specialty: "MRI", location: "558 St. Charles Dr., Suite 111, Thousand Oaks, CA 91360", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 194, name: "Expert MRI", specialty: "MRI", location: "3440 Lomita Blvd., Suite 151, Torrance, CA 90505", phone: "(877) 674-8888", email: "scheduling@expertmri.com", website: "https://expertmri.com", acceptsLiens: true },
  { id: 195, name: "Precise Imaging", specialty: "MRI", location: "3440 Lomita Blvd., Suite 151, Torrance, CA 90505", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 196, name: "Precise Imaging", specialty: "MRI", location: "3531 Fashion Way, Suite 2, Torrance, CA 90503", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 197, name: "Precise Imaging", specialty: "MRI", location: "1801 Colorado Ave., Suite 330, Turlock, CA 95382", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 198, name: "Precise Imaging", specialty: "MRI", location: "1183 E. Foothill Blvd., Suite 235, Upland, CA 91786", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 199, name: "Precise Imaging", specialty: "MRI", location: "6710 Kester Ave., Suite 126, Van Nuys, CA 91405", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 200, name: "High Desert Open MRI Medical Corp", specialty: "MRI", location: "14378 St. Andres Dr., Victorville, CA 92395", phone: "(760) 760-0777", email: "Schedule@highdesertopenmrimc.com", website: "https://ranchoopenmrimc.com", acceptsLiens: true },
  { id: 201, name: "Precise Imaging", specialty: "MRI", location: "14075 Hesperia Road, Victorville, CA 92395", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 202, name: "Precise Imaging", specialty: "MRI", location: "108 Green Valley Rd., Suite B, Watsonville, CA 95019", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 203, name: "Precise Imaging", specialty: "MRI", location: "1700 W. West Covina Pkwy., West Covina, CA 91790", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 204, name: "Precise Imaging", specialty: "MRI", location: "933 S. Sunset Ave., West Covina, CA 91790", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 205, name: "Precise Imaging", specialty: "MRI", location: "354 N. Azusa Ave., West Covina, CA 91791", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 206, name: "Westminster Open MRI Medical Corp.", specialty: "MRI", location: "8341 Westminster Blvd., Suite 102, Westminster, CA 92683", phone: "(657) 657-6577", email: "schedule@westminsteropenmrimc.com", website: "https://ranchoopenmrimc.com", acceptsLiens: true },
  { id: 207, name: "Precise Imaging", specialty: "MRI", location: "2820 Townsgate Road, Suite 100A, Westlake Village, CA 91361", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },
  { id: 208, name: "Precise Imaging", specialty: "MRI", location: "6325 Topanga Canyon Blvd., Suite 1, Woodland Hills, CA 91367", phone: "(800) 558-2223", email: "scheduling@precisemri.com", website: "https://www.precisemri.com", acceptsLiens: true },

  // NEUROLOGIST
  { id: 375, name: "Synergex Med", specialty: "Neurologist", location: "710 S. Brookhurts St., Suite D, Anaheim, CA 92804", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 376, name: "Southern California Injury Treatment Center", specialty: "Neurologist", location: "15857 Pomona Rincon Rd., Chino Hills, CA 91709", phone: "844-787-3286", email: "injurytreatmentcenter909@gmail.com", website: "https://www.socalinjury.net", acceptsLiens: true },
  { id: 377, name: "Synergex Med", specialty: "Neurologist", location: "4323 Sepulveda Blvd., Suite 702, Culver City, CA 90230", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 378, name: "Synergex Med", specialty: "Neurologist", location: "18377 Beach Blvd., Suite 108, Huntington Beach, CA 92648", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 379, name: "Synergex Med", specialty: "Neurologist", location: "3300 E. South St., Suite 204, Lakewood, CA 90805", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 380, name: "Synergex Med", specialty: "Neurologist", location: "8940 Corbin Ave., Northridge, CA 91324", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 381, name: "Synergex Med", specialty: "Neurologist", location: "2204 El Camino Real, Suite 201, Oceanside, CA 92054", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 382, name: "Synergex Med", specialty: "Neurologist", location: "1030 S Arroyo Pkwy, Suite 103, Pasadena, CA 91105", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 383, name: "Synergex Med", specialty: "Neurologist", location: "4234 Riverwalk Parkway, Suite 110, Riverside, CA 92595", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },

  // NEUROSURGEON
  { id: 209, name: "California Neurosurgical Institute - Dr. Mark Liker, MD", specialty: "Neurosurgeon", location: "23929 McBean Pkwy, Suite 215, Valencia, CA 91355", phone: "(661) 228-8697", email: "Newpatients@calneuro.org", website: "https://californianeurosurgicalinstitute.com", acceptsLiens: true },
  { id: 210, name: "California Neurosurgical Institute - Dr. Mark Liker, MD", specialty: "Neurosurgeon", location: "42135 10th Street West, Suite 101, Lancaster, CA 93534", phone: "(661) 228-8697", email: "Newpatients@calneuro.org", website: "https://californianeurosurgicalinstitute.com", acceptsLiens: true },
  { id: 211, name: "California Neurosurgical Institute - Dr. Mark Liker, MD", specialty: "Neurosurgeon", location: "23929 McBean Pkwy, Suite 215, Valencia, CA 91355", phone: "(661) 228-8697", email: "Newpatients@calneuro.org", website: "https://californianeurosurgicalinstitute.com", acceptsLiens: true },

  // OPHTHALMOLOGIST
  { id: 212, name: "Lancaster Eye Institute", specialty: "Ophthalmologist", location: "1739 W. Ave. J, Lancaster, CA 93534", phone: "(661) 940-0555", email: "amy@calieye.com", website: "https://calieye.com", acceptsLiens: true },
  { id: 213, name: "Cali Eye Institute", specialty: "Ophthalmologist", location: "19000 Hawthorne Blvd., Suite 100, Torrance, CA 90503", phone: "(310) 909-8880", email: "amy@calieye.com", website: "https://calieye.com", acceptsLiens: true },
  { id: 214, name: "Anacapa Vision", specialty: "Ophthalmologist", location: "1280 S. Victoria Ave., Ste. 160, Ventura, CA 93003", phone: "(805) 658-3937", email: "amy@calieye.com", website: "https://anacapavision.com", acceptsLiens: true },

  // ORTHOPEDICS
  { id: 215, name: "Unicare Surgery Center", specialty: "Orthopedics", location: "1741 W. Romneya Dr., Suite B, Anaheim, CA 92801", phone: "(714) 332-5000", email: "schedule@unicaresurgery.com", website: "https://www.unicaresurgery.com", acceptsLiens: true },
  { id: 216, name: "Unicare Clinic", specialty: "Orthopedics", location: "1761 W. Romneya Dr., Suite J, Anaheim, CA 92801", phone: "(714) 332-1490", email: "", website: "https://www.unicaresurgery.com", acceptsLiens: true },
  { id: 217, name: "Advanced Spine Institute", specialty: "Orthopedics", location: "131 E. Huntington Dr., Arcadia, CA 91006", phone: "(818) 501-2001", email: "alicia@thespinemd.com", website: "https://www.thespinemd.com", acceptsLiens: true },
  { id: 218, name: "Silver Orthopedic Center", specialty: "Orthopedics", location: "16030 Ventura Blvd. Suite 150, Encino, California 91436", phone: "(818) 501-2001", email: "alicia@thespinemd.com", website: "https://www.silverorthopedics.com", acceptsLiens: true },
  { id: 219, name: "DEE Sports Orthopedics", specialty: "Orthopedics", location: "4477 W 118th St., Suite 401, Hawthorne, CA 90250", phone: "(562) 430-3561", email: "info@deeortho.com", website: "https://www.deeorthosports.com", acceptsLiens: true },
  { id: 220, name: "DEE Sports Orthopedics", specialty: "Orthopedics", location: "7146 Edinger Ave., Huntington Beach, CA 92647", phone: "(562) 430-3561", email: "info@deeortho.com", website: "https://www.deeorthosports.com", acceptsLiens: true },
  { id: 221, name: "DEE Sports Orthopedics", specialty: "Orthopedics", location: "1127 Wilshire Blvd., Suite 1000, Los Angeles, CA 90017", phone: "(562) 430-3561", email: "info@deeortho.com", website: "https://www.deeorthosports.com", acceptsLiens: true },
  { id: 222, name: "Center For Orthopedics and Rehabilitation", specialty: "Orthopedics", location: "1405 W Rancho Vista Blvd., Palmdale, CA 93551", phone: "(661) 274-8725", email: "adriana@c4or.com", website: "https://centerorthopedicrehab.com", acceptsLiens: true },
  { id: 223, name: "Silver Orthopedic Center", specialty: "Orthopedics", location: "15035 E. 14th Street, San Leandro, CA 94578", phone: "(818) 501-2001", email: "alicia@thespinemd.com", website: "https://www.silverorthopedics.com", acceptsLiens: true },

  // PAIN MANAGEMENT
  { id: 224, name: "Unicare Surgery Center", specialty: "Pain Management", location: "1741 W. Romneya Dr., Suite B, Anaheim, CA 92801", phone: "(714) 332-5000", email: "schedule@unicaresurgery.com", website: "https://www.unicaresurgery.com", acceptsLiens: true },
  { id: 225, name: "Unicare Clinic", specialty: "Pain Management", location: "1761 W. Romneya Dr., Suite J, Anaheim, CA 92801", phone: "(714) 332-1490", email: "schedule@unicaresurgery.com", website: "https://www.unicaresurgery.com", acceptsLiens: true },
  { id: 226, name: "Chin Se Kim, MD", specialty: "Pain Management", location: "1736 W. Medical Center Dr., Suite B, Anaheim, CA 92801", phone: "(714) 520-0809", email: "chinsekim@gmail.com", website: "https://www.anaheimsportsmedicine.com", acceptsLiens: true },
  { id: 227, name: "California Sports and Spine Center", specialty: "Pain Management", location: "145 S. Chaparral Ct., Suite 101, Anaheim, CA 92808", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 228, name: "Revive Pain Management", specialty: "Pain Management", location: "5475 E La Palma Avenue, Suite 202, Anaheim, CA 92807", phone: "(949) 396-0501", email: "mj@revivepain.com", website: "https://revivepain.com", acceptsLiens: true },
  { id: 229, name: "Synergex Med", specialty: "Pain Management", location: "710 S. Brookhurts St., Suite D, Anaheim, CA 92804", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 230, name: "American Spine", specialty: "Pain Management", location: "2535 16th Street, Bakersfield, CA 93301", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 231, name: "Center for Pain Control Medical Group", specialty: "Pain Management", location: "321 Stine Rd., Bakersfield, CA 93309", phone: "(818) 923-5440", email: "Aaronincpc@gmail.com", website: "https://www.centerpaincontrol.com", acceptsLiens: true },
  { id: 232, name: "Los Angeles Pain Associates", specialty: "Pain Management", location: "99 N. La Cienega Blvd., Suite 102A, Beverly Hills, CA 90211", phone: "(818) 206-2181", email: "admin@lapainassociates.com", website: "https://lapainassociates.com", acceptsLiens: true },
  { id: 233, name: "American Spine", specialty: "Pain Management", location: "11911 Artesia Blvd., Suite 205, Cerritos, CA 90701", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 234, name: "California Sports and Spine Center", specialty: "Pain Management", location: "900 E. Washington St., Suite 300, Colton, CA 92324", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 235, name: "American Spine", specialty: "Pain Management", location: "1810 Fullerton Ave., Suite 104, Corona, CA 92881", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 236, name: "American Spine - Corona Specialty Care Surgery Center", specialty: "Pain Management", location: "1810 Fullerton Ave., Suite 103, Corona, CA 92881", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 237, name: "California Sports and Spine Center", specialty: "Pain Management", location: "2250 S. Main St., Suite 203, Corona, CA 92882", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 238, name: "California Sports and Spine Center", specialty: "Pain Management", location: "12598 Central Ave, Suite 120A, Chino, CA 91710", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 239, name: "Center for Pain Control Medical Group", specialty: "Pain Management", location: "11760 Central Ave, Suite 204, Chino, CA 91710", phone: "(818) 923-5440", email: "Aaronincpc@gmail.com", website: "https://www.centerpaincontrol.com", acceptsLiens: true },
  { id: 240, name: "Southern California Injury Treatment Center", specialty: "Pain Management", location: "15857 Pomona Rincon Rd., Chino Hills, CA 91709", phone: "844-787-3286", email: "injurytreatmentcenter909@gmail.com", website: "https://www.socalinjury.net", acceptsLiens: true },
  { id: 241, name: "California Sports and Spine Center", specialty: "Pain Management", location: "9225 Venice Blvd., Los Angeles, CA 90034", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 242, name: "California Sports and Spine Center", specialty: "Pain Management", location: "9530 Imperial Hwy, Suite G, Downey, CA 90242", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 243, name: "Synergex Med", specialty: "Pain Management", location: "9530 Imperial Hwy, Suite G, Downey, CA 90242", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 244, name: "Synergex Med (Surgery Center)", specialty: "Pain Management", location: "16466 Bernardo Center Drive, Suite 177, Downey, CA 92128", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 245, name: "Synergex Med", specialty: "Pain Management", location: "11001 Main Street, Suite 218, El Monte, CA 91731", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 246, name: "Synergex Med", specialty: "Pain Management", location: "7551 Timberlake Way, Suite 200, Sacramento, CA 95823", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 247, name: "California Sports and Spine Center", specialty: "Pain Management", location: "5363 Balboa Blvd., Suite 246, Encino, CA 91316", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 248, name: "Center for Pain Control Medical Group", specialty: "Pain Management", location: "16101 Ventura Blvd., Suite 240, Encino, CA 91436", phone: "(818) 923-5440", email: "Aaronincpc@gmail.com", website: "https://www.centerpaincontrol.com", acceptsLiens: true },
  { id: 249, name: "Los Angeles Pain Associates", specialty: "Pain Management", location: "7950 Cherry Ave., Suite 106, Fontana, CA 92336", phone: "(818) 206-2181", email: "admin@lapainassociates.com", website: "https://lapainassociates.com", acceptsLiens: true },
  { id: 250, name: "Synergex Med", specialty: "Pain Management", location: "3622 Thornton Ave., Fremont, CA 94536", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 251, name: "Synergex Med (Surgery Center-Washington Outpatient Surgery Center)", specialty: "Pain Management", location: "2299 Mowry Ave., Fremont, CA 94538", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 252, name: "Center for Pain Control Medical Group", specialty: "Pain Management", location: "7125 N. Chestnut Ave., Suite 104, Fresno, CA 94109", phone: "(818) 923-5440", email: "Aaronincpc@gmail.com", website: "https://www.centerpaincontrol.com", acceptsLiens: true },
  { id: 253, name: "Los Angeles Pain Associates", specialty: "Pain Management", location: "445 W Broadway, Glendale, CA 91204", phone: "(818) 206-2181", email: "admin@lapainassociates.com", website: "https://lapainassociates.com", acceptsLiens: true },
  { id: 254, name: "Revive Pain Management", specialty: "Pain Management", location: "3120 S. Hacienda Blvd., Ste 102, Hacienda Heights, CA 91745", phone: "(949) 396-0501", email: "mj@revivepain.com", website: "https://revivepain.com", acceptsLiens: true },
  { id: 255, name: "California Sports and Spine Center", specialty: "Pain Management", location: "4477 W. 118th Street, Suite 501, Hawthorne, CA 90250", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 256, name: "American Spine", specialty: "Pain Management", location: "15462 Main St., Hesperia, CA 92345", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 257, name: "Synergex Med", specialty: "Pain Management", location: "7801 Center Avenue, Huntington Beach, CA 92647", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 258, name: "Synergex Med", specialty: "Pain Management", location: "3300 E. South St., Suite 204, Lakewood, CA 90805", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 259, name: "American Spine", specialty: "Pain Management", location: "31571 Canyon Estates Dr., Suite 115, Lake Elsinore, CA 92532", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 260, name: "Skye Spine & Pain Medical Group", specialty: "Pain Management", location: "1312 W. Ave. J, Lancaster, CA 93534", phone: "(661) 726-0136", email: "darlene.skyespine@gmail.com", website: "N/A", acceptsLiens: true },
  { id: 261, name: "California Sports and Spine Center", specialty: "Pain Management", location: "8711 Venice Blvd., Los Angeles, CA 90034", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 262, name: "California Sports and Spine Center", specialty: "Pain Management", location: "3250 Wilshire Blvd., Suite 1501, Los Angeles, CA 90010", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 263, name: "Center for Pain Control Medical Group", specialty: "Pain Management", location: "903 S. Crenshaw Blvd., Suite 304, Los Angeles, CA 90019", phone: "(818) 923-5440", email: "Aaronincpc@gmail.com", website: "https://www.centerpaincontrol.com", acceptsLiens: true },
  { id: 264, name: "Remedy Pain Solutions", specialty: "Pain Management", location: "3150 E. Imperial Hwy., Suite 200, Lynwood, CA 90262", phone: "(310) 482-6906", email: "dl@remedypainsolutions.com", website: "https://remedypainsolutions.com", acceptsLiens: true },
  { id: 265, name: "Remedy Pain Solutions", specialty: "Pain Management", location: "1200 Rosecrans Ave #202, Manhattan Beach, CA 90266", phone: "(310) 482-6906", email: "dl@remedypainsolutions.com", website: "https://remedypainsolutions.com", acceptsLiens: true },
  { id: 266, name: "Remedy Pain Solutions", specialty: "Pain Management", location: "13160 Mindanao Way, Suite 200, Marina Del Rey, CA 90292", phone: "(310) 482-6906", email: "dl@remedypainsolutions.com", website: "https://remedypainsolutions.com", acceptsLiens: true },
  { id: 267, name: "California Sports and Spine Center", specialty: "Pain Management", location: "40 N. Park Victoria Drive, Suite H, Milpitas, CA 95035", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 268, name: "American Spine", specialty: "Pain Management", location: "1130 Coffee Rd., Unit 9, Modesto, CA 95355", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 269, name: "Center for Pain Control Medical Group", specialty: "Pain Management", location: "1303 Yosemite Blvd., Modesto, CA 95354", phone: "(818) 923-5440", email: "Aaronincpc@gmail.com", website: "https://www.centerpaincontrol.com", acceptsLiens: true },
  { id: 270, name: "California Sports and Spine Center", specialty: "Pain Management", location: "25395 Hancock Ave., Suite 230, Murrieta, CA 92562", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 271, name: "Revive Pain Management", specialty: "Pain Management", location: "320 Superior Avenue, Suite 320, Newport Beach, CA 92663", phone: "(949) 396-0501", email: "mj@revivepain.com", website: "https://revivepain.com", acceptsLiens: true },
  { id: 272, name: "Revive Pain Management", specialty: "Pain Management", location: "8940 Corbin Avenue, Northridge, CA 91324", phone: "(949) 396-0501", email: "mj@revivepain.com", website: "https://revivepain.com", acceptsLiens: true },
  { id: 273, name: "Center for Pain Control Medical Group", specialty: "Pain Management", location: "1624 Franklin St., Suite 510, Oakland, CA 94612", phone: "(818) 923-5440", email: "Aaronincpc@gmail.com", website: "https://www.centerpaincontrol.com", acceptsLiens: true },
  { id: 274, name: "Synergex Med", specialty: "Pain Management", location: "3300 Webster St., Suite 505, Oakland, CA 94609", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 275, name: "Synergex Med", specialty: "Pain Management", location: "2204 El Camino Real, Suite 201, Oceanside, CA 92054", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 276, name: "Synergex Med", specialty: "Pain Management", location: "1030 S Arroyo Pkwy, Suite 103, Pasadena, CA 91105", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 277, name: "Synergex Med (Surgery Center)", specialty: "Pain Management", location: "215 N. Marengo Ave., Suite 115, Pasadena, CA 91101", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 278, name: "Revive Pain Management", specialty: "Pain Management", location: "7300 Alondra Blvd., Ste 101, Paramount, CA 90723", phone: "(949) 396-0501", email: "mj@revivepain.com", website: "https://revivepain.com", acceptsLiens: true },
  { id: 279, name: "American Spine", specialty: "Pain Management", location: "74000 Country Club Dr., Suite G2, Palm Desert, CA 92260", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 280, name: "American Spine", specialty: "Pain Management", location: "22195 El Paseo Suite, 200, Rancho Santa Margarita, CA 92688", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 281, name: "California Sports and Spine Center", specialty: "Pain Management", location: "4510 Brockton Ave., Apt. 385, Riverside, CA 92501", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 282, name: "Synergex Med", specialty: "Pain Management", location: "4234 Riverwalk Parkway, Suite 110, Riverside, CA 92595", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 283, name: "Revive Pain Management", specialty: "Pain Management", location: "2155 Chicago Avenue, Unit 300, Riverside, CA 92507", phone: "(949) 396-0501", email: "mj@revivepain.com", website: "https://revivepain.com", acceptsLiens: true },
  { id: 284, name: "American Spine", specialty: "Pain Management", location: "9700 Business Park Dr., Suite 206, Sacramento, CA 95827", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 285, name: "California Sports and Spine Center", specialty: "Pain Management", location: "1255 E. Highland Ave., Suite 106, San Bernardino, CA 92404", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 286, name: "Synergex Med", specialty: "Pain Management", location: "10585 Scripps Poway Pkwy., San Diego, CA 92131", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 287, name: "Synergex Med (Surgery Center)", specialty: "Pain Management", location: "San Diego Surgery Center", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 288, name: "American Spine", specialty: "Pain Management", location: "2221 Camino Del Rio South, Suite 104, San Diego, CA 92108", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 289, name: "American Spine", specialty: "Pain Management", location: "3230 Waring Ct., Suite P, Oceanside, CA 92056", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 290, name: "American Spine - North County Specialty Care Surgery", specialty: "Pain Management", location: "3230 Waring Ct., Suite P, Oceanside, CA 92056", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 291, name: "American Spine", specialty: "Pain Management", location: "1695 S. San Jacinto Ave., Suite 1-I, San Jacinto, CA 92582", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 292, name: "Silver Orthopedic Center", specialty: "Pain Management", location: "15035 E. 14th Street, San Leandro, CA 94578", phone: "(818) 501-2001", email: "alicia@thespinemd.com", website: "https://www.silverorthopedics.com", acceptsLiens: true },
  { id: 293, name: "Center for Pain Control Medical Group", specialty: "Pain Management", location: "2305 Van Ness Ave., Suite B, San Francisco, CA 94109", phone: "(818) 923-5440", email: "Aaronincpc@gmail.com", website: "https://www.centerpaincontrol.com", acceptsLiens: true },
  { id: 294, name: "American Spine", specialty: "Pain Management", location: "150 N. Jackson Ave., Suite 107, San Jose, CA 95116", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 295, name: "Synergex Med", specialty: "Pain Management", location: "4155 Moorpark Ave., Suite 1, San Jose, CA 95117", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 296, name: "Synergex Med (Bay Surgery Center)", specialty: "Pain Management", location: "1610 Blossom Hill Rd., Suite 10, San Jose, CA 95124", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 297, name: "Synergex Med", specialty: "Pain Management", location: "100 S. Ellsworth Ave., Suite 504, San Mateo, CA 94401", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 298, name: "California Sports and Spine Center", specialty: "Pain Management", location: "2001 E. 4th Street, Suite 207, Santa Ana, CA 92705", phone: "(213) 444-2772", email: "referrals@casportsandspine.com", website: "https://casportsandspine.com", acceptsLiens: true },
  { id: 299, name: "Center for Pain Control Medical Group", specialty: "Pain Management", location: "2621 S. Bristol St., Suite 108, Santa Ana, CA 92704", phone: "(818) 923-5440", email: "Aaronincpc@gmail.com", website: "https://www.centerpaincontrol.com", acceptsLiens: true },
  { id: 300, name: "American Spine", specialty: "Pain Management", location: "800 N. Tustin Ave., Suite 1, Santa Ana, CA 92705", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 301, name: "American Spine - OC Specialty Care Surgery Center", specialty: "Pain Management", location: "1200 N. Tustin Ave., Suite 155, Santa Ana, CA 92705", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 302, name: "Los Angeles Pain Associates", specialty: "Pain Management", location: "13320 Riverside Dr., Suite 226C, Sherman Oaks, CA 91505", phone: "(818) 206-2181", email: "admin@lapainassociates.com", website: "https://lapainassociates.com", acceptsLiens: true },
  { id: 303, name: "Synergex Med", specialty: "Pain Management", location: "2805 J Street, Suite 210, Sacramento, CA 95816", phone: "(562) 414-4452", email: "admin@synergexmed.com", website: "https://www.synergexmed.com", acceptsLiens: true },
  { id: 304, name: "Los Angeles Pain Associates", specialty: "Pain Management", location: "3445 Pacific Coast Hwy, Suite 250A, Torrance, CA 90505", phone: "(818) 206-2181", email: "admin@lapainassociates.com", website: "https://lapainassociates.com", acceptsLiens: true },
  { id: 305, name: "American Spine", specialty: "Pain Management", location: "330 E. 7th St., 2nd Floor, Upland, CA 91786", phone: "(951) 734-7246", email: "pi@usapaincare.com", website: "https://www.ifixspinemd.com", acceptsLiens: true },
  { id: 306, name: "Center for Pain Control Medical Group", specialty: "Pain Management", location: "14707 7th St., Suite 100, Victorville, CA 92395", phone: "(818) 923-5440", email: "Aaronincpc@gmail.com", website: "https://www.centerpaincontrol.com", acceptsLiens: true },
  { id: 307, name: "Revive Pain Management", specialty: "Pain Management", location: "222 N Sunset Avenue, Suite D, West Covina, CA 91790", phone: "(949) 396-0501", email: "mj@revivepain.com", website: "https://revivepain.com", acceptsLiens: true },

  // PHARMACY
  { id: 350, name: "Caspian Pharmacy", specialty: "Pharmacy", location: "19745 Ventura Blvd., Woodland Hills, CA 91364", phone: "(818) 444-3456", email: "claims@caspianpharmacy.com", website: "", acceptsLiens: true },

  // PHYSICAL THERAPY
  { id: 384, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "780 N Euclid St., Suite 104, Anaheim, CA 92801", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 385, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "14001 Ramona Blvd., Suite E, Baldwin Park, CA 91706", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 386, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "401 S Glenoaks Blvd, Unit 212, Burbank, CA 91502", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 387, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "9259 Eton Ave., Chatsworth, CA 91311", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 388, name: "Agape Wellness Center", specialty: "Physical Therapy", location: "1182 Bristol St., Costa Mesa, CA 92626", phone: "(714) 957-2685", email: "pi@agapewellnesscenter.com", website: "https://agapewellnesscenter.com", acceptsLiens: true },
  { id: 389, name: "Phoenix Physical Therapy and Wellness Inc", specialty: "Physical Therapy", location: "1577 E Chevy Chase Drive, Suite 110, Glendale, CA 91206", phone: "(818) 484-7333", email: "phoenixpw2019@gmail.com", website: "https://phnxpt.com", acceptsLiens: true },
  { id: 390, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "13637 Hawthorne Blvd., Suite 100, Hawthorne, CA 90250", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 391, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "5419 Hollywood Blvd., Suite B, Los Angeles, CA 90027", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 392, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "3939 Atlantic Ave., Suite 224, Long Beach, CA 90807", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 393, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "1625 W Olympic Blvd., Suite 1045, Los Angeles, CA 90015", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 394, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "8891 Central Ave., Suite B, Montclair, CA 91763", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 395, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "7807 Telegraph Rd., Suite B, Montebello, CA 90640", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 396, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "23623 Sunnymead Blvd., Suite E, Moreno Valley, CA 92553", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 397, name: "Robinson Health Wellness", specialty: "Physical Therapy", location: "19127 Romar Street, Northridge, CA 91324", phone: "(703) 624-9876", email: "drdanwrobinson@hotmail.com", website: "N/A", acceptsLiens: true },
  { id: 398, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "1850 E Palmdale Blvd., Palmdale, CA 93550", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 399, name: "Phoenix Physical Therapy and Wellness Inc", specialty: "Physical Therapy", location: "10390 Commerce Center Drive Suite C-110, Rancho Cucamonga, CA 91730", phone: "(909) 789-1212", email: "scheduling@phnxpt.com", website: "https://phnxpt.com", acceptsLiens: true },
  { id: 410, name: "Phoenix Physical Therapy and Wellness Inc.", specialty: "Physical Therapy", location: "1450 Iowa Ave Suite 250, Riverside, CA 92507", phone: "(951) 530-3550", email: "riverside@phnxpt.com", website: "https://phnxpt.com", acceptsLiens: true },
  { id: 411, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "10116 Indiana Ave., Riverside, CA 92503", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 412, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "1255 E Highland Ave., Suite 108, San Bernardino, CA 92404", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 413, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "600 S Grand Ave., Suite 104, Santa Ana, CA 92705", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 414, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "11870 Santa Monica Blvd., Suite 208, Los Angeles, CA 90025", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 415, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "40810 County Center Dr., Suite 220, Temecula, CA 92591", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 416, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "23734 Valencia Blvd., Suite 201, Valencia, CA 91355", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },
  { id: 417, name: "West Star Physical Therapy Network", specialty: "Physical Therapy", location: "6265 Sepulveda Blvd., Suite 6, Van Nuys, CA 91401", phone: "(888) 786-2888", email: "ptreferral@apmi.net", website: "https://wsptn.com", acceptsLiens: true },

  // PODIATRIST
  { id: 400, name: "Kings Point Foot Ankle Specialists", specialty: "Podiatrist", location: "629 3rd Ave. Suite A, Chula Vista, CA 91910", phone: "(323) 843-3668", email: "pi@kpfoot.com", website: "https://www.kpfoot.com", acceptsLiens: true },
  { id: 401, name: "Kings Point Foot Ankle Specialists", specialty: "Podiatrist", location: "900 E. Washington St., Suite 300, Colton, CA 92324", phone: "(323) 843-3668", email: "pi@kpfoot.com", website: "https://www.kpfoot.com", acceptsLiens: true },
  { id: 402, name: "Kings Point Foot Ankle Specialists", specialty: "Podiatrist", location: "4928 E. Clinton Way, Suite 101, Fresno, CA 93727", phone: "(323) 843-3668", email: "pi@kpfoot.com", website: "https://www.kpfoot.com", acceptsLiens: true },
  { id: 403, name: "Kings Point Foot Ankle Specialists", specialty: "Podiatrist", location: "4477 W. 118th Street, Suite 501, Hawthorne, CA 90250", phone: "(323) 843-3668", email: "pi@kpfoot.com", website: "https://www.kpfoot.com", acceptsLiens: true },
  { id: 404, name: "Kings Point Foot Ankle Specialists", specialty: "Podiatrist", location: "4510 Brockton Ave., Suite 385, Riverside, CA 92501", phone: "(323) 843-3668", email: "pi@kpfoot.com", website: "https://www.kpfoot.com", acceptsLiens: true },
  { id: 405, name: "Kings Point Foot Ankle Specialists", specialty: "Podiatrist", location: "3001 I Street, Suite 300, Sacramento, CA 95816", phone: "(323) 843-3668", email: "pi@kpfoot.com", website: "https://www.kpfoot.com", acceptsLiens: true },
  { id: 406, name: "Kings Point Foot Ankle Specialists", specialty: "Podiatrist", location: "13851 East 14th Street, Suite 102A, B, San Leandro, CA 94578", phone: "(323) 843-3668", email: "pi@kpfoot.com", website: "https://www.kpfoot.com", acceptsLiens: true },
  { id: 407, name: "Kings Point Foot Ankle Specialists", specialty: "Podiatrist", location: "720 N. Tustin Ave., Suite 206, Santa Ana, CA 92705", phone: "(323) 843-3668", email: "pi@kpfoot.com", website: "https://www.kpfoot.com", acceptsLiens: true },
  { id: 408, name: "Kings Point Foot Ankle Specialists", specialty: "Podiatrist", location: "5191 Camino Al Norte, North Las Vegas, NV 89031", phone: "(323) 843-3668", email: "pi@kpfoot.com", website: "https://www.kpfoot.com", acceptsLiens: true },

  // PSYCHOLOGIST
  { id: 409, name: "Premiere Forensic Psychologist", specialty: "Psychologist", location: "8383 Wilshire Blvd., Suite 800, Beverly Hills, CA 90211", phone: "(310) 295-6850", email: "raquelnealpremierforensic@gmail.com", website: "https://premierforensic.com", acceptsLiens: true },
  { id: 410, name: "Premiere Forensic Psychologist", specialty: "Psychologist", location: "445 S. Figueroa St., Suite 2700, Los Angeles, CA 90071", phone: "(310) 295-6850", email: "raquelnealpremierforensic@gmail.com", website: "https://premierforensic.com", acceptsLiens: true },
  { id: 411, name: "Premiere Forensic Psychologist", specialty: "Psychologist", location: "333 City Blvd., W. Fl. 300, Room 318, Orange, CA 92868", phone: "(310) 295-6850", email: "raquelnealpremierforensic@gmail.com", website: "https://premierforensic.com", acceptsLiens: true },
];

const specialties = [
  "All Specialties",
  "Acupuncture",
  "Aquatic Therapy",
  "Chiropractic",
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

  useEffect(() => {
    const urlSearch = searchParams.get("search");
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
  }, [searchParams]);

  const filteredProviders = providers.filter((provider) => {
    const specialtyMatch =
      selectedSpecialty === "All Specialties" || provider.specialty === selectedSpecialty;

    const q = searchTerm.trim().toLowerCase();

    // Extract 3-5 digit zip partials from the search term
    const zipPartials = Array.from(q.matchAll(/\b(\d{3,5})\b/g), (m) => m[1]);

    // Extract provider ZIP codes (5 digits)
    const providerZips = Array.from(provider.location.matchAll(/\b(\d{5})\b/g), (m) => m[1]);

    const matchesZip =
      zipPartials.length === 0 ||
      providerZips.some((zip) => zipPartials.some((partial) => zip.includes(partial)));

    // Text tokens (exclude numeric zip tokens)
    const textOnly = q.replace(/\b\d{3,5}\b/g, " ").replace(/\s+/g, " ").trim();
    const tokens = textOnly ? textOnly.split(" ") : [];

    const haystacks = [
      provider.name.toLowerCase(),
      provider.location.toLowerCase(),
      provider.specialty.toLowerCase(),
    ];

    const matchesText =
      tokens.length === 0 || tokens.every((token) => haystacks.some((h) => h.includes(token)));

    return specialtyMatch && matchesText && matchesZip;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider) => (
                <Card
                  key={`${provider.id}-${provider.name}-${provider.location}`}
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
                    <a
                      href={`tel:${provider.phone}`}
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone size={16} className="mr-2 text-primary" />
                      {provider.phone}
                    </a>
                  )}
                  {provider.email && (
                    <a
                      href={`mailto:${provider.email}`}
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail size={16} className="mr-2 text-primary" />
                      {provider.email}
                    </a>
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
