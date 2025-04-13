import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://tgzkmcsoekyuhqavrhno.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnemttY3NvZWt5dWhxYXZyaG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyOTk0NzIsImV4cCI6MjA1OTg3NTQ3Mn0.nz4ueg3g_w-uDg8ttB_y2Ch67QNu6Z-hs9yPDosArz8';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Server-side client for use in server components and API routes
export const createServerClient = () => {
  return createClient(supabaseUrl, supabaseKey);
};
