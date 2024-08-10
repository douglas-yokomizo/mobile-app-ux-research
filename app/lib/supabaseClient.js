import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const realtimeChannel = supabase
	.channel("realtime:sessions")
	.on(
		"postgres_changes",
		{ event: "*", schema: "public", table: "users" },
		(payload) => {
			console.log("Change received!", payload);
		},
	)
	.subscribe();
