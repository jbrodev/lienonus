

## Add New Providers (IDs 430-438)

Adding 9 new provider entries to `src/pages/Providers.tsx`, starting at ID 430 to avoid conflicts with existing analytics data.

### New Chiropractic Providers (IDs 430-437)

| ID  | Name | Address | Phone |
|-----|------|---------|-------|
| 430 | HD Dilanchian Chiropractic | 10800 Paramount Blvd., Suite 307, Downey, CA 90241 | (562) 396-0046 |
| 431 | HD Dilanchian Chiropractic | 280 S. Atlantic Blvd., Los Angeles, CA 90022 | (213) 385-3333 |
| 432 | HD Dilanchian Chiropractic | 409 S. Central Ave., Glendale, CA 91204 | (818) 247-1331 |
| 433 | HD Dilanchian Chiropractic | 2707 W. Olympic Blvd. Suite 204, Los Angeles, CA 90006 | (213) 385-3333 |
| 434 | HD Dilanchian Chiropractic | 14530 Hamlin Street, Van Nuys, CA 91411 | (818) 988-9611 |
| 435 | HD Dilanchian Chiropractic | 3475 Torrance Blvd. Suite G, Torrance, CA 90503 | (424) 247-7035 |
| 436 | Integrated Medical Center Downtown LA | 1055 Wilshire Blvd #1930, Los Angeles, CA 90017 | (213) 278-0532 |
| 437 | Specific Alignment Chiropractic | 15901 Hawthorne Blvd Suite 420, Lawndale, CA 90260 | (310) 259-7748 |

### New Pharmacy Provider (ID 438)

| ID  | Name | Address | Phone |
|-----|------|---------|-------|
| 438 | Glenoaks Rx Pharmacy | 303 S Glenoaks Blvd, #16, Burbank, CA 91502 | (818) 846-9011 |

The pharmacy entry will include "Drive-Thru/Same Day Delivery" appended to the location string for visibility.

### Technical Details

**File:** `src/pages/Providers.tsx`

- Chiropractic entries (IDs 430-437) will be inserted at the end of the existing Chiropractic section, before the `// ENT` comment
- Pharmacy entry (ID 438) will be inserted after the existing Caspian Pharmacy entry at the end of the Pharmacy section
- Each entry includes geocoded latitude/longitude coordinates for distance-based search
- All entries use the existing schema: id, name, specialty, location, phone, email, acceptsLiens, latitude, longitude
- No database migrations needed -- both "Chiropractic" and "Pharmacy" already exist as specialties
