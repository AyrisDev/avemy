import React from "react";
import { Building2, Gavel, Scale, ShieldCheck, Briefcase, Landmark } from "lucide-react";

export interface Service {
    id?: string;
    Slug: string;
    Title: string;
    Short_Description: string;
    Content?: string;
    Icon?: string;
    faqs?: { question: string; answer: string }[];
    features?: { title: string; description: string }[];
    iconElement?: React.ReactNode;
}

export const defaultPractices: Service[] = [
    {
        Title: "Ticaret ve Şirketler Hukuku",
        Short_Description: "Şirket kuruluşu, birleşme ve devralmalar, ticari sözleşmeler ve kurumsal yönetim süreçlerinde tüm Türkiye genelinde uzman hukuki destek sunuyoruz.",
        Slug: "ticaret-ve-sirketler-hukuku",
        iconElement: <Building2 className="text-gold" size={32} />,
        Content: `
            <p>Ticaret ve Şirketler Hukuku, modern iş dünyasının temel taşlarını oluşturur. EK Hukuk olarak, yerel girişimlerden ulusal çaplı şirketlere kadar geniş bir yelpazede hukuki danışmanlık sağlıyoruz.</p>
            <h3>Hizmet Kapsamımız</h3>
            <ul>
                <li>Şirket Kuruluş ve Yapılandırma İşlemleri</li>
                <li>Ticari Sözleşmelerin Hazırlanması ve İncelenmesi</li>
                <li>Birleşme ve Devralma (M&A) Süreçleri</li>
                <li>Kurumsal Yönetim ve Uyumluluk</li>
                <li>Ticari Alacak Takibi ve Dava Yönetimi</li>
            </ul>
            <blockquote>"Güçlü bir hukuki altyapı, ticari başarının en büyük teminatıdır."</blockquote>
            <p>Marmaris merkezli ofisimizden, Türkiye'nin her noktasındaki ticari operasyonlarınız için stratejik ve sonuç odaklı çözümler üretiyoruz.</p>
        `,
        features: [
            { title: "Kurumsal Risk Analizi", description: "Şirketinizin hukuki karnesini çıkararak olası riskleri önceden belirliyoruz." },
            { title: "Stratejik Sözleşme Yönetimi", description: "Haklarınızı en üst düzeyde koruyan, ticari gerçeklerle uyumlu sözleşmeler." },
            { title: "Hızlı Uyuşmazlık Çözümü", description: "Ticari hayatın akışını bozmadan, alternatif çözüm yolları ve etkin dava takibi." }
        ],
        faqs: [
            { question: "Şirket kuruluşu ne kadar sürer?", answer: "Gerekli belgeler tamamlandıktan sonra genellikle 1-3 iş günü içerisinde tescil işlemleri tamamlanır." },
            { question: "Yabancı ortaklı şirket kurulabilir mi?", answer: "Evet, Türkiye'de yabancı gerçek veya tüzel kişilerin %100 pay sahibi olduğu şirketler kurulabilmektedir." }
        ]
    },
    {
        Title: "Aile ve Boşanma Hukuku",
        Short_Description: "Boşanma, velayet, mal paylaşımı ve nafaka gibi hassas süreçlerde gizlilik esasıyla ve profesyonel bir yaklaşımla yanınızdayız.",
        Slug: "aile-ve-bosanma-hukuku",
        iconElement: <Scale className="text-gold" size={32} />,
        Content: `
            <p>Aile hukuku, sadece yasaların değil, aynı zamanda duygusal dengelerin de gözetilmesi gereken bir alandır. EK Hukuk, bu süreçte müvekkillerine hem hukuki hem de stratejik rehberlik sunar.</p>
            <h3>Uzmanlık Alanlarımız</h3>
            <ul>
                <li>Anlaşmalı ve Çekişmeli Boşanma Davaları</li>
                <li>Velayet ve Kişisel İlişki Tesisi</li>
                <li>Mal Rejiminin Tasfiyesi (Mal Paylaşımı)</li>
                <li>Nafaka ve Tazminat Talepleri</li>
                <li>Soybağı ve Evlat Edinme Süreçleri</li>
            </ul>
        `,
        features: [
            { title: "Mutlak Gizlilik", description: "Özel hayatınızın gizliliği bizim için en kutsal değerdir." },
            { title: "Çocuk Odaklı Yaklaşım", description: "Velayet süreçlerinde çocukların psikolojik ve sosyal menfaatlerini önceliklendiriyoruz." },
            { title: "Adil Mal Paylaşımı", description: "Yılların birikimini korumak için titiz finansal analiz ve hukuki takip." }
        ]
    },
    {
        Title: "Gayrimenkul Hukuku",
        Short_Description: "Tapu iptal ve tescil, kira uyuşmazlıkları ve inşaat projeleri yönetiminde hukuki güvence sağlıyoruz.",
        Slug: "gayrimenkul-hukuku",
        iconElement: <Landmark className="text-gold" size={32} />
    },
    {
        Title: "Ceza Hukuku",
        Short_Description: "Soruşturma ve kovuşturma evrelerinde, temel hak ve özgürlüklerin korunması odaklı etkin savunma stratejileri geliştiriyoruz.",
        Slug: "ceza-hukuku",
        iconElement: <Gavel className="text-gold" size={32} />
    },
    {
        Title: "Varlık ve Miras Yönetimi",
        Short_Description: "Vasiyetname hazırlama, mirasçılık belgesi alımı ve miras taksim sözleşmeleri ile geleceğinizi güvence altına alıyoruz.",
        Slug: "varlik-ve-miras-yonetimi",
        iconElement: <Briefcase className="text-gold" size={32} />
    },
    {
        Title: "Bilişim ve Teknoloji Hukuku",
        Short_Description: "KVKK uyum süreçleri, e-ticaret hukuku ve siber suçlarla mücadelede güncel hukuki çözümler sunuyoruz.",
        Slug: "bilisim-ve-teknoloji-hukuku",
        iconElement: <ShieldCheck className="text-gold" size={32} />
    }
];
