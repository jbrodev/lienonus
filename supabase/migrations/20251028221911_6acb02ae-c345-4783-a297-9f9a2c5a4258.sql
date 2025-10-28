-- Create provider analytics table to track traffic
CREATE TABLE IF NOT EXISTS public.provider_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  provider_id INTEGER NOT NULL,
  provider_name TEXT NOT NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('view', 'click')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.provider_analytics ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert analytics (public tracking)
CREATE POLICY "Anyone can insert analytics"
ON public.provider_analytics
FOR INSERT
TO public
WITH CHECK (true);

-- Allow anyone to read analytics (for displaying stats)
CREATE POLICY "Anyone can view analytics"
ON public.provider_analytics
FOR SELECT
TO public
USING (true);

-- Create index for faster queries
CREATE INDEX idx_provider_analytics_provider_id ON public.provider_analytics(provider_id);
CREATE INDEX idx_provider_analytics_created_at ON public.provider_analytics(created_at DESC);