import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

export default function App() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      localStorage.setItem('language', 'en');
      localStorage.setItem('language', 'en');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="p-8 max-w-4xl mx-auto leading-relaxed text-gray-800">
        <h1 className="text-3xl font-bold mb-4">National Anthem of India</h1>
        <p className="mb-4">
          The National Anthem of India is officially titled "Jana Gana Mana". The song was originally composed in Bengali by India's first Nobel laureate Rabindranath Tagore on 11 December 1911. The parent song, "Bharoto Bhagyo Bidhata", is a Brahmo hymn that has five verses of which only the first verse was adopted as the national anthem.
        </p>
        <p>
          The lyrics of the song first appeared in 5 stanzas in Bengali magazine in an issue of Tatwabodhini Patrika. The melody of the song, in the Alhaiya Bilaval raga, was composed as a Brahmo hymn by Tagore himself with possibly some help from his musician grand-nephew Dinendranath Tagore.
        </p>
      </main>
    </div>
  );
}