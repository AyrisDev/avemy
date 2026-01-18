import { Metadata } from "next";
import { Navbar } from "@/app/components/layout/Navbar";
import { FloatingActions } from "@/app/components/layout/FloatingActions";

export const metadata: Metadata = {
    title: "KVKK Aydınlatma Metni | EK Hukuk & Danışmanlık",
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
                                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz; veri sorumlusu olarak EK Hukuk & Danışmanlık (“Büro”) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">2. Kişisel Verilerin İşlenme Amacı</h2>
                            <p>
                                Toplanan kişisel verileriniz, Büromuz tarafından sunulan hukuk ve danışmanlık hizmetlerinden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, hukuki süreçlerin takibi, müvekkil ilişkilerinin yönetimi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Hukuki danışmanlık süreçlerinin yürütülmesi</li>
                                <li>Dava ve icra takiplerinin gerçekleştirilmesi</li>
                                <li>Resmi kurumlarla olan yazışmaların yönetimi</li>
                                <li>İletişim taleplerinizin yanıtlanması</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">3. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
                            <p>
                                Kişisel verileriniz, internet sitemizdeki iletişim formları, e-posta, WhatsApp hattımız, telefon veya Marmaris'teki ofisimizde yüz yüze görüşmeler kanalıyla; Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında toplanmaktadır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">4. İşlenen Kişisel Verilerin Aktarılması</h2>
                            <p>
                                Kişisel verileriniz, yasal yükümlülüklerin yerine getirilmesi amacıyla yetkili kamu kurum ve kuruluşları ile adli makamlara, ayrıca savunma hakkının tesisi için gerekli olması halinde ilgili üçüncü kişilere KVKK kapsamında aktarılabilecektir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6">5. Veri Sahibinin Hakları</h2>
                            <p>
                                Kanun’un 11. maddesi uyarınca veri sahibi olarak; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahipsiniz.
                            </p>
                            <p className="mt-4">
                                Haklarınızı kullanmak için taleplerinizi <strong>Marmaris/Muğla</strong> adresindeki ofisimize yazılı olarak veya iletişim kanallarımız üzerinden iletebilirsiniz.
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
