import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: 'Ekim 2023 Mevduat Ürünleri Sigortal Değerleri',
    image: 'https://ext.same-assets.com/1308614748/1566199005.jpeg',
    link: '/bizden-haberler/ekim-2023-mevduat-urunleri-sigortali-degerleri'
  },
  {
    id: 2,
    title: 'Şubat 2023 Nevşehir Ürünleri Satış Fiyat Listesi',
    image: 'https://ext.same-assets.com/1308614748/3551133172.jpeg',
    link: '/bizden-haberler/subat-2023-nevsehir-urunleri-satis-fiyat-listesi'
  },
  {
    id: 3,
    title: 'Nisan 2023 Kapalı Kliniğimiz Planlı Değerleri',
    image: 'https://ext.same-assets.com/1308614748/1034619776.jpeg',
    link: '/bizden-haberler/nisan-2023-kapali-klinigimiz-planli-degerleri'
  },
  {
    id: 4,
    title: 'Akademya Aile\'miz Yeni Tedavimiz Detaylandırılmış Bilgiler',
    image: 'https://ext.same-assets.com/1308614748/3255617086.jpeg',
    link: '/bizden-haberler/akademya-ailemiz-yeni-tedavimiz-detaylandirilmis-bilgiler'
  },
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="content-container">
        <h2 className="text-3xl font-bold text-center text-akademya-navy mb-10">
          Bizden Haberler
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/bizden-haberler" className="text-akademya-teal font-medium flex items-center justify-center">
            <span>Devamı</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

interface NewsCardProps {
  item: {
    id: number;
    title: string;
    image: string;
    link: string;
  };
}

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <Link href={item.link}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-40">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-akademya-navy font-medium line-clamp-2 text-sm">
            {item.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default NewsSection;
