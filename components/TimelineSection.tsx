'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface TimelineEvent {
  id: number
  title: string
  description: string
  date: string
  image?: string
  images?: string[] // Multiple images for slideshow
  video?: string
  pdf?: string // Add PDF support
  clickableImagePdf?: boolean // Make image clickable to open PDF
  position: 'left' | 'right'
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: 'Sudden Confession & Redirection',
    description: `Each day I have escorted you, I mustered the courage to become firm with my feelings, but I've met with an implicit rejection. However, I never took it personally. I was actually happy that, "this time", I have done it. I was even thankful to God for that reason. But I remain on your side, because my love for you is unconditional, and my sole mission is: "I want to be with you until you leave Manila."`,
    date: 'November 11, 2025',
    position: 'left',
    image: '/images/courtship.jpg',
  },
  {
    id: 2,
    title: 'Our First Playlist',
    description: 'I created the playlist to know more about your favorite genres and artists, but it ended up being a soundtrack to our blossoming connection. It started on 12 songs, but now look how it has grown to over 250+ songs! And to even think you\'d participate adding your preferences as well, lovely, yes?',
    date: 'November 12, 2025',
    position: 'right',
    image: '/images/ourfirstplaylist.png',
  },
  {
    id: 3,
    title: 'Redemption Day',
    description: 'This was just a plain day for me, because I am not expecting that you will be falling within my embrace. I honestly think that this day will come but not too soon, maybe God had intervene to let you know that my commitment and intention is pure. But after some realizations, we\'ve seen each other\'s side for quite a while now, and became comfortable as the time passes by. Even after the implicit rejection I have received, YOU have again implicitly admitted that you have liked me now, good thing I have fed off too many romance anime and K-Drama before XD. I have never felt more happy and relieved than that day. That simple hint made my day, and I have never felt more loved and accepted. That day, I have seen the daylight on my 23rd dark night at the end of the tunnel, and thanked God, that your love is golden.',
    date: 'November 30, 2025',
    position: 'left',
    image: '/images/lablab.jpg',
  },
  {
    id: 4,
    title: 'Kape-Hingahan: First Date',
    description: 'When I have discovered that your ambient type is nature and stillness under the sunset, I have planned our first date where nature is abundant and where the sun meets the horizon. Too bad we haven\'t been able to catch the sunset, but I am glad that we were able to get into a deep conversation about our past, present, and future. I have never felt more connected to you than that day.',
    date: 'December 03, 2025',
    position: 'right',
    images: ['/images/wearematcha.jpeg', '/images/firstdate3.jpeg', '/images/hearto.jpeg'],
  },
  {
    id: 5,
    title: 'The Promised Knot & Your Softness',
    description: 'I have written a poem about the knot that I have promised to tie with you. I have also shared with you my thoughts about how I see you as my lifetime partner, and how I see our relationship. I have never felt more vulnerable and exposed than that day, but I am glad that you have accepted me for who I am, and that you have also shared your own vulnerabilities with me. That day, I have seen your softness, and it has made me fall even more in love with you. This was the first-time I ever took your hand and heard you sing with an acoustic guitar. We sang with each other.',
    date: 'December 03 - 04, 2025',
    position: 'left',
    images: ['/images/promised-knot.jpg', '/images/firstdate1.jpeg', '/images/firstdate4.jpeg'],
    pdf: '/docs/Ang-Tali-ng-Walang-Hanggang-Pangako.pdf',
    clickableImagePdf: true, // Enable clickable image
  },
  {
    id: 6,
    title: 'Our First Road Trip, Cuddle & Worship',
    description: 'Undeniably, one of the most memorable moment in my life as your romantic partner, this was the time when we are trying to catch a 6PM worship schedule on the most largest church ever made by INC. Although there are some detours that had happened, I am glad that we took it, because it made our road trip even more memorable, we held hands for the longest time possible, and I saw how your smile radiates. And the most unexpected action that you\'ve made? That sneaky snuggle with my arms, as if you don\'t want yet to go home. This was also the time when you first stepped a foot on SM North and SM Mall of Asia.',
    date: 'December 06 - 07, 2025',
    position: 'right',
    images: ['/images/roadtrip1.jpeg', '/images/roadtrip2.jpeg', '/images/roadtrip3.jpg', '/images/roadtrip4.jpeg', '/images/roadtrip6.jpeg', '/images/roadtrip5.jpeg'],
  },
  {
    id: 7,
    title: 'The Day You Met My Parents and Locked Our Promises By the Bay',
    description: 'To be honest, this was one of the most nerve-wracking day for me, I don\'t know what will be their reactions are, and I am literally overthinking that they will forbid me from loving you, because of the situation that we are in, I am glad that I have been honest with my parents with you, because, my Mom said that, transparency, communication and honesty are the greatest respect that you can give to your partner, and it will start if I will be honest with my parents about you, which I believe is the foundation of every successful relationships. This was also the day, when I have gave you the copy of the first poem I have written that is all about you, my beloved partner, bestfriend, honeybunch, and every call sign you can think of. I also remember that this was the time when we have locked our promises by the bay, praying for God to give us a future that would be gentle with us, and hopefully we\'ll meet again soon. Oh! I almost forgot, the moment you have searched for couple poses? You caught me off-guarded and I can\'t help but laugh lightly, because I thought that you are just being playful, but when you\'ve practise it with me? My reasoning turned off and my heart was full. And that\s what I love about you, Clay, your unpredictability, sweet smile, soft laugh and the way you make me feel valued. I can enlist a lot more, but I\'m afraid it this\'ll go on forever XDDD.',
    date: 'December 09, 2025',
    position: 'left',
    images: ['/images/meet5.jpeg', '/images/meet6.jpeg', '/images/meet1.jpeg', '/images/meet2.jpeg', '/images/meet3.jpeg', '/images/meet4.jpg'],
    pdf: '/docs/Hēo.pdf',
    clickableImagePdf: true, // Enable clickable image
  },
    {
    id: 8,
    title: 'Our Love Persists Across Great Distance',
    description: 'Even after you left Manila, our love has persisted and has become even stronger. We have been able to maintain our healthy relationship through unwavering communication, trust and understanding. I remember the day that you\'ve told me that you\'ve really hated Long-Distance Relationship, that was really scary when you\'ve said it, but I am glad that our love is much stronger than of the distance that we had, because of our commitment of worshipping God through Jesus Christ, this not only reinforced our love at great distance but also amplified the frequency in which we express our love. I am so proud of us, and I know that there will be more fights between us, but I hope that you\'ll stick with me until we have resolved it through proper communication and understanding. May our love grow fonder and stronger each day, and may we continue to cherish and support each other through every challenge that comes our way. I love you, Clay, and I am so grateful to have you in my life.',
    date: 'December 10, 2025 - Present',
    position: 'right',
    images: ['/images/ldr1.jpg', '/images/ldr5.jpg', '/images/ldr2.jpg', '/images/ldr6.jpg', '/images/ldr3.jpg', '/images/ldr7.jpg', '/images/ldr4.jpg'],
  },
]

// PDF Modal Component
function PdfModal({ pdfUrl, onClose }: { pdfUrl: string; onClose: () => void }) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg shadow-2xl animate-scale-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Close PDF viewer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* PDF Viewer */}
        <iframe
          src={pdfUrl}
          className="w-full h-full rounded-lg"
          title="PDF Viewer"
        />
      </div>
    </div>
  )
}

// Carousel component for multiple images
function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-48 md:h-64 rounded-lg overflow-hidden bg-secondary/30">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt={`${alt} - Image ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Carousel indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function TimelineSection() {
  const [animatedItems, setAnimatedItems] = useState<number[]>([])
  const [pdfModalUrl, setPdfModalUrl] = useState<string | null>(null)

  useEffect(() => {
    const timers = timelineEvents.map((event, index) => {
      return setTimeout(() => {
        setAnimatedItems((prev) => [...prev, event.id])
      }, index * 200)
    })

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [])

  return (
    <section id="timeline-section" className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-secondary/40 to-background">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            >
              <source src="/videos/ldr.mp4" type="video/mp4" />
              <source src="/videos/timeline-background.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/30" />
          </div>
      
      <div className="max-w-4xl mx-auto">
        {/* Section Title with Video Background */}
        <div className="relative text-center mb-16 md:mb-24 animate-slide-in-left overflow-hidden rounded-2xl" style={{ animationDelay: '0.1s' }}>

          <div className="relative z-10 py-12 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Love Timeline
            </h2>
            <p className="text-foreground/60 text-lg">
              From strangers to soulmates - a timeline of our unforgettable journey together.
            </p>
            <div className="mt-6 relative z-20">
              <span className="text-5xl md:text-6xl animate-pulse-gentle">💕</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/20 animate-timeline-line" style={{ animationDelay: '0.2s' }} />

          <div className="space-y-12 md:space-y-20">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`flex ${event.position === 'right' ? 'flex-row-reverse' : 'flex-row'} gap-4 md:gap-8 ${
                  animatedItems.includes(event.id)
                    ? event.position === 'right'
                      ? 'animate-slide-in-right'
                      : 'animate-slide-in-left'
                    : 'opacity-0'
                }`}
              >
                <div className="w-full md:w-1/2 flex items-center">
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 md:p-8 w-full border border-secondary/50 group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">
                        {index === 0 && '🫠'}
                        {index === 1 && '🎧'}
                        {index === 2 && '✨'}
                        {index === 3 && '👫'}
                        {index === 4 && '🪢'}
                        {index === 5 && '⛪'}
                        {index === 6 && '🔐'}
                        {index === 7 && '💗'}
                      </span>
                      <div className="text-sm font-semibold text-primary">{event.date}</div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* Multiple Images Carousel */}
                    {event.images && event.images.length > 0 && (
                      <div className="mt-4">
                        {event.clickableImagePdf && event.pdf ? (
                          <button
                            onClick={() => setPdfModalUrl(event.pdf!)}
                            className="w-full transition-transform hover:scale-[1.02] relative"
                          >
                            <ImageCarousel images={event.images} alt={event.title} />
                            {/* Toast indicator */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                              <div className="bg-primary text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce-gentle">
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  className="h-5 w-5" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                                <span className="text-sm font-semibold whitespace-nowrap">Click me to read poem</span>
                              </div>
                            </div>
                          </button>
                        ) : (
                          <ImageCarousel images={event.images} alt={event.title} />
                        )}
                      </div>
                    )}
                    
                    {/* Clickable Single Image with PDF (The Promised Knot) */}
                    {!event.images && event.image && event.clickableImagePdf && event.pdf && (
                      <div className="mt-4 relative group/image">
                        <button
                          onClick={() => setPdfModalUrl(event.pdf!)}
                          className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden bg-secondary/30 block transition-transform hover:scale-[1.02]"
                        >
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index < 2}
                          />
                          
                          {/* Overlay gradient for better text visibility */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          {/* Animated "Click me" Toast Indicator */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-primary text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce-gentle pointer-events-auto">
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                              </svg>
                              <span className="text-sm font-semibold whitespace-nowrap">Click me to read poem</span>
                            </div>
                          </div>
                        </button>
                      </div>
                    )}
                    
                    {/* Regular Single Image (non-clickable) */}
                    {!event.images && event.image && !event.clickableImagePdf && (
                      <div className="mt-4 rounded-lg overflow-hidden bg-secondary/30 h-48 md:h-64 relative">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index < 2}
                        />
                      </div>
                    )}
                    
                    {/* Video */}
                    {event.video && (
                      <div className="mt-4 rounded-lg overflow-hidden bg-secondary/30 h-48 md:h-64">
                        <video
                          controls
                          className="w-full h-full object-cover"
                          preload="metadata"
                          poster={event.image}
                        >
                          <source src={event.video} type="video/mp4" />
                          <source src={event.video.replace('.mp4', '.webm')} type="video/webm" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                  </div>
                </div>

                <div className="hidden md:flex w-1/2 items-center justify-center">
                  <div
                    className={`w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg ${
                      animatedItems.includes(event.id) ? 'animate-scale-pop' : 'opacity-0'
                    }`}
                    style={{
                      animationDelay: `${index * 0.2 + 0.3}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {pdfModalUrl && (
        <PdfModal pdfUrl={pdfModalUrl} onClose={() => setPdfModalUrl(null)} />
      )}

      <style jsx>{`
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}