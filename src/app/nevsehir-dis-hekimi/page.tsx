"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const DentistsPage = () => {
  const { t } = useLanguage();

  const doctors = [
    {
      id: 1,
      name: 'Dr. Tuğran Paşlanmaz',
      image: 'https://ext.same-assets.com/1308614748/3772029443.png',
      specialty: t('doctors.dentist'),
      description: 'Ağız, Diş ve Çene Cerrahisi alanında uzmanlaşmış, özellikle implant uygulamaları konusunda deneyimli.',
      link: '/nevsehir-dis-hekimi/dis-hekimi-tugran-paslanmaz/'
    },
    {
      id: 2,
      name: 'Dr. Serpil Tosun',
      image: 'https://ext.same-assets.com/1308614748/468764240.png',
      specialty: t('doctors.dentist'),
      description: 'Estetik diş hekimliği ve zirkonyum uygulamaları konusunda uzman. Hastalarına güler yüzlü ve konforlu bir tedavi süreci sunmaktadır.',
      link: '/nevsehir-dis-hekimi/dis-hekimi-serpil-tosun/'
    },
    {
      id: 3,
      name: 'Dr. Necmettin Tosun',
      image: 'https://ext.same-assets.com/1308614748/394577720.png',
      specialty: t('doctors.dentist'),
      description: 'Diş ve diş eti hastalıkları konusunda uzmanlaşmış, alanında 20 yılı aşkın deneyime sahip değerli bir hekim.',
      link: '/nevsehir-dis-hekimi/dis-hekimi-necmettin-tosun/'
    },
    {
      id: 4,
      name: 'Dr. Dt. Emir Tosun',
      image: 'https://ext.same-assets.com/1308614748/2135060894.png',
      specialty: t('doctors.orthodontist'),
      description: 'Ortodonti alanında uzmanlaşmış, özellikle şeffaf plak tedavileri konusunda geniş deneyime sahip.',
      link: '/nevsehir-dis-hekimi/nevsehir-ortodonti-emir-tosun/'
    },
    {
      id: 5,
      name: 'Dr. Hasan Cingitaş',
      image: 'https://ext.same-assets.com/1308614748/2812177011.png',
      specialty: t('doctors.dentist'),
      description: 'Kanal tedavisi ve restoratif diş hekimliği alanlarında uzmanlaşmış, hastaların konforunun daima ön planda tutan bir yaklaşıma sahip.',
      link: '/nevsehir-dis-hekimi/hasan-cingitas/'
    },
    {
      id: 6,
      name: 'Dr. Samet Baydemir',
      image: 'https://ext.same-assets.com/1308614748/654273316.png',
      specialty: t('doctors.dentist'),
      description: 'Özellikle çocuk diş hekimliği alanında başarılı, hastalarıyla kurduğu olumlu iletişim sayesinde tedavi sürecini keyifli hale getiren bir hekim.',
      link: '/nevsehir-dis-hekimi/samet-baydemir/'
    },
    {
      id: 7,
      name: 'Dr. Dt. Adile Tosun',
      image: 'https://ext.same-assets.com/1308614748/3950181051.png',
      specialty: t('doctors.orthodontist'),
      description: 'Ortodonti ve çene eklemi rahatsızlıkları konusunda uzman, kapsamlı ve bireyselleştirilmiş tedavi planları oluşturan deneyimli bir hekim.',
      link: '/nevsehir-dis-hekimi/nevsehir-ortodonti-adile-tosun/'
    },
    {
      id: 8,
      name: 'Dr. Gülce Dirlik',
      image: 'https://ext.same-assets.com/1308614748/3630710087.png',
      specialty: t('doctors.dentist'),
      description: 'Özellikle çocuk hastaların tedavisinde gösterdiği sabır ve başarı ile tanınan, çocuk diş hekimliği alanında deneyimli bir hekim.',
      link: '/nevsehir-dis-hekimi/dis-hekimi-gulce-dirlik/'
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-akademya-navy mb-8">
        {t('doctors.title')}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {doctors.map((doctor) => (
          <Link
            key={doctor.id}
            href={doctor.link}
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
              <div className="relative h-64">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-4 relative">
                {/* Corner triangle with color */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[50px] border-l-[50px] border-t-transparent border-l-akademya-teal"></div>

                <h3 className="font-semibold text-lg text-akademya-navy">{doctor.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{doctor.specialty}</p>
                <p className="text-sm text-gray-600 mt-3 line-clamp-3">{doctor.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DentistsPage;
