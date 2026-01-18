"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ChevronDown, Send, CheckCircle2, ArrowRight, ShieldCheck, Gavel, Scale } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { Navbar } from "@/app/components/layout/Navbar";
import { FloatingActions } from "@/app/components/layout/FloatingActions";
import { cn } from "@/lib/utils";
import Link from "next/link";

const defaultFaqs = [
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
    const [service] = useState<Service | null>(initialService);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!service) {
        return (
            <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center text-white px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <Scale size={64} className="text-gold/20 mx-auto mb-8" />
                    <h1 className="text-4xl font-serif font-black mb-6 italic tracking-tight">Hizmet Bulunamadı</h1>
                    <Link href="/hizmet" className="text-gold flex items-center justify-center gap-3 uppercase tracking-[0.4em] font-black text-[10px] hover:gap-5 transition-all">
                        TÜM HİZMETLER <ArrowRight size={14} />
                    </Link>
                </motion.div>
            </main>
        );
    }

    const displayFaqs = service.faqs || defaultFaqs;

    return (
        <main className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-gold selection:text-void overflow-x-hidden">
            <Navbar />

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gold z-[60] origin-left"
                style={{ scaleX }}
            />

            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-gold/5 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-56 pb-24 container mx-auto px-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-6xl"
                >
                    <div className="flex items-center gap-6 mb-12">
                        <div className="w-16 h-[1px] bg-gold/50" />
                        <span className="text-gold text-[11px] font-black tracking-[0.5em] uppercase">
                            PROFESYONEL ÇÖZÜM
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif font-black text-white leading-[1.1] md:leading-[0.85] mb-16 tracking-tighter">
                        {service.Title}
                    </h1>

                    <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                        <p className="text-xl md:text-3xl text-white/40 leading-relaxed font-light max-w-3xl italic">
                            "{service.Short_Description || "Hukuki uyuşmazlıklarda mutlak gizlilik ve üstün stratejik başarı."}"
                        </p>
                        <div className="hidden md:block w-[1px] h-20 bg-white/10" />
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                                <ShieldCheck size={20} />
                            </div>
                            <div className="text-[10px] font-black tracking-widest uppercase text-white/30">
                                ANTIGRAVITY <br /> SECURED
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 py-32 relative z-10">
                {/* Left Side: Content & FAQs */}
                <div className="lg:col-span-8 space-y-32">

                    {/* Content Section */}
                    <section className="relative">
                        {service.Content ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="prose prose-invert prose-stone max-w-none 
                                text-white/60 text-xl leading-[2] font-light
                                prose-headings:font-serif prose-headings:text-white prose-headings:font-black prose-headings:mt-24 prose-headings:mb-12
                                prose-p:mb-12
                                prose-strong:text-white prose-strong:font-bold
                                prose-blockquote:border-l-gold prose-blockquote:bg-gold/5 prose-blockquote:py-12 prose-blockquote:px-16 prose-blockquote:rounded-r-[40px] prose-blockquote:italic prose-blockquote:text-white/90 prose-blockquote:font-serif prose-blockquote:text-3xl prose-blockquote:shadow-2xl prose-blockquote:shadow-gold/5"
                                dangerouslySetInnerHTML={{ __html: service.Content }}
                            />
                        ) : (
                            <div className="space-y-16">
                                <h2 className="text-4xl md:text-5xl font-serif font-black text-white flex items-center gap-6">
                                    Stratejik Yol Haritası
                                </h2>
                                <p className="text-xl text-white/50 leading-relaxed font-light max-w-2xl">
                                    Prestige Law Academy standartlarında hazırlanan süreç yönetimi ile her ihtimali hesaplıyor, sizi hedefinize en güvenli yoldan ulaştırıyoruz.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {(service.features || [
                                        { title: "Kapsamlı Vaka Analizi", description: "Vakanın tüm hukuki ve finansal risklerinin 360 derece tespiti." },
                                        { title: "Elit Strateji Tasarımı", description: "Emsal kararlar ve güncel içtihatlar ışığında size özel savunma." },
                                        { title: "Sürekli Operasyonel Destek", description: "Sürecin her aşamasında anlık raporlama ve şeffaf bilgilendirme." },
                                        { title: "Mükemmeliyet Odaklı Sonuç", description: "Hukukun tüm imkanlarını kullanarak elde edilen en iyi netice." }
                                    ]).map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="bg-[#111111] p-10 rounded-3xl border border-white/5 hover:border-gold/30 hover:bg-[#151515] transition-all duration-500 group"
                                        >
                                            <div className="w-14 h-14 bg-gold/5 rounded-2xl flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                                                <CheckCircle2 size={24} />
                                            </div>
                                            <h4 className="text-white text-xl font-bold mb-4 tracking-tight group-hover:text-gold transition-colors">{feature.title}</h4>
                                            <p className="text-white/40 text-[15px] leading-relaxed font-light">{feature.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>

                    {/* FAQ Accordion */}
                    <section className="pt-32 border-t border-white/5">
                        <div className="mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-6">Merak Edilenler</h2>
                            <p className="text-white/40 text-lg font-light">Süreçle ilgili en sık sorulan soruları yanıtladık.</p>
                        </div>
                        <div className="space-y-6">
                            {displayFaqs.map((faq: any, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-[#111111]/50 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full p-10 flex items-center justify-between text-left hover:bg-white/2 transition-all group"
                                    >
                                        <span className="text-xl font-bold text-white/80 tracking-tight group-hover:text-white transition-colors">
                                            {faq.question || faq.q}
                                        </span>
                                        <div className={cn(
                                            "w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gold transition-all duration-500",
                                            openFaq === i ? "bg-gold text-void rotate-180 border-gold" : ""
                                        )}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-10 pt-0 text-white/40 text-lg leading-relaxed font-light border-t border-white/5">
                                                    {faq.answer || faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Side: Sticky Form */}
                <aside className="lg:col-span-4 relative">
                    <div className="lg:sticky lg:top-40">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="bg-[#111111] p-12 rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden group"
                        >
                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 blur-[80px] rounded-full -translate-y-24 translate-x-24 group-hover:bg-gold/20 transition-all duration-700" />

                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif font-black mb-4 text-white">Danışmanlık Alın</h3>
                                <p className="text-white/30 text-[11px] mb-12 uppercase font-black tracking-[0.4em]">Süreç Analizi Başlatın</p>

                                <form className="space-y-10">
                                    <div className="space-y-4">
                                        <label className="block text-[10px] text-white/40 uppercase font-black tracking-widest pl-2">ADINIZ SOYADINIZ</label>
                                        <input
                                            type="text"
                                            className="w-full bg-void/50 border border-white/10 rounded-2xl p-6 text-white focus:outline-none focus:border-gold/40 transition-all placeholder:text-white/5 backdrop-blur-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-[10px] text-white/40 uppercase font-black tracking-widest pl-2">TELEFON VEYA E-POSTA</label>
                                        <input
                                            type="text"
                                            className="w-full bg-void/50 border border-white/10 rounded-2xl p-6 text-white focus:outline-none focus:border-gold/40 transition-all placeholder:text-white/5 backdrop-blur-sm"
                                            placeholder="iletisim@prestige.com"
                                        />
                                    </div>
                                    <Button variant="gold" className="w-full py-8 rounded-2xl flex gap-4 items-center justify-center font-black text-[11px] tracking-[0.3em] uppercase hover:brightness-110 shadow-2xl shadow-gold/10 transform active:scale-95 transition-all">
                                        <Send size={18} /> TALEBİ GÖNDER
                                    </Button>
                                </form>

                                <div className="mt-12 pt-12 border-t border-white/5 text-center">
                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">HIZLI YANIT SİSTEMİ AKTİF</span>
                                    </div>
                                    <p className="text-[10px] text-white/20 font-medium uppercase tracking-widest leading-relaxed px-4">
                                        Verileriniz <span className="text-gold/50 underline underline-offset-4 cursor-pointer hover:text-gold transition-colors">KVKK</span> uyarınca korunmaktadır.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Secondary Card (Small Info) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="mt-8 p-8 bg-gold/5 border border-gold/10 rounded-3xl flex items-center gap-6"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                                <Gavel size={24} />
                            </div>
                            <div className="text-[10px] text-white/40 font-bold tracking-widest leading-relaxed uppercase">
                                ÜCRETSİZ ÖN ANALİZ İÇİN <br /> <span className="text-white">FORMU DOLDURUN</span>
                            </div>
                        </motion.div>
                    </div>
                </aside>
            </div>

            {/* Bottom Call to Action */}
            <section className="py-32 container mx-auto px-6 border-t border-white/5">
                <div className="bg-[#111111] p-16 md:p-32 rounded-[60px] text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66 3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-43c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0-20c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zM31 11c5.523 0 10-4.477 10-10S36.523-9 31-9s-10 4.477-10 10 4.477 10 10 10zm0-20c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z' fill='%23C5A059' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-4xl md:text-7xl font-serif font-black mb-12 leading-tight">
                            Hukuki Güvenliğinizi <br /> <span className="text-gold italic">Zirveye Taşıyın.</span>
                        </h2>
                        <Link href="/iletisim">
                            <Button variant="gold" className="px-16 py-8 rounded-full font-black text-xs tracking-[0.5em] uppercase hover:gap-8 transition-all flex items-center gap-4 mx-auto">
                                ŞİMDİ BAŞLAYIN <ArrowRight size={16} />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <FloatingActions />
        </main>
    );
}
