"use client";

import Image from "next/image";
import { useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function WorkSlider({ works }: { works: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!works || works.length === 0) return null;

  return (
    <div className="relative mb-32 group">
      {/* Navigation Arrows */}
      {works.length > 1 && (
        <div className="absolute top-[50%] -translate-y-1/2 left-0 right-0 z-10 flex justify-between pointer-events-none px-0 md:-mx-8">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-16 flex items-center justify-center text-gray-300 hover:text-gray-900 transition-colors pointer-events-auto"
            aria-label="Previous slide"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="square" strokeLinejoin="miter">
              <polyline points="14 18 8 12 14 6"></polyline>
            </svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-16 flex items-center justify-center text-gray-300 hover:text-gray-900 transition-colors pointer-events-auto"
            aria-label="Next slide"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="square" strokeLinejoin="miter">
              <polyline points="10 18 16 12 10 6"></polyline>
            </svg>
          </button>
        </div>
      )}

      {/* Slider Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {works.map((work, idx) => {
          const hasUrl = Boolean(work.url);
          
          const ImageComponent = (
            <div className="w-full h-full relative group/img overflow-hidden bg-gray-50">
              {work.imageUrl && (
                <Image
                  src={work.imageUrl}
                  alt={work.title || `Featured Work ${idx + 1}`}
                  fill
                  className={`object-cover transition-transform duration-1000 ease-out ${hasUrl ? 'group-hover/img:scale-[1.03]' : ''}`}
                  unoptimized
                />
              )}
            </div>
          );

          return (
            <div 
              key={work._key || idx} 
              className="flex-shrink-0 w-full snap-center flex flex-col md:flex-row gap-8 lg:gap-16 items-center px-4"
            >
              {/* Text Container - Left side */}
              <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col justify-center order-2 md:order-1">
                <h2 className="font-ztneue text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4 leading-tight">
                  {work.title}
                </h2>
                {work.description && (
                  <p className="text-gray-400 font-light leading-relaxed mb-8 whitespace-pre-wrap">
                    {work.description}
                  </p>
                )}
                {hasUrl && (
                  <a 
                    href={work.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 text-xs font-light tracking-[0.2em] uppercase text-gray-400 hover:text-gray-900 transition-colors w-fit"
                  >
                    Zur Website
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                )}
              </div>
              
              {/* Image Container - Right side */}
              <div className="w-full md:w-2/3 lg:w-3/4 aspect-[4/3] relative order-1 md:order-2">
                {hasUrl ? (
                  <a href={work.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    {ImageComponent}
                  </a>
                ) : (
                  ImageComponent
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
