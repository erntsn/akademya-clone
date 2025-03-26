import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Efsun Efsun",
    date: "2 Eylül 2023",
    rating: 5,
    text: "Samet Baydemir hocam bugün kızımın ikinci 20 lik dişini çekti çokda kolay oldu güler yüzünüz ve neşeli haliniz bizede enerji verdi herşey için çok teşekkür ederim emeğinize sağlık hocam",
  },
  {
    id: 2,
    name: "Şevval Kestiren",
    date: "22 Ağustos 2023",
    rating: 5,
    text: "Çenede kısıtlı açılma ve ağrı sorunuyla gittiğim akademia kliniğinde Uzman Doktor Adile Hanım ile tedavimi tamamladık. Güler yüzü ve yardımseverliği ile her muayenemde gitmek için can attım bir tedavi süreci geçirdim. Splint tedavisi ve bununla birlikte 20lik dişlerimin çekilmesiyle çene kaslarımda rahatlama oldu ve çenemi kapatıp açarkenki ses yok denecek kadar azaldı üstelik sadece 5 gün kullandım. Her şey için teşekkür ediyorum.",
  },
  {
    id: 3,
    name: "Tezcan ŞAHIN",
    date: "19 Temmuz 2023",
    rating: 5,
    text: "Kesinlikle tavsiye ederim.",
  },
  {
    id: 4,
    name: "Sarenur Butuk",
    date: "14 Temmuz 2023",
    rating: 5,
    text: "Aciliyeti olan ortodontik bir işlem yapılması gerekiyordu, Adile hanıma yönlendirdiler, o kadar ilgili güler yüzlü bir kadın ki açı memnun kaldım. Aldığı ücreti sonuna kadar hak eden saygı değer bir insan.",
  },
  {
    id: 5,
    name: "Fatma Zehra Aykemez",
    date: "29 Kasım 2022",
    rating: 5,
    text: "Çok temiz ve nazikler ayrıca dakiklik çok önemli bi ayrıntı ve gayet başarılılar allah razı olsun",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-akademya-gray">
      <div className="content-container">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-akademya-navy mb-4">
            Hasta Görüşleri
          </h2>

          <div className="flex items-center mb-8">
            <div className="flex text-yellow-400">
              <span>★★★★★</span>
            </div>
            <span className="ml-2 text-gray-600">
              4.9 / 5 (1128 değerlendirme)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="mt-10 flex items-center">
            <Image
              src="https://ext.same-assets.com/3529553235/1170624009.svg"
              alt="Google"
              width={24}
              height={24}
              className="mr-3"
            />
            <span className="text-gray-800 font-medium">Google değerlendirmelerimiz</span>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    date: string;
    rating: number;
    text: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const renderStars = (rating: number) => {
    return '★'.repeat(rating);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-3">
          <h3 className="font-medium text-gray-800">{testimonial.name}</h3>
          <p className="text-xs text-gray-500">{testimonial.date}</p>
        </div>
      </div>

      <div className="text-yellow-400 mb-3">
        {renderStars(testimonial.rating)}
      </div>

      <p className="text-gray-600 text-sm flex-grow">
        {testimonial.text.length > 180
          ? `${testimonial.text.substring(0, 180)}...`
          : testimonial.text}
      </p>

      {testimonial.text.length > 180 && (
        <button className="text-akademya-teal text-sm mt-2 self-start">
          Daha fazla oku
        </button>
      )}
    </div>
  );
};

export default Testimonials;
