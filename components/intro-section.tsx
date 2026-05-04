"use client"

export function IntroSection() {
  return (
    <section className="py-20 px-6 bg-muted/30 border-t border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Text Block */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Kami membantu Anda menyiapkan perlengkapan outdoor yang sempurna
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Kombinasi kenyamanan, fungsionalitas, dan kesederhanaan adalah fondasi dari setiap produk yang kami
              tawarkan.
            </p>
          </div>

          {/* Image Block */}
          <div className="aspect-square bg-background rounded-lg overflow-hidden">
            <img
              src="/folding-chair-camping-setup.jpg"
              alt="Kursi lipat siap untuk petualangan outdoor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
