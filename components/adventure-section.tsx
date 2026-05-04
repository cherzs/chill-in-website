"use client"

export function AdventureSection() {
  return (
    <section id="adventure" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-6">
              Dirancang untuk momen outdoor yang sejati
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Dari malam berkemah yang tenang hingga hari petualangan aktif, kami punya yang Anda butuhkan.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Setiap produk dipilih dengan cermat untuk memberikan kenyamanan maksimal tanpa mengorbankan kepraktisan.
            </p>
          </div>

          {/* Right: Image */}
          <div className="aspect-square bg-background rounded-lg overflow-hidden">
            <img
              src="/outdoor-adventure-camping-landscape.jpg"
              alt="Momen petualangan outdoor dengan perlengkapan CHILL.IN"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
