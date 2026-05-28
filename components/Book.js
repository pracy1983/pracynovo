'use client'

import { motion } from 'framer-motion'

function BookIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
      <path d="M8 7h6"/>
      <path d="M8 11h8"/>
      <path d="M8 15h6"/>
    </svg>
  )
}

export default function Book() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-gold/5 to-dark"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-display font-bold mb-6 gradient-text">
            Livro
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Uma jornada literária de autoconhecimento e descoberta
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-accent rounded-3xl blur-3xl opacity-40 animate-pulse-glow"></div>
            <motion.div
              whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-72 h-96 bg-gradient-to-br from-gold-400 to-yellow-600 rounded-lg shadow-2xl border-4 border-white/20 p-4"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="w-full h-full bg-dark/20 rounded-lg flex flex-col items-center justify-center p-6 text-center">
                <BookIcon className="w-20 h-20 text-gold mb-4" />
                <h3 className="text-2xl font-display font-bold text-white">Na Descoberta de Mim</h3>
                <div className="w-12 h-1 bg-white/50 my-4"></div>
                <p className="text-sm text-white/80 italic">"A jornada mais longa é aquela que nos leva de volta para nós mesmos."</p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-dark/50 backdrop-blur-md border border-white/10">
              <h3 className="text-3xl font-display font-bold mb-6 text-white">
                Descubra a sua <span className="text-gold">Essência</span>
              </h3>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                "Na Descoberta de Mim" é mais do que um livro; é um guia prático e emocional para quem busca se libertar de amarras e encontrar sua verdadeira identidade. 
                Através de relatos e exercícios, convido você a mergulhar no seu próprio universo.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-gold to-accent rounded-full text-dark font-bold text-lg shadow-xl"
              >
                Adquirir o Livro ✨
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}