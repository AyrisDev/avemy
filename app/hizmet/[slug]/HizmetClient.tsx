"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { Navbar } from "@/app/components/layout/Navbar";
import { FloatingActions } from "@/app/components/layout/FloatingActions";
import { cn } from "@/lib/utils";
import Link from "next/link";

const faqs = [
    {
        q: "Süreç ne kadar sürer?",
        a: "Hukuki süreçler davanın karmaşıklığına göre değişiklik gösterse de ortalama 6-12 ay arasında sonuçlanmaktadır.",
    },
    {
        q: "Gerekli belgeler nelerdir?",
        a: "Kimlik fotokopisi, ilgili uyuşmazlığa dair tüm yazışmalar ve varsa sözleşmeler ilk aşamada yeterlidir.",
    },
    {
        q: "Ücretlendirme nasıl yapılır?",
        a: "Baro tarifesi ve davanın niteliğine göre şeffaf bir fiyatlandırma politikası izliyoruz.",
    },
];

interface Service {
    id: string;
    Slug: string;
    Title: string;
    Short_Description?: string;
    Content?: string;
    Icon?: string;
    faqs?: { question: string; answer: string }[];
    features?: { title: string; description: string }[];
}

export default function HizmetDetay({ params, initialService }: { params: { slug: string }, initialService: Service | null }) {
    const [service, setService] = useState<Service | null>(initialService);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    if (!service) {
        return (
            <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center text-white px-6">
                <h1 className="text-4xl font-serif font-bold mb-6 italic">Hizmet Bulunamadı</h1>
                <Link href="/" className="text-gold flex items-center gap-2 uppercase tracking-[0.3em] font-bold text-[10px]">
                    ANASAYFAYA DÖN
                </Link>
            </main>
        );
    }

    const displayFaqs = service.faqs || faqs;

    return (
        <main className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-gold selection:text-void">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-48 pb-24 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-gold" />
                        <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                            UZMANLIK ALANI
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-serif font-black text-white leading-[0.95] mb-12">
                        {service.Title || params.slug.replace("-", " ").toUpperCase()}
                    </h1>

                    <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light max-w-3xl">
                        {service.Short_Description || "Hukuki uyuşmazlıklarda stratejik, gizli ve sonuç odaklı profesyonel destek."}
                    </p>
                </motion.div>
            </section>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pb-32">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-24">
                    {/* Content Section */}
                    <section>
                        {service.Content ? (
                            <div
                                className="prose prose-invert prose-stone max-w-none text-white/60 text-lg leading-[1.9] font-light
                                prose-headings:font-serif prose-headings:text-white prose-headings:font-black prose-headings:mt-20 prose-headings:mb-10
                                prose-p:mb-10
                                prose-strong:text-white prose-strong:font-bold
                                prose-blockquote:border-l-gold prose-blockquote:bg-gold/5 prose-blockquote:py-10 prose-blockquote:px-12 prose-blockquote:rounded-r-3xl prose-blockquote:italic prose-blockquote:text-white/90 prose-blockquote:font-serif prose-blockquote:text-2xl"
                                dangerouslySetInnerHTML={{ __html: service.Content }}
                            />
                        ) : (
                            <div className="space-y-12">
                                <h2 className="text-3xl font-serif font-black text-white flex items-center gap-4">
                                    Süreç ve Strateji
                                </h2>
                                <p className="text-lg text-white/50 leading-relaxed font-light">
                                    Prestige Law olarak, her vakayı kendine özgü dinamikleriyle ele alıyoruz.
                                    Karmaşık süreçleri basitleştiren stratejik bir yol haritası ile yanınızdayız.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                    {(service.features || [
                                        { title: "Detaylı Analiz", description: "Vakanın tüm risk ve fırsatlarının tespiti." },
                                        { title: "Stratejik Planlama", description: "Hedef odaklı hukuki yol haritası." },
                                        { title: "Sürekli İletişim", description: "Her adımda şeffaf bilgilendirme." },
                                        { title: "Eşsiz Sonuçlar", description: "Hukukun gücüyle en iyi netice." }
                                    ]).map((feature, i) => (
                                        <div key={i} className="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-gold/20 transition-all">
                                            <div className="w-10 h-10 bg-gold/5 rounded flex items-center justify-center text-gold mb-6">
                                                <CheckCircle2 size={20} />
                                            </div>
                                            <h4 className="text-white font-bold mb-3 tracking-tight">{feature.title}</h4>
                                            <p className="text-white/40 text-[13px] leading-relaxed font-light">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>

                    {/* FAQ Accordion */}
                    <section className="pt-20 border-t border-white/5">
                        <h2 className="text-3xl font-serif font-black text-white mb-12">Sıkça Sorulan Sorular</h2>
                        <div className="space-y-4">
                            {displayFaqs.map((faq: any, i) => (
                                <div key={i} className="bg-[#111111] rounded-2xl overflow-hidden border border-white/5">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full p-8 flex items-center justify-between text-left hover:bg-white/2 transition-colors"
                                    >
                                        <span className="font-bold text-white/80 tracking-tight">{faq.question || faq.q}</span>
                                        <ChevronDown
                                            className={cn("text-gold transition-transform duration-500", openFaq === i ? "rotate-180" : "")}
                                            size={20}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-8 pt-0 text-white/40 text-[15px] leading-relaxed font-light border-t border-white/5">
                                                    {faq.answer || faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sticky Lead Form */}
                <aside className="lg:col-span-4 relative">
                    <div className="lg:sticky lg:top-36">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-[#111111] p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full -translate-y-16 translate-x-16" />

                            <h3 className="text-2xl font-serif font-black mb-3 text-white">İletişime Geçin</h3>
                            <p className="text-white/30 text-[10px] mb-10 uppercase tracking-[0.3em] font-bold">Özel Danışmanlık Alın</p>

                            <form className="space-y-8">
                                <div className="space-y-3">
                                    <label className="block text-[10px] text-white/30 uppercase font-black tracking-widest pl-1">AD SOYAD</label>
                                    <input
                                        type="text"
                                        className="w-full bg-void border border-white/5 rounded-xl p-5 text-white focus:outline-none focus:border-gold/30 transition-all placeholder:text-white/10"
                                        placeholder="Adınız Soyadınız"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-[10px] text-white/30 uppercase font-black tracking-widest pl-1">E-POSTA VEYA TELEFON</label>
                                    <input
                                        type="text"
                                        className="w-full bg-void border border-white/5 rounded-xl p-5 text-white focus:outline-none focus:border-gold/30 transition-all placeholder:text-white/10"
                                        placeholder="iletisim@adresiniz.com"
                                    />
                                </div>
                                <Button variant="gold" className="w-full py-6 rounded-xl flex gap-3 items-center justify-center font-black text-xs tracking-widest uppercase hover:brightness-110 shadow-xl shadow-gold/10">
                                    <Send size={16} /> BAŞVURU GÖNDER
                                </Button>
                            </form>

                            <div className="mt-10 pt-10 border-t border-white/5 text-center">
                                <p className="text-[9px] text-white/20 font-medium uppercase tracking-widest leading-relaxed">
                                    Tüm verileriniz <span className="text-gold/60 underline underline-offset-4 cursor-pointer">Gizlilik Politikamız</span> kapsamında korunmaktadır.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </aside>
            </div>

            <FloatingActions />
        </main>
    );
}
