"use client";
import { useState, useEffect } from "react";
import Review from "@/ui/review";
import Title from "@/ui/title";
import { reviewsData } from "@/utils/reviews";

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedReviews = isMobile
    ? reviewsData.slice(0, visibleCount)
    : reviewsData;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const handleShowLess = () => {
    setVisibleCount((prev) => Math.max(prev - 2, 2));
  };

  return (
    <div className="flex flex-col w-full max-w-screen-xl gap-4 p-2">
      <Title>Reseñas</Title>
      <div
        className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6"
        style={{ gridTemplateRows: "auto 1fr auto" }}
      >
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

      {isMobile && (
        <div className="flex justify-center gap-2 mt-4">
          {visibleCount < reviewsData.length && (
            <button
              onClick={handleLoadMore}
              className="rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700 transition cursor-pointer"
            >
              Cargar más
            </button>
          )}
          {visibleCount > 2 && (
            <button
              onClick={handleShowLess}
              className="rounded bg-gray-300 px-3 py-2 text-sm text-black hover:bg-gray-400 transition cursor-pointer"
            >
              Cargar menos
            </button>
          )}
        </div>
      )}
    </div>
  );
}
