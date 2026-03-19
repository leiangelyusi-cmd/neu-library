const SUPABASE_URL = 'https://luuzmxsyphggqonxbuqt.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_yLRuNu8PCIMCa8uvlwCYRA_dp-MOJjR'

const { createClient } = supabase
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Google login button
const loginBtn = document.getElementById('loginBtn')
if (loginBtn) {
  loginBtn.addEventListener('click', async () => {
    const { data, error } = await sb.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://neu-library.netlify.app/user.html'
      }
    })
    if (error) {
      document.getElementById('errorMsg').textContent = error.message
    }
  })
}

// Logout function
async function logout() {
  await sb.auth.signOut()
  window.location.href = 'index.html'
}