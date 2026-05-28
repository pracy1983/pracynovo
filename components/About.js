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
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-7xl font-display font-bold mb-6 gradient-text">
            Quem sou eu
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Sou um <span className="gradient-text font-bold">unicórnio colorido</span> — multifacetada, criativa e mágica. 
            Cada projeto é uma nova aventura no meu universo vibrante.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Biografia e Foto Premium (Esquerda) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 p-[2px] shadow-2xl overflow-hidden">
                <img 
                  src="/images/placeholders/about-photo.png" 
                  alt="Pracy em seu estúdio" 
                  className="w-full h-auto object-cover rounded-3xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-dark/40 border border-white/5 backdrop-blur-sm">
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Minha jornada é impulsionada pela paixão de criar mundos através da voz, da música e do mistério. Como dubladora, dou vida a personagens únicos; como cantora, conecto almas através da música; e como maga e criadora, espalho encantamento e autoconhecimento.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Bem-vindo ao meu hub dinâmico, um espaço onde a arte encontra a espiritualidade e a criatividade não tem limites! ✨
              </p>
            </div>
          </motion.div>

          {/* Cards de Identidade Grid 2x2 (Direita) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                <div className={`absolute inset-0 bg-gradient-to-br ${identity.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                
                <div className="relative p-8 rounded-3xl bg-dark/80 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${identity.gradient} flex items-center justify-center mb-6 ${identity.glow} group-hover:scale-110 transition-transform duration-300`}>
                    <identity.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:gradient-text transition-all duration-300">
                    {identity.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed text-base">
                    {identity.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}