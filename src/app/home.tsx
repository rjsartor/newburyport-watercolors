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
    <div id='home' className='content-section' style={{ height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative' }}>
      {PAINTINGS.map((src, index) => {
        return <div
          key={src}
          style={{
            backgroundImage: `url(${src})`,
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
    </div>
  );
};