"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/app/components/layout/Navbar";
import { FloatingActions } from "@/app/components/layout/FloatingActions";
import { Shield, Target, Award, Users, Scale, Globe } from "lucide-react";
import Image from "next/image";

import { Footer } from "@/app/components/layout/Footer";

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
                    <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[7rem] font-serif font-black text-white leading-[1.1] md:leading-[0.9] mb-12">
                        Hukuki Birikim ve <span className="text-gold italic">Mesleki Sadakat.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light max-w-3xl">
                        Muğla Barosu levhasına kayıtlı Av. Emina KARABUDAK liderliğinde, hukukun üstünlüğü ve mutlak gizlilik ilkeleri doğrultusunda, karmaşık uyuşmazlıklarda stratejik savunma ve efektif danışmanlık hizmeti sunmaktayız.
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
                        <h2 className="text-4xl font-serif font-black text-white">Hakkımızda</h2>
                        <div className="space-y-6 text-white/50 leading-relaxed text-lg font-light">
                            <p>
                                Muğla Marmaris’te faaliyet gösteren avukatlık büromuz, <strong>Av. Emina KARABUDAK</strong> liderliğinde Türkiye genelinde hukuki danışmanlık ve avukatlık hizmeti sunmaktadır. Bireysel ve kurumsal müvekkillerimize, hukukun tüm alanlarında profesyonel, güvenilir ve çözüm odaklı destek sağlamaktayız.
                            </p>
                            <p>
                                Hukuk büromuz; <strong className="text-white font-bold">ceza hukuku, aile hukuku, boşanma hukuku, miras hukuku, iş hukuku, ticaret hukuku, icra ve iflas hukuku, gayrimenkul hukuku, idare hukuku</strong> başta olmak üzere tüm hukuk alanlarında uzmanlıkla hizmet vermektedir. Her hukuki uyuşmazlık, kendi dinamikleri çerçevesinde değerlendirilmekte ve müvekkillerimiz için en etkili hukuki strateji oluşturulmaktadır.
                            </p>
                            <p>
                                Marmaris avukat arayışında olan müvekkillerimiz başta olmak üzere, gelişen teknolojik imkânlar sayesinde Türkiye’nin her iline online ve fiziki hukuki hizmet sunmaktayız. Güncel mevzuat ve yargı kararları ışığında, hak kaybı yaşanmaması için sürecin her aşaması titizlikle takip edilmektedir.
                            </p>
                            <p>
                                Temel prensibimiz; hukuki güven, şeffaf iletişim ve etkin savunma anlayışıyla müvekkillerimizin haklarını en güçlü şekilde korumaktır. Hukuki danışmanlık, dava takibi ve uyuşmazlık çözümünde profesyonel destek almak isteyen herkes için ulaşılabilir ve sonuç odaklı bir hizmet anlayışı benimsenmektedir.
                            </p>
                            <p>
                                Marmaris merkezli ancak Türkiye genelinde hizmet veren avukatlık büromuz, hukuki sorunlarınıza doğru ve kalıcı çözümler sunmak için yanınızdadır.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div>
                                <div className="text-3xl font-serif font-bold text-gold mb-2">2022</div>
                                <div className="text-[10px] text-white/30 font-bold tracking-widest uppercase">KURULUŞ YILI</div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif font-bold text-gold mb-2">81 İL</div>
                                <div className="text-[10px] text-white/30 font-bold tracking-widest uppercase">HİZMET AĞI</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group ml-auto w-full max-w-[320px] lg:max-w-[500px]"
                    >
                        <Image
                            src="/emina_karabudak.jpg"
                            alt="Av. Emina KARABUDAK"
                            fill
                            className="object-cover filter grayscale-[0.8] contrast-[1.1] brightness-[0.85] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent opacity-80" />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-void to-transparent z-10" />
                    </motion.div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-32 container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-6">Bizi Ayıran Prensipler</h2>
                    <p className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed text-lg">
                        EK Hukuk ismini, sahip olduğumuz sarsılmaz değerlere ve her dosyada gösterdiğimiz mutlak titizliğe borçluyuz.
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
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-8">Türkiye Genelinde, Üstün Temsil.</h2>
                    <p className="text-xl text-white/40 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
                        Marmaris merkezli ofisimiz ve Muğla Barosu'na kayıtlı avukatlarımızla, Türkiye'nin 81 iline uzanan profesyonel hukuki danışmanlık sağlıyoruz.
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 text-white/30 text-[10px] font-bold tracking-[0.4em] uppercase">
                        <span>MARMARİS</span>
                        <span className="text-gold">•</span>
                        <span>MUĞLA</span>
                        <span className="text-gold">•</span>
                        <span>TÜRKİYE GENELİ</span>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingActions />
        </main>
    );
}
