// SplideSlider.tsx
import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

type SplideSliderProps = {
  images: string[];
};

const SplideSlider: React.FC<SplideSliderProps> = ({ images }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const mainSplide = useRef<Splide | null>(null);
  const thumbsSplide = useRef<Splide | null>(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current) {
      mainSplide.current = new Splide(mainRef.current, {
        type: "fade",
        heightRatio: 0.5,
        pagination: false,
        arrows: false,
        cover: true,
      });

      thumbsSplide.current = new Splide(thumbsRef.current, {
        rewind: true,
        fixedWidth: 104,
        fixedHeight: 58,
        isNavigation: true,
        gap: 10,
        focus: "center",
        pagination: false,
        cover: true,
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints: {
          640: {
            fixedWidth: 66,
            fixedHeight: 38,
          },
        },
      });

      mainSplide.current.sync(thumbsSplide.current);
      mainSplide.current.mount();
      thumbsSplide.current.mount();
    }

    return () => {
      mainSplide.current?.destroy();
      thumbsSplide.current?.destroy();
    };
  }, [images]);

  return (
    <>
      <div id="main-slider" ref={mainRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {images.map((src, index) => (
              <li key={index} className="splide__slide">
                <img src={src} alt={`Image ${index}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        id="thumbnail-slider"
        ref={thumbsRef}
        className="splide"
        style={{ marginTop: "1rem" }}
      >
        <div className="splide__track">
          <ul className="splide__list">
            {images.map((src, index) => (
              <li key={index} className="splide__slide">
                <img src={src} alt={`Thumb ${index}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SplideSlider;
