'use client'

import React from 'react'
import LandingSection from '@/components/LandingSection'
import TimelineSection from '@/components/TimelineSection'
import CounterSection from '@/components/CounterSection'

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <LandingSection />
      <TimelineSection />
      <CounterSection loveStartDate={new Date('2025-11-30T21:01:32')} />
    </main>
  )
}
