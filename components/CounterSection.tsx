'use client'

import React, { useState, useEffect } from 'react'

interface CounterSectionProps {
  loveStartDate: Date
}

interface TimeElapsed {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CounterSection({ loveStartDate }: CounterSectionProps) {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const now = new Date()
      const diff = now.getTime() - loveStartDate.getTime()

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeElapsed({ days, hours, minutes, seconds })
    }

    calculateTimeElapsed()
    const interval = setInterval(calculateTimeElapsed, 1000)

    return () => clearInterval(interval)
  }, [loveStartDate])

  const formatNumber = (num: number) => String(num).padStart(2, '0')

  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-background via-secondary/20 to-primary/5">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

                <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            >
              <source src="/videos/second_date.mp4" type="video/mp4" />
              <source src="/videos/timeline-background.webm" type="video/webm" />
            </video>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/30" />
          </div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Time Since You Admitted
            <span className="block text-primary mt-2">You Fell Harder For Me</span>
          </h2>
          <p className="text-foreground/60 text-lg">
            November 30, 2025 at 9:01:32 PM
          </p>
        </div>

        {/* Counter display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <CounterCard label="Days" value={timeElapsed.days} />
          <CounterCard label="Hours" value={timeElapsed.hours} />
          <CounterCard label="Minutes" value={timeElapsed.minutes} />
          <CounterCard label="Seconds" value={timeElapsed.seconds} />
        </div>

        {/* Message section */}
        <div className="bg-white rounded-lg shadow-lg border border-secondary/50 p-8 md:p-12 text-center space-y-6">
          <p className="text-2xl md:text-3xl font-bold text-foreground capitalize">
            💕 Every moment with you is precious ✨
          </p>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Ever since you've kindly rejected me up until that beautiful moment where you've told me that you want me as your husband living under one roof, every single second has been filled with love, joy, and gratitude. You are my greatest blessing, and I cherish every moment we share together, may it be distant. Happy Valentine's Day to the one who makes my heart skip a beat, and my future wife.
          </p>
          <div className="flex justify-center gap-4 pt-6">
            <span className="text-4xl animate-bounce">💚</span>
            <span className="text-4xl animate-bounce" style={{ animationDelay: '0.1s' }}>🤍</span>
            <span className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>❤️</span>
          </div>
        </div>

        {/* Love note */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-foreground/60 italic text-lg max-w-2xl mx-auto">
            "In a world where you can be with anyone, you chose to be mine. This was the best commitment and compliment, I have ever made and had, and I will cherish it forever. Happy Valentine's Day, My Love. ❤️✨" ~gm
          </p>
        </div>
      </div>
    </section>
  )
}

interface CounterCardProps {
  label: string
  value: number
}

function CounterCard({ label, value }: CounterCardProps) {
  const formatNumber = (num: number) => String(num).padStart(2, '0')

  return (
    <div className="bg-gradient-to-br from-primary/10 to-secondary/30 rounded-lg border-2 border-primary/30 p-6 md:p-8 text-center hover:shadow-lg transition-shadow hover:border-primary/60">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {formatNumber(value)}
      </div>
      <div className="text-sm md:text-base font-semibold text-foreground/70 uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}
