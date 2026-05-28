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
    <section id="about" className="relative py-24 px-6 bg-[#0a0910] overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        
        {/* Título de Seção Minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Quem sou eu
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto">
            Uma mente criativa e multifacetada unindo arte e espiritualidade
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          {/* Foto Casual Compacta e Controlada (Esquerda) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-64 h-80 relative group"
          >
            {/* Brilho neon suave atrás */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative w-full h-full rounded-2xl p-[1px] bg-gradient-to-tr from-primary/30 to-secondary/30 overflow-hidden shadow-xl">
              <img 
                src="/images/placeholders/about-photo.png" 
                alt="Pracy em seu estúdio" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Biografia Detalhada e Polida (Direita) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-grow max-w-2xl text-center lg:text-left space-y-6"
          >
            <p className="text-lg text-white/80 leading-relaxed font-sans">
              Sou um <span className="text-primary font-semibold">unicórnio colorido</span> — multifacetada, criativa e mágica. Minha jornada é impulsionada pela paixão de criar mundos através da voz, da música e do mistério.
            </p>
            <p className="text-base text-white/60 leading-relaxed font-sans">
              Como dubladora, dou vida a personagens únicos; como cantora, conecto almas através da música; e como maga e criadora, espalho encantamento e autoconhecimento. Bem-vindo ao meu hub dinâmico, um espaço onde a arte encontra a espiritualidade e a criatividade não tem limites! ✨
            </p>
          </motion.div>
        </div>

        {/* Cards de Identidade Compactos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {identities.map((identity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="w-full max-w-[280px] p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 flex flex-col items-start"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${identity.gradient} flex items-center justify-center mb-6 shadow-md`}>
                <identity.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">
                {identity.title}
              </h3>
              
              <p className="text-sm text-white/50 leading-relaxed">
                {identity.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}