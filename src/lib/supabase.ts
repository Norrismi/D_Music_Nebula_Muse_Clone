
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

const SUPABASE_URL = "https://gqcberkzlgarlueszzgb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxY2Jlcmt6bGdhcmx1ZXN6emdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNzU1NTUsImV4cCI6MjA2NTg1MTU1NX0.lwDqazhNDwiOATde-tv5UMoGrslRwv5O-BaZtk5FJdk";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
