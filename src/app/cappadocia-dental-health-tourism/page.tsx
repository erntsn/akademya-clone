"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const HealthTourismPage = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      id: 1,
      title: language === 'tr' ? "Tedavi Planlaması" : "Treatment Planning",
      description: language === 'tr'
        ? "Tedavi öncesi detaylı planlama, uzaktan konsültasyon ve kişiselleştirilmiş çözümler sunuyoruz."
        : "We offer detailed pre-treatment planning, remote consultations, and personalized solutions.",
      icon: "https://ext.same-assets.com/1308614748/1272991148.webp",
    },
    {
      id: 2,
      title: language === 'tr' ? "Havaalanı Transferi" : "Airport Transfer",
      description: language === 'tr'
        ? "Nevşehir veya Kayseri Havaalanı'ndan klinik ve konaklama yerinize özel transfer hizmeti sağlıyoruz."
        : "We provide private transfer services from Nevşehir or Kayseri Airport to the clinic and your accommodation.",
      icon: "https://ext.same-assets.com/1308614748/1308614748.webp",
    },
    {
      id: 3,
      title: language === 'tr' ? "Konaklama Hizmeti" : "Accommodation Service",
      description: language === 'tr'
        ? "Tedavi süreciniz boyunca ihtiyacınıza uygun konaklama seçenekleri organize ediyoruz."
        : "We organize suitable accommodation options for your needs throughout your treatment process.",
      icon: "https://ext.same-assets.com/1308614748/1566199005.jpeg",
    },
    {
      id: 4,
      title: language === 'tr' ? "Çeviri Hizmeti" : "Translation Service",
      description: language === 'tr'
        ? "İngilizce, Almanca, Rusça ve Arapça dillerinde çeviri hizmeti sunuyoruz."
        : "We offer translation services in English, German, Russian, and Arabic languages.",
      icon: "https://ext.same-assets.com/1308614748/1308614747.webp",
    },
    {
      id: 5,
      title: language === 'tr' ? "Kapadokya Turu" : "Cappadocia Tour",
      description: language === 'tr'
        ? "Tedavi aralıklarında Kapadokya'nın eşsiz güzelliklerini keşfedebilmeniz için tur organizasyonu yapıyoruz."
        : "We organize tours for you to discover the unique beauties of Cappadocia during treatment intervals.",
      icon: "https://ext.same-assets.com/1308614748/3611382824.jpeg",
    },
    {
      id: 6,
      title: language === 'tr' ? "7/24 Destek" : "24/7 Support",
      description: language === 'tr'
        ? "Ziyaretiniz süresince her türlü ihtiyacınız için 7/24 destek hizmeti sağlıyoruz."
        : "We provide 24/7 support service for all your needs during your visit.",
      icon: "https://ext.same-assets.com/1308614748/4159063213.webp",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Michael Brown",
      country: "UK",
      text: language === 'tr'
        ? "Kapadokya'da hem dişlerimi yaptırdım hem de harika bir tatil geçirdim. Profesyonel ekip ve muhteşem bir deneyimdi."
        : "I had my teeth done in Cappadocia and had a great vacation at the same time. It was a professional team and a wonderful experience.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophia Mueller",
      country: "Germany",
      text: language === 'tr'
        ? "İmplant tedavim için Türkiye'yi tercih ettim ve çok memnun kaldım. Klinik çok modern ve doktorlar son derece profesyoneldi."
        : "I chose Turkey for my implant treatment and was very satisfied. The clinic is very modern and the doctors were extremely professional.",
      rating: 5,
    },
    {
      id: 3,
      name: "Alexander Petrov",
      country: "Russia",
      text: language === 'tr'
        ? "Estetik diş tedavim için Akademya'yı tercih ettim. Sonuçlar mükemmel ve fiyatlar Rusya'dakinden çok daha uygundu."
        : "I chose Akademya for my aesthetic dental treatment. The results were perfect and the prices were much more affordable than in Russia.",
      rating: 5,
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-akademya-navy mb-8">
        {t('nav.tourism')}
      </h1>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-akademya-teal mb-4">
              {language === 'tr' ? 'Kapadokya\'da Diş Tedavisi' : 'Dental Treatment in Cappadocia'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'tr'
                ? 'Akademya Nevşehir Diş Kliniği olarak, dünyanın her yerinden gelen hastalarımıza yüksek kaliteli diş tedavisi hizmeti sunuyoruz. Türkiye\'nin eşsiz bir bölgesi olan Kapadokya\'da diş tedavinizi yaptırırken, aynı zamanda bir tatil deneyimi yaşayabilirsiniz.'
                : 'As Akademya Nevşehir Dental Clinic, we provide high-quality dental treatment services to our patients from all over the world. While having your dental treatment in Cappadocia, a unique region of Turkey, you can also experience a vacation at the same time.'
              }
            </p>
            <p className="text-gray-700">
              {language === 'tr'
                ? 'Modern teknolojik altyapımız, uzman diş hekimlerimiz ve çok dilli personelimiz ile sağlık turizmi konusunda geniş bir deneyime sahibiz. Tedavi öncesi planlama aşamasından, tedavi sonrası bakım sürecine kadar tüm ihtiyaçlarınızı karşılıyoruz.'
                : 'With our modern technological infrastructure, specialist dentists, and multilingual staff, we have extensive experience in health tourism. We meet all your needs from pre-treatment planning to post-treatment care.'
              }
            </p>
          </div>
          <div className="md:w-1/2 relative h-60 md:h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/1308614748/3750490021.jpeg"
              alt="Cappadocia Dental Tourism"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Services */}
      <h2 className="text-2xl font-semibold text-center text-akademya-navy mb-6">
        {language === 'tr' ? 'Sağlık Turizmi Hizmetlerimiz' : 'Our Health Tourism Services'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-akademya-gray flex items-center justify-center mr-4 overflow-hidden">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={30}
                  height={30}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-akademya-navy">{service.title}</h3>
            </div>
            <p className="text-gray-600 flex-grow">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Treatments */}
      <div className="bg-akademya-gray rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-semibold text-center text-akademya-navy mb-6">
          {language === 'tr' ? 'Tedavi Hizmetlerimiz' : 'Our Treatment Services'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-akademya-teal mb-3">
              {language === 'tr' ? 'İmplant Tedavisi' : 'Implant Treatment'}
            </h3>
            <p className="text-gray-600 mb-2">
              {language === 'tr'
                ? 'Eksik dişlerinizi tamamlamak için kalıcı ve doğal görünümlü çözümler sunuyoruz.'
                : 'We offer permanent and natural-looking solutions to replace your missing teeth.'
              }
            </p>
            <Link href="/implant-dis-tedavileri" className="text-akademya-teal text-sm font-medium hover:underline">
              {language === 'tr' ? 'Detaylı Bilgi' : 'More Information'}
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-akademya-teal mb-3">
              {language === 'tr' ? 'Zirkonyum Diş Kaplamaları' : 'Zirconium Dental Crowns'}
            </h3>
            <p className="text-gray-600 mb-2">
              {language === 'tr'
                ? 'Doğal görünümlü, dayanıklı ve estetik zirkonyum kaplamalar ile gülüşünüzü yenileyin.'
                : 'Renew your smile with natural-looking, durable, and aesthetic zirconium coatings.'
              }
            </p>
            <Link href="/zirkonyum-dis-kaplama" className="text-akademya-teal text-sm font-medium hover:underline">
              {language === 'tr' ? 'Detaylı Bilgi' : 'More Information'}
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-akademya-teal mb-3">
              {language === 'tr' ? 'Estetik Diş Hekimliği' : 'Aesthetic Dentistry'}
            </h3>
            <p className="text-gray-600 mb-2">
              {language === 'tr'
                ? 'Gülüş tasarımı, diş beyazlatma ve lamine uygulamaları ile mükemmel gülüşe kavuşun.'
                : 'Achieve the perfect smile with smile design, teeth whitening, and laminate applications.'
              }
            </p>
            <Link href="/estetik-dis-hekimligi" className="text-akademya-teal text-sm font-medium hover:underline">
              {language === 'tr' ? 'Detaylı Bilgi' : 'More Information'}
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-akademya-teal mb-3">
              {language === 'tr' ? 'Ortodonti' : 'Orthodontics'}
            </h3>
            <p className="text-gray-600 mb-2">
              {language === 'tr'
                ? 'Şeffaf plaklar ve diğer ortodontik tedaviler ile dişlerinizi düzeltin.'
                : 'Straighten your teeth with clear aligners and other orthodontic treatments.'
              }
            </p>
            <Link href="/ortodonti" className="text-akademya-teal text-sm font-medium hover:underline">
              {language === 'tr' ? 'Detaylı Bilgi' : 'More Information'}
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-center text-akademya-navy mb-6">
        {language === 'tr' ? 'Hasta Yorumları' : 'Patient Testimonials'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-akademya-gray rounded-full flex items-center justify-center mr-3 text-akademya-navy font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.country}</p>
              </div>
            </div>
            <div className="text-yellow-400 text-sm mb-3">
              {'★'.repeat(testimonial.rating)}
            </div>
            <p className="text-gray-600 italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-akademya-teal mb-4">
          {language === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
        </h2>
        <p className="text-gray-700 mb-6">
          {language === 'tr'
            ? 'Sağlık turizmi kapsamında randevu almak veya bilgi edinmek için bizimle iletişime geçebilirsiniz.'
            : 'You can contact us for appointments or information within the scope of health tourism.'
          }
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link href="/iletisim" className="btn-primary">
            {language === 'tr' ? 'İletişim Formu' : 'Contact Form'}
          </Link>
          <Link href="https://wa.me/message/MP4Q7IOGHAAQE1" className="btn-secondary flex items-center justify-center">
            <span className="mr-2">WhatsApp</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthTourismPage;
