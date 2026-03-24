"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Home", href: "/xavortree" },
  { label: "Articles", href: "/xavortree/articles" },
  { label: "Milestones", href: "/xavortree/portofolio" },
  { label: "Contact", href: "/xavortree/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={cn("navbar-wrap", scrolled ? "navbar-wrap--pill" : "navbar-wrap--full")}>
      <div className={cn("navbar-pill", scrolled ? "navbar-pill--pill" : "navbar-pill--full")}>
        <div className="navbar-inner">
          <Link href="/" className="navbar-brand">
            <span className="navbar-logo">
              <Image
                src="/assets/logo.png"   // <-- ganti sesuai nama file kamu
                alt="XavorTree"
                width={40}
                height={40}
                priority
              />
            </span>

            <span className="navbar-brandtext" aria-label="XavorTree">
              <span className="navbar-xavor">XAVOR</span>
              <span className="navbar-tree">TREE</span>
            </span>
          </Link>

          <nav className="navbar-menu">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn("navbar-link", isActive && "navbar-link-active")}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}