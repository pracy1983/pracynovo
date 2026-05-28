'use client'

import { motion } from 'framer-motion'

function GraduationCapIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  )
}

function HeartIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  )
}

export default function Services() {
  const services = [
    {
      icon: GraduationCapIcon,
      title: 'Cursos',
      description: 'Aprenda magia, ilusionismo e desenvolvimento pessoal com cursos completos, práticos e transformadores.',
      cta: 'Explorar Cursos',
      gradient: 'from-primary via-indigo to-cyan',
      emoji: '🎓',
    },
    {
      icon: HeartIcon,
      title: 'Atendimento',
      description: 'Sessões personalizadas de orientação espiritual, tarot e desenvolvimento pessoal para sua jornada única.',
      cta: 'Agendar Sessão',
      gradient: 'from-secondary via-pink-600 to-accent',
      emoji: '💖',
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
            Cursos & Atendimento
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Transforme sua vida com conhecimento e orientação personalizada
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              <div className="relative p-10 rounded-3xl bg-dark/80 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.emoji}
                </div>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-4xl font-display font-bold mb-6 text-white group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-white/70 mb-8 leading-relaxed text-lg flex-grow">
                  {service.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-8 py-4 bg-gradient-to-r ${service.gradient} rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  {service.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}