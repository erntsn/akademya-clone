"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const CorporatePage = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-akademya-navy mb-8">
        {t('nav.corporate')}
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-medium text-akademya-teal mb-4">Hakkımızda</h2>

        <div className="prose prose-lg">
          <p className="mb-4">
            Akademya Nevşehir Diş Polikliniği, ağız ve diş sağlığı alanında uzman ve deneyimli kadrosu ile Nevşehir'de hizmet vermektedir. Modern teknoloji ve yenilikçi tedavi yöntemleriyle hastalarımıza konforlu ve kaliteli bir hizmet sunmayı amaçlıyoruz.
          </p>

          <p className="mb-4">
            Kliniğimizde implant diş tedavileri, zirkonyum diş kaplamaları, ortodonti, estetik diş hekimliği, endodonti, periodontoloji ve çocuk diş hekimliği gibi birçok alanda hizmet vermekteyiz. Hastalarımızın memnuniyeti ve ağız sağlığı bizim için en önemli önceliktir.
          </p>

          <h3 className="text-lg font-medium text-akademya-navy mt-6 mb-3">Misyonumuz</h3>
          <p className="mb-4">
            Ağız ve diş sağlığı alanında en kaliteli hizmeti sunarak, hastalarımızın tedavi konforunu en üst düzeyde tutmak ve modern diş hekimliğinin gerekliliklerini yerine getirmektir.
          </p>

          <h3 className="text-lg font-medium text-akademya-navy mt-6 mb-3">Vizyonumuz</h3>
          <p className="mb-4">
            Teknolojik gelişmeleri yakından takip ederek, sürekli kendini yenileyen ve geliştiren bir anlayışla, ağız ve diş sağlığı alanında bölgemizde öncü ve örnek bir kurum olmaktır.
          </p>

          <h3 className="text-lg font-medium text-akademya-navy mt-6 mb-3">Değerlerimiz</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Hasta memnuniyeti ve güvenliği</li>
            <li>Etik değerlere bağlılık</li>
            <li>Sürekli gelişim ve yenilikçilik</li>
            <li>Profesyonellik ve güvenilirlik</li>
            <li>Toplum sağlığına katkı</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CorporatePage;
