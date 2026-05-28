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
      gradient: 'from-primary to-indigo',
      emoji: '🎩',
    },
    {
      title: 'Pracy in Wonderland',
      type: 'YouTube',
      icon: PlayIcon,
      href: 'https://youtube.com/@pracyinwonderland',
      gradient: 'from-secondary to-pink-600',
      emoji: '🐰',
    },
    {
      title: 'Meditações Guiadas',
      type: 'YouTube',
      icon: PlayIcon,
      href: 'https://youtube.com/@meditacoesguiadas',
      gradient: 'from-emerald to-green-600',
      emoji: '🧘‍♀️',
    },
    {
      title: 'Podcast Misticast',
      type: 'Podcast',
      icon: Music2Icon,
      href: 'https://open.spotify.com/show/misticast',
      gradient: 'from-accent to-orange-600',
      emoji: '🎙️',
    },
    {
      title: 'Aprenda Magia',
      type: 'Instagram',
      icon: PlayIcon,
      href: 'https://instagram.com/aprendamagia',
      gradient: 'from-gold to-yellow-600',
      emoji: '✨',
    },
    {
      title: '@pracy',
      type: 'Instagram',
      icon: PlayIcon,
      href: 'https://instagram.com/pracy',
      gradient: 'from-cyan to-blue-600',
      emoji: '💫',
    },
    {
      title: '@Misticastbr',
      type: 'Instagram',
      icon: PlayIcon,
      href: 'https://instagram.com/misticastbr',
      gradient: 'from-indigo to-purple-600',
      emoji: '🔮',
    },
    {
      title: '@magiacompracy',
      type: 'TikTok',
      icon: PlayIcon,
      href: 'https://tiktok.com/@magiacompracy',
      gradient: 'from-pink-600 to-purple-600',
      emoji: '🎭',
    },
  ]

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-secondary/5 to-dark"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-display font-bold mb-6 gradient-text">
            Meus Canais
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Explore meu universo em diferentes plataformas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {channels.map((channel, idx) => (
            <motion.a
              key={idx}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative block"
            >
              {/* Glow Dinâmico Traseiro */}
              <div className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} rounded-3xl blur-2xl opacity-25 group-hover:opacity-60 transition-opacity duration-300`}></div>
              
              {/* Estrutura do Card em Glassmorphism */}
              <div className="relative h-full p-8 rounded-3xl bg-dark/70 backdrop-blur-md border border-white/5 group-hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-between text-center overflow-hidden">
                {/* Elemento de Brilho de Canto */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${channel.gradient} opacity-10 group-hover:opacity-30 blur-2xl transition-opacity duration-300`}></div>
                
                {/* Cabeçalho do Card com Emoji + Badge da Rede */}
                <div className="w-full flex items-center justify-between mb-8 z-10">
                  <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:text-white transition-colors duration-300">
                    {channel.type}
                  </span>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${channel.gradient} p-[1px] flex items-center justify-center`}>
                    <div className="w-full h-full rounded-xl bg-dark/80 flex items-center justify-center">
                      <channel.icon className="w-4 h-4 text-white/80 group-hover:text-white" />
                    </div>
                  </div>
                </div>

                {/* Conteúdo Central */}
                <div className="flex flex-col items-center z-10 py-4 flex-grow justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                    {channel.emoji}
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {channel.title}
                  </h3>
                </div>

                {/* Rodapé / Barra de Ação */}
                <div className="w-full mt-6 pt-4 border-t border-white/5 z-10 flex items-center justify-center gap-2 text-sm text-white/40 group-hover:text-white/80 transition-colors duration-300">
                  <span>Acessar canal</span>
                  <svg className="w-4.5 h-4.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Borda Inferior Iluminada */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${channel.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}