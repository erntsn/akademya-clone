"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturedServices = () => {
  const { t } = useLanguage();

  const treatmentData = [
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
  ];

  return (
    <section className="py-16 bg-akademya-gray">
      <div className="content-container">
        <h2 className="text-3xl font-bold text-center text-akademya-navy mb-10">
          {t('services.title')}
        </h2>

        <div className="space-y-8">
          {treatmentData.map((treatment, index) => (
            <TreatmentRow
              key={treatment.id}
              treatment={treatment}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TreatmentRowProps {
  treatment: {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  };
  reverse: boolean;
}

const TreatmentRow = ({ treatment, reverse }: TreatmentRowProps) => {
  const { t } = useLanguage();

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-lg shadow-md overflow-hidden`}>
      <div className="md:w-1/3 relative h-64 md:h-auto">
        <Image
          src={treatment.image}
          alt={treatment.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 md:p-8">
        <h3 className="text-xl font-semibold text-akademya-navy mb-4">{treatment.title}</h3>
        <p className="text-gray-600 mb-6">{treatment.description}</p>
        <Link href={treatment.link} className="btn-primary">
          {t('news.readMore')}
        </Link>
      </div>
    </div>
  );
};

export default FeaturedServices;
