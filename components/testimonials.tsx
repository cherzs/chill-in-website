"use client"

const testimonials = [
  {
    id: 1,
    quote: "Booking mudah dan perlengkapan dalam kondisi bersih sempurna.",
    author: "Rudi, Camper",
  },
  {
    id: 2,
    quote: "Harga terjangkau dan sempurna untuk liburan akhir pekan camping kami.",
    author: "Siti, Keluarga",
  },
  {
    id: 3,
    quote: "Repot teratasi, kenyamanan maksimal. Akan sewa lagi!",
    author: "Budi, Outdoor Enthusiast",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-muted/30 border-t border-b border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-balance">Catatan Pelanggan</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="space-y-4">
              <p className="text-base leading-relaxed italic text-muted-foreground">"{item.quote}"</p>
              <p className="text-sm font-medium">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
