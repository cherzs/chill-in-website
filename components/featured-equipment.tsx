"use client"

import Link from "next/link"

const equipment = [
  {
    id: 1,
    name: "Kursi Outdoor Lipat",
    description: "Ringan, kuat, dan nyaman untuk dibawa kemana saja",
    link: "https://wa.me/6285220715706",
    image: "/kursi-outdoor-lipat.jpg",
  },
  {
    id: 2,
    name: "Perlengkapan Berkemah",
    description: "Lengkap untuk pengalaman menginap yang santai di alam",
    link: "https://wa.me/6285220715706",
    image: "/perlengkapan-berkemah.jpg",
  },
  {
    id: 3,
    name: "Gear Hiking",
    description: "Alat praktis untuk petualangan eksplorasi yang aman",
    link: "https://wa.me/6285220715706",
    image: "/gear-hiking.jpg",
  },
]

export function FeaturedEquipment() {
  return (
    <section id="equipment" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-balance">Peralatan Unggulan</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {equipment.map((item) => (
            <div key={item.id} className="group border border-border rounded-lg p-8 hover:bg-muted/50 transition">
              <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-medium mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
              <Link href={item.link} target="_blank" className="text-sm font-medium group-hover:text-accent transition">
                Pelajari lebih lanjut →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
