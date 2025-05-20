// components/ImageMagnifier.tsx
'use client';
import { useState, useRef } from 'react';

interface ImageMagnifierProps {
  src: string;
  zoom?: number;
}

export default function ImageMagnifier({ src, zoom = 2 }: ImageMagnifierProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { top, left, width, height } = imgRef.current!.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    // Asegura que no salga del contenedor
    if (x < 0 || y < 0 || x > width || y > height) {
      setShowMagnifier(false);
      return;
    }

    setPosition({ x, y });
  };

  return (
    <div
      className="relative w-[400px] h-[400px] overflow-hidden"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt="Product"
        ref={imgRef}
        className="w-full h-full object-cover"
      />
      {showMagnifier && (
        <div
          className="absolute pointer-events-none border border-black z-50"
          style={{
            width: '150px',
            height: '150px',
            top: `${position.y - 75}px`,
            left: `${position.x - 75}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${imgRef.current!.width * zoom}px ${imgRef.current!.height * zoom}px`,
            backgroundPosition: `-${position.x * zoom - 75}px -${position.y * zoom - 75}px`,
          }}
        />
      )}
    </div>
  );
}
