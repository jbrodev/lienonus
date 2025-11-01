-- Block public read access to provider_analytics
CREATE POLICY "Block public read access"
ON public.provider_analytics
FOR SELECT
TO anon, public
USING (false);