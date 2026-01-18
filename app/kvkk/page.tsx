import { Metadata } from "next";
import { Navbar } from "@/app/components/layout/Navbar";
import { FloatingActions } from "@/app/components/layout/FloatingActions";

export const metadata: Metadata = {
    title: "KVKK Aydınlatma Metni | Veri Güvenliği | Prestige Law",
    description: "Kişisel verilerinizin işlenmesi ve korunması hakkındaki yasal bilgilendirme.",
};

export default function KVKKPage() {
    return (
        <main className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-gold selection:text-void">
            <Navbar />

            <section className="pt-48 pb-32 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-12">KVKK <span className="text-gold">Aydınlatma Metni</span></h1>

                    <div className="prose prose-invert prose-stone max-w-none text-white/60 leading-relaxed space-y-12">
                        <section>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">1. Veri Sorumlusu</h2>
                            <p>
                                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz; veri sorumlusu olarak Prestige Law International Hukuk Bürosu (“Büro”) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">2. Kişisel Verilerin İşlenme Amacı</h2>
                            <p>
                                Toplanan kişisel verileriniz, Büromuz tarafından sunulan hukuk ve danışmanlık hizmetlerinden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, hukuki süreçlerin takibi, müvekkil ilişkilerinin yönetimi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">3. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
                            <p>
                                Kişisel verileriniz, internet sitemizdeki iletişim formları, e-posta, telefon veya yüz yüze görüşmeler kanalıyla; Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında toplanmaktadır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">4. Veri Sahibinin Hakları</h2>
                            <p>
                                Kanun’un 11. maddesi uyarınca veri sahibi olarak; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahipsiniz.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-white/5 text-[12px] text-white/30 italic">
                            Son Güncelleme: 18 Ocak 2026
                        </div>
                    </div>
                </div>
            </section>

            <FloatingActions />
        </main>
    );
}
