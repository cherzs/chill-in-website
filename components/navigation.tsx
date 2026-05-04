"use client"

import Link from "next/link"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="text-lg font-medium tracking-tight">
          CHILL.IN
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#home" className="hover:text-muted-foreground transition">
            BERANDA
          </Link>
          <Link href="#adventure" className="hover:text-muted-foreground transition">
            PETUALANGAN
          </Link>
          <Link href="#equipment" className="hover:text-muted-foreground transition">
            PERALATAN
          </Link>
          <Link href="#collection" className="hover:text-muted-foreground transition">
            KOLEKSI
          </Link>
        </div>

        {/* Right CTA */}
        <Link
          href="https://wa.me/6285161917939"
          target="_blank"
          className="text-sm tracking-tight hover:text-muted-foreground transition"
        >
          HUBUNGI KAMI →
        </Link>
      </div>
    </nav>
  )
}
