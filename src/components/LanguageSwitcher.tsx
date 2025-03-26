"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Once the component is mounted, we can safely access the DOM
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!mounted) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mounted]);

  // Language options - only create this once mounted to avoid hydration mismatch
  const languages = mounted
    ? [
        { code: 'tr' as Language, label: t('language.tr'), flag: '🇹🇷' },
        { code: 'en' as Language, label: t('language.en'), flag: '🇬🇧' },
      ]
    : [];

  // Change language handler
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Only render the full component on the client
  if (!mounted) {
    return (
      <button
        className="flex items-center space-x-1 text-white px-2 py-1 rounded-md"
        aria-label="Language"
      >
        <FaGlobe className="text-white text-lg" />
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-1 text-white px-2 py-1 rounded-md hover:bg-opacity-80 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={t('language')}
      >
        <FaGlobe className="text-white text-lg" />
        <span className="hidden md:inline ml-1">{t('language')}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 overflow-hidden">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 ${
                  language === lang.code ? 'bg-gray-100 text-akademya-teal font-medium' : 'text-gray-700'
                }`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
                {language === lang.code && (
                  <span className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-akademya-teal" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
