'use client';
import React, { useState, useEffect } from 'react';
import { PAINTINGS } from './data/paintings';

export const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % PAINTINGS.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id='home' className='content-section' style={{ height: 'calc(100vh - 110px)', width: '100vw', overflow: 'hidden', position: 'relative', marginTop: 132 }}>
      {PAINTINGS.map((src, index) => {
        return <div
          key={`${src.name}-${index}`}
          style={{
            backgroundImage: `url(${src.path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            height: '100%',
            width: '100%',
            transition: 'opacity 2s ease-in-out',
            opacity: currentImage === index ? 1 : 0,
          }}
        />
      })}
    </section>
  );
};