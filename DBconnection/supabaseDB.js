import { SupabaseClient } from "@supabase/supabase-js";


const client = new SupabaseClient(
    process.env.SUPA_URL,
    process.env.SUPA_KEY)

export default client