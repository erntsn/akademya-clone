"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogPage = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: "Diş Çürüğü Belirtileri ve Tedavi Yöntemleri",
      image: "https://ext.same-assets.com/1308614748/190291453.png",
      category: "Diş Tedavileri",
      date: "12 Mart 2023",
      excerpt: "Diş çürüklerinin erken belirtileri, tedavi yöntemleri ve önleme teknikleri hakkında kapsamlı bir rehber. Ağız sağlığınızı korumak için bilmeniz gerekenler.",
      link: "/blog/dis-curugu-belirtileri-ve-tedavi-yontemleri"
    },
    {
      id: 2,
      title: "Nasıl 20'li Yaşlarda Ertesi Gün Oral Etkileri Önlenebilir?",
      image: "https://ext.same-assets.com/1308614748/333544496.jpeg",
      category: "Implant Diş",
      date: "5 Nisan 2023",
      excerpt: "20'li yaşlarda yirmilik dişlerin çekimi sonrası oluşabilecek komplikasyonlar ve bunları nasıl önleyebileceğiniz hakkında öneriler ve bilgiler.",
      link: "/blog/nasil-20li-yaslarda-ertesi-gun-oral-etkileri-onlenebilir"
    },
    {
      id: 3,
      title: "Diş Eti Çekilmesi Nedenleri ve Korunma Yöntemleri",
      image: "https://ext.same-assets.com/1308614748/3353739696.jpeg",
      category: "Diş Eti Hastalıkları",
      date: "18 Mayıs 2023",
      excerpt: "Diş eti çekilmesi neden olur, nasıl tedavi edilir ve nasıl önlenir? Diş eti sağlığınızı korumak için yapmanız gerekenler ve kaçınmanız gereken alışkanlıklar.",
      link: "/blog/dis-eti-cekilmesi-nedenleri-ve-korunma-yontemleri"
    },
    {
      id: 4,
      title: "Ortodontik Tedavi Sonrası Türev Müdahale Yöntemleri",
      image: "https://ext.same-assets.com/1308614748/3611382824.jpeg",
      category: "Ortodonti",
      date: "29 Haziran 2023",
      excerpt: "Ortodontik tedavi sonrası oluşabilecek durumlar ve çözüm yöntemleri. Pekiştirme tedavisi nedir ve neden önemlidir?",
      link: "/blog/ortodontik-tedavi-sonrasi-turev-mudahale-yontemleri"
    },
    {
      id: 5,
      title: "Zirkonyum Diş Kaplamaları: Avantajları ve Bakımı",
      image: "https://ext.same-assets.com/1308614748/1545334968.png",
      category: "Estetik Diş Hekimliği",
      date: "10 Temmuz 2023",
      excerpt: "Zirkonyum diş kaplamalarının avantajları, kullanım ömrü, bakım önerileri ve diğer kaplama türleriyle karşılaştırması.",
      link: "/blog/zirkonyum-dis-kaplamalari-avantajlari-ve-bakimi"
    },
    {
      id: 6,
      title: "Çocuklarda Diş Fırçalama Alışkanlığı Nasıl Kazandırılır?",
      image: "https://ext.same-assets.com/1308614748/4125508731.webp",
      category: "Çocuk Diş Hekimliği",
      date: "25 Ağustos 2023",
      excerpt: "Çocuklara diş fırçalama alışkanlığını sevdirmek ve düzenli ağız bakımı rutini oluşturmak için pratik öneriler ve eğlenceli yöntemler.",
      link: "/blog/cocuklarda-dis-fircalama-aliskanligini-kazandirmak"
    },
    {
      id: 7,
      title: "Diş Beyazlatma Yöntemleri ve Evde Uygulanabilecek Teknikler",
      image: "https://ext.same-assets.com/1308614748/1468351567.png",
      category: "Estetik Diş Hekimliği",
      date: "14 Eylül 2023",
      excerpt: "Profesyonel diş beyazlatma yöntemleri ve evde güvenle uygulayabileceğiniz doğal diş beyazlatma teknikleri. Hangi yöntem sizin için uygun?",
      link: "/blog/dis-beyazlatma-yontemleri-evde-uygulanabilecek-teknikler"
    },
    {
      id: 8,
      title: "İmplant Tedavisi: Süreç, Bakım ve Sık Sorulan Sorular",
      image: "https://ext.same-assets.com/1308614748/4002321911.webp",
      category: "İmplant Diş",
      date: "3 Ekim 2023",
      excerpt: "İmplant tedavisi öncesi, sırası ve sonrasında bilmeniz gerekenler. İmplant bakımı, ömrü ve sık sorulan soruların yanıtları.",
      link: "/blog/implant-tedavisi-surec-bakim-sorular"
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-akademya-navy mb-8">
        {t('blog.title')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <Link href={post.link}>
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-akademya-teal text-white text-xs font-medium py-1 px-2 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-akademya-navy line-clamp-2 text-base">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 mt-2">{post.date}</p>
                <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-akademya-teal text-sm mt-4 font-medium hover:underline">
                  {t('testimonials.readMore')}
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
