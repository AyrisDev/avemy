"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/app/components/layout/Navbar";
import { FloatingActions } from "@/app/components/layout/FloatingActions";
import { Phone, Mail, MapPin, Clock, Send, Globe } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import Link from "next/link";

export default function IletisimClient() {
    return (
        <main className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-gold selection:text-void overflow-hidden">
            <Navbar />

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full" />
            </div>

            <section className="pt-48 pb-32 container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <div className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
                        BİZE ULAŞIN
                    </div>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-black text-white mb-8 leading-[1.1]">
                        Geleceğinizi <span className="text-gold italic">Konuşalım.</span>
                    </h1>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Hukuki süreçleriniz için ilk adımı bugün atın. Uzman ekibimizle size özel bir strateji geliştirmek için buradayız.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left: Info Cards */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#111111] p-10 rounded-3xl border border-white/5 space-y-12"
                        >
                            <div className="flex items-start gap-8">
                                <div className="w-14 h-14 bg-gold/5 rounded-2xl flex items-center justify-center text-gold shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-3 tracking-tight">Merkez Ofisimiz</h3>
                                    <p className="text-white/40 text-[15px] leading-relaxed font-light">
                                        Marmaris / Muğla<br />
                                        Türkiye
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-8">
                                <div className="w-14 h-14 bg-gold/5 rounded-2xl flex items-center justify-center text-gold shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-3 tracking-tight">Telefon ve WhatsApp</h3>
                                    <p className="text-white/40 text-[15px] leading-relaxed font-light">
                                        <a href="tel:+905421458713" className="hover:text-gold transition-colors">+90 (542) 145 87 13</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-8">
                                <div className="w-14 h-14 bg-gold/5 rounded-2xl flex items-center justify-center text-gold shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-3 tracking-tight">E-Posta Adresimiz</h3>
                                    <p className="text-white/40 text-[15px] leading-relaxed font-light">
                                        info@aveminakarabudak.com<br />
                                        aveminakarabudak@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-8">
                                <div className="w-14 h-14 bg-gold/5 rounded-2xl flex items-center justify-center text-gold shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-3 tracking-tight">Çalışma Saatlerimiz</h3>
                                    <p className="text-white/40 text-[15px] leading-relaxed font-light">
                                        Hafta İçi: 09:00 - 18:30<br />
                                        Cumartesi: 10:00 - 14:00 (Ön Görüşme ile)
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="p-10 bg-gold rounded-3xl text-void">
                            <h3 className="text-2xl font-serif font-black mb-4">Türkiye Geneli Temsil</h3>
                            <p className="text-void/60 text-sm leading-relaxed mb-8 font-medium">
                                Marmaris merkezli ofisimizle Türkiye'nin her ilinde profesyonel hukuki danışmanlık ve dava yönetimi sunuyoruz.
                            </p>
                            <div className="flex items-center gap-2 font-black text-[10px] tracking-widest uppercase">
                                <Globe size={16} /> NATIONAL NETWORK ACTIVE
                            </div>
                        </div>
                    </div>

                    {/* Right: Modern Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#111111] p-10 md:p-16 rounded-3xl border border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full -translate-y-32 translate-x-32" />

                            <h2 className="text-3xl font-serif font-black text-white mb-12">Hemen İletişime Geçin</h2>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <div className="space-y-3">
                                    <label className="block text-[10px] text-white/30 uppercase font-black tracking-widest">AD SOYAD</label>
                                    <input
                                        type="text"
                                        className="w-full bg-void border border-white/10 rounded-xl p-5 text-white focus:outline-none focus:border-gold/30 transition-all placeholder:text-white/5"
                                        placeholder="Ali Yılmaz"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-[10px] text-white/30 uppercase font-black tracking-widest">E-POSTA</label>
                                    <input
                                        type="email"
                                        className="w-full bg-void border border-white/10 rounded-xl p-5 text-white focus:outline-none focus:border-gold/30 transition-all placeholder:text-white/5"
                                        placeholder="info@aveminakarabudak.com"
                                    />
                                </div>
                                <div className="space-y-3 md:col-span-2">
                                    <label className="block text-[10px] text-white/30 uppercase font-black tracking-widest">YARDIM İSTEDİĞİNİZ KONU</label>
                                    <select className="w-full bg-void border border-white/10 rounded-xl p-5 text-white focus:outline-none focus:border-gold/30 transition-all appearance-none">
                                        <option>Genel Hukuki Danışmanlık</option>
                                        <option>Ticaret ve Şirketler Hukuku</option>
                                        <option>Gayrimenkul ve İnşaat Hukuku</option>
                                        <option>Ceza Hukuku Savunma</option>
                                        <option>Aile ve Boşanma Hukuku</option>
                                        <option>Diğer</option>
                                    </select>
                                </div>
                                <div className="space-y-3 md:col-span-2">
                                    <label className="block text-[10px] text-white/30 uppercase font-black tracking-widest">MESAJINIZ</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-void border border-white/10 rounded-xl p-5 text-white focus:outline-none focus:border-gold/30 transition-all placeholder:text-white/5 resize-none"
                                        placeholder="Konu hakkında kısa bir ön bilgi veriniz..."
                                    />
                                </div>
                                <div className="md:col-span-2 pt-6">
                                    <Button variant="gold" className="w-full py-6 rounded-xl flex gap-3 items-center justify-center font-black text-xs tracking-[0.3em] uppercase hover:scale-[1.02] transition-transform shadow-2xl shadow-gold/10">
                                        <Send size={18} /> MESAJI GÖNDER
                                    </Button>
                                    <p className="mt-8 text-[9px] text-white/20 text-center font-medium leading-relaxed tracking-widest">
                                        BU FORMU DOLDURARAK <Link href="/kvkk" className="text-gold/60 underline cursor-pointer hover:text-gold transition-colors">KVKK AYDINLATMA METNİNİ</Link> KABUL ETMİŞ OLURSUNUZ.
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FloatingActions />
        </main>
    );
}
