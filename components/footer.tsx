"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-sm font-medium mb-4">CHILL.IN</h3>
            <p className="text-xs text-muted-foreground">Perlengkapan outdoor premium untuk petualangan Anda.</p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-medium mb-4">NAVIGASI</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="#" className="hover:foreground transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#adventure" className="hover:foreground transition">
                  Petualangan
                </Link>
              </li>
              <li>
                <Link href="#equipment" className="hover:foreground transition">
                  Peralatan
                </Link>
              </li>
              <li>
                <Link href="#collection" className="hover:foreground transition">
                  Koleksi
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Kontak */}
          <div>
            <h3 className="text-sm font-medium mb-4">KONTAK</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="https://wa.me/6285161917939" target="_blank" className="hover:foreground transition">
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/flowcreativconsultant/" target="_blank" className="hover:foreground transition">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Lokasi */}
          <div>
            <h3 className="text-sm font-medium mb-4">LOKASI</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Indramayu
              <br />
              Jawa Barat
              <br />
              Indonesia
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex md:flex-row flex-col justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2025 CHILL.IN. Semua hak cipta dilindungi.</p>
          <p className="text-xs text-muted-foreground">Indramayu, Indonesia</p>
        </div>
        <div className="pt-4 text-center">
          <p className="text-xs text-muted-foreground">
            Dibuat oleh{" "}
            <a
              href="https://flowreativ.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Flow Creativ
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
