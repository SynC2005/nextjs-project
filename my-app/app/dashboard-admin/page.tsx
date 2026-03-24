"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

const MENU = [
  { label: "Dashboard1", href: "/dashboard-admin", active: true },
  { label: "Dashboard2", href: "#" },
  { label: "Dashboard3", href: "#" },
  { label: "Dashboard4", href: "#" },
  { label: "Dashboard5", href: "#" },
  { label: "Dashboard6", href: "#" },
  { label: "Dashboard7", href: "#" },
  { label: "Dashboard8", href: "#" },
];

export default function DashboardAdminPage() {
  const router = useRouter();

  useEffect(() => {
    const ok = localStorage.getItem("admin_authed") === "1";
    if (!ok) router.replace("/login-admin");
  }, [router]);
  return (
    <main className="da-wrap">
      {/* Sidebar */}
      <aside className="da-sidebar">
        <div className="da-brand">
          <div className="da-logo-dot" aria-hidden="true" />
          <div>
            <div className="da-brand-title">Xavortree</div>
            <div className="da-brand-sub">Admin Panel</div>
          </div>
        </div>

        <div className="da-profile">
          <div className="da-avatar" aria-hidden="true" />
          <div className="da-profile-meta">
            <div className="da-profile-name">Admin</div>
            <div className="da-profile-role">Project Manager</div>
          </div>
        </div>

        <nav className="da-nav">
          {MENU.map((m) => (
            <Link
              key={m.label}
              href={m.href}
              className={`da-nav-link ${m.active ? "is-active" : ""}`}
            >
              <span className="da-nav-ic" aria-hidden="true" />
              {m.label}
            </Link>
          ))}
        </nav>

        
      </aside>

      {/* Main */}
      <section className="da-main">
        {/* Topbar */}
        <header className="da-topbar">
          <div className="da-search">
            <span className="da-search-ic" aria-hidden="true" />
            <input className="da-search-input" placeholder="Search..." />
          </div>

          <div className="da-top-actions">
            <div className="da-pill">Overview</div>
            <button className="da-icon-btn" aria-label="Notifications" />
            <button className="da-icon-btn" aria-label="Settings" />
            <button className="da-icon-btn" aria-label="Logout" />
          </div>
        </header>

        {/* Content */}
        <div className="da-content">
          {/* Banner */}
          {/* Heading */}
          <div className="da-heading">
            <div className="da-heading-left">
              <div className="da-heading-ic" aria-hidden="true" />
              <h1 className="da-title">Dashboard</h1>
            </div>
            <div className="da-heading-right">Overview</div>
          </div>

          {/* Cards (kosong dulu) */}
          <div className="da-cards">
            <div className="da-card da-card--a">
              <div className="da-card-title"></div>
              <div className="da-card-empty" />
            </div>

            <div className="da-card da-card--b">
              <div className="da-card-title"></div>
              <div className="da-card-empty" />
            </div>

            <div className="da-card da-card--c">
              <div className="da-card-title"></div>
              <div className="da-card-empty" />
            </div>
          </div>

          {/* Large blocks */}
          <div className="da-grid2">
            <div className="da-block">
              <div className="da-block-head">
                <div className="da-block-title"></div>
                <div className="da-legend">
                </div>
              </div>
              <div className="da-block-empty" />
            </div>

            <div className="da-block">
              <div className="da-block-head">
                <div className="da-block-title"></div>
              </div>
              <div className="da-block-empty" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}