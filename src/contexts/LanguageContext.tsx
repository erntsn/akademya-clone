"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'tr' | 'en';

// Define context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Define translations
const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Header
    'nav.home': 'Anasayfa',
    'nav.corporate': 'Kurumsal',
    'nav.treatments': 'Diş Tedavileri',
    'nav.dentists': 'Diş Hekimleri',
    'nav.blog': 'Blog',
    'nav.clinic': 'Klinik',
    'nav.tourism': 'Sağlık Turizmi',
    'nav.contact': 'İletişim',
    'nav.news': 'Haberler',
    'nav.cappadocia': 'Kapadokya',

    // Hero Section
    'hero.title': 'İmplant Diş',
    'hero.whatsapp.title': 'Nevşehir Diş Whatsapp',
    'hero.whatsapp.desc': 'Diş tedavisi hakkında bilgi almak için bize ulaşabilirsiniz',
    'hero.extraction.title': '20lik Diş Çekimi',
    'hero.extraction.desc': '20lik Diş Çekimi herkesin merak ettiği bir işlemdir. 20lik dişler sorunsuz ağız içerisine yerleşebildiği gibi çene kemiği içerisinde gömülü kalabilir.',
    'hero.implant.title': 'İmplantoloji',
    'hero.implant.desc': 'Eksik diş, kaybedilen diş ve dişsiz çene gibi durumların tedavisinde uygulanan implantlar, diş kökünü taklit eden vidalı dişlerdir.',
    'hero.aesthetic.title': 'Estetik Diş Hekimliği',
    'hero.aesthetic.desc': 'Dişlerin görüntüsünü ve rengini düzenlemek amacıyla diş beyazlatma, zirkonyum diş, yaprak porselen gibi tedaviler kullanılır.',

    // Featured Services
    'services.title': 'Akademya Diş Hastanesi',
    'services.implant.title': 'İmplant Diş Tedavileri',
    'services.implant.desc': 'İmplant Diş tedavileri doğal dişlerin yapısını en iyi şekilde taklit ederek kaybedilen yemek keyfini ve estetik gülüşü geri kazandırabilen tedavi çözümleridir. Kliniğimizde implant diş tedavileri alanında 25 yıla aşkın deneyimi bulunan hekimler tarafından uygulanmaktadır.',
    'services.zirconium.title': 'Zirkonyum Diş',
    'services.zirconium.desc': 'Zirkonyum Diş kaplamaları son yıllarda diş hekimliğinde giderek popülerlik kazanan estetik tedavi çözümlerinden birisidir. Doğal diş yapısına üstün benzerliği nedeniyle zirkonyum dişler dijital diş hekimliğinde yaygın kullanım alanı bulmaktadır.',
    'services.whitening.title': 'Diş Beyazlatma',
    'services.whitening.desc': 'Diş Beyazlatma tedavisi son zamanlarda en çok aranan estetik diş hekimliği uygulamalarında yer alır. Diş sararması veya diş renklenmesi şikayetiyle kliniğe başvuran hastalarda, diş beyazlatma uygulamaları ile 1-2 ton diş açartma sağlanabilmektedir.',
    'services.orthodontics.title': 'Ortodonti',
    'services.orthodontics.desc': 'Ortodonti, kendi dişleriniz ile estetik ve sağlıklı gülüşlere ulaşmanın tek yoludur. Diş teli tedavisi, dünyada halen en çok kullanılan ortodontik tedavi yöntemidir. Günümüzde kişiye özel üretilen şeffaf plaklar ile telsiz ortodonti gibi modern ve konforlu tedavi yöntemleri mevcuttur.',

    // Doctor Team
    'doctors.title': 'Akademya Nevşehir Diş Hekimi Kadrosu',
    'doctors.viewAll': 'Tüm Hekimlerimizi Görün',
    'doctors.dentist': 'Diş Hekimi',
    'doctors.orthodontist': 'Ortodonti Uzmanı',

    // Testimonials
    'testimonials.title': 'Hasta Görüşleri',
    'testimonials.rating': '4.9 / 5 (1128 değerlendirme)',
    'testimonials.readMore': 'Daha fazla oku',
    'testimonials.google': 'Google değerlendirmelerimiz',

    // News
    'news.title': 'Bizden Haberler',
    'news.readMore': 'Daha fazla bilgi',
    'news.viewAll': 'Devamı',

    // Vlog
    'vlog.title': 'Akademya Dental Vlog',
    'vlog.views': 'görüntüleme',

    // Blog
    'blog.title': 'Diş Tedavileri Hakkında Faydalı Bilgiler | Blog',
    'blog.viewAll': 'Tüm Blog Yazılarını Görüntüle',

    // Map & Contact
    'contact.title': 'Bize Ulaşın',
    'contact.address': 'Adres:',
    'contact.phone': 'Telefon:',
    'contact.email': 'E-posta:',
    'contact.hours': 'Çalışma Saatleri:',
    'contact.weekday': 'Pazartesi - Cumartesi:',
    'contact.weekend': 'Pazar:',
    'contact.closed': 'Kapalı',
    'contact.directions': 'Yol Tarifi Al',

    // Footer
    'footer.copyright': '©2023 Özel Sena Sağlık Hizmetleri Tic. Ltd. Şti. Tüm hakları saklıdır.',
    'footer.disclaimer': 'Bu sitede yer alan içerikler T.C. Sağlık Bakanlığı ve Türk Diş Hekimleri Birliği\'nin önerilerinden destek alınarak bilgilendirme amaçlı hazırlanmıştır. Sitede yer alan yazı ve görseller sadece ön bilgilendirme içindir. Burada yer alan bilgiler hiç bir koşulda klinik muayene ve tanı yöntemlerinin yerine geçemez!',

    // Language Switcher
    'language': 'Dil',
    'language.tr': 'Türkçe',
    'language.en': 'İngilizce',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.corporate': 'Corporate',
    'nav.treatments': 'Dental Treatments',
    'nav.dentists': 'Dentists',
    'nav.blog': 'Blog',
    'nav.clinic': 'Clinic',
    'nav.tourism': 'Health Tourism',
    'nav.contact': 'Contact',
    'nav.news': 'News',
    'nav.cappadocia': 'Cappadocia',

    // Hero Section
    'hero.title': 'Dental Implants',
    'hero.whatsapp.title': 'Nevşehir Dental WhatsApp',
    'hero.whatsapp.desc': 'Contact us for information about dental treatment',
    'hero.extraction.title': 'Wisdom Teeth Extraction',
    'hero.extraction.desc': 'Wisdom teeth extraction is a procedure everyone wonders about. Wisdom teeth can either fit normally in the mouth or remain impacted in the jaw bone.',
    'hero.implant.title': 'Implantology',
    'hero.implant.desc': 'Implants, which are used in the treatment of missing teeth and edentulous jaws, are screw-like teeth that mimic the tooth root.',
    'hero.aesthetic.title': 'Aesthetic Dentistry',
    'hero.aesthetic.desc': 'Treatments such as teeth whitening, zirconium crowns, and porcelain veneers are used to improve the appearance and color of teeth.',

    // Featured Services
    'services.title': 'Akademya Dental Hospital',
    'services.implant.title': 'Dental Implant Treatments',
    'services.implant.desc': 'Dental implant treatments can restore the joy of eating and aesthetic smile by perfectly mimicking the structure of natural teeth. In our clinic, implant treatments are performed by dentists with more than 25 years of experience.',
    'services.zirconium.title': 'Zirconium Crowns',
    'services.zirconium.desc': 'Zirconium dental crowns are one of the aesthetic treatment solutions that have been gaining popularity in dentistry in recent years. Due to their superior resemblance to natural tooth structure, zirconium teeth are widely used in digital dentistry.',
    'services.whitening.title': 'Teeth Whitening',
    'services.whitening.desc': 'Teeth whitening treatment is among the most sought-after aesthetic dentistry applications recently. For patients who come to the clinic with complaints of yellowing or discoloration of teeth, teeth whitening applications can provide 1-2 shades of whitening.',
    'services.orthodontics.title': 'Orthodontics',
    'services.orthodontics.desc': 'Orthodontics is the only way to achieve aesthetic and healthy smiles with your own teeth. Dental braces are still the most widely used orthodontic treatment method in the world. Today, there are modern and comfortable treatment methods such as clear aligners produced specifically for each individual.',

    // Doctor Team
    'doctors.title': 'Akademya Nevşehir Dental Team',
    'doctors.viewAll': 'View All Our Dentists',
    'doctors.dentist': 'Dentist',
    'doctors.orthodontist': 'Orthodontist',

    // Testimonials
    'testimonials.title': 'Patient Reviews',
    'testimonials.rating': '4.9 / 5 (1128 reviews)',
    'testimonials.readMore': 'Read more',
    'testimonials.google': 'Our Google reviews',

    // News
    'news.title': 'Latest News',
    'news.readMore': 'More information',
    'news.viewAll': 'View All',

    // Vlog
    'vlog.title': 'Akademya Dental Vlog',
    'vlog.views': 'views',

    // Blog
    'blog.title': 'Useful Information About Dental Treatments | Blog',
    'blog.viewAll': 'View All Blog Posts',

    // Map & Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Address:',
    'contact.phone': 'Phone:',
    'contact.email': 'Email:',
    'contact.hours': 'Working Hours:',
    'contact.weekday': 'Monday - Saturday:',
    'contact.weekend': 'Sunday:',
    'contact.closed': 'Closed',
    'contact.directions': 'Get Directions',

    // Footer
    'footer.copyright': '©2023 Özel Sena Sağlık Hizmetleri Tic. Ltd. Şti. All rights reserved.',
    'footer.disclaimer': 'The content on this site has been prepared for informational purposes with the support of the recommendations of the Republic of Turkey Ministry of Health and the Turkish Dental Association. The text and visuals on the site are for preliminary information only. The information here cannot replace clinical examination and diagnostic methods under any circumstances!',

    // Language Switcher
    'language': 'Language',
    'language.tr': 'Turkish',
    'language.en': 'English',
  },
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'tr',
  setLanguage: () => {},
  t: (key) => key, // Return the key itself as fallback
});

// Provider component
export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  // Default to Turkish
  const [language, setLanguageState] = useState<Language>('tr');
  // Track if component has mounted to safely use browser APIs
  const [mounted, setMounted] = useState(false);

  // After mount, try to get language preference from localStorage
  useEffect(() => {
    setMounted(true);

    try {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
        setLanguageState(savedLanguage);
        document.documentElement.lang = savedLanguage;
      }
    } catch (error) {
      console.error('Error retrieving language preference:', error);
    }
  }, []);

  // Set language and save to localStorage (only on client)
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (mounted) {
      try {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
      } catch (error) {
        console.error('Error setting language preference:', error);
      }
    }
  };

  // Translation function
  const t = (key: string): string => {
    // If the key doesn't exist in the current language, return the key itself
    return (translations[language] && translations[language][key]) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
