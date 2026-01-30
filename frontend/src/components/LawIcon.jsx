import React, { useEffect, useRef, useState } from 'react';

const LawIcon = ({ name, className = '', size = 32, animate = true }) => {
  const iconRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!animate) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-10% 0px' }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => observer.disconnect();
  }, [animate]);

  const iconMap = {
    balance: 'balance.svg',
    baton: 'baton.svg',
    book: 'book.svg',
    briefcase: 'briefcase.svg',
    case: 'case.svg',
    cctv: 'cctv.svg',
    contract: 'contract.svg',
    courthouse: 'courthouse.svg',
    evidence: 'evidence.svg',
    'feather-pen': 'feather pen.svg',
    folder: 'folder.svg',
    gavel: 'gavel.svg',
    handcuffs: 'handcuffs.svg',
    handshake: 'handshake.svg',
    judge: 'judge.svg',
    jury: 'jury.svg',
    law: 'law.svg',
    lawyer: 'lawyer.svg',
    parchment: 'parchment.svg',
    pen: 'pen.svg',
    pillars: 'pillars.svg',
    research: 'research.svg',
    stamp: 'stamp.svg',
    typewriter: 'typewriter.svg',
    witness: 'witness.svg',
  };

  const iconFile = iconMap[name] || 'balance.svg';

  return (
    <div
      ref={iconRef}
      className={`inline-flex items-center justify-center transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-12'
      } ${className}`}
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
      }}
    >
      <img
        src={`/icons/${iconFile}`}
        alt={name}
        className="w-full h-full object-contain"
        style={{
          filter:
            'invert(56%) sepia(44%) saturate(1748%) hue-rotate(135deg) brightness(91%) contrast(89%)',
        }}
      />
    </div>
  );
};

export default LawIcon;
