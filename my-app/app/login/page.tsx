"use client";

import { useState } from "react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, password });
  };

  return (
    <div className="login-card">
      <h1 className="login-title">Login</h1>
      <p className="login-subtitle">Masukkan nama dan password untuk masuk</p>

      <form className="login-form" onSubmit={onSubmit}>
        <label className="login-label">
            Nama
            <input
              className="login-input"
              type="text"
              placeholder="Nama kamu"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className="login-label">
            Password
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button className="login-btn" type="submit">
            Login
          </button>
      </form>
    </div>
  );
}
