"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const DentalTreatmentsPage = () => {
  const { t } = useLanguage();

  const treatments = [
    {
      id: 1,
      title: t('services.implant.title'),
      description: t('services.implant.desc'),
      image: 'https://ext.same-assets.com/1308614748/4002321911.webp',
      link: '/implant-dis-tedavileri',
    },
    {
      id: 2,
      title: t('services.zirconium.title'),
      description: t('services.zirconium.desc'),
      image: 'https://ext.same-assets.com/1308614748/1545334968.png',
      link: '/zirkonyum-dis-kaplama',
    },
    {
      id: 3,
      title: t('services.whitening.title'),
      description: t('services.whitening.desc'),
      image: 'https://ext.same-assets.com/1308614748/1468351567.png',
      link: '/dis-beyazlatma',
    },
    {
      id: 4,
      title: t('services.orthodontics.title'),
      description: t('services.orthodontics.desc'),
      image: 'https://ext.same-assets.com/1308614748/2805450749.png',
      link: '/ortodonti',
    },
    {
      id: 5,
      title: 'Kanal Tedavisi',
      description: 'Kanal tedavisi, dişin iç kısmında bulunan yumuşak doku pulpanın iltihaplanması veya enfekte olması durumunda uygulanan tedavi yöntemidir.',
      image: 'https://ext.same-assets.com/1308614748/4125508713.webp',
      link: '/kanal-tedavisi-endodonti',
    },
    {
      id: 6,
      title: 'Diş Eti Hastalıkları',
      description: 'Diş eti hastalıkları, diş etlerini ve dişi destekleyen yapıları etkileyen bakteriyel enfeksiyonlardır. Erken teşhis ve tedavi önemlidir.',
      image: 'https://ext.same-assets.com/1308614748/4055633822.webp',
      link: '/dis-eti-hastaliklari-periodontoloji',
    },
    {
      id: 7,
      title: 'Çocuk Diş Hekimliği',
      description: 'Çocuk diş hekimliği, çocukların diş ve ağız sağlığının korunması, tedavisi ve takibi ile ilgilenen diş hekimliği dalıdır.',
      image: 'https://ext.same-assets.com/1308614748/4125508731.webp',
      link: '/cocuk-dis-hekimligi-pedodonti',
    },
    {
      id: 8,
      title: 'Ağız ve Çene Cerrahisi',
      description: 'Ağız, çene ve yüz bölgesindeki problemlerin cerrahi yöntemlerle tedavi edilmesi işlemidir. 20lik diş çekimleri de bu alanda yapılmaktadır.',
      image: 'https://ext.same-assets.com/1308614748/333544496.jpeg',
      link: '/agiz-ve-cene-cerrahisi',
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-akademya-navy mb-8">
        {t('nav.treatments')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {treatments.map((treatment) => (
          <div
            key={treatment.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-60">
              <Image
                src={treatment.image}
                alt={treatment.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-akademya-navy mb-3">{treatment.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{treatment.description}</p>
              <Link href={treatment.link} className="btn-primary inline-block">
                {t('news.readMore')}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DentalTreatmentsPage;
