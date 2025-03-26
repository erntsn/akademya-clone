import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-akademya-teal text-white">
      <div className="content-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Dental Services */}
          <div>
            <h4 className="font-medium text-lg mb-4">İmplant & Ortodonti</h4>
            <ul className="space-y-2">
              <FooterLink href="/implant-dis-tedavileri">İmplant Diş</FooterLink>
              <FooterLink href="/ortodonti">Ortodonti | Diş Teli</FooterLink>
              <FooterLink href="/ortodonti/seffaf-plaklar">Telsiz Ortodonti</FooterLink>
              <FooterLink href="/estetik-dis-hekimligi/dis-beyazlatma">Diş Beyazlatma</FooterLink>
              <FooterLink href="/estetik-dis-hekimligi/zirkonyum-dis-kaplama">Zirkonyum Diş</FooterLink>
              <FooterLink href="/estetik-dis-hekimligi">Estetik Diş Hekimliği</FooterLink>
              <FooterLink href="/cocuk-dis-hekimligi-pedodonti">Çocuk Diş | Pedodonti</FooterLink>
              <FooterLink href="/agiz-ve-cene-cerrahisi">Ağız ve Çene Cerrahisi</FooterLink>
              <FooterLink href="/">Giriş</FooterLink>
            </ul>
          </div>

          {/* Column 2 - Other Treatments */}
          <div>
            <h4 className="font-medium text-lg mb-4">Diğer Tedaviler</h4>
            <ul className="space-y-2">
              <FooterLink href="/dis-eti-hastaliklari-periodontoloji">Diş Eti Hastalıkları | Periodontoloji</FooterLink>
              <FooterLink href="/kanal-tedavisi-endodonti">Kanal Tedavisi Endodonti</FooterLink>
              <FooterLink href="/restoratif-dis-tedavisi">Restoratif Diş Tedavisi</FooterLink>
              <FooterLink href="/protez-dis-tedavi">Protez Diş Tedavisi</FooterLink>
              <FooterLink href="/horlama-ve-uyku-apnesi">Horlama ve Uyku Apnesi</FooterLink>
              <FooterLink href="/agiz-kokusu">Ağız Kokusu</FooterLink>
              <FooterLink href="/agiz-hastaliklari-ve-tedavileri">Ağız Hastalıkları</FooterLink>
              <FooterLink href="/dis-sikma-ve-cene-eklem-rahatsizliklari">Diş Sıkma | Eklem Rahatsızlıkları</FooterLink>
              <FooterLink href="/oral-diagnoz-radyoloji">Oral Diagnoz ve Radyoloji</FooterLink>
            </ul>
          </div>

          {/* Column 3 - Logo and Address */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="https://ext.same-assets.com/1308614748/190291453.png"
                alt="Akademya Ağız ve Diş Sağlığı Polikliniği"
                width={240}
                height={80}
                className="h-16 w-auto object-contain"
              />
              <p className="mt-2 text-sm">Güzelyurt Mh, Vefa Küçük Cd, No:21/A</p>
            </div>

            {/* Reviews */}
            <div className="bg-white text-gray-800 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="font-medium">Mükemmel değerlendirme</span>
                <span className="ml-2 text-sm">1128 değerlendirmeler göre.</span>
              </div>
              <div className="flex text-yellow-400 mb-2">
                <span>★★★★★</span>
              </div>
              <div className="text-sm">
                <p className="line-clamp-3">Dr Gülce Dirlik kızımın dolgu işlemlerini gerçekleştirdi çocuklara gösterdiği samimiyeti ve güler yüzü sayesinde ilk dişçi deneyimimiz çok güzel geçti ayrıca verdiği küçük hediyeler için çok teşekkür ediyoruz...</p>
              </div>
              <div className="mt-2 text-xs flex justify-between items-center">
                <span>Melek Güçlü</span>
                <span>2 Mart 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-8">
          <Link href="https://wa.me/message/MP4Q7IOGHAAQE1" className="w-10 h-10 bg-white text-akademya-teal flex items-center justify-center rounded-full">
            <FaWhatsapp size={20} />
          </Link>
          <Link href="http://www.instagram.com/akademyadis" className="w-10 h-10 bg-white text-akademya-teal flex items-center justify-center rounded-full">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://www.facebook.com/akademyadis" className="w-10 h-10 bg-white text-akademya-teal flex items-center justify-center rounded-full">
            <FaFacebook size={20} />
          </Link>
          <Link href="http://www.twitter.com/akademyadis" className="w-10 h-10 bg-white text-akademya-teal flex items-center justify-center rounded-full">
            <FaTwitter size={20} />
          </Link>
          <Link href="https://www.youtube.com/channel/UCfFTn7xnaeL8bOFMIHXFPdA" className="w-10 h-10 bg-white text-akademya-teal flex items-center justify-center rounded-full">
            <FaYoutube size={20} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm">
          <p className="mb-2">
            Nevşehir Diş Akademya Polikliniği İmplant Diş | Zirkonyum Diş | Diş Kaplama | 20lik Diş Çekimi | Diş Beyazlatma | Kanal Tedavisi | Endodonti | Kaplama Diş | Diş Temizleme | Gülüş Tasarımı | Diş Taşı | Periodontoloji | Diş Estetiği | Ortodonti | Diş Teli | Çocuk Diş | Diş Eti Kanaması | Şeffaf Plaklar | Telsiz Ortodonti | Görünmez Ortodonti | Telsiz Diş Düzeltme | Diş Eti Tedavisi | Çene Cerrahisi | Gömülü Diş Tedavisi | Invisalign | Orthero tedavileriyle Nevşehir Diş alanında hizmetinizde.
          </p>
          <p className="text-xs opacity-75 mt-4">
            Bu sitede yer alan içerikler T.C. Sağlık Bakanlığı ve Türk Diş Hekimleri Birliği'nin önerilerinden destek alınarak bilgilendirme amaçlı hazırlanmıştır. Sitede yer alan yazı ve görseller sadece ön bilgilendirme içindir. Burada yer alan bilgiler hiç bir koşulda klinik muayene ve tanı yöntemlerinin yerine geçemez!
          </p>
          <p className="text-xs mt-4">
            ©2023 Özel Sena Sağlık Hizmetleri Tic. Ltd. Şti. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <li>
      <Link href={href} className="text-white hover:text-gray-100 text-sm transition-colors duration-200">
        {children}
      </Link>
    </li>
  );
};

export default Footer;
