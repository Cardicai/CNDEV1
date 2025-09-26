export const runtime = "edge";
export async function GET() {
  return new Response(
    JSON.stringify({
      ok: true,
      hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasSupabaseAnon: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
