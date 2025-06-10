'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScrollCarousel = ({
  items = [],
  heightPerCard = 100, // 100vh per card to allow full scroll
  cardWidth = 100,
  title,
}) => {
  const targetRef = useRef(null);

  // Total scroll height = # of cards * heightPerCard (in vh)
  const totalHeight = `${items.length * heightPerCard}vh`;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Move horizontally by 100% of total width (based on item count)
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['2%', '-40%']
  );

  return (
    <section
      ref={targetRef}
      className="relative bg-black text-white"
      style={{ height: totalHeight }}
    >
      {title && (
        <h2 className="text-4xl md:text-6xl lg:text-6xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative mb-10">
          {title}
        </h2>
      )}

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 px-10">
          {items.map((item) => (
            <div
              key={item.id}
              className={`min-w-[${cardWidth}px] h-[600px] bg-white rounded-3xl overflow-hidden shadow-lg relative group`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xl font-bold p-4 text-center">
                {item.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
