import { createClient } from '@supabase/supabase-js'
export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!supabaseUrl || !anon) {
    return new Response(JSON.stringify({ ok:false, error:"Missing env" }), { status: 200 })
  }
  const supabase = createClient(supabaseUrl, anon)
  const { error } = await supabase.from('rooms').select('id', { count: 'exact', head: true })
  return new Response(JSON.stringify({ ok: !error, error: error?.message ?? null }), {
    status: 200, headers: { 'Content-Type': 'application/json' }
  })
}
