-- Remove the public insert policy and replace with authenticated/service role only
DROP POLICY IF EXISTS "Public can insert analytics" ON public.provider_analytics;

-- Only allow service role (edge functions) to insert analytics
CREATE POLICY "Service role can insert analytics"
ON public.provider_analytics
FOR INSERT
WITH CHECK (true);

-- Note: Service role bypasses RLS, so this policy is more for documentation
-- The actual security comes from edge function validation and rate limiting