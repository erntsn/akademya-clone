import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LocationMap = () => {
  return (
    <section className="py-8 bg-akademya-gray">
      <div className="content-container">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2 relative h-80">
              <Image
                src="https://ext.same-assets.com/3301316643/2043349370.png"
                alt="Akademya Diş Hastanesi Harita"
                fill
                className="object-cover"
              />
              <Link
                href="https://goo.gl/maps/ixD8L4G4bKi8xoL2A"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-akademya-teal text-white px-4 py-2 rounded-md shadow-md hover:bg-opacity-90 transition-opacity"
              >
                Yol Tarifi Al
              </Link>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-akademya-navy mb-4">Bize Ulaşın</h3>
                <address className="not-italic">
                  <div className="mb-4">
                    <p className="text-gray-700 font-medium mb-1">Adres:</p>
                    <p className="text-gray-600">Güzelyurt Mahallesi, Vefa Küçük Caddesi, No:21/A. Merkez/Nevşehir</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-700 font-medium mb-1">Telefon:</p>
                    <p className="text-gray-600">
                      <Link href="tel:+903842154444" className="hover:text-akademya-teal transition-colors">
                        0.384 215 44 44
                      </Link>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">E-posta:</p>
                    <p className="text-gray-600">
                      <Link href="mailto:info@tesakademya.com" className="hover:text-akademya-teal transition-colors">
                        info@tesakademya.com
                      </Link>
                    </p>
                  </div>
                </address>
              </div>
              <div className="mt-6">
                <h4 className="text-gray-700 font-medium mb-2">Çalışma Saatleri:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li className="flex justify-between">
                    <span>Pazartesi - Cumartesi:</span>
                    <span>09.00-18.00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pazar:</span>
                    <span>Kapalı</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
