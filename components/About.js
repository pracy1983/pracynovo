'use client'

import { motion } from 'framer-motion'

function MicIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" x2="12" y1="19" y2="22"/>
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

function Wand2Icon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 4V2"/>
      <path d="M15 16v-2"/>
      <path d="M8 9h2"/>
      <path d="M20 9h2"/>
      <path d="M17.8 11.8 19 13"/>
      <path d="M15 9h0"/>
      <path d="M17.8 6.2 19 5"/>
      <path d="m3 21 9-9"/>
      <path d="M12.2 6.2 11 5"/>
    </svg>
  )
}

function SparklesIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/>
      <path d="M19 17v4"/>
      <path d="M3 5h4"/>
      <path d="M17 19h4"/>
    </svg>
  )
}

export default function About() {
  const identities = [
    { 
      icon: MicIcon, 
      title: 'Dubladora', 
      desc: 'Voz profissional para personagens, comerciais e projetos audiovisuais',
      gradient: 'from-primary to-indigo',
      glow: 'glow-purple'
    },
    { 
      icon: MusicIcon, 
      title: 'Cantora', 
      desc: 'Compositora e intérprete de múltiplos gêneros musicais',
      gradient: 'from-secondary to-pink-600',
      glow: 'glow-pink'
    },
    { 
      icon: Wand2Icon, 
      title: 'Maga', 
      desc: 'Criadora de conteúdo sobre magia, ilusionismo e mistérios',
      gradient: 'from-accent to-gold',
      glow: 'glow-orange'
    },
    { 
      icon: SparklesIcon, 
      title: 'Criadora', 
      desc: 'Conteúdo espiritual, meditações e desenvolvimento pessoal',
      gradient: 'from-emerald to-cyan',
      glow: 'glow-cyan'
    },
  ]

  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/5 to-dark"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-display font-bold mb-6 gradient-text">
            Quem sou eu
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Sou um <span className="gradient-text font-bold">unicórnio colorido</span> — multifacetada, criativa e mágica. 
            Cada projeto é uma nova aventura no meu universo vibrante.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {identities.map((identity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${identity.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300`}></div>
              
              <div className="relative p-8 rounded-3xl bg-dark/80 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${identity.gradient} flex items-center justify-center mb-6 ${identity.glow} group-hover:scale-110 transition-transform duration-300`}>
                  <identity.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-display font-bold mb-4 text-white group-hover:gradient-text transition-all duration-300">
                  {identity.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed text-lg">
                  {identity.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}