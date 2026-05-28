'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function InstagramIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

function PlayIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  )
}

function MusicIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="18" r="4"/>
      <path d="M12 18V2l7 4"/>
    </svg>
  )
}

function SendIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z"/>
      <path d="M22 2 11 13"/>
    </svg>
  )
}

function Particle({ delay, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [0, -100, -200],
        x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      className={`absolute w-2 h-2 rounded-full ${color}`}
      style={{ left: `${Math.random() * 100}%`, bottom: '0' }}
    />
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const socialLinks = [
    { icon: InstagramIcon, href: 'https://instagram.com/pracy', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: PlayIcon, href: 'https://youtube.com/@magiacompracy', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: MusicIcon, href: 'https://open.spotify.com/artist/pracy', label: 'Spotify', color: 'hover:text-green-500' },
    { icon: SendIcon, href: 'https://t.me/magiacompracy', label: 'Telegram', color: 'hover:text-cyan-500' },
  ]

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    color: ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-gold', 'bg-emerald', 'bg-cyan'][i % 6]
  }))

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse-glow"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {mounted && particles.map(particle => (
        <Particle key={particle.id} delay={particle.delay} color={particle.color} />
      ))}

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-12"
        >
          <div className="relative w-56 h-56 mx-auto mb-8">
            <div className="absolute inset-0 gradient-rainbow rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-2 shadow-2xl animate-glow">
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center border-4 border-white/10">
                <span className="text-8xl">🦄</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-7xl md:text-9xl font-display font-bold mb-6 gradient-text"
          style={{ lineHeight: '1.1' }}
        >
          PRACY
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12 text-lg md:text-xl font-semibold"
        >
          <span className="px-4 py-2 bg-primary/30 rounded-full border border-primary/50 backdrop-blur-sm">Dubladora</span>
          <span className="px-4 py-2 bg-secondary/30 rounded-full border border-secondary/50 backdrop-blur-sm">Cantora</span>
          <span className="px-4 py-2 bg-accent/30 rounded-full border border-accent/50 backdrop-blur-sm">Maga</span>
          <span className="px-4 py-2 bg-cyan/30 rounded-full border border-cyan/50 backdrop-blur-sm">Criadora</span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-4 gradient-rainbow rounded-full text-white text-lg font-bold shadow-2xl hover:scale-105 transition-transform duration-300 mb-16"
        >
          Explore meu universo ✨
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 ${social.color}`}
              aria-label={social.label}
            >
              <social.icon className="w-7 h-7" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}