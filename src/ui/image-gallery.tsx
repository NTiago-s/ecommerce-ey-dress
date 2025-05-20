"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

type ImageGalleryProps = {
  images: string[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [mainRef, mainApi] = useEmblaCarousel({ loop: false });
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const thumbs = useRef<HTMLElement[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!mainApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi]
  );

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return;
    const index = mainApi.selectedScrollSnap();
    setSelectedIndex(index);
    thumbApi.scrollTo(index);
  }, [mainApi, thumbApi]);

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
  }, [mainApi, onSelect]);

  return (
    <div className="flex gap-4 max-w-xl mx-auto">
      <div className="embla-thumbs" ref={thumbRef}>
        <div className="flex flex-col gap-2">
          {images.map((src, index) => (
            <button
              key={index}
              onMouseEnter={() => scrollTo(index)}
              className={`w-20 h-20 cursor-pointer rounded-md overflow-hidden border-2 ${
                index === selectedIndex
                  ? "border-red-600"
                  : "border-transparent"
              }`}
            >
              <img
                src={src}
                className="w-full h-full object-cover"
                ref={(el) => {
                  if (el) thumbs.current[index] = el;
                }}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="embla overflow-hidden mb-4" ref={mainRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] px-2" key={index}>
              <img src={src} className="w-full object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
