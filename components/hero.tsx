"use client"

import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative grid md:grid-cols-2 gap-12 items-center py-24 px-6 max-w-7xl mx-auto">
      {/* Left: Text Content */}
      <div className="space-y-8">
        <div>
          <p className="text-xs tracking-widest text-muted-foreground mb-4">INSTAGRAM • WHATSAPP</p>
          <h1 className="text-6xl md:text-7xl font-light leading-tight tracking-tight text-balance">
            Santai
            <br />
            di
            <br />
            Alam
          </h1>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
          Perlengkapan outdoor dan kursi lipat berkualitas tinggi yang dirancang untuk kenyamanan, mobilitas, dan
          petualangan Anda.
        </p>

        <Link href="https://wa.me/6285220715706" target="_blank" className="inline-block text-sm font-medium group">
          Jelajahi →<span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Right: Image Placeholder */}
      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
        <img
          src="/outdoor-camping-chair-nature.jpg"
          alt="Kursi outdoor lipat CHILL.IN di alam terbuka"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
