"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsPage = () => {
  const { t, language } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: 'Ekim 2023 Mevduat Ürünleri Sigortal Değerleri',
      image: 'https://ext.same-assets.com/1308614748/1566199005.jpeg',
      date: '30 Ekim 2023',
      summary: 'Ekim 2023 itibariyle kliniğimizde kullanılan tüm mevduat ürünleri Türkiye Sigorta Birliği tarafından onaylanmış değerleriyle güvence altındadır.',
      link: '/bizden-haberler/ekim-2023-mevduat-urunleri-sigortali-degerleri'
    },
    {
      id: 2,
      title: 'Şubat 2023 Nevşehir Ürünleri Satış Fiyat Listesi',
      image: 'https://ext.same-assets.com/1308614748/3551133172.jpeg',
      date: '15 Şubat 2023',
      summary: 'Şubat 2023 tarihi itibariyle Nevşehir bölgesindeki hizmetlerimize ait güncel fiyat listesi yayınlanmıştır. Detaylı bilgi için lütfen kliniğimizi arayınız.',
      link: '/bizden-haberler/subat-2023-nevsehir-urunleri-satis-fiyat-listesi'
    },
    {
      id: 3,
      title: 'Nisan 2023 Kapalı Kliniğimiz Planlı Değerleri',
      image: 'https://ext.same-assets.com/1308614748/1034619776.jpeg',
      date: '1 Nisan 2023',
      summary: 'Nisan ayının ilk haftasında kliniğimiz yıllık bakım çalışmaları nedeniyle kapalı olacaktır. Acil durumlar için lütfen kliniğimizin telefon numarasını arayınız.',
      link: '/bizden-haberler/nisan-2023-kapali-klinigimiz-planli-degerleri'
    },
    {
      id: 4,
      title: 'Akademya Aile\'miz Yeni Tedavimiz Detaylandırılmış Bilgiler',
      image: 'https://ext.same-assets.com/1308614748/3255617086.jpeg',
      date: '10 Mart 2023',
      summary: 'Akademya ailesi olarak, yeni teknolojik ekipmanlarımız ve tedavi yöntemlerimiz hakkında detaylı bilgileri sizlerle paylaşmaktan mutluluk duyuyoruz.',
      link: '/bizden-haberler/akademya-ailemiz-yeni-tedavimiz-detaylandirilmis-bilgiler'
    },
    {
      id: 5,
      title: 'Kliniğimize Yeni Katılan Dr. Gülce Dirlik',
      image: 'https://ext.same-assets.com/1308614748/3630710087.png',
      date: '5 Ocak 2023',
      summary: 'Deneyimli ve uzman diş hekimi Dr. Gülce Dirlik, Ocak 2023 itibariyle ekibimize katılmıştır. Kendisi özellikle çocuk diş hekimliği alanında uzmanlaşmıştır.',
      link: '/bizden-haberler/klinigimize-yeni-katilan-dr-gulce-dirlik'
    },
    {
      id: 6,
      title: 'Sağlık Turizmi Alanında Aldığımız Özel Ödül',
      image: 'https://ext.same-assets.com/1308614748/1308614748.webp',
      date: '20 Aralık 2022',
      summary: 'Akademya Diş Kliniği olarak Türkiye Sağlık Turizmi Derneği tarafından 2022 yılının en başarılı diş kliniği ödülüne layık görüldük.',
      link: '/bizden-haberler/saglik-turizmi-alaninda-aldigimiz-ozel-odul'
    },
    {
      id: 7,
      title: 'Yeni Yıl Kampanyamız Başladı',
      image: 'https://ext.same-assets.com/1308614748/3611382824.jpeg',
      date: '1 Aralık 2022',
      summary: 'Yeni yıla özel implant, zirkonyum ve diş beyazlatma tedavilerinde %20\'ye varan indirimler Aralık ayı boyunca devam edecektir.',
      link: '/bizden-haberler/yeni-yil-kampanyamiz-basladi'
    },
    {
      id: 8,
      title: '2022 Yılı Değerlendirme Toplantımız',
      image: 'https://ext.same-assets.com/1308614748/4125508713.webp',
      date: '15 Kasım 2022',
      summary: '2022 yılını değerlendirdiğimiz ve 2023 hedeflerimizi belirlemek için tüm ekibimizle birlikte düzenlediğimiz toplantı başarıyla gerçekleştirilmiştir.',
      link: '/bizden-haberler/2022-yili-degerlendirme-toplantimiz'
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-akademya-navy mb-8">
        {t('news.title')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {newsItems.map((item) => (
          <Link key={item.id} href={item.link}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-lg font-semibold text-akademya-navy mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.summary}
                </p>
                <div className="text-akademya-teal font-medium text-sm flex items-center">
                  {language === 'tr' ? 'Devamını Oku' : 'Read More'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <div className="inline-flex items-center space-x-1">
          <button className="rounded-md px-3 py-2 bg-akademya-gray text-gray-600 hover:bg-gray-300 transition-colors" disabled>
            {language === 'tr' ? 'Önceki' : 'Previous'}
          </button>
          <button className="rounded-md px-3 py-2 bg-akademya-teal text-white">1</button>
          <button className="rounded-md px-3 py-2 bg-akademya-gray text-gray-600 hover:bg-gray-300 transition-colors">2</button>
          <button className="rounded-md px-3 py-2 bg-akademya-gray text-gray-600 hover:bg-gray-300 transition-colors">
            {language === 'tr' ? 'Sonraki' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
