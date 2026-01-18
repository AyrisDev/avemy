"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/app/components/layout/Navbar";
import { FloatingActions } from "@/app/components/layout/FloatingActions";
import { Shield, Target, Award, Users, Scale, Globe } from "lucide-react";

const values = [
    {
        title: "Mutlak Gizlilik",
        description: "Müvekkillerimizin verileri ve stratejileri, en yüksek güvenlik standartlarıyla korunur.",
        icon: <Shield size={24} className="text-gold" />
    },
    {
        title: "Stratejik Öngörü",
        description: "Sadece mevcut durumu değil, gelecekteki olası riskleri de analiz ederek hareket ederiz.",
        icon: <Target size={24} className="text-gold" />
    },
    {
        title: "Üst Düzey Temsil",
        description: "Her vaka, hukuk sektörünün en deneyimli uzmanları tarafından titizlikle yönetilir.",
        icon: <Award size={24} className="text-gold" />
    }
];

export default function HakkimizdaClient() {
    return (
        <main className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-gold selection:text-void overflow-hidden">
            <Navbar />

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full" />
            </div>

            {/* Hero Section */}
            <section className="pt-48 pb-32 container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-8">
                        VİZYONUMUZ & DEĞERLERİMİZ
                    </div>
                    <h1 className="text-6xl md:text-9xl font-serif font-black text-white leading-[0.9] mb-12">
                        Adaleti <span className="text-gold italic">Sanata</span> Dönüştürüyoruz.
                    </h1>
                    <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light max-w-2xl">
                        Prestige Law, klasik hukuk anlayışını modern stratejiler ve teknolojik güçle birleştirerek, en karmaşık dosyaları lüks bir butik hizmet anlayışıyla çözer.
                    </p>
                </motion.div>
            </section>

            {/* Content Section: Detailed Story */}
            <section className="py-32 border-t border-white/5 bg-[#0D0D0D]/50 relative">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-4xl font-serif font-black text-white">Hikayemiz</h2>
                        <div className="space-y-6 text-white/50 leading-relaxed text-lg font-light">
                            <p>
                                2005 yılında İstanbul'un kalbinde kurulan Prestige Law, hukuk dünyasında "imkansız" görülen dosyaları başarıyla sonuçlandırma vizyonuyla yola çıktı. Geçen yirmi yıla yakın sürede, sadece bir hukuk bürosu değil, müvekkillerimizin en güvendiği stratejik çözüm ortağı haline geldik.
                            </p>
                            <p>
                                Bugün, küresel ağımız ve 40'tan fazla uzman avukatımızla; ticaret hukukundan bilişim hukukuna, aile hukukundan uluslararası yatırımlara kadar geniş bir yelpazede elit bir hizmet sunuyoruz.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div>
                                <div className="text-3xl font-serif font-bold text-gold mb-2">20+</div>
                                <div className="text-[10px] text-white/30 font-bold tracking-widest uppercase">YILLIK TECRÜBE</div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif font-bold text-gold mb-2">5000+</div>
                                <div className="text-[10px] text-white/30 font-bold tracking-widest uppercase">BAŞARILI DOSYA</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square rounded-3xl overflow-hidden border border-white/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent z-10" />
                        <div className="w-full h-full bg-[#151515] flex items-center justify-center">
                            <Scale size={120} className="text-gold/20" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-32 container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-6">Bizi Ayıran Prensipler</h2>
                    <p className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed text-lg">
                        Prestige Law ismini, sahip olduğumuz sarsılmaz değerlere ve her dosyada gösterdiğimiz mutlak titizliğe borçluyuz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 bg-[#111111] rounded-2xl border border-white/5 hover:border-gold/30 transition-all group"
                        >
                            <div className="w-12 h-12 bg-gold/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-6">{value.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed font-light">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Global Reach Section */}
            <section className="py-32 bg-[#0D0D0D] relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <Globe size={80} className="mx-auto text-gold/20 mb-12" />
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-8">Küresel Etki, Yerel Güç.</h2>
                    <p className="text-xl text-white/40 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
                        Londra'dan New York'a, Dubai'den İstanbul'a uzanan iş birliği ağımızla müvekkillerimize sınır tanımayan bir hukuki koruma kalkanı sunuyoruz. Dünyanın neresinde olursanız olun, adalet bir adım uzağınızda.
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 text-white/30 text-[10px] font-bold tracking-[0.4em] uppercase">
                        <span>İSTANBUL</span>
                        <span className="text-gold">•</span>
                        <span>LONDRA</span>
                        <span className="text-gold">•</span>
                        <span>PARİS</span>
                        <span className="text-gold">•</span>
                        <span>NEW YORK</span>
                        <span className="text-gold">•</span>
                        <span>MÜNİH</span>
                    </div>
                </div>
            </section>

            <FloatingActions />
        </main>
    );
}
