"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";

export default function Carousel({ items, CardComponent }) {
  const cards = [
    ...items,
    ...items.map((card) => ({ ...card, id: card.id + items.length })),
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 768) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const cardWidth = 100 / visibleCards;

  return (
    <div className="relative">
      <div className="overflow-hidden w-11/12 mx-auto">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * cardWidth}%)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${cardWidth}%` }}
            >
              <CardComponent card={card} />
            </div>
          ))}
        </div>
      </div>
      <Button
        className="absolute text-gray-800 border-none left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
        size={"default"}
        variant="link"
        onClick={prevSlide}
        disabled={isAnimating}
      >
        <ChevronLeft />
      </Button>
      <Button
        className="absolute text-gray-800 border-none right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2"
        size={"default"}
        variant="link"
        onClick={nextSlide}
        disabled={isAnimating}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
