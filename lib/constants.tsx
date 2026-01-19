import { Building2, Gavel, Scale, ShieldCheck, Briefcase, Landmark, Users, Home, FileText, Scroll } from "lucide-react";

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
        Title: "Ceza Hukuku",
        Short_Description: "Soruşturma ve kovuşturma aşamalarında şüpheli, sanık veya mağdur müdafiiliği.",
        Slug: "ceza-hukuku",
        iconElement: <Gavel className="text-gold" size={32} />,
        Content: `
            <h3>Uzmanlık Alanlarımız</h3>
            <ul>
                <li>Ağır Ceza Davaları</li>
                <li>Asliye Ceza Davaları</li>
                <li>Sulh Ceza Hakimliği</li>
                <li>Tutukluluğa İtiraz</li>
                <li>İfade ve Sorgu İşlemleri</li>
            </ul>
        `
    },
    {
        Title: "Aile ve Boşanma Hukuku",
        Short_Description: "Evlilik birliğinin sonlandırılması, velayet ve mal paylaşımı süreçlerinin yönetimi.",
        Slug: "aile-ve-bosanma-hukuku",
        iconElement: <Users className="text-gold" size={32} />,
        Content: `
            <h3>Uzmanlık Alanlarımız</h3>
            <ul>
                <li>Anlaşmalı ve Çekişmeli Boşanma</li>
                <li>Velayet Davaları</li>
                <li>Nafaka Artırım/Azaltım</li>
                <li>Mal Rejimi Tasfiyesi</li>
                <li>Soybağı Davaları</li>
            </ul>
        `
    },
    {
        Title: "Gayrimenkul ve Kira Hukuku",
        Short_Description: "Taşınmaz mülkiyetinden ve kira ilişkilerinden doğan uyuşmazlıkların çözümü.",
        Slug: "gayrimenkul-ve-kira-hukuku",
        iconElement: <Home className="text-gold" size={32} />,
        Content: `
            <h3>Uzmanlık Alanlarımız</h3>
            <ul>
                <li>Kira Tespit ve Tahliye Davaları</li>
                <li>Tapu İptal ve Tescil</li>
                <li>İzale-i Şüyu (Ortaklığın Giderilmesi)</li>
                <li>Kamulaştırma Davaları</li>
            </ul>
        `
    },
    {
        Title: "İş ve Sosyal Güvenlik Hukuku",
        Short_Description: "İşçi ve işveren arasındaki uyuşmazlıkların çözümü ve tazminat talepleri.",
        Slug: "is-ve-sosyal-guvenlik-hukuku",
        iconElement: <Briefcase className="text-gold" size={32} />,
        Content: `
            <h3>Uzmanlık Alanlarımız</h3>
            <ul>
                <li>İşe İade Davaları</li>
                <li>Kıdem ve İhbar Tazminatı</li>
                <li>Mobbing Davaları</li>
                <li>İş Kazası Tazminatları</li>
                <li>Hizmet Tespit Davaları</li>
            </ul>
        `
    },
    {
        Title: "İcra ve İflas Hukuku",
        Short_Description: "Alacakların tahsili, borç yapılandırma ve iflas süreçlerinin takibi.",
        Slug: "icra-ve-iflas-hukuku",
        iconElement: <FileText className="text-gold" size={32} />,
        Content: `
            <h3>Uzmanlık Alanlarımız</h3>
            <ul>
                <li>İcra Takibi Başlatma</li>
                <li>İhtiyati Haciz</li>
                <li>İflas Erteleme</li>
                <li>Menfi Tespit ve İstirdat Davaları</li>
                <li>Çek/Senet Tahsili</li>
            </ul>
        `
    },
    {
        Title: "Miras Hukuku",
        Short_Description: "Murisin mal varlığının yasal mirasçılar arasında intikali ve paylaşımı.",
        Slug: "miras-hukuku",
        iconElement: <Scroll className="text-gold" size={32} />,
        Content: `
            <h3>Uzmanlık Alanlarımız</h3>
            <ul>
                <li>Veraset İlamı Alınması</li>
                <li>Vasiyetname Hazırlama</li>
                <li>Tenkis Davaları</li>
                <li>Mirasın Reddi (Reddi Miras)</li>
                <li>Ortaklığın Giderilmesi</li>
            </ul>
        `
    },
    {
        Title: "Ticaret ve Şirketler Hukuku",
        Short_Description: "Şirketlerin kuruluşu, birleşmesi ve ticari faaliyetlerinin hukuki zemine oturtulması.",
        Slug: "ticaret-ve-sirketler-hukuku",
        iconElement: <Building2 className="text-gold" size={32} />,
        Content: `
            <h3>Uzmanlık Alanlarımız</h3>
            <ul>
                <li>Şirket Kuruluşu ve Ana Sözleşme</li>
                <li>Ticari Alacak Davaları</li>
                <li>Haksız Rekabet</li>
                <li>İflas ve Konkordato</li>
                <li>Şirket Danışmanlığı</li>
            </ul>
        `
    },
    {
        Title: "İdare ve Vergi Hukuku",
        Short_Description: "Devlet kurumlarına karşı vatandaşın haklarının korunması ve idari işlemlerin iptali.",
        Slug: "idare-ve-vergi-hukuku",
        iconElement: <Landmark className="text-gold" size={32} />,
        Content: `
            <h3>Uzmanlık Alanlarımız</h3>
            <ul>
                <li>İptal ve Tam Yargı Davaları</li>
                <li>Vergi Cezalarına İtiraz</li>
                <li>İdari Para Cezalarının İptali</li>
                <li>Memur Disiplin Cezaları</li>
            </ul>
        `
    },
    {
        Title: "Tazminat Hukuku",
        Short_Description: "Haksız fiil veya sözleşmeye aykırılık nedeniyle uğranılan maddi ve manevi zararların tazmini.",
        Slug: "tazminat-hukuku",
        iconElement: <Scale className="text-gold" size={32} />,
        Content: `
            <h3>Uzmanlık Alanlarımız</h3>
            <ul>
                <li>Trafik Kazası Tazminatları</li>
                <li>Hatalı Tıbbi Müdahale (Malpraktis)</li>
                <li>Hakaret Nedeniyle Tazminat</li>
            </ul>
        `
    },
    {
        Title: "Bilişim Hukuku",
        Short_Description: "İnternet ortamında işlenen suçlar ve kişilik hakları ihlalleri.",
        Slug: "bilisim-hukuku",
        iconElement: <ShieldCheck className="text-gold" size={32} />,
        Content: `
            <h3>Uzmanlık Alanlarımız</h3>
            <ul>
                <li>Erişim Engelleme Kararları</li>
                <li>İnternet Dolandırıcılığı</li>
                <li>Kişisel Verilerin Korunması (KVKK)</li>
                <li>Unutulma Hakkı</li>
            </ul>
        `
    }
];
