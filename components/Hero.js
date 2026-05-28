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
    { icon: InstagramIcon, href: 'https://instagram.com/pracy', label: 'Instagram', color: 'hover:text-pink-500 hover:border-pink-500/30' },
    { icon: PlayIcon, href: 'https://youtube.com/@magiacompracy', label: 'YouTube', color: 'hover:text-red-500 hover:border-red-500/30' },
    { icon: MusicIcon, href: 'https://open.spotify.com/artist/pracy', label: 'Spotify', color: 'hover:text-green-500 hover:border-green-500/30' },
    { icon: SendIcon, href: 'https://t.me/magiacompracy', label: 'Telegram', color: 'hover:text-cyan-500 hover:border-cyan-500/30' },
  ]

  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    color: ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-gold'][i % 4]
  }))

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden bg-[#09080f]">
      {/* Luz radial de atmosfera de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.12)_0%,transparent_65%)] pointer-events-none"></div>

      {mounted && particles.map(particle => (
        <Particle key={particle.id} delay={particle.delay} color={particle.color} />
      ))}

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center justify-center">
        {/* Avatar Compacto e Elegante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="relative w-36 h-36 md:w-44 md:h-44">
            {/* Brilho neon suave de contorno */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-xl opacity-40"></div>
            <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-primary via-secondary to-accent shadow-xl overflow-hidden">
              <div className="w-full h-full rounded-full bg-dark overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/placeholders/pracy-portrait.png" 
                  alt="Retrato de Pracy" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Título de Destaque */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-tight text-white"
        >
          PRACY
        </motion.h1>

        {/* Linha Única de Badges Minimalistas */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 mb-10 text-xs md:text-sm font-medium text-white/50 tracking-widest uppercase"
        >
          <span>Dubladora</span>
          <span className="text-white/20">•</span>
          <span>Cantora</span>
          <span className="text-white/20">•</span>
          <span>Maga</span>
          <span className="text-white/20">•</span>
          <span>Criadora</span>
        </motion.div>

        {/* CTAs Compactos e Discretos */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-dark hover:bg-white/90 rounded-full font-bold text-sm shadow-md transition-all duration-300 transform hover:scale-103"
          >
            Conhecer Trabalho ✨
          </button>
          
          <div className="flex gap-3">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full bg-white/5 border border-white/5 transition-all duration-300 text-white/50 hover:bg-white/10 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Seta de Scroll Suave Minimalista */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-30 hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </motion.div>
    </section>
  )
}