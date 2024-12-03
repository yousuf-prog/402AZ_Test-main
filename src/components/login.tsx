/* import React, { useState } from "react";


const Login = () => {
    const [token, setToken] = useState<string | null>(null);

    const handleLogin = async () => {
        try {
            const token = await authService.fetchAuthToken(); // Fetch session token
            setToken(token); // Update global state
            alert("Login successful!");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
 */


import React from 'react'

const login = () => {
  return (
    <div>login</div>
  )
}

export default login