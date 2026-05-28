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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel, idx) => (
            <motion.a
              key={idx}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              <div className="relative h-full p-8 rounded-2xl bg-dark/90 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300 flex flex-col items-center text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {channel.emoji}
                </div>
                
                <channel.icon className="w-8 h-8 text-white/60 mb-4" />
                
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:gradient-text transition-all duration-300">
                  {channel.title}
                </h3>
                
                <p className="text-sm text-white/50 uppercase tracking-wider font-semibold">
                  {channel.type}
                </p>

                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${channel.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}