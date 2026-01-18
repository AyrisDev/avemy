"use client";

import React from "react";
import Link from "next/link";
import { Share2, Globe, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-24 border-t border-white/5 bg-[#0A0A0A] relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Logo Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <img
                                src="/ek_logo.png"
                                alt="EK Hukuk Logo"
                                className="h-12 w-auto object-contain"
                            />
                            <span className="text-xl font-serif font-black tracking-tighter text-white">
                                EK<span className="text-gold">HUKUK</span>
                            </span>
                        </div>
                        <p className="text-white/40 text-[13px] leading-relaxed max-w-xs font-light">
                            Hukukta güven ve profesyonelliğin adresi. Marmaris merkezli ofisimizle Türkiye genelinde hukuki danışmanlık hizmeti sunuyoruz.
                        </p>
                    </div>

                    {/* Quick Access */}
                    <div>
                        <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase mb-8">KURUMSAL</h4>
                        <ul className="space-y-4 text-white/40 text-[11px] font-bold tracking-widest uppercase">
                            <li><Link href="/hakkimizda" className="hover:text-gold transition-colors">Hakkımızda</Link></li>
                            <li><Link href="/hizmetlerimiz" className="hover:text-gold transition-colors">Hizmetlerimiz</Link></li>
                            <li><Link href="/blog" className="hover:text-gold transition-colors">Hukuk Rehberi</Link></li>
                            <li><Link href="/iletisim" className="hover:text-gold transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase mb-8">YASAL</h4>
                        <ul className="space-y-4 text-white/40 text-[11px] font-bold tracking-widest uppercase">
                            <li><Link href="/kvkk" className="hover:text-gold transition-colors">KVKK Aydınlatma Metni</Link></li>
                            <li><Link href="/iletisim" className="hover:text-gold transition-colors">Randevu Talebi</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase mb-8">İLETİŞİM</h4>
                        <ul className="space-y-4 text-white/40 text-[13px] font-light">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-gold shrink-0 mt-1" />
                                <span>Marmaris / Muğla</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-gold shrink-0" />
                                <a href="tel:+905421458713" className="hover:text-gold transition-colors">+90 (542) 145 87 13</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-gold shrink-0" />
                                <a href="mailto:info@aveminakarabudak.com" className="hover:text-gold transition-colors text-[11px]">info@aveminakarabudak.com</a>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-8">
                            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all">
                                <Share2 size={16} />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all">
                                <Globe size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
                    <div className="text-white/20 text-[9px] font-bold tracking-[0.2em] uppercase">
                        © {new Date().getFullYear()} Av. Emina KARABUDAK | EK Hukuk & Danışmanlık.
                    </div>
                </div>
            </div>
        </footer>
    );
};
