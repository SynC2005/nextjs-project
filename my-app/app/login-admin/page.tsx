"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginAdminPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ (sementara) validasi simple di frontend
    // ganti sesuai kebutuhan
    const ok = username.trim().length > 0 && password.trim().length > 0;

    if (!ok) {
      alert("Username / password wajib diisi");
      return;
    }

    localStorage.setItem("admin_authed", "1");
    router.push("/dashboard-admin");
    
    // ✅ redirect ke dashboard-admin
    router.push("/dashboard-admin");
  };

  return (
    <main className="la-wrap">
      <section className="la-hero">
        <div className="la-hero-overlay" />
        <div className="la-hero-container">
          <h1 className="la-hero-title">Admin Login</h1>
          <p className="la-hero-subtitle">
            Masuk sebagai admin............
          </p>
        </div>
      </section>
      <section className="la-surface">
        <div className="la-container">
          <div className="la-panel">
            <div className="la-form">
              <h2 className="la-title">Sign in</h2>
              <p className="la-subtitle">Masukkan username dan password admin</p>

              <form className="la-form-inner" onSubmit={onSubmit}>
                <label className="la-field">
                  <span className="la-label">Username</span>
                  <input
                    className="la-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="admin"
                    required
                  />
                </label>

                <label className="la-field">
                  <span className="la-label">Password</span>
                  <input
                    className="la-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                </label>

                <button className="la-btn" type="submit">
                  Login Admin
                </button>
              </form>
            </div>

            <aside className="la-info">{/* ... */}</aside>
          </div>
        </div>
      </section>
    </main>
  );
}