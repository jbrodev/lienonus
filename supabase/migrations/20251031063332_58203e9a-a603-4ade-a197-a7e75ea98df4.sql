-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Policy: Admins can view all user roles
CREATE POLICY "Admins can view all user roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Policy: Admins can manage user roles
CREATE POLICY "Admins can manage user roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Update provider_analytics RLS policies
DROP POLICY IF EXISTS "Anyone can insert analytics" ON public.provider_analytics;
DROP POLICY IF EXISTS "Anyone can view analytics" ON public.provider_analytics;

-- Allow public to insert analytics (for tracking visitor interactions)
CREATE POLICY "Public can insert analytics"
ON public.provider_analytics
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only admins can view analytics
CREATE POLICY "Admins can view analytics"
ON public.provider_analytics
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can update analytics
CREATE POLICY "Admins can update analytics"
ON public.provider_analytics
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Only admins can delete analytics
CREATE POLICY "Admins can delete analytics"
ON public.provider_analytics
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));