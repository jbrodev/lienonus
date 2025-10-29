-- Drop the old constraint
ALTER TABLE public.provider_analytics DROP CONSTRAINT IF EXISTS provider_analytics_event_type_check;

-- Add updated constraint with all event types we want to track
ALTER TABLE public.provider_analytics ADD CONSTRAINT provider_analytics_event_type_check 
CHECK (event_type IN ('website_click', 'email_click', 'phone_click'));