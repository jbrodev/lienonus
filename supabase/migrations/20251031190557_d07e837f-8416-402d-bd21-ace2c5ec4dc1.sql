-- Add specialty column to provider_analytics table
ALTER TABLE public.provider_analytics 
ADD COLUMN specialty text NOT NULL DEFAULT 'general';