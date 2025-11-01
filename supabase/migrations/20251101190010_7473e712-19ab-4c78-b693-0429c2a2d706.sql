-- Ensure RLS is enabled on provider_analytics
ALTER TABLE public.provider_analytics ENABLE ROW LEVEL SECURITY;

-- Drop the existing admin view policy if it exists to recreate it
DROP POLICY IF EXISTS "Admins can view analytics" ON public.provider_analytics;

-- Create a restrictive SELECT policy for admins only
CREATE POLICY "Admins can view analytics"
ON public.provider_analytics
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));