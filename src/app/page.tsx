"use client";

import React from 'react';
import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import DoctorTeam from '@/components/DoctorTeam';
import Testimonials from '@/components/Testimonials';
import NewsSection from '@/components/NewsSection';
import VlogSection from '@/components/VlogSection';
import BlogSection from '@/components/BlogSection';
import LocationMap from '@/components/LocationMap';
import { useLanguage } from '@/contexts/LanguageContext';
import Head from 'next/head';

export default function Home() {
  const { language } = useLanguage();

  return (
    <>
      <Hero />
      <FeaturedServices />
      <DoctorTeam />
      <Testimonials />
      <NewsSection />
      <VlogSection />
      <BlogSection />
      <LocationMap />
    </>
  );
}
