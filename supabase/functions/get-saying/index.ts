import "jsr:@supabase/functions-js/edge-runtime.d.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const sayings = [
  "The best way to predict the future is to invent it.",
  "Code is read far more often than it is written.",
  "Simplicity is the soul of efficiency.",
  "First, solve the problem. Then, write the code.",
  "Programs must be written for people to read, and only incidentally for machines to execute.",
  "The only way to go fast is to go well.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
]

Deno.serve((req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const saying = sayings[Math.floor(Math.random() * sayings.length)]

  return new Response(
    JSON.stringify({ saying }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
  )
})
