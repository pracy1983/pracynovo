'use client'

import { motion } from 'framer-motion'

function PlayIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  )
}

function Music2Icon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="18" r="4"/>
      <path d="M12 18V2l7 4"/>
    </svg>
  )
}

export default function Channels() {
  const channels = [
    {
      title: 'Magia com Pracy',
      type: 'YouTube',
      icon: PlayIcon,
      href: 'https://youtube.com/@magiacompracy',
      color: '#7C3AED',
      emoji: '🔮',
    },
    {
      title: 'Pracy in Wonderland',
      type: 'YouTube',
      icon: PlayIcon,
      href: 'https://youtube.com/@pracyinwonderland',
      color: '#EC4899',
      emoji: '🐰',
    },
    {
      title: 'Meditações Guiadas',
      type: 'YouTube',
      icon: PlayIcon,
      href: 'https://youtube.com/@meditacoesguiadas',
      color: '#10B981',
      emoji: '🧘‍♀️',
    },
    {
      title: 'Podcast Misticast',
      type: 'Podcast',
      icon: Music2Icon,
      href: 'https://open.spotify.com/show/misticast',
      color: '#F97316',
      emoji: '🎙️',
    },
    {
      title: 'Aprenda Magia',
      type: 'Instagram',
      icon: PlayIcon,
      href: 'https://instagram.com/aprendamagia',
      color: '#FBBF24',
      emoji: '✨',
    },
    {
      title: '@pracy',
      type: 'Instagram',
      icon: PlayIcon,
      href: 'https://instagram.com/pracy',
      color: '#06B6D4',
      emoji: '💫',
    },
    {
      title: '@Misticastbr',
      type: 'Instagram',
      icon: PlayIcon,
      href: 'https://instagram.com/misticastbr',
      color: '#4F46E5',
      emoji: '🧿',
    },
    {
      title: '@magiacompracy',
      type: 'TikTok',
      icon: PlayIcon,
      href: 'https://tiktok.com/@magiacompracy',
      color: '#D946EF',
      emoji: '🎭',
    },
  ]

  return (
    <section className="relative py-24 px-6 bg-[#08070d] overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight text-white">
            Meus Canais
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto">
            Acompanhe meus conteúdos diários em diferentes plataformas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel, idx) => (
            <motion.a
              key={idx}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative block p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
            >
              {/* Indicador de cor discreto na lateral */}
              <div 
                className="absolute top-0 left-0 w-[3px] h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: channel.color }}
              ></div>

              <div className="flex flex-col h-full justify-between items-start">
                <div className="w-full flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-300">
                    {channel.emoji}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/40 group-hover:text-white/70 transition-colors duration-300">
                    {channel.type}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white/95 group-hover:text-white transition-colors duration-300 line-clamp-1">
                    {channel.title}
                  </h3>
                </div>

                <div className="w-full flex items-center justify-between text-xs text-white/30 group-hover:text-white/60 transition-colors duration-300 pt-2 border-t border-white/[0.03]">
                  <span>Acessar</span>
                  <svg 
                    className="transform group-hover:translate-x-1 transition-transform duration-300 text-white/40 group-hover:text-white"
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ width: '14px', height: '14px', minWidth: '14px', minHeight: '14px' }}
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}