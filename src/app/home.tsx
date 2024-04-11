'use client';
import React, { useState, useEffect } from 'react';
import { PAINTINGS, Painting } from './data/paintings';
import { useIsMobile } from './hooks/useIsMobile.hook';

export const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    setPaintings(isMobile ? PAINTINGS.filter(p => p.slide) : PAINTINGS);
  }, [isMobile]);

  useEffect(() => {
    if (!paintings.length) return;
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % paintings.length);
    }, 3200);

    return () => clearInterval(intervalId);
  }, [paintings]);

  return (
    <section 
      id='home' className='content-section mt-12 sm:mt-32' 
      style={{ height: 'calc(100vh - 110px)', width: '100vw', overflow: 'hidden', position: 'relative' }}
    >
      {paintings.map((painting, index) => {
        return (
          <div
            key={`${painting.name}-${index}`}
            className="image-div"
            style={{
              backgroundImage: `url(${painting.path})`,
              opacity: currentImage === index ? 1 : 0,
            }}
          />
        )
      })}
    </section>
  );
};