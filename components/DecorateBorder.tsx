'use client'

import React from 'react'

export default function DecorateBorder() {
  const topDecorations = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    symbol: [' 💕', '🌹', '💗', '🌸', '✨', '💌', '🌺', '🌻', '🪷', '💐'][i % 10],
  }))

  const bottomDecorations = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    symbol: ['💖', '🌺', '💝', '🌷', '⭐', '💓', '🌼', '🌹', '🪻', '🏵️'][i % 10],
  }))

  return (
    <>
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none flex justify-between items-center px-4">
        {topDecorations.map((deco) => (
          <div
            key={`top-${deco.id}`}
            className="text-2xl md:text-3xl animate-float"
            style={{
              animationDelay: `${deco.id * 0.1}s`,
            }}
          >
            {deco.symbol}
          </div>
        ))}
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none flex justify-between items-end px-4">
        {bottomDecorations.map((deco) => (
          <div
            key={`bottom-${deco.id}`}
            className="text-2xl md:text-3xl animate-float"
            style={{
              animationDelay: `${deco.id * 0.15}s`,
            }}
          >
            {deco.symbol}
          </div>
        ))}
      </div>
    </>
  )
}
