"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    // After 3 seconds, hide the success message
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-akademya-navy mb-8">
        {t('contact.title')}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-akademya-teal mb-6">
            {language === 'tr' ? 'İletişim Bilgileri' : 'Contact Information'}
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-akademya-gray flex items-center justify-center mr-4">
                <FaMapMarkerAlt className="text-akademya-teal" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">{t('contact.address')}</h3>
                <p className="text-gray-600">Güzelyurt Mahallesi, Vefa Küçük Caddesi, No:21/A. Merkez/Nevşehir</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-akademya-gray flex items-center justify-center mr-4">
                <FaPhone className="text-akademya-teal" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">{t('contact.phone')}</h3>
                <p className="text-gray-600">
                  <Link href="tel:+903842154444" className="hover:text-akademya-teal">
                    0.384 215 44 44
                  </Link>
                </p>
                <p className="text-gray-600 mt-1">
                  <Link href="tel:+905078424334" className="hover:text-akademya-teal">
                    +90.507 842 43 34
                  </Link>
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">WhatsApp</span>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-akademya-gray flex items-center justify-center mr-4">
                <FaEnvelope className="text-akademya-teal" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">{t('contact.email')}</h3>
                <p className="text-gray-600">
                  <Link href="mailto:info@tesakademya.com" className="hover:text-akademya-teal">
                    info@tesakademya.com
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-akademya-gray flex items-center justify-center mr-4">
                <FaClock className="text-akademya-teal" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">{t('contact.hours')}</h3>
                <div className="text-gray-600">
                  <div className="flex justify-between">
                    <span>{t('contact.weekday')}</span>
                    <span className="ml-4">09.00-18.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.weekend')}</span>
                    <span className="ml-4">{t('contact.closed')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media and WhatsApp */}
          <div className="mt-8">
            <h3 className="font-medium text-gray-800 mb-3">
              {language === 'tr' ? 'Hızlı İletişim' : 'Quick Contact'}
            </h3>
            <div className="flex items-center space-x-4">
              <Link
                href="https://wa.me/message/MP4Q7IOGHAAQE1"
                className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="mr-2" />
                <span>WhatsApp</span>
              </Link>
              <Link
                href="tel:+903842154444"
                className="flex items-center bg-akademya-teal text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                <FaPhone className="mr-2" />
                <span>{language === 'tr' ? 'Hemen Ara' : 'Call Now'}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-akademya-teal mb-6">
            {language === 'tr' ? 'İletişim Formu' : 'Contact Form'}
          </h2>

          {formSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              <p className="font-bold">
                {language === 'tr' ? 'Mesajınız alındı!' : 'Message received!'}
              </p>
              <p>
                {language === 'tr'
                  ? 'En kısa sürede size geri dönüş yapacağız.'
                  : 'We will get back to you as soon as possible.'
                }
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'tr' ? 'Adınız Soyadınız' : 'Full Name'}*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akademya-teal"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'tr' ? 'E-posta Adresiniz' : 'Email Address'}*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akademya-teal"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'tr' ? 'Telefon Numaranız' : 'Phone Number'}*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akademya-teal"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'tr' ? 'Konu' : 'Subject'}*
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akademya-teal"
                >
                  <option value="">
                    {language === 'tr' ? '-- Konu Seçiniz --' : '-- Select Subject --'}
                  </option>
                  <option value="implant">
                    {language === 'tr' ? 'İmplant Tedavisi' : 'Implant Treatment'}
                  </option>
                  <option value="aesthetic">
                    {language === 'tr' ? 'Estetik Diş Hekimliği' : 'Aesthetic Dentistry'}
                  </option>
                  <option value="orthodontics">
                    {language === 'tr' ? 'Ortodonti' : 'Orthodontics'}
                  </option>
                  <option value="whitening">
                    {language === 'tr' ? 'Diş Beyazlatma' : 'Teeth Whitening'}
                  </option>
                  <option value="dental-tourism">
                    {language === 'tr' ? 'Sağlık Turizmi' : 'Dental Tourism'}
                  </option>
                  <option value="other">
                    {language === 'tr' ? 'Diğer' : 'Other'}
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'tr' ? 'Mesajınız' : 'Your Message'}*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akademya-teal"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-akademya-teal text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  {language === 'tr' ? 'Gönder' : 'Submit'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Map */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-2xl font-semibold text-akademya-teal p-6">
          {language === 'tr' ? 'Konum' : 'Location'}
        </h2>
        <div className="relative h-[400px] w-full">
          <Image
            src="https://ext.same-assets.com/3301316643/2043349370.png"
            alt="Akademya Diş Hastanesi Harita"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 right-4">
            <Link
              href="https://goo.gl/maps/ixD8L4G4bKi8xoL2A"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-akademya-teal text-white px-4 py-2 rounded-md shadow-md hover:bg-opacity-90 transition-opacity"
            >
              {t('contact.directions')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
