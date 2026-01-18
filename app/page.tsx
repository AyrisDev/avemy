import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { TrustStrip } from "./components/sections/TrustStrip";
import { Services } from "./components/sections/Services";
import { Testimonials } from "./components/sections/Testimonials";
import { FloatingActions } from "./components/layout/FloatingActions";
import { Globe, Share2 } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] selection:bg-gold selection:text-void">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Testimonials />

      {/* Footer */}
      <footer className="py-32 border-t border-white/5 bg-[#0A0A0A] relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Logo Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center transform rotate-45">
                  <div className="w-4 h-4 text-white -rotate-45 font-bold flex items-center justify-center">P</div>
                </div>
                <span className="text-xl font-serif font-black tracking-tighter text-white">
                  PRESTIGE<span className="text-gold">LAW</span>
                </span>
              </div>
              <p className="text-white/40 text-[13px] leading-relaxed max-w-xs">
                Hukuki mükemmeliyette küresel bir standart, karmaşık zorluklar için kişiselleştirilmiş çözümler sunar.
              </p>
            </div>

            {/* Firm Column */}
            <div>
              <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase mb-8">KURUMSAL</h4>
              <ul className="space-y-4 text-white/40 text-[11px] font-bold tracking-widest">
                <li><a href="#" className="hover:text-gold transition-colors">Hikayemiz</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Avukatlarımız</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Kariyer</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Basın Odası</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase mb-8">YASAL</h4>
              <ul className="space-y-4 text-white/40 text-[11px] font-bold tracking-widest">
                <li><a href="#" className="hover:text-gold transition-colors">Kullanım Koşulları</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Gizlilik Politikası</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Yasal Uyarı</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Çerez Politikası</a></li>
              </ul>
            </div>

            {/* Office Column */}
            <div>
              <h4 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase mb-8">OFİS</h4>
              <ul className="space-y-4 text-white/40 text-[11px] leading-relaxed">
                <li>1000 Madison Avenue<br />New York, NY 10021</li>
                <li>+1 (800) 555-0199</li>
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
              © 2024 PRESTIGE LAW INTERNATIONAL. TÜM HAKLARI SAKLIDIR.
            </div>
            <div className="flex gap-8 text-white/20 text-[9px] font-bold tracking-[0.2em] uppercase">
              <a href="#" className="hover:text-white transition-colors">MÜVEKKİL PANELİ</a>
              <a href="#" className="hover:text-white transition-colors">PERSONEL GİRİŞİ</a>
            </div>
          </div>
        </div>
      </footer>

      <FloatingActions />
    </main>
  );
}
