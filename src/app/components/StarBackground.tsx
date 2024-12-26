"use client";
import { useEffect, useState } from "react";

export default function StarBackground() {
  const [stars, setStars] = useState<Array<{ id: number; style: any }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          },
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          style={star.style}
          className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
        />
      ))}
    </div>
  );
}
