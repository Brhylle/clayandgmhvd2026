'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import FloatingDecorations from './FloatingDecorations'
import DecorateBorder from './DecorateBorder'
import Fireworks from "react-canvas-confetti"

export default function LandingSection() {
const confettiRef = useRef<any>(null)

const makeShot = (particleRatio: number, opts: any) => {
  confettiRef.current?.({
    ...opts,
    origin: { y: 0.6 },
    particleCount: Math.floor(200 * particleRatio),
  })
}

const fireConfetti = () => {
  makeShot(0.25, {
    spread: 26,
    startVelocity: 55,
  })

  makeShot(0.2, {
    spread: 60,
  })

  makeShot(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  })

  makeShot(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  })

  makeShot(0.1, {
    spread: 120,
    startVelocity: 45,
  })
}

  const [answered, setAnswered] = useState(false)
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const noButtonRef = useRef<HTMLButtonElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  // Playlist setup
  const playlist = [
    '/music/palagi.mp3',
    '/music/libu-libong-buwan-uuwian.mp3',
  ]
  
  const [currentSongIndex, setCurrentSongIndex] = useState(0)

    // Handle song ending - play next song
  const handleSongEnd = () => {
    const nextIndex = (currentSongIndex + 1) % playlist.length // Loop back to start
    setCurrentSongIndex(nextIndex)
    
    if (audioRef.current) {
      audioRef.current.src = playlist[nextIndex]
      audioRef.current.play().catch(error => {
        console.log('Audio playback failed:', error)
      })
    }
  }

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline-section')
    timelineSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleYes = () => {
    setAnswered(true)
    fireConfetti()

    // Start playing the first song
    if (audioRef.current) {
      audioRef.current.src = playlist[0]
      audioRef.current.volume = 0.5 // Optional: adjust volume
      audioRef.current.play().catch(error => {
        console.log('Audio playback failed:', error)
      })
    }

    setTimeout(() => {
      scrollToTimeline()
    }, 800)
  }


  const handleNoHover = (e: React.MouseEvent) => {
    if (!isMobile && noButtonRef.current) {
      const randomX = Math.random() * 200 - 100
      const randomY = Math.random() * 200 - 100
      setNoButtonPos({ x: randomX, y: randomY })
    }
  }

  const handleNoClick = () => {
    if (isMobile && noButtonRef.current) {
      const randomX = Math.random() * 300 - 150
      const randomY = Math.random() * 300 - 150
      setNoButtonPos({ x: randomX, y: randomY })
    }
  }

  // return statement
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/40 px-4 py-20">
      {/* Audio element with onEnded handler */}
      <audio 
        ref={audioRef} 
        onEnded={handleSongEnd}
      />
      
      {/* Video Background - lowest z-index */}
      <Fireworks
        onInit={({ confetti }) => {
          confettiRef.current = confetti
        }}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 50,
        }}
      />

      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/videos/first_photog.mp4" type="video/mp4" />
          {/* Add additional source formats for better browser support */}
          <source src="/path-to-your-video.webm" type="video/webm" />
        </video>
        <image
          className='absolute inset-0 w-full h-full object-cover opacity-30'
          >
          <source src="/images/firstdatenight.jpg" type="image/jpeg" />
          </image>
        {/* Optional: Add an overlay to darken/tint the video */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/30" />
      </div>

      {/* Decorative elements - above video, below content */}
      <FloatingDecorations />
      <DecorateBorder />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float z-[1]" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl animate-float z-[1]" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-accent border-2 border-primary/30 rounded-full blur-2xl animate-pulse-gentle z-[1]" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Will you be my
            <span className="block text-primary mt-2 uppercase">Valentine?</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-light">
            A celebration of our beautiful journey together
          </p>
        </div>

        {/* Heart icon animation - with higher z-index to stay on top */}
        <div className="flex justify-center relative z-20">
          <span className="text-6xl animate-pulse-gentle">💕</span>
        </div>

        {/* Description */}
        <p className="text-foreground/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
          Tuklasin ang kabanata mula sa noong ako'y umamin hanggang sa araw na ikaw ay mapa-akin ❤️. 
        </p>

        {/* Answer Buttons */}
        <div className="pt-8">
          {!answered ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleYes}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-32"
              >
                Take Bouquet 💐
              </Button>
              <div className="relative h-16 w-32 sm:w-auto">
                <button
                  ref={noButtonRef}
                  onClick={handleNoClick}
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoClick}
                  style={{
                    transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                    transition: 'transform 0.2s ease-out',
                  }}
                  className="absolute bg-foreground/10 hover:bg-foreground/20 text-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/30 cursor-pointer whitespace-nowrap font-medium"
                >
                  Throw Bouquet 😔
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-pulse-gentle">
              <p className="text-2xl md:text-3xl text-primary font-bold">
                I knew it! 💕
              </p>
              <Button
                onClick={scrollToTimeline}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                See Our Story
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 -translate-x-1/2 flex flex-col items-center gap-2 animate-float z-10">
        <span className="text-sm text-foreground/50">Scroll to explore</span>
        <svg className="w-6 h-6 text-primary/70 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}