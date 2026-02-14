'use client'

import React from 'react'

export default function FloatingDecorations() {
  const decorations = [
    { id: 1, symbol: '💕', top: '10%', left: '5%', delay: '0s', duration: '8s' },
    { id: 2, symbol: '🌹', top: '20%', left: '95%', delay: '1s', duration: '10s' },
    { id: 3, symbol: '💗', top: '30%', left: '10%', delay: '2s', duration: '9s' },
    { id: 4, symbol: '🌸', top: '40%', left: '90%', delay: '0.5s', duration: '11s' },
    { id: 5, symbol: '✨', top: '15%', left: '50%', delay: '1.5s', duration: '8s' },
    { id: 6, symbol: '💝', top: '50%', left: '8%', delay: '0.2s', duration: '10s' },
    { id: 7, symbol: '🌺', top: '25%', left: '92%', delay: '2.5s', duration: '9s' },
    { id: 8, symbol: '💖', top: '60%', left: '12%', delay: '1.2s', duration: '8s' },
    { id: 9, symbol: '⭐', top: '35%', left: '88%', delay: '0.8s', duration: '10s' },
    { id: 10, symbol: '🌷', top: '70%', left: '5%', delay: '2s', duration: '9s' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <style>{`
        @keyframes float-up {
          0% {
            opacity: 0;
            transform: translateY(100vh) rotate(0deg);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-100vh) rotate(360deg);
          }
        }

        @keyframes sway {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(30px); }
        }

        .floating-decoration {
          animation: float-up linear infinite, sway 3s ease-in-out infinite;
          font-size: 2rem;
        }

        @media (max-width: 768px) {
          .floating-decoration {
            font-size: 1.5rem;
          }
        }
      `}</style>

      {decorations.map((deco) => (
        <div
          key={deco.id}
          className="floating-decoration absolute"
          style={{
            top: deco.top,
            left: deco.left,
            animation: `float-up ${deco.duration} linear ${deco.delay} infinite, sway 3s ease-in-out infinite`,
          }}
        >
          {deco.symbol}
        </div>
      ))}
    </div>
  )
}
