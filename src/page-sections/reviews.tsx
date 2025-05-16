"use client";
import { useState, useEffect } from "react";
import SectionContainer from "@/components/section-container";
import Review from "@/ui/review";
import Title from "@/ui/title";
import { reviewsData } from "@/utils/reviews";

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Verifica al montar
    window.addEventListener("resize", handleResize); // Verifica en resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define cuántas reseñas mostrar
  const displayedReviews = isMobile
    ? reviewsData.slice(0, visibleCount)
    : reviewsData;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <SectionContainer>
      <Title>Reseñas</Title>

      <div className="grid gap-6 md:grid-cols-3">
        {displayedReviews.map((review, index) => (
          <Review
            key={index}
            rating={review.rating}
            date={review.date}
            comment={review.comment}
            author={review.author}
          />
        ))}
      </div>

      {isMobile && visibleCount < reviewsData.length && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition cursor-pointer"
          >
            Cargar más
          </button>
        </div>
      )}
    </SectionContainer>
  );
}
