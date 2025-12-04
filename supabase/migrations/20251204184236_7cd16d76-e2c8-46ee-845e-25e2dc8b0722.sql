-- Add deleted_at column for soft delete functionality
ALTER TABLE public.provider_analytics 
ADD COLUMN deleted_at timestamp with time zone DEFAULT NULL;

-- Create index for efficient querying of non-deleted and deleted records
CREATE INDEX idx_provider_analytics_deleted_at ON public.provider_analytics(deleted_at);

-- Create a function to permanently delete records older than 7 days
CREATE OR REPLACE FUNCTION public.cleanup_old_deleted_analytics()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.provider_analytics
  WHERE deleted_at IS NOT NULL 
    AND deleted_at < NOW() - INTERVAL '7 days';
END;
$$;