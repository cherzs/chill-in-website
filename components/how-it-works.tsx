"use client"

const steps = [
  {
    number: "01",
    title: "Pilih Perlengkapan",
    description: "Cari dan pilih peralatan yang sesuai dengan kebutuhan Anda",
  },
  {
    number: "02",
    title: "Tentukan Tanggal",
    description: "Pilih tanggal rental sesuai jadwal petualangan Anda",
  },
  {
    number: "03",
    title: "Konfirmasi via WhatsApp",
    description: "Hubungi kami melalui WhatsApp untuk mengkonfirmasi pesanan",
  },
  {
    number: "04",
    title: "Siap Petualang",
    description: "Ambil peralatan dan mulai petualangan Anda",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-balance">Cara Menyewa</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="space-y-4">
              <p className="text-4xl font-light text-muted-foreground">{step.number}</p>
              <h3 className="text-lg font-medium">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
