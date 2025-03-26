"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const ClinicPage = () => {
  const { t } = useLanguage();

  const facilities = [
    {
      id: 1,
      title: "Modern Tedavi Odaları",
      description: "En son teknoloji ile donatılmış, steril ve konforlu tedavi odalarımız hastaların kendilerini rahat hissetmesi için özel olarak tasarlanmıştır.",
      image: "https://ext.same-assets.com/1308614748/4159063213.webp",
    },
    {
      id: 2,
      title: "Dijital Radyoloji",
      description: "Düşük radyasyon dozuyla çalışan dijital röntgen cihazlarımız sayesinde hızlı ve net görüntüleme yapılmaktadır.",
      image: "https://ext.same-assets.com/1308614748/4159063215.webp",
    },
    {
      id: 3,
      title: "Sterilizasyon Ünitesi",
      description: "Kliniğimizde en yüksek hijyen standartlarını sağlamak için özel sterilizasyon ünitesi bulunmaktadır.",
      image: "https://ext.same-assets.com/1308614748/4159063217.webp",
    },
    {
      id: 4,
      title: "Bekleme Salonu",
      description: "Ferah ve rahat bekleme salonumuzda tedavi öncesinde keyifli vakit geçirebilirsiniz.",
      image: "https://ext.same-assets.com/1308614748/4159063219.webp",
    },
  ];

  const technologies = [
    {
      id: 1,
      title: "CAD/CAM Teknolojisi",
      description: "Bilgisayar destekli tasarım ve üretim teknolojisi sayesinde, tek seansta diş ölçüsü alınıp protez üretimi yapılabilmektedir.",
    },
    {
      id: 2,
      title: "3D Dental Tomografi",
      description: "Üç boyutlu görüntüleme teknolojisi ile çene ve diş yapısının detaylı incelenmesi sağlanır.",
    },
    {
      id: 3,
      title: "Lazer Diş Hekimliği",
      description: "Cerrahi işlemlerde daha az ağrı ve hızlı iyileşme sağlayan lazer teknolojisi kullanılmaktadır.",
    },
    {
      id: 4,
      title: "Dijital Gülüş Tasarımı",
      description: "Bilgisayar ortamında tedavi sonrası görünümün simüle edilmesini sağlayan ileri teknoloji.",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-akademya-navy mb-8">
        {t('nav.clinic')}
      </h1>

      {/* Clinic Introduction */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-akademya-teal mb-4">Akademya Nevşehir Diş Kliniği</h2>
        <p className="text-gray-700 mb-4">
          Akademya Nevşehir Diş Kliniği, modern diş hekimliğinin tüm imkanlarını hastalarına sunmak için tasarlanmış, teknolojik altyapısı güçlü bir sağlık merkezidir. Kliniğimiz, hastalarımızın konforunu ve memnuniyetini her zaman ön planda tutarak, kaliteli hizmet anlayışıyla çalışmaktadır.
        </p>
        <p className="text-gray-700">
          Steril ortamlarda, alanında uzman diş hekimleri ve yardımcı personel ile tüm dental tedavi ihtiyaçlarınızı karşılamaktayız. Modern teknoloji ile donatılmış kliniğimizde, dijital röntgen, 3D tomografi, CAD/CAM sistemleri gibi ileri teknolojik cihazlar kullanılmaktadır.
        </p>
      </div>

      {/* Clinic Facilities */}
      <h2 className="text-2xl font-semibold text-center text-akademya-navy mb-6">Klinik Olanakları</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {facilities.map((facility) => (
          <div key={facility.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-akademya-navy mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Technology */}
      <div className="bg-akademya-gray rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-semibold text-center text-akademya-navy mb-6">Teknolojik Altyapımız</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech) => (
            <div key={tech.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-akademya-teal mb-2">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Standards */}
      <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-akademya-navy mb-4">Kalite Standartlarımız</h2>
        <p className="text-gray-700 mb-4">
          Akademya Nevşehir Diş Kliniği olarak, tüm tedavi süreçlerimizde uluslararası kalite standartlarını uygulamaktayız. Hasta güvenliği ve memnuniyeti bizim için en önemli önceliktir.
        </p>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-akademya-teal mt-2 mr-2"></div>
            <p className="text-gray-700">Sterilizasyon işlemleri uluslararası standartlara uygun şekilde gerçekleştirilmektedir.</p>
          </div>
          <div className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-akademya-teal mt-2 mr-2"></div>
            <p className="text-gray-700">Tüm tedavi malzemeleri CE sertifikalı, kalitesi onaylanmış ürünlerdir.</p>
          </div>
          <div className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-akademya-teal mt-2 mr-2"></div>
            <p className="text-gray-700">Hekimlerimiz düzenli olarak mesleki gelişim eğitimlerine katılmaktadır.</p>
          </div>
          <div className="flex items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-akademya-teal mt-2 mr-2"></div>
            <p className="text-gray-700">Hasta bilgileri KVKK kapsamında güvenle saklanmaktadır.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicPage;
