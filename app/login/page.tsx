'use client';
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard"
    });
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" placeholder="Email" className="p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="p-2 border" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}
