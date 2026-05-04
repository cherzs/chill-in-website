"use client"

import Link from "next/link"

export function PricingCTA() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <div>
          <p className="text-sm text-muted-foreground mb-2 tracking-widest">HARGA TERJANGKAU</p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            Mulai dari
            <br />
            Rp5.000
          </h2>
        </div>

        <p className="text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
          Opsi rental fleksibel untuk penggunaan harian hingga acara khusus Anda.
        </p>

        <Link
          href="https://wa.me/6285220715706"
          target="_blank"
          className="inline-block bg-foreground text-background px-8 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition"
        >
          Pesan via WhatsApp
        </Link>
      </div>
    </section>
  )
}
