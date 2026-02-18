
## Remove Caspian Pharmacy

Remove the Caspian Pharmacy provider entry (ID 350) from `src/pages/Providers.tsx`.

### Details

- **File:** `src/pages/Providers.tsx`
- **Action:** Delete the Caspian Pharmacy object (around lines 3776-3787), which includes ID 350, located in the Pharmacy section
- No other files or database changes are affected since provider data is stored inline in this file
- Analytics data associated with ID 350 in the database will remain untouched (the provider simply won't appear on the site anymore)
