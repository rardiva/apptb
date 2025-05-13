import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://utvgtueiekypslnoxtub.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0dmd0dWVpZWt5cHNsbm94dHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwOTQzNzMsImV4cCI6MjA2MjY3MDM3M30.Q7DWakKJJ3yyDJufJ8PY8DEOSuKt6Lxx0ZTiQ8ekgg0";

const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { user, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        alert("Login failed: " + error.message);
    } else {
        alert("Login successful! Welcome, " + user.email);
    }
});
