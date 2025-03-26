"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const DoctorTeam = () => {
  const { t } = useLanguage();

  const doctors = [
    {
      id: 1,
      name: 'Dr. Tuğran Paşlanmaz',
      image: 'https://ext.same-assets.com/1308614748/3772029443.png',
      specialty: t('doctors.dentist'),
      link: '/nevsehir-dis-hekimi/dis-hekimi-tugran-paslanmaz/'
    },
    {
      id: 2,
      name: 'Dr. Serpil Tosun',
      image: 'https://ext.same-assets.com/1308614748/468764240.png',
      specialty: t('doctors.dentist'),
      link: '/nevsehir-dis-hekimi/dis-hekimi-serpil-tosun/'
    },
    {
      id: 3,
      name: 'Dr. Necmettin Tosun',
      image: 'https://ext.same-assets.com/1308614748/394577720.png',
      specialty: t('doctors.dentist'),
      link: '/nevsehir-dis-hekimi/dis-hekimi-necmettin-tosun/'
    },
    {
      id: 4,
      name: 'Dr. Dt. Emir Tosun',
      image: 'https://ext.same-assets.com/1308614748/2135060894.png',
      specialty: t('doctors.orthodontist'),
      link: '/nevsehir-dis-hekimi/nevsehir-ortodonti-emir-tosun/'
    },
    {
      id: 5,
      name: 'Dr. Hasan Cingitaş',
      image: 'https://ext.same-assets.com/1308614748/2812177011.png',
      specialty: t('doctors.dentist'),
      link: '/nevsehir-dis-hekimi/hasan-cingitas/'
    },
    {
      id: 6,
      name: 'Dr. Samet Baydemir',
      image: 'https://ext.same-assets.com/1308614748/654273316.png',
      specialty: t('doctors.dentist'),
      link: '/nevsehir-dis-hekimi/samet-baydemir/'
    },
    {
      id: 7,
      name: 'Dr. Dt. Adile Tosun',
      image: 'https://ext.same-assets.com/1308614748/3950181051.png',
      specialty: t('doctors.orthodontist'),
      link: '/nevsehir-dis-hekimi/nevsehir-ortodonti-adile-tosun/'
    },
    {
      id: 8,
      name: 'Dr. Gülce Dirlik',
      image: 'https://ext.same-assets.com/1308614748/3630710087.png',
      specialty: t('doctors.dentist'),
      link: '/nevsehir-dis-hekimi/dis-hekimi-gulce-dirlik/'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="content-container">
        <h2 className="text-3xl font-bold text-center text-akademya-navy mb-4">
          {t('doctors.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/nevsehir-dis-hekimi" className="btn-primary">
            {t('doctors.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

interface DoctorCardProps {
  doctor: {
    id: number;
    name: string;
    image: string;
    specialty: string;
    link: string;
  };
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <Link href={doctor.link}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
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
        </div>
      </div>
    </Link>
  );
};

export default DoctorTeam;
