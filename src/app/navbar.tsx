'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars } from 'react-icons/fa';
import './globals.css';

enum Sections {
  HOME = 'home',
  WORKS = 'artworks',
  ABOUT = 'about',
  CONTACT = 'contact',
}

const NavBar = () => {
  const [selectedSection, setSelectedSection] = useState<Sections>(Sections.ABOUT);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: Sections) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 110;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleNavClick = (sectionId: Sections) => {
    setSelectedSection(sectionId);
    scrollToSection(sectionId);
    setIsMenuOpen(false);
    window.history.pushState(null, '', `#${sectionId}`);
  };

  useEffect(() => {
    const initialSection = window.location.hash.replace('#', '') as Sections;
    if (Object.values(Sections).includes(initialSection)) {
      setSelectedSection(initialSection);
      scrollToSection(initialSection);
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedSection(entry.target.id as Sections);
        }
      });
    };

    const viewHeight = window.innerHeight;
    const rootMarginTop = -(viewHeight * 0.2) + 'px';
    const rootMarginBottom = -(viewHeight * 0.7) + 'px';

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: `${rootMarginTop} 0px ${rootMarginBottom} 0px`,
    });

    Object.values(Sections).forEach((section) => {
      const sectionEl = document.getElementById(section);
      if (sectionEl) {
        observer.observe(sectionEl);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  //  bg-[#FAEBD7] 
  return (
    <nav 
      className="fixed shadow-md z-10 w-full
       md:flex justify-between
       "
      style={{ 
        backgroundImage: "url('/sandy_beach.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex justify-between items-center p-8">
        <div className="flex items-center">
          <Image height={100} width={80} alt='logo' src="/artist-placeholder.png" className='hidden md:block' style={{ borderRadius: '50%' }} />
          <h2 className='ml-3 text-2xl md:text-4xl'>NEWBURYPORT WATERCOLORS</h2>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          <FaBars />
        </button>
      </div>
      <ul className={`flex flex-col md:flex-row space-x-0 md:space-x-4 p-8 items-center ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
        {Object.values(Sections).map((section) => (
          <li 
            key={section} 
            className='cursor-pointer text-2xl hover:text-green-400'
            style={{ color: selectedSection === section ? '#93E9BE' : '#3B6883' }}
            onClick={() => handleNavClick(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
