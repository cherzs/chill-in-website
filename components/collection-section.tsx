"use client"

const collections = [
  {
    id: 1,
    name: "Paket Berkemah",
    description: "Setup lengkap untuk pengalaman berkemah",
    image: "/paket-berkemah.jpg",
  },
  {
    id: 2,
    name: "Paket Hangout",
    description: "Kursi dan aksesori untuk bersantai bersama teman",
    image: "/paket-hangout.jpg",
  },
  {
    id: 3,
    name: "Essentials Hiking",
    description: "Gear penting untuk petualangan hiking",
    image: "/essentials-hiking.jpg",
  },
  {
    id: 4,
    name: "Setup Event Outdoor",
    description: "Perlengkapan lengkap untuk acara outdoor Anda",
    image: "/setup-event-outdoor.jpg",
  },
]

export function CollectionSection() {
  return (
    <section id="collection" className="py-24 px-6 bg-muted/30 border-t border-b border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-balance">Koleksi Outdoor 2025</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group aspect-video bg-background rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
