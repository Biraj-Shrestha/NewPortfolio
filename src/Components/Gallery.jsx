import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/Images/flower.jpg",
  "/Images/Rain.jpg",
  "/Images/buddha.jpg",
  "/Images/water.jpg",
  "/Images/sky.jpg",
  "/Images/Nyachowk.jpg",
  "/Images/marigold.jpg",
  "/Images/Aesthetic.jpg",
  "/Images/field.jpg",
  "/Images/elaichi.jpg",
  "/Images/Clock.jpg",
  "/Images/durbar.jpg",
  "/Images/Fruit.jpg",
  "/Images/vibe.jpg",
  "/Images/Five.jpg",
  "/Images/pimbahal.jpg",
  "/Images/alaichi.jpg",
];

const getSpan = index => {
  if (index % 7 === 0) return 3;
  if (index % 5 === 0) return 2;
  return 1;
};

export default function MasonryGallery() {
  const [columnCount, setColumnCount] = useState(4);
  const [gap, setGap] = useState(24);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w <= 768) {
        setColumnCount(2);
        setGap(16);
      } else {
        setColumnCount(4);
        setGap(24);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Greedy distribution: always place image in the lightest column
  const columns =
    Array.from({ length: columnCount }, () => []);
  const colWeights = new Array(columnCount).fill(0);

  images.forEach((src, index) => {
    const span = getSpan(index);
    const minCol = colWeights.indexOf(Math.min(...colWeights));
    columns[minCol].push({ src, index, span });
    colWeights[minCol] += span;
  });

  return (
    <div className="pt-24" id="photography">
      <style>{`
        .image-box {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          min-height: 0;
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .image-box:hover img {
          transform: scale(1.05);
        }

        .image-box::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
          opacity: 1;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .image-box:hover::before {
          opacity: 0;
        }
      `}</style>

      {/* Heading */}
      <div className="flex justify-center items-center mb-20">
        <h1 className="text-reveal text-4xl lg:text-6xl text-[#b6b6b6] font-semibold font-[outfit] pb-5">
          Strolling With A Camera !!
        </h1>
      </div>

      {/* Grid of flex columns */}
      <div
        className="mx-auto px-4 lg:px-4 lg:w-[80vw]"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
          gap: `${gap}px`,
        }}
      >
        {columns.map((col, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col"
            style={{ gap: `${gap}px` }}
          >
            {col.map(({ src, index, span }) => (
              <div
                key={index}
                className="image-box"
                style={{ flex: `${span} 1 0%` }}
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  src={src}
                  alt={`image ${index}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}