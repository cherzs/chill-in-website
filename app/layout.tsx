import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CHILL.IN - Penyewaan Perlengkapan Outdoor dan Kursi Lipat di Indramayu",
  description:
    "Sewa perlengkapan outdoor berkualitas dan kursi lipat premium untuk camping, hiking, dan petualangan Anda. Mulai dari Rp5.000 di Indramayu, Jawa Barat.",
  keywords: [
    "sewa perlengkapan outdoor",
    "kursi lipat",
    "camping gear",
    "hiking equipment",
    "petualangan outdoor",
    "Indramayu",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "CHILL.IN - Penyewaan Perlengkapan Outdoor",
    description: "Perlengkapan outdoor dan kursi lipat berkualitas untuk petualangan Anda",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#faf8f6",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
