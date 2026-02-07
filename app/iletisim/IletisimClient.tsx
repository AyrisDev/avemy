"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/app/components/layout/Navbar";
import { FloatingActions } from "@/app/components/layout/FloatingActions";
import { Phone, Mail, MapPin, Clock, Send, Globe } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import Link from "next/link";

import { Footer } from "@/app/components/layout/Footer";

export default function IletisimClient() {
    const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        subject: "Ceza Hukuku",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error('Mesaj gönderilemedi');

            setStatus("success");
            setFormData({ name: "", email: "", phone: "", subject: "Ceza Hukuku", message: "" });

            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Form Error:", error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

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


                    <p className="text-white/40 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Hukuki sorunlarınızın çözümü için profesyonel bir bakış açısına ihtiyacınız olduğunda yanınızdayız. Randevu talepleriniz ve sorularınız için bize ulaşın.
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
                                        Siteler Mah. Yunus Nadi Cad. No:127 Daire:12 (5.Noter Üstü) Marmaris / Muğla<br />
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
                                        Hafta İçi: 09:00 - 17:00<br />
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

                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <div className="space-y-3">
                                    <label className="block text-[10px] text-white/30 uppercase font-black tracking-widest">AD SOYAD</label>
                                    <input
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full bg-void border border-white/10 rounded-xl p-5 text-white focus:outline-none focus:border-gold/30 transition-all placeholder:text-white/5"
                                        placeholder="Ahmet Batur"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-[10px] text-white/30 uppercase font-black tracking-widest">E-POSTA</label>
                                    <input
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        className="w-full bg-void border border-white/10 rounded-xl p-5 text-white focus:outline-none focus:border-gold/30 transition-all placeholder:text-white/5"
                                        placeholder="info@aveminakarabudak.com"
                                    />
                                </div>
                                <div className="space-y-3 md:col-span-2">
                                    <label className="block text-[10px] text-white/30 uppercase font-black tracking-widest">TELEFON</label>
                                    <input
                                        required
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        className="w-full bg-void border border-white/10 rounded-xl p-5 text-white focus:outline-none focus:border-gold/30 transition-all placeholder:text-white/5"
                                        placeholder="+90 5xx xxx xx xx"
                                    />
                                </div>
                                <div className="space-y-3 md:col-span-2">
                                    <label className="block text-[10px] text-white/30 uppercase font-black tracking-widest">YARDIM İSTEDİĞİNİZ KONU</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-void border border-white/10 rounded-xl p-5 text-white focus:outline-none focus:border-gold/30 transition-all appearance-none cursor-pointer"
                                    >
                                        <option>Ceza Hukuku</option>
                                        <option>Aile ve Boşanma Hukuku</option>
                                        <option>Gayrimenkul ve Kira Hukuku</option>
                                        <option>Miras Hukuku</option>
                                        <option>İdare ve Vergi Hukuku</option>
                                        <option>Diğer</option>
                                    </select>
                                </div>
                                <div className="space-y-3 md:col-span-2">
                                    <label className="block text-[10px] text-white/30 uppercase font-black tracking-widest">MESAJINIZ</label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full bg-void border border-white/10 rounded-xl p-5 text-white focus:outline-none focus:border-gold/30 transition-all placeholder:text-white/5 resize-none"
                                        placeholder="Konu hakkında kısa bir ön bilgi veriniz..."
                                    />
                                </div>
                                <div className="md:col-span-2 pt-6">
                                    <Button
                                        variant="gold"
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full py-6 rounded-xl flex gap-3 items-center justify-center font-black text-xs tracking-[0.3em] uppercase hover:scale-[1.02] transition-transform shadow-2xl shadow-gold/10 disabled:opacity-50 disabled:hover:scale-100"
                                    >
                                        {status === "loading" ? (
                                            <div className="w-5 h-5 border-2 border-void/20 border-t-void rounded-full animate-spin" />
                                        ) : (
                                            <><Send size={18} /> MESAJI GÖNDER</>
                                        )}
                                    </Button>

                                    {status === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-6 p-4 bg-green-500/10 border border-green-500/20 text-green-500 text-center rounded-xl text-xs font-bold tracking-widest uppercase"
                                        >
                                            Mesajınız başarıyla iletildi. En kısa sürede dönüş sağlayacağız.
                                        </motion.div>
                                    )}

                                    {status === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-center rounded-xl text-xs font-bold tracking-widest uppercase"
                                        >
                                            Bir hata oluştu. Lütfen tekrar deneyiniz.
                                        </motion.div>
                                    )}

                                    <p className="mt-8 text-[9px] text-white/20 text-center font-medium leading-relaxed tracking-widest">
                                        BU FORMU DOLDURARAK <Link href="/kvkk" className="text-gold/60 underline cursor-pointer hover:text-gold transition-colors">KVKK AYDINLATMA METNİNİ</Link> KABUL ETMİŞ OLURSUNUZ.
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingActions />
        </main>
    );
}
