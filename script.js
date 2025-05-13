import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://utvgtueiekypslnoxtub.supabase.co";
const supabaseKey = "YOUR_SUPABASE_API_KEY";

const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password }); // Fix: Correct method structure

    if (error) {
        alert("Login failed: " + error.message);
    } else {
        alert("Login successful! Welcome, " + data.user.email); // Fix: Correct login success response
    }
});
