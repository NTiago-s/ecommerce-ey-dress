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

  return (
    <div className="flex flex-col w-full max-w-screen-xl gap-4 p-2">
      <Title>Reseñas</Title>
      <div className="flex flex-col gap-3 md:columns-3 md:gap-6">
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
    </div>
  );
}
