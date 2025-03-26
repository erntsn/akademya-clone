import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const vlogItems = [
  {
    id: 1,
    title: 'Akademya Nevşehir Diş Hekimleri 7',
    views: '291',
    image: 'https://ext.same-assets.com/1308614748/3750490021.jpeg',
    link: '/vlog/akademya-nevsehir-dis-hekimleri-7'
  },
  {
    id: 2,
    title: 'Diş Taşı Temizleme İşlemi Acır Mı?',
    views: '476',
    image: 'https://ext.same-assets.com/1308614748/664528696.jpeg',
    link: '/vlog/dis-tasi-temizleme-islemi-acir-mi'
  },
  {
    id: 3,
    title: 'Şeffaf Plak Tedavisini Başardık',
    views: '448',
    image: 'https://ext.same-assets.com/1308614748/3361503405.jpeg',
    link: '/vlog/seffaf-plak-tedavisini-basardik'
  },
  {
    id: 4,
    title: 'Diş Eti Fırçalama',
    views: '202',
    image: 'https://ext.same-assets.com/1308614748/333544496.jpeg',
    link: '/vlog/dis-eti-fircalama'
  },
  {
    id: 5,
    title: '20 Yaş Dişleri Hakkında',
    views: '214',
    image: 'https://ext.same-assets.com/1308614748/2544437290.jpeg',
    link: '/vlog/20-yas-disleri-hakkinda'
  },
];

const VlogSection = () => {
  return (
    <section className="py-16 bg-akademya-gray">
      <div className="content-container">
        <h2 className="text-3xl font-bold text-center text-akademya-navy mb-10">
          Akademya Dental Vlog
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Video Player - Taking up 3 columns */}
          <div className="lg:col-span-3 relative rounded-lg overflow-hidden bg-black aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Play Button */}
              <div className="w-16 h-16 bg-akademya-teal rounded-full flex items-center justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Video List - Taking up 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            {vlogItems.map((item) => (
              <VlogItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface VlogItemProps {
  item: {
    id: number;
    title: string;
    views: string;
    image: string;
    link: string;
  };
}

const VlogItem = ({ item }: VlogItemProps) => {
  return (
    <Link href={item.link}>
      <div className="flex space-x-4 items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded"
          />
          {/* Small play icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-akademya-teal bg-opacity-80 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-akademya-navy font-medium text-sm line-clamp-2">
            {item.title}
          </h3>
          <div className="flex items-center mt-1">
            <span className="text-gray-500 text-xs">{item.views} görüntüleme</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VlogSection;
