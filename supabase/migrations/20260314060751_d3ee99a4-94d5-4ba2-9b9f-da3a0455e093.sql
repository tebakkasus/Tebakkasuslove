
CREATE TABLE public.cases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  block_id TEXT NOT NULL,
  vignette TEXT NOT NULL,
  hints JSONB NOT NULL DEFAULT '[]'::jsonb,
  options JSONB NOT NULL DEFAULT '[]'::jsonb,
  answer_index INTEGER NOT NULL,
  explanation TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Allow anyone to read cases (public game data)
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read cases"
  ON public.cases
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only authenticated users can insert (for upload feature)
CREATE POLICY "Authenticated users can insert cases"
  ON public.cases
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create index for fast block queries
CREATE INDEX idx_cases_block_id ON public.cases(block_id);
