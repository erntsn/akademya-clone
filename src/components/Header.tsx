"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: 'nav.home' },
    { href: "/kurumsal", label: 'nav.corporate' },
    { href: "/nevsehir-dis-tedavileri", label: 'nav.treatments' },
    { href: "/nevsehir-dis-hekimi", label: 'nav.dentists' },
    { href: "/blog-2", label: 'nav.blog' },
    { href: "/klinik", label: 'nav.clinic' },
    { href: "/cappadocia-dental-health-tourism", label: 'nav.tourism' },
    { href: "/iletisim", label: 'nav.contact' },
    { href: "/bizden-haberler", label: 'nav.news' },
    { href: "/kapadokyayi-kesfet", label: 'nav.cappadocia' },
  ];

  return (
    <header className="w-full">
      {/* Top Header Bar - Gradient */}
      <div className="gradient-header text-white">
        <div className="content-container py-2 flex justify-between items-center">
          <div>
            <Link href="/">
              <div className="h-10 relative">
                <Image
                  src="https://ext.same-assets.com/1308614748/190291453.png"
                  alt="Akademya Diş Kliniği"
                  width={180}
                  height={40}
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="tel:+903842154444" className="flex items-center space-x-1">
              <FaPhone className="text-sm" />
            </Link>
            <Link href="https://wa.me/message/MP4Q7IOGHAAQE1" className="flex items-center space-x-1">
              <FaWhatsapp className="text-lg" />
            </Link>
            <Link href="mailto:info@tesakademya.com" className="flex items-center space-x-1">
              <FaEnvelope className="text-sm" />
            </Link>
            <Link href="https://instagram.com/akademyadis" className="flex items-center space-x-1">
              <FaInstagram className="text-lg" />
            </Link>
            <Link href="https://facebook.com/akademyadis" className="flex items-center space-x-1">
              <FaFacebook className="text-lg" />
            </Link>
            <Link href="https://www.youtube.com/channel/UCfFTn7xnaeL8bOFMIHXFPdA" className="flex items-center space-x-1">
              <FaYoutube className="text-lg" />
            </Link>
            <Link href="https://twitter.com/akademyadis" className="flex items-center space-x-1">
              <FaTwitter className="text-lg" />
            </Link>
            <Link href="https://linkedin.com/company/akademya-agiz-dis-sagligi-nevsehir" className="flex items-center space-x-1">
              <FaLinkedin className="text-lg" />
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-akademya-gray shadow-sm">
        <div className="content-container">
          <nav className="flex flex-wrap justify-center md:justify-start">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {t(link.label)}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="px-3 py-4 text-akademya-navy hover:text-akademya-teal text-sm font-medium transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export default Header;
