
import { createClient } from "@supabase/supabase-js";

// These environment variables should be automatically provided by Lovable's Supabase integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are missing. Make sure your Supabase integration is properly configured.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
