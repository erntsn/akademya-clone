"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-black w-full relative h-[500px] md:h-[600px]">
      {/* Main Hero Image */}
      <div className="relative w-full h-full">
        <Image
          src="https://ext.same-assets.com/1308614748/3750490021.jpeg"
          alt={t('hero.title')}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            {t('hero.title')}
          </h1>
        </div>
      </div>

      {/* Service Cards */}
      <div className="content-container relative -mt-16 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <ServiceCard
            icon="https://ext.same-assets.com/1308614748/3446087024.png"
            title={t('hero.whatsapp.title')}
            description={t('hero.whatsapp.desc')}
            phone="+90.507 842 43 34"
            link="https://wa.me/message/MP4Q7IOGHAAQE1"
          />
          <ServiceCard
            icon="https://ext.same-assets.com/1308614748/1236987238.png"
            title={t('hero.extraction.title')}
            description={t('hero.extraction.desc')}
            link="/20lik-dis-cekimi"
          />
          <ServiceCard
            icon="https://ext.same-assets.com/1308614748/1272991148.webp"
            title={t('hero.implant.title')}
            description={t('hero.implant.desc')}
            link="/implant-dis-tedavileri"
          />
          <ServiceCard
            icon="https://ext.same-assets.com/1308614748/1751422877.webp"
            title={t('hero.aesthetic.title')}
            description={t('hero.aesthetic.desc')}
            link="/estetik-dis-hekimligi"
          />
        </div>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  phone?: string;
}

const ServiceCard = ({ icon, title, description, link, phone }: ServiceCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 text-center">
        <div className="flex justify-center mb-4">
          <Image
            src={icon}
            alt={title}
            width={80}
            height={80}
            className="h-16 w-16 object-contain"
          />
        </div>
        <h3 className="text-akademya-navy font-medium text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        {phone && (
          <div className="font-medium text-akademya-teal mb-4">{phone}</div>
        )}
        <Link href={link} className="btn-primary inline-block">
          {t('news.readMore')}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
