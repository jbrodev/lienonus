// California Locations Database with fuzzy search support
// This data is cached in memory for instant lookups

export interface CaliforniaLocation {
  city: string;
  zip: string;
  lat: number;
  lng: number;
  aliases?: string[];
}

// Comprehensive California cities database
export const CALIFORNIA_LOCATIONS: CaliforniaLocation[] = [
  { city: "Los Angeles", zip: "90001", lat: 34.052235, lng: -118.243683, aliases: ["la", "l.a.", "l.a", "downtown la", "dtla", "south la"] },
  { city: "San Diego", zip: "92101", lat: 32.715736, lng: -117.161087, aliases: ["sd"] },
  { city: "San Jose", zip: "95113", lat: 37.338208, lng: -121.886329, aliases: ["sj", "silicon valley"] },
  { city: "San Francisco", zip: "94102", lat: 37.774929, lng: -122.419416, aliases: ["sf", "san fran", "frisco", "the city"] },
  { city: "Fresno", zip: "93721", lat: 36.737798, lng: -119.787125 },
  { city: "Sacramento", zip: "95814", lat: 38.581572, lng: -121.494400, aliases: ["sac", "sactown", "sacramento area"] },
  { city: "Long Beach", zip: "90802", lat: 33.770050, lng: -118.193739, aliases: ["lb"] },
  { city: "Oakland", zip: "94612", lat: 37.804364, lng: -122.271114, aliases: ["oak", "the town", "bay area", "the bay"] },
  { city: "Bakersfield", zip: "93301", lat: 35.373292, lng: -119.018712 },
  { city: "Anaheim", zip: "92805", lat: 33.835293, lng: -117.914504 },
  { city: "Santa Ana", zip: "92701", lat: 33.745472, lng: -117.867653, aliases: ["oc", "orange county"] },
  { city: "Riverside", zip: "92501", lat: 33.980572, lng: -117.375494, aliases: ["inland empire", "ie"] },
  { city: "Stockton", zip: "95202", lat: 37.957702, lng: -121.290780 },
  { city: "Chula Vista", zip: "91910", lat: 32.640054, lng: -117.083978 },
  { city: "Irvine", zip: "92618", lat: 33.669465, lng: -117.823110 },
  { city: "Fremont", zip: "94538", lat: 37.548270, lng: -121.988572 },
  { city: "San Bernardino", zip: "92401", lat: 34.108345, lng: -117.289765, aliases: ["san berdoo"] },
  { city: "Modesto", zip: "95350", lat: 37.639097, lng: -120.996878 },
  { city: "Oxnard", zip: "93030", lat: 34.197505, lng: -119.177052 },
  { city: "Fontana", zip: "92335", lat: 34.092233, lng: -117.435048 },
  { city: "Moreno Valley", zip: "92553", lat: 33.937517, lng: -117.230594, aliases: ["mo val"] },
  { city: "Huntington Beach", zip: "92648", lat: 33.660297, lng: -117.999226, aliases: ["hb", "surf city"] },
  { city: "Glendale", zip: "91205", lat: 34.142508, lng: -118.255075 },
  { city: "Santa Clarita", zip: "91355", lat: 34.391664, lng: -118.542586 },
  { city: "Garden Grove", zip: "92843", lat: 33.773907, lng: -117.941447 },
  { city: "Oceanside", zip: "92054", lat: 33.195869, lng: -117.379483 },
  { city: "Rancho Cucamonga", zip: "91730", lat: 34.106399, lng: -117.593108, aliases: ["rc", "cucamonga"] },
  { city: "Ontario", zip: "91761", lat: 34.063344, lng: -117.650888 },
  { city: "Lancaster", zip: "93534", lat: 34.686784, lng: -118.154163 },
  { city: "Elk Grove", zip: "95758", lat: 38.408799, lng: -121.371618 },
  { city: "Palmdale", zip: "93550", lat: 34.579434, lng: -118.116461 },
  { city: "Corona", zip: "92879", lat: 33.875294, lng: -117.566438 },
  { city: "Salinas", zip: "93901", lat: 36.677737, lng: -121.655501 },
  { city: "Pomona", zip: "91766", lat: 34.055103, lng: -117.749991 },
  { city: "Torrance", zip: "90503", lat: 33.835849, lng: -118.340629 },
  { city: "Hayward", zip: "94545", lat: 37.668821, lng: -122.080796 },
  { city: "Escondido", zip: "92025", lat: 33.119207, lng: -117.086421 },
  { city: "Sunnyvale", zip: "94087", lat: 37.368830, lng: -122.036349 },
  { city: "Pasadena", zip: "91101", lat: 34.147785, lng: -118.144515 },
  { city: "Orange", zip: "92868", lat: 33.787794, lng: -117.853112 },
  { city: "Fullerton", zip: "92832", lat: 33.870346, lng: -117.924212 },
  { city: "Thousand Oaks", zip: "91362", lat: 34.170561, lng: -118.837594, aliases: ["to"] },
  { city: "Visalia", zip: "93291", lat: 36.330228, lng: -119.292058 },
  { city: "Roseville", zip: "95678", lat: 38.752124, lng: -121.288006 },
  { city: "Simi Valley", zip: "93065", lat: 34.269447, lng: -118.781482 },
  { city: "Concord", zip: "94520", lat: 37.977978, lng: -122.031073 },
  { city: "Victorville", zip: "92392", lat: 34.536218, lng: -117.291156 },
  { city: "Santa Clara", zip: "95050", lat: 37.354108, lng: -121.955236 },
  { city: "Vallejo", zip: "94590", lat: 38.104086, lng: -122.256637 },
  { city: "Berkeley", zip: "94704", lat: 37.871593, lng: -122.272747 },
  { city: "El Monte", zip: "91732", lat: 34.068621, lng: -118.027567 },
  { city: "Downey", zip: "90242", lat: 33.940109, lng: -118.133159 },
  { city: "Costa Mesa", zip: "92627", lat: 33.641132, lng: -117.918669 },
  { city: "Inglewood", zip: "90301", lat: 33.961680, lng: -118.353131 },
  { city: "Carlsbad", zip: "92008", lat: 33.158093, lng: -117.350594 },
  { city: "San Buenaventura (Ventura)", zip: "93001", lat: 34.280492, lng: -119.293168, aliases: ["ventura"] },
  { city: "Fairfield", zip: "94533", lat: 38.249358, lng: -122.039966 },
  { city: "West Covina", zip: "91790", lat: 34.068621, lng: -117.938953 },
  { city: "Murrieta", zip: "92562", lat: 33.553914, lng: -117.213923 },
  { city: "Antioch", zip: "94509", lat: 38.004921, lng: -121.805789 },
  { city: "Richmond", zip: "94804", lat: 37.935758, lng: -122.347749 },
  { city: "Norwalk", zip: "90650", lat: 33.902237, lng: -118.081733 },
  { city: "Temecula", zip: "92592", lat: 33.493639, lng: -117.148365 },
  { city: "Burbank", zip: "91502", lat: 34.180839, lng: -118.308966 },
  { city: "Santa Maria", zip: "93454", lat: 34.953033, lng: -120.435719 },
  { city: "Clovis", zip: "93611", lat: 36.825228, lng: -119.702919 },
  { city: "Daly City", zip: "94015", lat: 37.687924, lng: -122.470208 },
  { city: "Jurupa Valley", zip: "91752", lat: 33.978056, lng: -117.529444 },
  { city: "El Cajon", zip: "92020", lat: 32.794773, lng: -116.962527 },
  { city: "San Mateo", zip: "94401", lat: 37.563000, lng: -122.325525 },
  { city: "Rialto", zip: "92376", lat: 34.106400, lng: -117.370323 },
  { city: "Vista", zip: "92083", lat: 33.200037, lng: -117.242536 },
  { city: "Vacaville", zip: "95687", lat: 38.356577, lng: -121.987744 },
  { city: "Chico", zip: "95926", lat: 39.728495, lng: -121.837478 },
  { city: "South Gate", zip: "90280", lat: 33.954737, lng: -118.212017 },
  { city: "Hesperia", zip: "92345", lat: 34.426388, lng: -117.300878 },
  { city: "Carson", zip: "90745", lat: 33.831674, lng: -118.281693 },
  { city: "Santa Monica", zip: "90401", lat: 34.019454, lng: -118.491191, aliases: ["sm"] },
  { city: "San Marcos", zip: "92078", lat: 33.143372, lng: -117.166145 },
  { city: "Redding", zip: "96001", lat: 40.586540, lng: -122.391675 },
  { city: "Santa Barbara", zip: "93101", lat: 34.420830, lng: -119.698190, aliases: ["sb"] },
  { city: "San Leandro", zip: "94577", lat: 37.724930, lng: -122.156078 },
  { city: "Livermore", zip: "94550", lat: 37.681874, lng: -121.768008 },
  { city: "Hawthorne", zip: "90250", lat: 33.916403, lng: -118.352575 },
  { city: "Indio", zip: "92201", lat: 33.720577, lng: -116.215562 },
  { city: "Menifee", zip: "92584", lat: 33.697146, lng: -117.174006 },
  { city: "Westminster", zip: "92683", lat: 33.751341, lng: -117.993992 },
  { city: "Lakewood", zip: "90712", lat: 33.853617, lng: -118.133962 },
  { city: "Tracy", zip: "95376", lat: 37.739651, lng: -121.425222 },
  { city: "Merced", zip: "95340", lat: 37.302163, lng: -120.482967 },
  { city: "Chino", zip: "91710", lat: 34.012234, lng: -117.688944 },
  { city: "Redwood City", zip: "94061", lat: 37.485215, lng: -122.236355, aliases: ["rwc"] },
  { city: "Mission Viejo", zip: "92691", lat: 33.600023, lng: -117.671995, aliases: ["mv"] },
  { city: "Hemet", zip: "92543", lat: 33.747520, lng: -116.971968 },
  { city: "Perris", zip: "92570", lat: 33.782519, lng: -117.228648 },
  { city: "Manteca", zip: "95336", lat: 37.797427, lng: -121.216053 },
  { city: "Milpitas", zip: "95035", lat: 37.432334, lng: -121.899574 },
  { city: "Mountain View", zip: "94040", lat: 37.386052, lng: -122.083851, aliases: ["mtv"] },
  { city: "Alameda", zip: "94501", lat: 37.765206, lng: -122.241636 },
  { city: "Santa Cruz", zip: "95060", lat: 36.974117, lng: -122.030796 },
  { city: "Lynwood", zip: "90262", lat: 33.930293, lng: -118.211460 },
  { city: "Redondo Beach", zip: "90277", lat: 33.849182, lng: -118.388408 },
  { city: "Yorba Linda", zip: "92886", lat: 33.888626, lng: -117.813112 },
  { city: "Palo Alto", zip: "94301", lat: 37.441883, lng: -122.143019, aliases: ["pa"] },
  { city: "Davis", zip: "95616", lat: 38.544906, lng: -121.740517 },
  { city: "Camarillo", zip: "93010", lat: 34.216394, lng: -119.037602 },
  { city: "Walnut Creek", zip: "94596", lat: 37.910078, lng: -122.065185, aliases: ["wc"] },
  { city: "Pittsburg", zip: "94565", lat: 38.027976, lng: -121.884681 },
  { city: "South San Francisco", zip: "94080", lat: 37.654656, lng: -122.407750, aliases: ["ssf", "south sf"] },
  { city: "Yuba City", zip: "95991", lat: 39.140448, lng: -121.616911 },
  { city: "San Clemente", zip: "92672", lat: 33.426972, lng: -117.611993 },
  { city: "Laguna Niguel", zip: "92677", lat: 33.522526, lng: -117.707552 },
  { city: "Pico Rivera", zip: "90660", lat: 33.983069, lng: -118.096735 },
  { city: "Montebello", zip: "90640", lat: 34.016505, lng: -118.113753 },
  { city: "Lodi", zip: "95240", lat: 38.134148, lng: -121.272219 },
  { city: "Madera", zip: "93637", lat: 36.961336, lng: -120.060718 },
  { city: "Santa Fe Springs", zip: "90670", lat: 33.947235, lng: -118.085289 },
  { city: "Encinitas", zip: "92024", lat: 33.036987, lng: -117.291982 },
  { city: "Turlock", zip: "95380", lat: 37.494657, lng: -120.846594 },
  { city: "Lake Forest", zip: "92630", lat: 33.646944, lng: -117.689167 },
  { city: "Napa", zip: "94558", lat: 38.297538, lng: -122.286865 },
  { city: "Tustin", zip: "92780", lat: 33.745572, lng: -117.826504 },
  { city: "Bellflower", zip: "90706", lat: 33.881682, lng: -118.116962 },
  { city: "Alhambra", zip: "91801", lat: 34.095287, lng: -118.127014 },
  { city: "Pleasanton", zip: "94566", lat: 37.662431, lng: -121.874679 },
  { city: "Union City", zip: "94587", lat: 37.595769, lng: -122.019130 },
  { city: "Porterville", zip: "93257", lat: 36.065230, lng: -119.016768 },
  { city: "Rancho Cordova", zip: "95670", lat: 38.589072, lng: -121.302728 },
  { city: "San Rafael", zip: "94901", lat: 37.973535, lng: -122.531087 },
  { city: "La Habra", zip: "90631", lat: 33.931858, lng: -117.946137 },
  { city: "Newport Beach", zip: "92660", lat: 33.618910, lng: -117.929849, aliases: ["newport"] },
  { city: "Folsom", zip: "95630", lat: 38.677959, lng: -121.176058 },
  { city: "Fountain Valley", zip: "92708", lat: 33.709185, lng: -117.953669, aliases: ["fv"] },
  { city: "Diamond Bar", zip: "91765", lat: 34.028623, lng: -117.810336, aliases: ["db"] },
  { city: "Hanford", zip: "93230", lat: 36.327450, lng: -119.645674 },
  { city: "Woodland", zip: "95695", lat: 38.678610, lng: -121.773297 },
  { city: "Brentwood", zip: "94513", lat: 37.931868, lng: -121.695786 },
  { city: "Paramount", zip: "90723", lat: 33.889460, lng: -118.159791 },
  { city: "Brea", zip: "92821", lat: 33.916680, lng: -117.900060 },
  { city: "Rosemead", zip: "91770", lat: 34.080565, lng: -118.072846 },
  { city: "Cupertino", zip: "95014", lat: 37.322998, lng: -122.032182 },
  { city: "San Luis Obispo", zip: "93401", lat: 35.282752, lng: -120.659616, aliases: ["slo"] },
  { city: "Arcadia", zip: "91007", lat: 34.139729, lng: -118.035345 },
  { city: "Cypress", zip: "90630", lat: 33.816959, lng: -118.037285 },
  { city: "Azusa", zip: "91702", lat: 34.133619, lng: -117.907563 },
  { city: "Ceres", zip: "95307", lat: 37.594931, lng: -120.957709 },
  { city: "Poway", zip: "92064", lat: 32.962823, lng: -117.035864 },
  { city: "Palm Springs", zip: "92262", lat: 33.830296, lng: -116.545292, aliases: ["ps", "coachella valley"] },
  { city: "Palm Desert", zip: "92260", lat: 33.722244, lng: -116.374456, aliases: ["pd"] },
  { city: "Aliso Viejo", zip: "92656", lat: 33.565041, lng: -117.727119 },
  { city: "Cerritos", zip: "90703", lat: 33.858283, lng: -118.064787 },
  { city: "La Mirada", zip: "90638", lat: 33.917236, lng: -118.012008 },
  { city: "Covina", zip: "91722", lat: 34.090009, lng: -117.890340 },
  { city: "San Ramon", zip: "94582", lat: 37.779927, lng: -121.978015 },
  { city: "Rancho Santa Margarita", zip: "92688", lat: 33.640855, lng: -117.603104, aliases: ["rsm"] },
  { city: "Placentia", zip: "92870", lat: 33.872237, lng: -117.870336 },
  { city: "Danville", zip: "94526", lat: 37.821593, lng: -121.999961 },
  { city: "Dublin", zip: "94568", lat: 37.702152, lng: -121.935792 },
  { city: "San Bruno", zip: "94066", lat: 37.630490, lng: -122.411084 },
  { city: "Rohnert Park", zip: "94928", lat: 38.339636, lng: -122.701098 },
  { city: "Lompoc", zip: "93436", lat: 34.639150, lng: -120.457942 },
  { city: "Cathedral City", zip: "92234", lat: 33.780538, lng: -116.466804 },
  { city: "Banning", zip: "92220", lat: 33.925571, lng: -116.876410 },
  { city: "San Gabriel", zip: "91776", lat: 34.096111, lng: -118.105833 },
  { city: "Los Altos", zip: "94022", lat: 37.385218, lng: -122.114130 },
  { city: "La Quinta", zip: "92253", lat: 33.663357, lng: -116.310009 },
  { city: "El Centro", zip: "92243", lat: 32.792000, lng: -115.563051 },
  { city: "Pacifica", zip: "94044", lat: 37.613826, lng: -122.486919 },
  { city: "Highland", zip: "92346", lat: 34.128344, lng: -117.208651 },
  { city: "Yucaipa", zip: "92399", lat: 34.033625, lng: -117.043086 },
  { city: "Martinez", zip: "94553", lat: 38.019366, lng: -122.134132 },
  { city: "Castro Valley", zip: "94546", lat: 37.694097, lng: -122.086352 },
  { city: "Beverly Hills", zip: "90210", lat: 34.073620, lng: -118.400356, aliases: ["bh"] },
  { city: "Culver City", zip: "90232", lat: 34.019454, lng: -118.396467, aliases: ["cc"] },
  { city: "Monterey Park", zip: "91754", lat: 34.062511, lng: -118.122848 },
  { city: "La Cañada Flintridge", zip: "91011", lat: 34.206818, lng: -118.200599, aliases: ["la canada", "lcf"] },
  { city: "San Dimas", zip: "91773", lat: 34.106676, lng: -117.806726 },
  { city: "West Hollywood", zip: "90069", lat: 34.090009, lng: -118.361744, aliases: ["weho"] },
  { city: "Manhattan Beach", zip: "90266", lat: 33.884736, lng: -118.410908, aliases: ["mb"] },
  { city: "Oakley", zip: "94561", lat: 37.997421, lng: -121.712453 },
  { city: "Calexico", zip: "92231", lat: 32.678949, lng: -115.498883 },
  { city: "Atwater", zip: "95301", lat: 37.347717, lng: -120.609084 },
  { city: "Santee", zip: "92071", lat: 32.838383, lng: -116.973917 },
  { city: "West Sacramento", zip: "95691", lat: 38.580461, lng: -121.530234, aliases: ["west sac"] },
  { city: "Los Banos", zip: "93635", lat: 37.058276, lng: -120.849915 },
  { city: "San Juan Capistrano", zip: "92675", lat: 33.501693, lng: -117.662551, aliases: ["sjc"] },
  { city: "Temple City", zip: "91780", lat: 34.107230, lng: -118.057846 },
  { city: "Bell Gardens", zip: "90201", lat: 33.965291, lng: -118.151459 },
  { city: "Northridge", zip: "91324", lat: 34.226188, lng: -118.536628 },
  { city: "Woodland Hills", zip: "91367", lat: 34.176111, lng: -118.619667 },
  { city: "Encino", zip: "91316", lat: 34.159167, lng: -118.501111 },
  { city: "Tarzana", zip: "91356", lat: 34.156667, lng: -118.550000 },
  { city: "Reseda", zip: "91335", lat: 34.201111, lng: -118.536111 },
  { city: "Van Nuys", zip: "91401", lat: 34.183611, lng: -118.447222 },
  { city: "Sherman Oaks", zip: "91403", lat: 34.148611, lng: -118.465278 },
  { city: "Panorama City", zip: "91402", lat: 34.224722, lng: -118.449444 },
  { city: "Canoga Park", zip: "91304", lat: 34.208333, lng: -118.605556 },
  { city: "Winnetka", zip: "91306", lat: 34.209722, lng: -118.571389 },
  { city: "Chatsworth", zip: "91311", lat: 34.257222, lng: -118.600556 },
  { city: "Granada Hills", zip: "91344", lat: 34.278611, lng: -118.501944 },
  { city: "Sylmar", zip: "91342", lat: 34.307778, lng: -118.449167 },
  { city: "Pacoima", zip: "91331", lat: 34.262500, lng: -118.416667 },
  { city: "Sun Valley", zip: "91352", lat: 34.217778, lng: -118.370278 },
  { city: "North Hollywood", zip: "91601", lat: 34.172222, lng: -118.374167, aliases: ["noho"] },
  { city: "Studio City", zip: "91604", lat: 34.139444, lng: -118.387500 },
  { city: "Valley Village", zip: "91607", lat: 34.165556, lng: -118.396667 },
  { city: "East Los Angeles", zip: "90022", lat: 34.023901, lng: -118.172017, aliases: ["east la", "ela"] },
  { city: "Chino Hills", zip: "91709", lat: 33.993889, lng: -117.733056 },
  { city: "La Habra Heights", zip: "90631", lat: 33.960833, lng: -117.950556 },
  // Additional LA neighborhoods
  { city: "Hollywood", zip: "90028", lat: 34.098545, lng: -118.326782, aliases: ["hwood"] },
  { city: "Downtown Los Angeles", zip: "90012", lat: 34.040713, lng: -118.246769, aliases: ["dtla", "downtown la"] },
  { city: "Venice", zip: "90291", lat: 33.991230, lng: -118.465088, aliases: ["venice beach"] },
  { city: "Silver Lake", zip: "90026", lat: 34.087033, lng: -118.270287, aliases: ["silverlake"] },
  { city: "Echo Park", zip: "90026", lat: 34.078469, lng: -118.260612 },
  { city: "Los Feliz", zip: "90027", lat: 34.106260, lng: -118.284462 },
  { city: "Highland Park", zip: "90042", lat: 34.112324, lng: -118.191175 },
  { city: "Eagle Rock", zip: "90041", lat: 34.138392, lng: -118.214542 },
  { city: "Koreatown", zip: "90010", lat: 34.057851, lng: -118.300605, aliases: ["ktown", "k-town"] },
  { city: "Mid-Wilshire", zip: "90036", lat: 34.063571, lng: -118.347061, aliases: ["miracle mile"] },
  { city: "Westwood", zip: "90024", lat: 34.063560, lng: -118.444013 },
  { city: "Bel Air", zip: "90077", lat: 34.091068, lng: -118.457413, aliases: ["bel-air"] },
  { city: "Pacific Palisades", zip: "90272", lat: 34.040901, lng: -118.525935 },
  { city: "Mar Vista", zip: "90066", lat: 34.002762, lng: -118.426893 },
  { city: "Playa Vista", zip: "90094", lat: 33.974253, lng: -118.428217, aliases: ["silicon beach"] },
  { city: "Playa Del Rey", zip: "90293", lat: 33.956684, lng: -118.448127 },
  { city: "Westchester", zip: "90045", lat: 33.960476, lng: -118.392814 },
  { city: "Boyle Heights", zip: "90033", lat: 34.033989, lng: -118.205006 },
  { city: "Lincoln Heights", zip: "90031", lat: 34.072445, lng: -118.198025 },
  { city: "Glassell Park", zip: "90065", lat: 34.118262, lng: -118.232618 },
  { city: "Atwater Village", zip: "90039", lat: 34.117263, lng: -118.260612 },
  // SF neighborhoods
  { city: "Mission District", zip: "94110", lat: 37.759873, lng: -122.415412, aliases: ["the mission"] },
  { city: "Castro", zip: "94114", lat: 37.760545, lng: -122.434979 },
  { city: "Noe Valley", zip: "94114", lat: 37.748832, lng: -122.433701 },
  { city: "Pacific Heights", zip: "94115", lat: 37.792549, lng: -122.435363 },
  { city: "Marina District", zip: "94123", lat: 37.800674, lng: -122.437036, aliases: ["the marina"] },
  { city: "North Beach", zip: "94133", lat: 37.806010, lng: -122.410318 },
  { city: "Chinatown", zip: "94108", lat: 37.794519, lng: -122.407276 },
  { city: "SOMA", zip: "94103", lat: 37.778519, lng: -122.405640, aliases: ["south of market"] },
  { city: "Financial District", zip: "94111", lat: 37.794929, lng: -122.398916, aliases: ["fidi"] },
  { city: "Tenderloin", zip: "94102", lat: 37.783768, lng: -122.413873 },
  { city: "Hayes Valley", zip: "94102", lat: 37.776512, lng: -122.426247 },
  { city: "Inner Richmond", zip: "94118", lat: 37.779605, lng: -122.461002 },
  { city: "Outer Richmond", zip: "94121", lat: 37.779052, lng: -122.495246 },
  { city: "Inner Sunset", zip: "94122", lat: 37.758673, lng: -122.463677 },
  { city: "Outer Sunset", zip: "94116", lat: 37.753856, lng: -122.494720 },
  { city: "Potrero Hill", zip: "94107", lat: 37.761131, lng: -122.398217 },
  { city: "Dogpatch", zip: "94107", lat: 37.758434, lng: -122.386882 },
  { city: "Bernal Heights", zip: "94110", lat: 37.738834, lng: -122.415298 },
  { city: "Glen Park", zip: "94131", lat: 37.733998, lng: -122.433372 },
  { city: "Cole Valley", zip: "94117", lat: 37.765800, lng: -122.449200 },
  { city: "Haight-Ashbury", zip: "94117", lat: 37.769878, lng: -122.446854, aliases: ["the haight", "haight"] },
  // Additional cities
  { city: "Colton", zip: "92324", lat: 34.073889, lng: -117.313056 },
  { city: "Glendora", zip: "91740", lat: 34.136172, lng: -117.865339 },
  { city: "Claremont", zip: "91711", lat: 34.096730, lng: -117.719593 },
  { city: "Upland", zip: "91786", lat: 34.097585, lng: -117.648262 },
  { city: "Monrovia", zip: "91016", lat: 34.148175, lng: -117.999091 },
  { city: "Baldwin Park", zip: "91706", lat: 34.085350, lng: -117.960897 },
  { city: "Montclair", zip: "91763", lat: 34.077586, lng: -117.689728 },
  { city: "La Verne", zip: "91750", lat: 34.100785, lng: -117.767597 },
  { city: "Valencia", zip: "91354", lat: 34.447536, lng: -118.609238, aliases: ["santa clarita valley"] },
  { city: "Laguna Beach", zip: "92651", lat: 33.542251, lng: -117.783394 },
  { city: "Dana Point", zip: "92629", lat: 33.466975, lng: -117.698128 },
  { city: "San Pedro", zip: "90731", lat: 33.735851, lng: -118.291970 },
  { city: "Wilmington", zip: "90744", lat: 33.779167, lng: -118.263889 },
  { city: "Harbor City", zip: "90710", lat: 33.798611, lng: -118.298333 },
  { city: "Lomita", zip: "90717", lat: 33.792373, lng: -118.315069 },
  { city: "Gardena", zip: "90247", lat: 33.888518, lng: -118.308969 },
  { city: "Compton", zip: "90220", lat: 33.895849, lng: -118.220071 },
  { city: "Hermosa Beach", zip: "90254", lat: 33.861611, lng: -118.399363 },
  { city: "El Segundo", zip: "90245", lat: 33.919178, lng: -118.416442 },
  { city: "Lawndale", zip: "90260", lat: 33.887329, lng: -118.352646 },
  { city: "Palos Verdes Estates", zip: "90274", lat: 33.784433, lng: -118.390566, aliases: ["pv", "palos verdes"] },
  { city: "Rancho Palos Verdes", zip: "90275", lat: 33.744444, lng: -118.387500, aliases: ["rpv"] },
  { city: "Rolling Hills", zip: "90274", lat: 33.754444, lng: -118.355833 },
  { city: "Rolling Hills Estates", zip: "90274", lat: 33.787778, lng: -118.355833, aliases: ["rhe"] },
  { city: "Signal Hill", zip: "90755", lat: 33.804444, lng: -118.168056 },
  { city: "Seal Beach", zip: "90740", lat: 33.741389, lng: -118.104167 },
  { city: "Los Alamitos", zip: "90720", lat: 33.803056, lng: -118.072222 },
  { city: "Buena Park", zip: "90620", lat: 33.867508, lng: -117.998374 },
  { city: "La Palma", zip: "90623", lat: 33.846523, lng: -118.046774 },
  { city: "Stanton", zip: "90680", lat: 33.800278, lng: -118.001111 },
  { city: "Midway City", zip: "92655", lat: 33.745000, lng: -117.987222 },
  { city: "Los Angeles", zip: "90012", lat: 34.052235, lng: -118.243683, aliases: ["civic center"] },
  // Inland Empire & High Desert
  { city: "Eastvale", zip: "92880", lat: 33.963611, lng: -117.563889 },
  { city: "Apple Valley", zip: "92307", lat: 34.500833, lng: -117.185833 },
  { city: "Adelanto", zip: "92301", lat: 34.582778, lng: -117.409167 },
  { city: "Phelan", zip: "92371", lat: 34.426111, lng: -117.572222 },
  { city: "Pinon Hills", zip: "92372", lat: 34.433333, lng: -117.646667 },
  { city: "Wrightwood", zip: "92397", lat: 34.360833, lng: -117.633333 },
  { city: "Lucerne Valley", zip: "92356", lat: 34.443889, lng: -116.967222 },
  { city: "Big Bear City", zip: "92314", lat: 34.261111, lng: -116.845000 },
  { city: "Big Bear Lake", zip: "92315", lat: 34.243889, lng: -116.911389, aliases: ["big bear"] },
  { city: "Running Springs", zip: "92382", lat: 34.207778, lng: -117.109167 },
  { city: "Lake Arrowhead", zip: "92352", lat: 34.248333, lng: -117.189167 },
  { city: "Crestline", zip: "92325", lat: 34.241944, lng: -117.285556 },
  { city: "Twin Peaks", zip: "92391", lat: 34.238611, lng: -117.234722 },
  { city: "Mentone", zip: "92359", lat: 34.070000, lng: -117.120278 },
  { city: "Calimesa", zip: "92320", lat: 33.995556, lng: -117.061944 },
  { city: "Beaumont", zip: "92223", lat: 33.929444, lng: -116.973056 },
  { city: "Cabazon", zip: "92230", lat: 33.917500, lng: -116.787222 },
  { city: "San Jacinto", zip: "92583", lat: 33.783889, lng: -116.958611 },
  { city: "Idyllwild", zip: "92549", lat: 33.739722, lng: -116.715833, aliases: ["idyllwild-pine cove"] },
  { city: "Anza", zip: "92539", lat: 33.555000, lng: -116.673611 },
  { city: "Aguanga", zip: "92536", lat: 33.443056, lng: -116.865000 },
  { city: "Wildomar", zip: "92595", lat: 33.598889, lng: -117.280000 },
  { city: "Lake Elsinore", zip: "92532", lat: 33.668056, lng: -117.327222 },
  { city: "Sun City", zip: "92586", lat: 33.708611, lng: -117.197222 },
  { city: "Nuevo", zip: "92567", lat: 33.805000, lng: -117.145833 },
  { city: "Homeland", zip: "92548", lat: 33.743056, lng: -117.109167 },
  { city: "Winchester", zip: "92596", lat: 33.706944, lng: -117.075556 },
  { city: "Romoland", zip: "92585", lat: 33.745833, lng: -117.175000 },
  { city: "March ARB", zip: "92518", lat: 33.883611, lng: -117.266389 },
  { city: "Norco", zip: "92860", lat: 33.923056, lng: -117.563611 },
  { city: "Mira Loma", zip: "91752", lat: 33.992500, lng: -117.516389 },
  { city: "Bloomington", zip: "92316", lat: 34.070278, lng: -117.395833 },
  { city: "Grand Terrace", zip: "92313", lat: 34.033889, lng: -117.313611 },
  { city: "Loma Linda", zip: "92354", lat: 34.048333, lng: -117.261111 },
  // Coachella Valley & Desert
  { city: "Rancho Mirage", zip: "92270", lat: 33.739722, lng: -116.412778 },
  { city: "Indian Wells", zip: "92210", lat: 33.718056, lng: -116.343056 },
  { city: "Coachella", zip: "92236", lat: 33.680278, lng: -116.173889 },
  { city: "Thermal", zip: "92274", lat: 33.640278, lng: -116.141944 },
  { city: "Mecca", zip: "92254", lat: 33.571667, lng: -116.077222 },
  { city: "Desert Hot Springs", zip: "92240", lat: 33.961111, lng: -116.501944, aliases: ["dhs"] },
  { city: "Yucca Valley", zip: "92284", lat: 34.114167, lng: -116.432222 },
  { city: "Joshua Tree", zip: "92252", lat: 34.134722, lng: -116.313056 },
  { city: "Twentynine Palms", zip: "92277", lat: 34.135556, lng: -116.054167, aliases: ["29 palms"] },
  { city: "Morongo Valley", zip: "92256", lat: 34.046944, lng: -116.578056 },
  { city: "Pioneertown", zip: "92268", lat: 34.163889, lng: -116.570000 },
  { city: "Landers", zip: "92285", lat: 34.263056, lng: -116.461111 },
  // Mojave Desert & Eastern California
  { city: "Barstow", zip: "92311", lat: 34.895556, lng: -117.017222 },
  { city: "Newberry Springs", zip: "92365", lat: 34.833333, lng: -116.666667 },
  { city: "Daggett", zip: "92327", lat: 34.863333, lng: -116.888056 },
  { city: "Yermo", zip: "92398", lat: 34.904722, lng: -116.820278 },
  { city: "Hinkley", zip: "92347", lat: 34.933333, lng: -117.198611 },
  { city: "Lenwood", zip: "92311", lat: 34.880556, lng: -117.103889 },
  { city: "Rosamond", zip: "93560", lat: 34.864167, lng: -118.163333 },
  { city: "Mojave", zip: "93501", lat: 35.052500, lng: -118.173889 },
  { city: "California City", zip: "93505", lat: 35.125556, lng: -117.985833 },
  { city: "Tehachapi", zip: "93561", lat: 35.132222, lng: -118.448889 },
  { city: "Boron", zip: "93516", lat: 34.999444, lng: -117.649722 },
  { city: "Ridgecrest", zip: "93555", lat: 35.622500, lng: -117.670833 },
  { city: "Inyokern", zip: "93527", lat: 35.646944, lng: -117.812500 },
  { city: "Trona", zip: "93562", lat: 35.766111, lng: -117.373056 },
  { city: "Needles", zip: "92363", lat: 34.848056, lng: -114.614167 },
  { city: "Baker", zip: "92309", lat: 35.265278, lng: -116.075278 },
  { city: "Blythe", zip: "92225", lat: 33.617778, lng: -114.589722 },
  // Imperial Valley
  { city: "Imperial", zip: "92251", lat: 32.847500, lng: -115.569444 },
  { city: "Brawley", zip: "92227", lat: 32.978611, lng: -115.530278 },
  { city: "Calipatria", zip: "92233", lat: 33.125556, lng: -115.514167 },
  { city: "Holtville", zip: "92250", lat: 32.811111, lng: -115.380278 },
  // San Diego County - East & Mountain
  { city: "Alpine", zip: "91901", lat: 32.835000, lng: -116.766389 },
  { city: "Jamul", zip: "91935", lat: 32.716944, lng: -116.875833 },
  { city: "Pine Valley", zip: "91962", lat: 32.821111, lng: -116.529167 },
  { city: "Campo", zip: "91906", lat: 32.606667, lng: -116.473611 },
  // San Diego County - Coastal & North
  { city: "La Jolla", zip: "92037", lat: 32.847222, lng: -117.274167 },
  { city: "Del Mar", zip: "92014", lat: 32.959444, lng: -117.265278 },
  { city: "Solana Beach", zip: "92075", lat: 32.993889, lng: -117.271111 },
  { city: "Cardiff-by-the-Sea", zip: "92007", lat: 33.016667, lng: -117.278611, aliases: ["cardiff"] },
  { city: "Rancho Santa Fe", zip: "92067", lat: 33.020278, lng: -117.202222, aliases: ["rsf"] },
  { city: "Valley Center", zip: "92082", lat: 33.218333, lng: -117.034167 },
  { city: "Fallbrook", zip: "92028", lat: 33.376389, lng: -117.251111 },
  { city: "Bonsall", zip: "92003", lat: 33.288889, lng: -117.225556 },
  { city: "Ramona", zip: "92065", lat: 33.041667, lng: -116.868056 },
  { city: "Julian", zip: "92036", lat: 33.078889, lng: -116.601944 },
  { city: "Borrego Springs", zip: "92004", lat: 33.255833, lng: -116.375000 },
  { city: "Warner Springs", zip: "92086", lat: 33.281944, lng: -116.633611 },
  { city: "Santa Ysabel", zip: "92070", lat: 33.109167, lng: -116.672778 },
  { city: "Pauma Valley", zip: "92061", lat: 33.316667, lng: -116.975000 },
  { city: "Pala", zip: "92059", lat: 33.365278, lng: -117.075833 },
  // San Diego County - South & Central
  { city: "Coronado", zip: "92118", lat: 32.685833, lng: -117.182778 },
  { city: "National City", zip: "91950", lat: 32.678056, lng: -117.099167 },
  { city: "Lemon Grove", zip: "91945", lat: 32.732222, lng: -117.031389 },
  { city: "Spring Valley", zip: "91977", lat: 32.744722, lng: -116.998889 },
  { city: "La Mesa", zip: "91942", lat: 32.767222, lng: -117.023056 },
  { city: "Lakeside", zip: "92040", lat: 32.857222, lng: -116.922222 },
  { city: "Rancho Bernardo", zip: "92128", lat: 33.040278, lng: -117.070000, aliases: ["rb"] },
  { city: "Mira Mesa", zip: "92126", lat: 32.915556, lng: -117.143056 },
  { city: "Scripps Ranch", zip: "92131", lat: 32.906389, lng: -117.092500 },
  { city: "Carmel Valley", zip: "92130", lat: 32.940000, lng: -117.218056 },
  { city: "University City", zip: "92122", lat: 32.850000, lng: -117.195000, aliases: ["utc"] },
  { city: "Clairemont", zip: "92117", lat: 32.825000, lng: -117.203056 },
  { city: "Pacific Beach", zip: "92109", lat: 32.793333, lng: -117.240000, aliases: ["pb"] },
  { city: "Ocean Beach", zip: "92107", lat: 32.745000, lng: -117.246111, aliases: ["ob"] },
  { city: "Point Loma", zip: "92106", lat: 32.710000, lng: -117.240000 },
  { city: "Hillcrest", zip: "92103", lat: 32.746389, lng: -117.164722 },
  { city: "North Park", zip: "92104", lat: 32.741389, lng: -117.128889 },
  { city: "Kensington", zip: "92116", lat: 32.764444, lng: -117.106667 },
  { city: "Mission Valley", zip: "92108", lat: 32.774722, lng: -117.149444 },
  { city: "Linda Vista", zip: "92111", lat: 32.785000, lng: -117.173056 },
  { city: "Tierrasanta", zip: "92124", lat: 32.825000, lng: -117.095000 },
  { city: "Allied Gardens", zip: "92120", lat: 32.800000, lng: -117.082778 },
  { city: "Del Cerro", zip: "92120", lat: 32.785000, lng: -117.065000 },
  { city: "San Carlos", zip: "92119", lat: 32.800000, lng: -117.035000 },
  // Los Angeles Area - Foothills & Valleys
  { city: "La Crescenta-Montrose", zip: "91214", lat: 34.231944, lng: -118.235278, aliases: ["la crescenta", "montrose"] },
  { city: "Altadena", zip: "91001", lat: 34.185833, lng: -118.131111 },
  { city: "Sunland-Tujunga", zip: "91040", lat: 34.266667, lng: -118.316667, aliases: ["sunland", "tujunga"] },
  { city: "Agoura Hills", zip: "91301", lat: 34.153333, lng: -118.761667 },
  { city: "Calabasas", zip: "91302", lat: 34.144167, lng: -118.661389 },
  { city: "Westlake Village", zip: "91361", lat: 34.145833, lng: -118.805556 },
  { city: "Malibu", zip: "90265", lat: 34.025833, lng: -118.779722 },
  { city: "Topanga", zip: "90290", lat: 34.093611, lng: -118.606111, aliases: ["topanga canyon"] },
  // Santa Clarita Valley
  { city: "Newhall", zip: "91321", lat: 34.376667, lng: -118.530833 },
  { city: "Canyon Country", zip: "91387", lat: 34.423333, lng: -118.471944 },
  { city: "Saugus", zip: "91350", lat: 34.412222, lng: -118.537500 },
  { city: "Stevenson Ranch", zip: "91381", lat: 34.387222, lng: -118.607222 },
  { city: "Castaic", zip: "91384", lat: 34.488889, lng: -118.622778 },
  // Antelope Valley
  { city: "Acton", zip: "93510", lat: 34.498056, lng: -118.196667 },
  { city: "Agua Dulce", zip: "91390", lat: 34.496389, lng: -118.325556 },
  { city: "Quartz Hill", zip: "93536", lat: 34.645278, lng: -118.218056 },
  { city: "Littlerock", zip: "93543", lat: 34.521111, lng: -117.983611 },
  { city: "Pearblossom", zip: "93553", lat: 34.506389, lng: -117.908056 },
  { city: "Lake Los Angeles", zip: "93591", lat: 34.612500, lng: -117.828056 },
  { city: "Leona Valley", zip: "93551", lat: 34.618056, lng: -118.216667 },
  { city: "Green Valley", zip: "91390", lat: 34.622222, lng: -118.413056 },
  { city: "Lake Hughes", zip: "93532", lat: 34.676667, lng: -118.444722 },
  { city: "Elizabeth Lake", zip: "93532", lat: 34.666667, lng: -118.383333 },
  { city: "Valyermo", zip: "93563", lat: 34.446111, lng: -117.856667 },
  { city: "Llano", zip: "93544", lat: 34.505833, lng: -117.815556 },
  // Ventura County
  { city: "Piru", zip: "93040", lat: 34.415278, lng: -118.793889 },
  { city: "Moorpark", zip: "93021", lat: 34.285556, lng: -118.881944 },
  { city: "Fillmore", zip: "93015", lat: 34.399167, lng: -118.918056 },
  { city: "Santa Paula", zip: "93060", lat: 34.354167, lng: -119.058611 },
  { city: "Ojai", zip: "93023", lat: 34.448056, lng: -119.242778 },
  { city: "Oak View", zip: "93022", lat: 34.396667, lng: -119.300000 },
  // Santa Barbara County
  { city: "Carpinteria", zip: "93013", lat: 34.396667, lng: -119.518333 },
  { city: "Summerland", zip: "93067", lat: 34.421667, lng: -119.598333 },
  { city: "Montecito", zip: "93108", lat: 34.436667, lng: -119.633333 },
  { city: "Goleta", zip: "93117", lat: 34.435833, lng: -119.827778 },
  { city: "Isla Vista", zip: "93117", lat: 34.413333, lng: -119.860833, aliases: ["iv"] },
  { city: "Solvang", zip: "93463", lat: 34.595833, lng: -120.137500 },
  { city: "Buellton", zip: "93427", lat: 34.613611, lng: -120.192500 },
  { city: "Vandenberg Village", zip: "93436", lat: 34.708333, lng: -120.466667 },
  { city: "Santa Ynez", zip: "93460", lat: 34.614444, lng: -120.079722 },
  { city: "Los Olivos", zip: "93441", lat: 34.664444, lng: -120.114722 },
  { city: "Ballard", zip: "93463", lat: 34.635556, lng: -120.122222 },
  { city: "Los Alamos", zip: "93440", lat: 34.744444, lng: -120.277778 },
  { city: "Guadalupe", zip: "93434", lat: 34.968611, lng: -120.571667 },
  { city: "Orcutt", zip: "93455", lat: 34.865278, lng: -120.436111 },
  { city: "Nipomo", zip: "93444", lat: 35.042778, lng: -120.476111 },
  // San Luis Obispo County
  { city: "Arroyo Grande", zip: "93420", lat: 35.118611, lng: -120.590833 },
  { city: "Grover Beach", zip: "93433", lat: 35.121667, lng: -120.621389 },
  { city: "Pismo Beach", zip: "93449", lat: 35.142778, lng: -120.641389 },
  { city: "Shell Beach", zip: "93449", lat: 35.153889, lng: -120.669722 },
  { city: "Avila Beach", zip: "93424", lat: 35.179722, lng: -120.731667 },
  { city: "Los Osos", zip: "93402", lat: 35.311111, lng: -120.835417 },
  { city: "Baywood Park", zip: "93402", lat: 35.325556, lng: -120.837222 },
  { city: "Morro Bay", zip: "93442", lat: 35.366667, lng: -120.849722 },
  { city: "Cayucos", zip: "93430", lat: 35.446667, lng: -120.892500 },
  { city: "Cambria", zip: "93428", lat: 35.564167, lng: -121.080833 },
  { city: "San Simeon", zip: "93452", lat: 35.643889, lng: -121.188611 },
  { city: "Harmony", zip: "93435", lat: 35.508333, lng: -121.025000 },
  { city: "Paso Robles", zip: "93446", lat: 35.632222, lng: -120.664167 },
  { city: "Templeton", zip: "93465", lat: 35.549722, lng: -120.705833 },
  { city: "Atascadero", zip: "93422", lat: 35.489444, lng: -120.670556 },
  { city: "Santa Margarita", zip: "93453", lat: 35.388889, lng: -120.608611 },
  { city: "Creston", zip: "93432", lat: 35.518611, lng: -120.523611 },
  { city: "Shandon", zip: "93461", lat: 35.655278, lng: -120.375556 },
  { city: "San Miguel", zip: "93451", lat: 35.748333, lng: -120.696389 },
  { city: "Bradley", zip: "93426", lat: 35.863333, lng: -120.803056 },
  { city: "Parkfield", zip: "93451", lat: 35.898889, lng: -120.432500 },
  // Monterey County
  { city: "King City", zip: "93930", lat: 36.212778, lng: -121.125833 },
  { city: "Greenfield", zip: "93927", lat: 36.320833, lng: -121.243611 },
  { city: "Soledad", zip: "93960", lat: 36.424722, lng: -121.326389 },
  { city: "Gonzales", zip: "93926", lat: 36.506667, lng: -121.444167 },
  { city: "Marina", zip: "93933", lat: 36.684444, lng: -121.802222 },
  { city: "Seaside", zip: "93955", lat: 36.614167, lng: -121.834722 },
  { city: "Del Rey Oaks", zip: "93940", lat: 36.593333, lng: -121.834722 },
  { city: "Sand City", zip: "93955", lat: 36.617222, lng: -121.848056 },
  { city: "Pacific Grove", zip: "93950", lat: 36.617778, lng: -121.916389, aliases: ["pg"] },
  { city: "Pebble Beach", zip: "93953", lat: 36.566667, lng: -121.950000 },
  { city: "Carmel-by-the-Sea", zip: "93921", lat: 36.555278, lng: -121.923056, aliases: ["carmel"] },
  { city: "Big Sur", zip: "93920", lat: 36.270278, lng: -121.807500 },
  { city: "Castroville", zip: "95012", lat: 36.765833, lng: -121.758056 },
  { city: "Prunedale", zip: "93907", lat: 36.808333, lng: -121.668056 },
  { city: "Aromas", zip: "95004", lat: 36.888611, lng: -121.642778 },
  // San Benito County
  { city: "San Juan Bautista", zip: "95045", lat: 36.845556, lng: -121.537500 },
  { city: "Hollister", zip: "95023", lat: 36.852500, lng: -121.401667 },
  { city: "San Benito", zip: "95043", lat: 36.531944, lng: -121.080556 },
  // South Bay & Santa Clara County
  { city: "Tres Pinos", zip: "95075", lat: 36.790000, lng: -121.320000 },
  { city: "Gilroy", zip: "95020", lat: 37.005833, lng: -121.568611 },
  { city: "Morgan Hill", zip: "95037", lat: 37.130556, lng: -121.654444 },
  { city: "San Martin", zip: "95046", lat: 37.084722, lng: -121.610000 },
  { city: "Los Gatos", zip: "95032", lat: 37.235833, lng: -121.962500 },
  { city: "Monte Sereno", zip: "95030", lat: 37.238889, lng: -121.990278 },
  { city: "Saratoga", zip: "95070", lat: 37.263889, lng: -122.023056 },
  { city: "Campbell", zip: "95008", lat: 37.287222, lng: -121.943056 },
  { city: "Los Altos Hills", zip: "94024", lat: 37.371111, lng: -122.137500 },
  { city: "East Palo Alto", zip: "94303", lat: 37.468611, lng: -122.141111, aliases: ["epa"] },
  { city: "Menlo Park", zip: "94025", lat: 37.453889, lng: -122.182500 },
  { city: "Atherton", zip: "94027", lat: 37.461389, lng: -122.197778 },
  { city: "Belmont", zip: "94002", lat: 37.520278, lng: -122.275556 },
  // San Mateo Coast
  { city: "Half Moon Bay", zip: "94019", lat: 37.463611, lng: -122.428611, aliases: ["hmb"] },
  { city: "Pescadero", zip: "94060", lat: 37.253333, lng: -122.383056 },
  { city: "La Honda", zip: "94020", lat: 37.319167, lng: -122.274167 },
  { city: "Woodside", zip: "94062", lat: 37.429944, lng: -122.253889 },
  { city: "Portola Valley", zip: "94028", lat: 37.384167, lng: -122.235000 },
  { city: "Hillsborough", zip: "94010", lat: 37.574167, lng: -122.379444 },
  { city: "Burlingame", zip: "94010", lat: 37.584167, lng: -122.366111 },
  { city: "Millbrae", zip: "94030", lat: 37.599722, lng: -122.387222 },
  { city: "Brisbane", zip: "94005", lat: 37.680833, lng: -122.400000 },
  { city: "Colma", zip: "94014", lat: 37.680556, lng: -122.455556 },
  { city: "Broadmoor", zip: "94015", lat: 37.692222, lng: -122.482778 },
  { city: "Montara", zip: "94037", lat: 37.540833, lng: -122.515833 },
  { city: "Moss Beach", zip: "94038", lat: 37.527500, lng: -122.513056 },
  { city: "El Granada", zip: "94018", lat: 37.502778, lng: -122.473333 },
  // SF Neighborhoods
  { city: "Richmond District", zip: "94121", lat: 37.778611, lng: -122.492222 },
  { city: "Sunset District", zip: "94122", lat: 37.760000, lng: -122.495556 },
  { city: "Presidio", zip: "94129", lat: 37.798611, lng: -122.466389 },
  // East Bay
  { city: "Piedmont", zip: "94611", lat: 37.824444, lng: -122.231667 },
  { city: "Albany", zip: "94706", lat: 37.886944, lng: -122.297778 },
  { city: "Emeryville", zip: "94608", lat: 37.831389, lng: -122.285278 },
  { city: "Ashland", zip: "94578", lat: 37.694722, lng: -122.114167 },
  { city: "Cherryland", zip: "94541", lat: 37.679444, lng: -122.103333 },
  { city: "Fairview", zip: "94541", lat: 37.678611, lng: -122.045278 },
  { city: "Newark", zip: "94560", lat: 37.529722, lng: -122.040278 },
  // San Jose Neighborhoods
  { city: "Willow Glen", zip: "95125", lat: 37.310000, lng: -121.900000 },
  { city: "Almaden Valley", zip: "95120", lat: 37.220000, lng: -121.850000 },
  { city: "Cambrian Park", zip: "95124", lat: 37.260000, lng: -121.930000 },
  { city: "Alum Rock", zip: "95127", lat: 37.370000, lng: -121.820000 },
  { city: "Evergreen", zip: "95148", lat: 37.320000, lng: -121.770000 },
  { city: "Santa Teresa", zip: "95119", lat: 37.230000, lng: -121.800000 },
  { city: "East San Jose", zip: "95116", lat: 37.350000, lng: -121.850000 },
  // Tri-Valley & Contra Costa
  { city: "Blackhawk", zip: "94506", lat: 37.815833, lng: -121.920833 },
  { city: "Alamo", zip: "94507", lat: 37.850556, lng: -122.032222 },
  { city: "Lafayette", zip: "94549", lat: 37.885833, lng: -122.118056 },
  { city: "Orinda", zip: "94563", lat: 37.877222, lng: -122.179722 },
  { city: "Moraga", zip: "94556", lat: 37.834722, lng: -122.129722 },
  { city: "Clayton", zip: "94517", lat: 37.941111, lng: -121.935833 },
  { city: "Pleasant Hill", zip: "94523", lat: 37.948056, lng: -122.060556 },
  { city: "Pacheco", zip: "94553", lat: 37.983611, lng: -122.075278 },
  { city: "Bay Point", zip: "94565", lat: 38.029167, lng: -121.961667 },
  { city: "Discovery Bay", zip: "94505", lat: 37.908611, lng: -121.600000 },
  { city: "Byron", zip: "94514", lat: 37.867222, lng: -121.638056 },
  { city: "Knightsen", zip: "94548", lat: 37.966944, lng: -121.668056 },
  { city: "Bethel Island", zip: "94511", lat: 38.014722, lng: -121.640556 },
  // Sacramento Delta
  { city: "Rio Vista", zip: "94571", lat: 38.155833, lng: -121.691389 },
  { city: "Isleton", zip: "95641", lat: 38.161944, lng: -121.610000 },
  { city: "Walnut Grove", zip: "95690", lat: 38.243056, lng: -121.511667 },
  { city: "Courtland", zip: "95615", lat: 38.331111, lng: -121.568611 },
  { city: "Hood", zip: "95639", lat: 38.368333, lng: -121.517500 },
  { city: "Clarksburg", zip: "95612", lat: 38.420833, lng: -121.527778 },
  { city: "Laguna", zip: "95758", lat: 38.420000, lng: -121.450000 },
  { city: "Wilton", zip: "95693", lat: 38.411944, lng: -121.272222 },
  { city: "Galt", zip: "95632", lat: 38.254722, lng: -121.300000 },
  { city: "Herald", zip: "95638", lat: 38.295278, lng: -121.243889 },
  // San Joaquin County
  { city: "Woodbridge", zip: "95258", lat: 38.154167, lng: -121.302778 },
  { city: "Acampo", zip: "95220", lat: 38.174722, lng: -121.278611 },
  { city: "Lockeford", zip: "95237", lat: 38.162500, lng: -121.151944 },
  { city: "Victor", zip: "95253", lat: 38.142222, lng: -121.203056 },
  { city: "Thornton", zip: "95686", lat: 38.225833, lng: -121.424722 },
  { city: "Ripon", zip: "95366", lat: 37.741667, lng: -121.124444 },
  { city: "Escalon", zip: "95320", lat: 37.792222, lng: -120.996667 },
  { city: "Farmington", zip: "95230", lat: 37.929722, lng: -120.999444 },
  { city: "Lathrop", zip: "95330", lat: 37.822778, lng: -121.276667 },
  { city: "French Camp", zip: "95231", lat: 37.884167, lng: -121.271111 },
  { city: "Mountain House", zip: "95391", lat: 37.783333, lng: -121.541667 },
  // Stanislaus County
  { city: "Salida", zip: "95368", lat: 37.710000, lng: -121.085000 },
  { city: "Riverbank", zip: "95367", lat: 37.736111, lng: -120.935556 },
  { city: "Oakdale", zip: "95361", lat: 37.766667, lng: -120.847222 },
  { city: "Waterford", zip: "95386", lat: 37.645278, lng: -120.760556 },
  { city: "Hughson", zip: "95326", lat: 37.596944, lng: -120.866111 },
  { city: "Keyes", zip: "95328", lat: 37.556944, lng: -120.911389 },
  { city: "Denair", zip: "95316", lat: 37.529722, lng: -120.796944 },
  { city: "Hilmar", zip: "95324", lat: 37.408611, lng: -120.850278 },
  { city: "Delhi", zip: "95315", lat: 37.432222, lng: -120.778611 },
  { city: "Livingston", zip: "95334", lat: 37.386944, lng: -120.723611 },
  { city: "Ballico", zip: "95303", lat: 37.453611, lng: -120.706944 },
  { city: "Gustine", zip: "95322", lat: 37.257778, lng: -120.998889 },
  { city: "Newman", zip: "95360", lat: 37.313889, lng: -121.020833 },
  { city: "Patterson", zip: "95363", lat: 37.471667, lng: -121.129722 },
  { city: "Westley", zip: "95387", lat: 37.550556, lng: -121.199722 },
  { city: "Crows Landing", zip: "95313", lat: 37.395833, lng: -121.071667 },
  { city: "Empire", zip: "95319", lat: 37.638056, lng: -120.902222 },
  // Merced County
  { city: "Winton", zip: "95388", lat: 37.389444, lng: -120.613333 },
  { city: "Planada", zip: "95365", lat: 37.290833, lng: -120.306944 },
  { city: "Le Grand", zip: "95333", lat: 37.228611, lng: -120.248333 },
  { city: "Dos Palos", zip: "93620", lat: 36.986111, lng: -120.626667 },
  { city: "South Dos Palos", zip: "93665", lat: 36.965000, lng: -120.651944 },
  { city: "Firebaugh", zip: "93622", lat: 36.858889, lng: -120.456111 },
  { city: "Mendota", zip: "93640", lat: 36.753611, lng: -120.381667 },
  { city: "San Joaquin", zip: "93660", lat: 36.606667, lng: -120.188889 },
  { city: "Tranquillity", zip: "93668", lat: 36.648889, lng: -120.252222 },
  // Fresno Area
  { city: "Sanger", zip: "93657", lat: 36.708056, lng: -119.556111 },
  { city: "Reedley", zip: "93654", lat: 36.596389, lng: -119.450556 },
  { city: "Parlier", zip: "93648", lat: 36.611944, lng: -119.527222 },
  { city: "Selma", zip: "93662", lat: 36.570833, lng: -119.612222 },
  { city: "Kingsburg", zip: "93631", lat: 36.513889, lng: -119.554167 },
  { city: "Dinuba", zip: "93618", lat: 36.543333, lng: -119.387222 },
  { city: "Orange Cove", zip: "93646", lat: 36.624444, lng: -119.313611 },
  { city: "Squaw Valley", zip: "93675", lat: 36.740278, lng: -119.246667 },
  { city: "Three Rivers", zip: "93271", lat: 36.438889, lng: -118.904722 },
  // Tulare County
  { city: "Tulare", zip: "93274", lat: 36.207778, lng: -119.347222 },
  { city: "Exeter", zip: "93221", lat: 36.296111, lng: -119.142222 },
  { city: "Farmersville", zip: "93223", lat: 36.297778, lng: -119.206944 },
  { city: "Lindsay", zip: "93247", lat: 36.203056, lng: -119.091944 },
  { city: "Strathmore", zip: "93267", lat: 36.145556, lng: -119.060556 },
  { city: "Springville", zip: "93265", lat: 36.130278, lng: -118.818056 },
  { city: "Terra Bella", zip: "93270", lat: 35.962222, lng: -119.044167 },
  { city: "Pixley", zip: "93256", lat: 35.968611, lng: -119.291667 },
  { city: "Earlimart", zip: "93219", lat: 35.884167, lng: -119.272500 },
  { city: "Delano", zip: "93215", lat: 35.768889, lng: -119.247222 },
  { city: "McFarland", zip: "93250", lat: 35.678056, lng: -119.229444 },
  { city: "Wasco", zip: "93280", lat: 35.594167, lng: -119.341111 },
  { city: "Shafter", zip: "93263", lat: 35.500556, lng: -119.173611 },
  // Kern County
  { city: "Oildale", zip: "93308", lat: 35.420000, lng: -119.020000 },
  { city: "Arvin", zip: "93203", lat: 35.209167, lng: -118.828333 },
  { city: "Lamont", zip: "93241", lat: 35.259722, lng: -118.914167 },
  { city: "Taft", zip: "93268", lat: 35.142500, lng: -119.456667 },
  { city: "Maricopa", zip: "93252", lat: 35.058611, lng: -119.400833 },
  { city: "Buttonwillow", zip: "93206", lat: 35.400278, lng: -119.469722 },
  { city: "Lost Hills", zip: "93249", lat: 35.616389, lng: -119.694444 },
  // Kings County
  { city: "Lemoore", zip: "93245", lat: 36.300833, lng: -119.782778 },
  { city: "Corcoran", zip: "93212", lat: 36.098056, lng: -119.560278 },
  { city: "Avenal", zip: "93204", lat: 36.004167, lng: -120.129167 },
  { city: "Kettleman City", zip: "93239", lat: 35.966111, lng: -119.962222 },
  { city: "Stratford", zip: "93266", lat: 36.189444, lng: -119.823056 },
  { city: "Armona", zip: "93202", lat: 36.315556, lng: -119.708333 },
  // Fresno Area - Additional
  { city: "Riverdale", zip: "93656", lat: 36.431111, lng: -119.859722 },
  { city: "Caruthers", zip: "93609", lat: 36.542778, lng: -119.833056 },
  { city: "Fowler", zip: "93625", lat: 36.630556, lng: -119.678611 },
  { city: "Kerman", zip: "93630", lat: 36.723611, lng: -120.059722 },
  { city: "Biola", zip: "93606", lat: 36.802222, lng: -120.016111 },
  { city: "Coalinga", zip: "93210", lat: 36.139722, lng: -120.360000 },
  { city: "Huron", zip: "93234", lat: 36.202778, lng: -120.102778 },
  { city: "San Ardo", zip: "93450", lat: 35.991944, lng: -120.904722 },
  // Sonoma County - Wine Country
  { city: "Santa Rosa", zip: "95401", lat: 38.440556, lng: -122.714167 },
  { city: "Petaluma", zip: "94954", lat: 38.232500, lng: -122.636667 },
  { city: "Sonoma", zip: "95476", lat: 38.291944, lng: -122.458056 },
  { city: "Sebastopol", zip: "95472", lat: 38.402222, lng: -122.824167 },
  { city: "Windsor", zip: "95492", lat: 38.547222, lng: -122.816389 },
  { city: "Healdsburg", zip: "95448", lat: 38.610556, lng: -122.869167 },
  { city: "Cloverdale", zip: "95425", lat: 38.805556, lng: -123.017222 },
  { city: "Guerneville", zip: "95446", lat: 38.503889, lng: -122.996111 },
  { city: "Forestville", zip: "95436", lat: 38.473611, lng: -122.890278 },
  { city: "Occidental", zip: "95465", lat: 38.407500, lng: -122.948056 },
  { city: "Monte Rio", zip: "95462", lat: 38.465556, lng: -123.008889 },
  { city: "Bodega Bay", zip: "95465", lat: 38.333056, lng: -123.048056 },
  { city: "Jenner", zip: "95450", lat: 38.449722, lng: -123.115278 },
  { city: "Valley Ford", zip: "94972", lat: 38.316667, lng: -122.924167 },
  { city: "Tomales", zip: "94971", lat: 38.246389, lng: -122.905556 },
  // Napa Valley
  { city: "American Canyon", zip: "94503", lat: 38.174944, lng: -122.260833 },
  { city: "Calistoga", zip: "94515", lat: 38.578889, lng: -122.579722 },
  { city: "St. Helena", zip: "94574", lat: 38.505278, lng: -122.470278, aliases: ["saint helena"] },
  { city: "Yountville", zip: "94599", lat: 38.401667, lng: -122.362778 },
  // Marin County
  { city: "Point Reyes Station", zip: "94956", lat: 38.069167, lng: -122.806944 },
  { city: "Inverness", zip: "94937", lat: 38.101389, lng: -122.857222 },
  { city: "Novato", zip: "94949", lat: 38.106667, lng: -122.569722 },
  { city: "San Anselmo", zip: "94960", lat: 37.974722, lng: -122.561667 },
  { city: "Fairfax", zip: "94930", lat: 37.987222, lng: -122.588889 },
  { city: "Ross", zip: "94957", lat: 37.962500, lng: -122.555000 },
  { city: "Kentfield", zip: "94904", lat: 37.952222, lng: -122.556944 },
  { city: "Larkspur", zip: "94939", lat: 37.934167, lng: -122.535278 },
  { city: "Corte Madera", zip: "94925", lat: 37.926389, lng: -122.527500 },
  { city: "Mill Valley", zip: "94941", lat: 37.906111, lng: -122.544944 },
  { city: "Sausalito", zip: "94965", lat: 37.859167, lng: -122.485278 },
  { city: "Tiburon", zip: "94920", lat: 37.873611, lng: -122.456389 },
  { city: "Belvedere", zip: "94920", lat: 37.872778, lng: -122.464167 },
  { city: "Stinson Beach", zip: "94970", lat: 37.900556, lng: -122.644444 },
  { city: "Bolinas", zip: "94924", lat: 37.909444, lng: -122.686389 },
  // Solano County
  { city: "Benicia", zip: "94510", lat: 38.049444, lng: -122.158611 },
  { city: "Suisun City", zip: "94585", lat: 38.238333, lng: -122.040278 },
  { city: "Dixon", zip: "95620", lat: 38.445556, lng: -121.823333 },
  // Sacramento Metro
  { city: "Arden-Arcade", zip: "95864", lat: 38.580000, lng: -121.370000 },
  { city: "Carmichael", zip: "95608", lat: 38.631111, lng: -121.328333 },
  { city: "Citrus Heights", zip: "95621", lat: 38.707222, lng: -121.281111 },
  { city: "Fair Oaks", zip: "95628", lat: 38.644722, lng: -121.272222 },
  { city: "Orangevale", zip: "95662", lat: 38.678611, lng: -121.225556 },
  { city: "Rocklin", zip: "95765", lat: 38.820833, lng: -121.270833 },
  { city: "Lincoln", zip: "95648", lat: 38.891667, lng: -121.293056 },
  { city: "Loomis", zip: "95650", lat: 38.821389, lng: -121.193056 },
  { city: "Auburn", zip: "95603", lat: 38.898611, lng: -121.078333 },
  { city: "Newcastle", zip: "95658", lat: 38.874167, lng: -121.133611 },
  { city: "Colfax", zip: "95713", lat: 39.100833, lng: -120.953333 },
  { city: "Foresthill", zip: "95631", lat: 39.020278, lng: -120.818056 },
  { city: "Meadow Vista", zip: "95722", lat: 38.985556, lng: -121.021944 },
  // Nevada County
  { city: "Grass Valley", zip: "95945", lat: 39.219167, lng: -121.058333 },
  { city: "Nevada City", zip: "95959", lat: 39.261667, lng: -121.016111 },
  { city: "Penn Valley", zip: "95946", lat: 39.199722, lng: -121.189722 },
  // Lake Tahoe Area
  { city: "Truckee", zip: "96161", lat: 39.327778, lng: -120.183333 },
  { city: "Tahoe City", zip: "96145", lat: 39.172222, lng: -120.138889 },
  { city: "Kings Beach", zip: "96143", lat: 39.237778, lng: -120.026389 },
  { city: "Olympic Valley", zip: "96146", lat: 39.197222, lng: -120.235833, aliases: ["squaw valley", "palisades tahoe"] },
  { city: "South Lake Tahoe", zip: "96150", lat: 38.933333, lng: -119.984444, aliases: ["slt"] },
  { city: "Tahoe Vista", zip: "96148", lat: 39.240000, lng: -120.050000 },
  { city: "Incline Village", zip: "89451", lat: 39.250000, lng: -119.953333 },
  { city: "Crystal Bay", zip: "89402", lat: 39.226389, lng: -120.003889 },
  // El Dorado County
  { city: "Placerville", zip: "95667", lat: 38.729722, lng: -120.798611 },
  { city: "Cameron Park", zip: "95682", lat: 38.668889, lng: -120.987222 },
  { city: "El Dorado Hills", zip: "95762", lat: 38.685833, lng: -121.082222, aliases: ["edh"] },
  { city: "Shingle Springs", zip: "95682", lat: 38.665833, lng: -120.925833 },
  { city: "Diamond Springs", zip: "95619", lat: 38.694722, lng: -120.815000 },
  { city: "Pollock Pines", zip: "95726", lat: 38.761944, lng: -120.586667 },
  { city: "Camino", zip: "95709", lat: 38.738333, lng: -120.674722 },
  { city: "Cool", zip: "95614", lat: 38.886944, lng: -121.014722 },
  { city: "Georgetown", zip: "95634", lat: 38.906944, lng: -120.838611 },
  { city: "Garden Valley", zip: "95633", lat: 38.854167, lng: -120.860556 },
  { city: "Coloma", zip: "95613", lat: 38.799722, lng: -120.889167 },
  { city: "Lotus", zip: "95651", lat: 38.800000, lng: -120.908889 },
  { city: "Kirkwood", zip: "95646", lat: 38.702778, lng: -120.072222 },
  // Amador County
  { city: "Jackson", zip: "95642", lat: 38.348889, lng: -120.774167 },
  { city: "Sutter Creek", zip: "95685", lat: 38.393056, lng: -120.802500 },
  { city: "Amador City", zip: "95601", lat: 38.419444, lng: -120.824722 },
  { city: "Plymouth", zip: "95669", lat: 38.481944, lng: -120.844722 },
  { city: "Ione", zip: "95640", lat: 38.352778, lng: -120.952778 },
  { city: "Pine Grove", zip: "95665", lat: 38.408889, lng: -120.658889 },
  { city: "Volcano", zip: "95689", lat: 38.443056, lng: -120.630833 },
  { city: "Fiddletown", zip: "95629", lat: 38.503889, lng: -120.756667 },
  // Calaveras County
  { city: "San Andreas", zip: "95249", lat: 38.196111, lng: -120.680278 },
  { city: "Angels Camp", zip: "95222", lat: 38.068056, lng: -120.538611 },
  { city: "Murphys", zip: "95247", lat: 38.137778, lng: -120.459722 },
  { city: "Arnold", zip: "95223", lat: 38.255556, lng: -120.351111 },
  { city: "Bear Valley", zip: "95223", lat: 38.464167, lng: -120.040000 },
  { city: "Copperopolis", zip: "95228", lat: 37.981111, lng: -120.640000 },
  { city: "Valley Springs", zip: "95252", lat: 38.191667, lng: -120.829167 },
  { city: "Mokelumne Hill", zip: "95245", lat: 38.300556, lng: -120.706111 },
  { city: "West Point", zip: "95255", lat: 38.400000, lng: -120.526944 },
  { city: "Rail Road Flat", zip: "95248", lat: 38.341944, lng: -120.510556 },
  { city: "Mountain Ranch", zip: "95246", lat: 38.228333, lng: -120.540833 },
  // Tuolumne County
  { city: "Sonora", zip: "95370", lat: 37.982778, lng: -120.382222 },
  { city: "Jamestown", zip: "95327", lat: 37.953333, lng: -120.422778 },
  { city: "Tuolumne", zip: "95379", lat: 37.962778, lng: -120.236389 },
  { city: "Columbia", zip: "95310", lat: 38.036111, lng: -120.401389 },
  { city: "Twain Harte", zip: "95383", lat: 38.039722, lng: -120.231111 },
  { city: "Mi-Wuk Village", zip: "95346", lat: 38.062500, lng: -120.188056 },
  { city: "Pinecrest", zip: "95364", lat: 38.192778, lng: -120.001111 },
  { city: "Groveland", zip: "95321", lat: 37.838889, lng: -120.231667 },
  { city: "Big Oak Flat", zip: "95305", lat: 37.823333, lng: -120.258889 },
  { city: "Coulterville", zip: "95311", lat: 37.710833, lng: -120.197500 },
  // Yosemite & Mariposa County
  { city: "Yosemite National Park", zip: "95389", lat: 37.745556, lng: -119.586667, aliases: ["yosemite"] },
  { city: "Yosemite Valley", zip: "95389", lat: 37.745556, lng: -119.586667 },
  { city: "Wawona", zip: "95389", lat: 37.536944, lng: -119.655278 },
  { city: "Fish Camp", zip: "93623", lat: 37.478611, lng: -119.639722 },
  { city: "Oakhurst", zip: "93644", lat: 37.328056, lng: -119.649444 },
  { city: "Bass Lake", zip: "93604", lat: 37.324722, lng: -119.566111 },
  { city: "Coarsegold", zip: "93614", lat: 37.262222, lng: -119.700833 },
  { city: "North Fork", zip: "93643", lat: 37.229722, lng: -119.505556 },
  { city: "Auberry", zip: "93602", lat: 37.080833, lng: -119.485556 },
  { city: "Prather", zip: "93651", lat: 36.997222, lng: -119.515556 },
  { city: "Shaver Lake", zip: "93664", lat: 37.104167, lng: -119.317500 },
  { city: "Huntington Lake", zip: "93634", lat: 37.233333, lng: -119.225000 },
  { city: "Big Creek", zip: "93605", lat: 37.205000, lng: -119.245833 },
  { city: "Tollhouse", zip: "93667", lat: 36.975000, lng: -119.397222 },
  { city: "Friant", zip: "93626", lat: 36.988056, lng: -119.705556 },
  // Eastern Sierra
  { city: "Mammoth Lakes", zip: "93546", lat: 37.648611, lng: -118.972222, aliases: ["mammoth"] },
  { city: "June Lake", zip: "93529", lat: 37.788611, lng: -119.075556 },
  { city: "Lee Vining", zip: "93541", lat: 37.957778, lng: -119.121667 },
  { city: "Bridgeport", zip: "93517", lat: 38.255556, lng: -119.231111 },
  { city: "Coleville", zip: "96107", lat: 38.565556, lng: -119.507222 },
  { city: "Markleeville", zip: "96120", lat: 38.772778, lng: -119.780556 },
  // Far Northern California
  { city: "Redding", zip: "96002", lat: 40.586667, lng: -122.391667 },
  { city: "Anderson", zip: "96007", lat: 40.448333, lng: -122.297778 },
  { city: "Shasta Lake", zip: "96019", lat: 40.680556, lng: -122.370833 },
  { city: "Palo Cedro", zip: "96073", lat: 40.563611, lng: -122.238889 },
  { city: "Cottonwood", zip: "96022", lat: 40.385833, lng: -122.281667 },
  { city: "Bella Vista", zip: "96008", lat: 40.640556, lng: -122.248056 },
  { city: "Shingletown", zip: "96088", lat: 40.492222, lng: -121.889167 },
  { city: "Burney", zip: "96013", lat: 40.882500, lng: -121.660833 },
  { city: "Fall River Mills", zip: "96028", lat: 41.004722, lng: -121.438056 },
  { city: "McArthur", zip: "96056", lat: 41.051944, lng: -121.399444 },
  { city: "Alturas", zip: "96101", lat: 41.487222, lng: -120.542500 },
  { city: "Cedarville", zip: "96104", lat: 41.529167, lng: -120.173056 },
  { city: "Tulelake", zip: "96134", lat: 41.954167, lng: -121.477222 },
  { city: "Dorris", zip: "96023", lat: 41.963333, lng: -121.918056 },
  { city: "Mount Shasta", zip: "96067", lat: 41.309722, lng: -122.310556, aliases: ["mt shasta"] },
  { city: "Dunsmuir", zip: "96025", lat: 41.208889, lng: -122.271944 },
  { city: "Weed", zip: "96094", lat: 41.422778, lng: -122.386111 },
  { city: "McCloud", zip: "96057", lat: 41.255556, lng: -122.139444 },
  { city: "Yreka", zip: "96097", lat: 41.735278, lng: -122.634444 },
  { city: "Montague", zip: "96064", lat: 41.728333, lng: -122.527778 },
  { city: "Fort Jones", zip: "96032", lat: 41.607778, lng: -122.839722 },
  { city: "Etna", zip: "96027", lat: 41.456944, lng: -122.894722 },
  { city: "Happy Camp", zip: "96039", lat: 41.792778, lng: -123.380556 },
  { city: "Hornbrook", zip: "96044", lat: 41.910278, lng: -122.557222 },
  // Butte County
  { city: "Paradise", zip: "95969", lat: 39.759722, lng: -121.621667 },
  { city: "Magalia", zip: "95954", lat: 39.812222, lng: -121.578333 },
  { city: "Oroville", zip: "95965", lat: 39.513889, lng: -121.557778 },
  { city: "Gridley", zip: "95948", lat: 39.363889, lng: -121.693611 },
  { city: "Biggs", zip: "95917", lat: 39.412500, lng: -121.709722 },
  { city: "Durham", zip: "95938", lat: 39.646389, lng: -121.799722 },
  { city: "Berry Creek", zip: "95916", lat: 39.635833, lng: -121.402500 },
  { city: "Forest Ranch", zip: "95942", lat: 39.882222, lng: -121.673611 },
  // Yuba & Sutter Counties
  { city: "Marysville", zip: "95901", lat: 39.145833, lng: -121.591389 },
  { city: "Olivehurst", zip: "95961", lat: 39.078611, lng: -121.551944 },
  { city: "Linda", zip: "95961", lat: 39.083333, lng: -121.550000 },
  { city: "Wheatland", zip: "95692", lat: 39.009722, lng: -121.423056 },
  { city: "Live Oak", zip: "95953", lat: 39.275833, lng: -121.660278 },
  // Colusa County
  { city: "Colusa", zip: "95932", lat: 39.214444, lng: -122.009444 },
  { city: "Williams", zip: "95987", lat: 39.154722, lng: -122.149444 },
  { city: "Arbuckle", zip: "95912", lat: 39.016944, lng: -122.057778 },
  { city: "Maxwell", zip: "95955", lat: 39.277778, lng: -122.191667 },
  { city: "Princeton", zip: "95970", lat: 39.404167, lng: -122.008889 },
  { city: "Stonyford", zip: "95979", lat: 39.377778, lng: -122.545833 },
  // Glenn County
  { city: "Willows", zip: "95988", lat: 39.524167, lng: -122.193611 },
  { city: "Orland", zip: "95963", lat: 39.747500, lng: -122.196389 },
  { city: "Hamilton City", zip: "95951", lat: 39.742778, lng: -122.013889 },
  { city: "Glenn", zip: "95943", lat: 39.521944, lng: -122.013611 },
  { city: "Elk Creek", zip: "95939", lat: 39.605278, lng: -122.538889 },
  // Tehama County
  { city: "Corning", zip: "96021", lat: 39.937778, lng: -122.179167 },
  { city: "Tehama", zip: "96090", lat: 40.025278, lng: -122.123889 },
  { city: "Los Molinos", zip: "96055", lat: 40.023611, lng: -122.100556 },
  { city: "Gerber", zip: "96035", lat: 40.056389, lng: -122.150556 },
  { city: "Vina", zip: "96092", lat: 39.934722, lng: -122.054167 },
  { city: "Red Bluff", zip: "96080", lat: 40.178611, lng: -122.235833 },
  { city: "Manton", zip: "96059", lat: 40.420833, lng: -121.862778 },
  { city: "Mineral", zip: "96063", lat: 40.350000, lng: -121.566944 },
  { city: "Paynes Creek", zip: "96075", lat: 40.340833, lng: -121.913611 },
  // Lassen & Plumas Counties
  { city: "Chester", zip: "96020", lat: 40.306389, lng: -121.231944 },
  { city: "Westwood", zip: "96137", lat: 40.306111, lng: -121.005833 },
  { city: "Susanville", zip: "96130", lat: 40.416389, lng: -120.653056 },
  { city: "Janesville", zip: "96114", lat: 40.296667, lng: -120.524167 },
  { city: "Herlong", zip: "96113", lat: 40.125556, lng: -120.146389 },
  { city: "Doyle", zip: "96109", lat: 40.027778, lng: -120.103889 },
  { city: "Portola", zip: "96122", lat: 39.810556, lng: -120.469167 },
  { city: "Chilcoot", zip: "96105", lat: 39.795833, lng: -120.139444 },
  { city: "Loyalton", zip: "96118", lat: 39.676944, lng: -120.241111 },
  { city: "Sierraville", zip: "96126", lat: 39.589722, lng: -120.367500 },
  { city: "Quincy", zip: "95971", lat: 39.936944, lng: -120.947222 },
  { city: "Graeagle", zip: "96103", lat: 39.766111, lng: -120.619722 },
  { city: "Blairsden", zip: "96103", lat: 39.779722, lng: -120.616667 },
  { city: "Crescent Mills", zip: "95934", lat: 40.096667, lng: -120.911667 },
  { city: "Greenville", zip: "95947", lat: 40.139722, lng: -120.951389 },
  { city: "Taylorsville", zip: "95983", lat: 40.075556, lng: -120.837778 },
  { city: "East Quincy", zip: "95971", lat: 39.933889, lng: -120.898056 },
  // Sierra County
  { city: "Downieville", zip: "95936", lat: 39.559722, lng: -120.823333 },
  { city: "Sierra City", zip: "96125", lat: 39.575556, lng: -120.634722 },
  { city: "Goodyears Bar", zip: "95944", lat: 39.604167, lng: -120.883889 },
  { city: "Calpine", zip: "96124", lat: 39.666389, lng: -120.441389 },
  // Modoc County
  { city: "Bieber", zip: "96009", lat: 41.121667, lng: -121.143889 },
  { city: "Adin", zip: "96006", lat: 41.193889, lng: -120.946667 },
  { city: "Canby", zip: "96015", lat: 41.413889, lng: -120.870278 },
  { city: "Likely", zip: "96116", lat: 41.229722, lng: -120.503889 },
  { city: "Ravendale", zip: "96123", lat: 40.797222, lng: -120.365556 },
  { city: "Termo", zip: "96132", lat: 40.866111, lng: -120.460278 },
  // Humboldt County
  { city: "Eureka", zip: "95501", lat: 40.802222, lng: -124.163611 },
  { city: "Arcata", zip: "95521", lat: 40.866667, lng: -124.082778 },
  { city: "McKinleyville", zip: "95519", lat: 40.946667, lng: -124.100556 },
  { city: "Fortuna", zip: "95540", lat: 40.598333, lng: -124.157222 },
  { city: "Rio Dell", zip: "95562", lat: 40.499444, lng: -124.106111 },
  { city: "Ferndale", zip: "95536", lat: 40.576389, lng: -124.263889 },
  { city: "Trinidad", zip: "95570", lat: 41.059167, lng: -124.143056 },
  { city: "Orick", zip: "95555", lat: 41.286944, lng: -124.059722 },
  { city: "Klamath", zip: "95548", lat: 41.526667, lng: -124.038611 },
  { city: "Hoopa", zip: "95546", lat: 41.050278, lng: -123.674444 },
  { city: "Willow Creek", zip: "95573", lat: 40.939444, lng: -123.631389 },
  { city: "Blue Lake", zip: "95525", lat: 40.883333, lng: -123.991667 },
  { city: "Garberville", zip: "95542", lat: 40.100278, lng: -123.795278 },
  { city: "Redway", zip: "95560", lat: 40.120278, lng: -123.822778 },
  { city: "Miranda", zip: "95553", lat: 40.234722, lng: -123.819722 },
  { city: "Scotia", zip: "95565", lat: 40.476667, lng: -124.100556 },
  { city: "Hydesville", zip: "95547", lat: 40.545278, lng: -124.097778 },
  { city: "Carlotta", zip: "95528", lat: 40.537222, lng: -124.060278 },
  { city: "Myers Flat", zip: "95554", lat: 40.265556, lng: -123.870278 },
  { city: "Weott", zip: "95571", lat: 40.323611, lng: -123.921667 },
  { city: "Honeydew", zip: "95545", lat: 40.243611, lng: -124.123611 },
  { city: "Petrolia", zip: "95558", lat: 40.325278, lng: -124.286667 },
  { city: "Bridgeville", zip: "95526", lat: 40.469722, lng: -123.798611 },
  { city: "Alderpoint", zip: "95511", lat: 40.176389, lng: -123.611944 },
  // Del Norte County
  { city: "Crescent City", zip: "95531", lat: 41.755833, lng: -124.202500 },
  { city: "Smith River", zip: "95567", lat: 41.927778, lng: -124.146944 },
  { city: "Gasquet", zip: "95543", lat: 41.845556, lng: -123.969722 },
  { city: "Fort Dick", zip: "95538", lat: 41.868056, lng: -124.148056 },
  // Mendocino County
  { city: "Ukiah", zip: "95482", lat: 39.150278, lng: -123.207778 },
  { city: "Willits", zip: "95490", lat: 39.409722, lng: -123.355556 },
  { city: "Redwood Valley", zip: "95470", lat: 39.265556, lng: -123.204167 },
  { city: "Hopland", zip: "95449", lat: 38.973056, lng: -123.116389 },
  { city: "Boonville", zip: "95415", lat: 39.009167, lng: -123.366111 },
  { city: "Philo", zip: "95466", lat: 39.003611, lng: -123.433611 },
  { city: "Point Arena", zip: "95468", lat: 38.908889, lng: -123.693056 },
  { city: "Gualala", zip: "95445", lat: 38.765833, lng: -123.528056 },
  { city: "Mendocino", zip: "95460", lat: 39.307778, lng: -123.799444 },
  { city: "Fort Bragg", zip: "95437", lat: 39.445833, lng: -123.805278 },
  { city: "Caspar", zip: "95420", lat: 39.363611, lng: -123.815556 },
  { city: "Albion", zip: "95410", lat: 39.223611, lng: -123.768611 },
  { city: "Comptche", zip: "95427", lat: 39.265000, lng: -123.591389 },
  { city: "Laytonville", zip: "95454", lat: 39.688333, lng: -123.482778 },
  { city: "Covelo", zip: "95428", lat: 39.792778, lng: -123.248056 },
  { city: "Leggett", zip: "95585", lat: 39.865556, lng: -123.714167 },
  // Lake County
  { city: "Clearlake", zip: "95422", lat: 38.958333, lng: -122.626389 },
  { city: "Lakeport", zip: "95453", lat: 39.043056, lng: -122.915833 },
  { city: "Kelseyville", zip: "95451", lat: 38.977778, lng: -122.839444 },
  { city: "Lower Lake", zip: "95457", lat: 38.910556, lng: -122.610278 },
  { city: "Middletown", zip: "95461", lat: 38.752500, lng: -122.614722 },
  { city: "Hidden Valley Lake", zip: "95467", lat: 38.807778, lng: -122.558333 },
  { city: "Cobb", zip: "95426", lat: 38.822222, lng: -122.723056 },
  { city: "Lucerne", zip: "95458", lat: 39.090278, lng: -122.796111 },
  { city: "Nice", zip: "95464", lat: 39.123333, lng: -122.848056 },
  { city: "Upper Lake", zip: "95485", lat: 39.164722, lng: -122.910556 },
  { city: "Potter Valley", zip: "95469", lat: 39.322222, lng: -123.113333 },
  // Yuba County - Foothills
  { city: "Plumas Lake", zip: "95961", lat: 39.020278, lng: -121.557778 },
  { city: "Beale AFB", zip: "95903", lat: 39.109722, lng: -121.342778 },
  { city: "Browns Valley", zip: "95918", lat: 39.242222, lng: -121.409722 },
  { city: "Brownsville", zip: "95919", lat: 39.465556, lng: -121.269444 },
  { city: "Challenge", zip: "95925", lat: 39.487222, lng: -121.223056 },
  { city: "Dobbins", zip: "95935", lat: 39.371944, lng: -121.206111 },
  { city: "Oregon House", zip: "95962", lat: 39.356944, lng: -121.282778 },
  { city: "Rackerby", zip: "95972", lat: 39.428889, lng: -121.342500 },
  { city: "Strawberry Valley", zip: "95981", lat: 39.565556, lng: -121.106389 },
  { city: "Clipper Mills", zip: "95930", lat: 39.532778, lng: -121.154722 },
  { city: "Forbestown", zip: "95941", lat: 39.516944, lng: -121.267222 },
  { city: "Bangor", zip: "95914", lat: 39.388611, lng: -121.404722 },
  { city: "Feather Falls", zip: "95940", lat: 39.593056, lng: -121.254722 },
  // Nevada County - Foothills
  { city: "North San Juan", zip: "95960", lat: 39.371667, lng: -121.104722 },
  { city: "Camptonville", zip: "95922", lat: 39.451944, lng: -121.048611 },
  { city: "Alleghany", zip: "95910", lat: 39.470000, lng: -120.844444 },
  { city: "Washington", zip: "95986", lat: 39.359722, lng: -120.798611 },
  // Placer County - Mountain
  { city: "Soda Springs", zip: "95728", lat: 39.323056, lng: -120.380000 },
  { city: "Emigrant Gap", zip: "95715", lat: 39.296944, lng: -120.672778 },
  { city: "Dutch Flat", zip: "95714", lat: 39.206111, lng: -120.837778 },
  { city: "Gold Run", zip: "95717", lat: 39.175556, lng: -120.850556 },
  { city: "Alta", zip: "95701", lat: 39.206667, lng: -120.810556 },
  { city: "Weimar", zip: "95736", lat: 39.038889, lng: -120.973611 },
  { city: "Applegate", zip: "95703", lat: 39.000556, lng: -120.992222 },
  { city: "Chicago Park", zip: "95712", lat: 39.143889, lng: -120.973333 },
  { city: "Cedar Ridge", zip: "95924", lat: 39.198056, lng: -121.022778 },
  { city: "Rough and Ready", zip: "95975", lat: 39.230278, lng: -121.136111 },
  { city: "Smartsville", zip: "95977", lat: 39.206111, lng: -121.298056 },
];

// Build search indexes for fast lookups
const cityIndex = new Map<string, CaliforniaLocation>();
const zipIndex = new Map<string, CaliforniaLocation>();
const aliasIndex = new Map<string, CaliforniaLocation>();

// Initialize indexes
CALIFORNIA_LOCATIONS.forEach(location => {
  // Index by lowercase city name
  cityIndex.set(location.city.toLowerCase(), location);
  
  // Index by ZIP
  zipIndex.set(location.zip, location);
  
  // Index by aliases
  if (location.aliases) {
    location.aliases.forEach(alias => {
      aliasIndex.set(alias.toLowerCase(), location);
    });
  }
});

// Search result interface
export interface LocationSearchResult {
  location: CaliforniaLocation | null;
  matchType: 'exact' | 'zip' | 'alias' | 'fuzzy' | 'none';
  confidence: number;
}

/**
 * Levenshtein distance for fuzzy matching
 */
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[b.length][a.length];
}

/**
 * Search for a California location by city name, ZIP code, or alias
 * Supports exact match, ZIP lookup, alias lookup, and fuzzy matching
 */
export function searchCaliforniaLocation(query: string): LocationSearchResult {
  if (!query || query.trim().length === 0) {
    return { location: null, matchType: 'none', confidence: 0 };
  }
  
  const normalizedQuery = query.trim().toLowerCase();
  
  // 1. Check for exact city match
  const exactMatch = cityIndex.get(normalizedQuery);
  if (exactMatch) {
    return { location: exactMatch, matchType: 'exact', confidence: 1.0 };
  }
  
  // 2. Check for ZIP code match (5 digits)
  const zipMatch = normalizedQuery.match(/^\d{5}$/);
  if (zipMatch) {
    const zipLocation = zipIndex.get(normalizedQuery);
    if (zipLocation) {
      return { location: zipLocation, matchType: 'zip', confidence: 1.0 };
    }
  }
  
  // 3. Check for alias match
  const aliasMatch = aliasIndex.get(normalizedQuery);
  if (aliasMatch) {
    return { location: aliasMatch, matchType: 'alias', confidence: 0.95 };
  }
  
  // 4. Check if query starts with a known city name or alias
  for (const [key, location] of cityIndex) {
    if (key.startsWith(normalizedQuery) || normalizedQuery.startsWith(key)) {
      return { location, matchType: 'fuzzy', confidence: 0.85 };
    }
  }
  
  for (const [key, location] of aliasIndex) {
    if (key.startsWith(normalizedQuery) || normalizedQuery.startsWith(key)) {
      return { location, matchType: 'fuzzy', confidence: 0.8 };
    }
  }
  
  // 5. Fuzzy search using Levenshtein distance
  let bestMatch: CaliforniaLocation | null = null;
  let bestDistance = Infinity;
  let bestConfidence = 0;
  
  for (const location of CALIFORNIA_LOCATIONS) {
    const cityDistance = levenshteinDistance(normalizedQuery, location.city.toLowerCase());
    const maxLen = Math.max(normalizedQuery.length, location.city.length);
    const similarity = 1 - (cityDistance / maxLen);
    
    if (similarity > 0.6 && cityDistance < bestDistance) {
      bestDistance = cityDistance;
      bestMatch = location;
      bestConfidence = similarity;
    }
    
    // Also check aliases
    if (location.aliases) {
      for (const alias of location.aliases) {
        const aliasDistance = levenshteinDistance(normalizedQuery, alias.toLowerCase());
        const aliasMaxLen = Math.max(normalizedQuery.length, alias.length);
        const aliasSimilarity = 1 - (aliasDistance / aliasMaxLen);
        
        if (aliasSimilarity > 0.6 && aliasDistance < bestDistance) {
          bestDistance = aliasDistance;
          bestMatch = location;
          bestConfidence = aliasSimilarity;
        }
      }
    }
  }
  
  if (bestMatch) {
    return { location: bestMatch, matchType: 'fuzzy', confidence: bestConfidence };
  }
  
  return { location: null, matchType: 'none', confidence: 0 };
}

/**
 * Get coordinates for a location query
 * Returns null if location not found
 */
export function getLocationCoordinates(query: string): { lat: number; lng: number; city: string } | null {
  const result = searchCaliforniaLocation(query);
  
  if (result.location && result.confidence > 0.5) {
    return {
      lat: result.location.lat,
      lng: result.location.lng,
      city: result.location.city
    };
  }
  
  return null;
}

/**
 * Calculate Haversine distance between two coordinates (in miles)
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3958.8; // Earth's radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Find nearest providers to a given location
 */
export interface Provider {
  id: number;
  name: string;
  city: string;
  latitude?: number;
  longitude?: number;
  specialty: string;
  [key: string]: unknown;
}

export function findNearestProviders(
  userLat: number,
  userLng: number,
  providers: Provider[],
  limit: number = 5
): (Provider & { distance: number })[] {
  const providersWithDistance = providers
    .filter(p => p.latitude !== undefined && p.longitude !== undefined)
    .map(provider => ({
      ...provider,
      distance: calculateDistance(
        userLat,
        userLng,
        provider.latitude!,
        provider.longitude!
      )
    }))
    .sort((a, b) => a.distance - b.distance);
  
  return providersWithDistance.slice(0, limit);
}

/**
 * Search for providers by location and specialty
 */
export function searchProvidersByLocation(
  locationQuery: string,
  providers: Provider[],
  specialty?: string,
  limit: number = 5
): {
  providers: (Provider & { distance: number })[];
  searchedLocation: { city: string; lat: number; lng: number } | null;
  matchType: string;
} {
  const locationResult = searchCaliforniaLocation(locationQuery);
  
  if (!locationResult.location) {
    return {
      providers: [],
      searchedLocation: null,
      matchType: 'none'
    };
  }
  
  let filteredProviders = providers;
  
  if (specialty) {
    filteredProviders = providers.filter(
      p => p.specialty.toLowerCase() === specialty.toLowerCase()
    );
  }
  
  const nearestProviders = findNearestProviders(
    locationResult.location.lat,
    locationResult.location.lng,
    filteredProviders,
    limit
  );
  
  return {
    providers: nearestProviders,
    searchedLocation: {
      city: locationResult.location.city,
      lat: locationResult.location.lat,
      lng: locationResult.location.lng
    },
    matchType: locationResult.matchType
  };
}
