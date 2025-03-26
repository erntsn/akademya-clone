"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const CappadociaPage = () => {
  const { language } = useLanguage();

  const attractions = [
    {
      id: 1,
      title: language === 'tr' ? 'Göreme Açık Hava Müzesi' : 'Göreme Open Air Museum',
      image: 'https://ext.same-assets.com/1308614748/4159063219.webp',
      description: language === 'tr'
        ? 'UNESCO Dünya Mirası Listesi\'nde bulunan Göreme Açık Hava Müzesi, Kapadokya\'nın en çok ziyaret edilen yerlerinden biridir. Kayalara oyulmuş kiliseler, manastırlar ve fresklerle dolu bir açık hava müzesidir.'
        : 'The Göreme Open Air Museum, which is on the UNESCO World Heritage List, is one of the most visited places in Cappadocia. It is an open-air museum filled with rock-carved churches, monasteries, and frescoes.',
      distance: language === 'tr' ? 'Kliniğe uzaklık: 15 km' : 'Distance to clinic: 15 km',
    },
    {
      id: 2,
      title: language === 'tr' ? 'Üç Güzeller' : 'Three Beauties',
      image: 'https://ext.same-assets.com/1308614748/1034619776.jpeg',
      description: language === 'tr'
        ? 'Kapadokya\'nın simgelerinden biri olan Üç Güzeller, ilginç kaya oluşumları ile meşhurdur. Peribacalarının en güzel örneklerindendir.'
        : 'The Three Beauties, one of the symbols of Cappadocia, is famous for its interesting rock formations. It is one of the most beautiful examples of fairy chimneys.',
      distance: language === 'tr' ? 'Kliniğe uzaklık: 18 km' : 'Distance to clinic: 18 km',
    },
    {
      id: 3,
      title: language === 'tr' ? 'Uçhisar Kalesi' : 'Uçhisar Castle',
      image: 'https://ext.same-assets.com/1308614748/3551133172.jpeg',
      description: language === 'tr'
        ? 'Kapadokya\'nın en yüksek noktalarından biri olan Uçhisar Kalesi, bölgenin muhteşem manzarasını görmenin en iyi yerlerinden biridir. Kale, volkanik kayalara oyulmuş odalar ve tünellerden oluşmaktadır.'
        : 'Uçhisar Castle, one of the highest points in Cappadocia, is one of the best places to see the magnificent view of the region. The castle consists of rooms and tunnels carved into volcanic rocks.',
      distance: language === 'tr' ? 'Kliniğe uzaklık: 12 km' : 'Distance to clinic: 12 km',
    },
    {
      id: 4,
      title: language === 'tr' ? 'Balon Turu' : 'Hot Air Balloon Tour',
      image: 'https://ext.same-assets.com/1308614748/1566199005.jpeg',
      description: language === 'tr'
        ? 'Kapadokya\'yı havadan izlemenin en güzel yolu olan balon turları, gün doğumunda gerçekleştirilir ve unutulmaz bir deneyim sunar. Kapadokya\'nın eşsiz manzaralarını kuşbakışı görebilirsiniz.'
        : 'Hot air balloon tours, which are the most beautiful way to watch Cappadocia from the air, are held at sunrise and offer an unforgettable experience. You can see the unique landscapes of Cappadocia from a bird\'s eye view.',
      distance: language === 'tr' ? 'Kliniğe uzaklık: 8-20 km' : 'Distance to clinic: 8-20 km',
    },
    {
      id: 5,
      title: language === 'tr' ? 'Devrent Vadisi' : 'Devrent Valley',
      image: 'https://ext.same-assets.com/1308614748/3611382824.jpeg',
      description: language === 'tr'
        ? 'Hayal gücünüzü zorlayan kaya oluşumlarıyla dolu Devrent Vadisi, Kapadokya\'nın en ilginç doğal oluşumlarına ev sahipliği yapmaktadır. Hayvan figürlerine benzeyen peribacaları burada bulunur.'
        : 'Devrent Valley, filled with rock formations that challenge your imagination, is home to the most interesting natural formations of Cappadocia. Fairy chimneys resembling animal figures are found here.',
      distance: language === 'tr' ? 'Kliniğe uzaklık: 20 km' : 'Distance to clinic: 20 km',
    },
    {
      id: 6,
      title: language === 'tr' ? 'Mağara Oteller' : 'Cave Hotels',
      image: 'https://ext.same-assets.com/1308614748/4159063213.webp',
      description: language === 'tr'
        ? 'Kapadokya\'nın en özel konaklama seçeneklerinden biri olan mağara oteller, yüzlerce yıllık mağaraların modern konfora sahip odalara dönüştürülmüş halidir. Eşsiz bir konaklama deneyimi sunmaktadır.'
        : 'Cave hotels, one of the most special accommodation options in Cappadocia, are hundreds of years old caves transformed into rooms with modern comfort. They offer a unique accommodation experience.',
      distance: language === 'tr' ? 'Kliniğe uzaklık: 10-25 km' : 'Distance to clinic: 10-25 km',
    },
  ];

  const activities = [
    {
      id: 1,
      title: language === 'tr' ? 'ATV Safari' : 'ATV Safari',
      image: 'https://ext.same-assets.com/1308614748/3255617086.jpeg',
      description: language === 'tr'
        ? 'Kapadokya\'nın eşsiz vadilerini ve kanyonlarını ATV motorlarıyla keşfetmek, bölgeyi tanımanın hem eğlenceli hem de heyecan verici bir yoludur.'
        : 'Exploring the unique valleys and canyons of Cappadocia with ATV motors is both a fun and exciting way to get to know the region.',
    },
    {
      id: 2,
      title: language === 'tr' ? 'Yürüyüş Turları' : 'Hiking Tours',
      image: 'https://ext.same-assets.com/1308614748/4125508731.webp',
      description: language === 'tr'
        ? 'Kapadokya\'nın doğal güzelliklerini en iyi şekilde keşfetmenin yolu yürüyüş turlarıdır. Çeşitli zorluk derecelerine göre planlanan turlar mevcuttur.'
        : 'The best way to discover the natural beauties of Cappadocia is hiking tours. Tours planned according to various difficulty levels are available.',
    },
    {
      id: 3,
      title: language === 'tr' ? 'Kültürel Turlar' : 'Cultural Tours',
      image: 'https://ext.same-assets.com/1308614748/4159063217.webp',
      description: language === 'tr'
        ? 'Bölgenin tarihi ve kültürel zenginliklerini keşfetmek için düzenlenen turlar, kiliseler, yeraltı şehirleri ve antik yerleşim yerlerini kapsamaktadır.'
        : 'Tours organized to discover the historical and cultural riches of the region cover churches, underground cities, and ancient settlements.',
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-akademya-navy mb-8">
        {language === 'tr' ? 'Kapadokya\'yı Keşfedin' : 'Discover Cappadocia'}
      </h1>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-akademya-teal mb-4">
              {language === 'tr' ? 'Eşsiz Doğal Güzellik' : 'Unique Natural Beauty'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'tr'
                ? 'Kapadokya, Türkiye\'nin en etkileyici ve benzersiz bölgelerinden biridir. Peri bacaları olarak bilinen ilginç kaya oluşumları, yeraltı şehirleri, fresklerle süslenmiş kayadan oyma kiliseler ve muhteşem vadi manzaraları ile dünyaca ünlüdür.'
                : 'Cappadocia is one of Turkey\'s most impressive and unique regions. It is world-famous for its interesting rock formations known as fairy chimneys, underground cities, rock-carved churches decorated with frescoes, and stunning valley views.'
              }
            </p>
            <p className="text-gray-700">
              {language === 'tr'
                ? 'Diş tedaviniz için kliniğimizi seçtiğinizde, bu muhteşem bölgeyi keşfetme fırsatı da elde edeceksiniz. Tedavi araları veya tedavi sonrasında, size bu eşsiz bölgeyi keşfetmeniz için rehberlik edebiliriz.'
                : 'When you choose our clinic for your dental treatment, you will also have the opportunity to explore this magnificent region. During treatment breaks or after treatment, we can guide you to explore this unique region.'
              }
            </p>
          </div>
          <div className="md:w-1/2 relative h-60 md:h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/1308614748/2544437290.jpeg"
              alt="Cappadocia Landscape"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Attractions */}
      <h2 className="text-2xl font-semibold text-center text-akademya-navy mb-6">
        {language === 'tr' ? 'Görülecek Yerler' : 'Places to Visit'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {attractions.map((attraction) => (
          <div key={attraction.id} className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="relative h-48">
              <Image
                src={attraction.image}
                alt={attraction.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-akademya-navy mb-2">{attraction.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{attraction.description}</p>
              <p className="text-sm text-akademya-teal font-medium">{attraction.distance}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Activities */}
      <div className="bg-akademya-gray rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-semibold text-center text-akademya-navy mb-6">
          {language === 'tr' ? 'Yapılacak Aktiviteler' : 'Activities to Do'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-40">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-akademya-teal mb-2">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tourism Support */}
      <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-akademya-teal mb-4">
          {language === 'tr' ? 'Sağlık Turizmi Desteğimiz' : 'Our Health Tourism Support'}
        </h2>
        <p className="text-gray-700 mb-6">
          {language === 'tr'
            ? 'Diş tedaviniz ve Kapadokya ziyaretiniz için her türlü desteği sağlıyoruz. Konaklama, transfer ve tur organizasyonları konusunda yardımcı oluyoruz.'
            : 'We provide all kinds of support for your dental treatment and Cappadocia visit. We help with accommodation, transfer, and tour organizations.'
          }
        </p>
        <Link href="/cappadocia-dental-health-tourism" className="btn-primary">
          {language === 'tr' ? 'Detaylı Bilgi' : 'Detailed Information'}
        </Link>
      </div>
    </div>
  );
};

export default CappadociaPage;
