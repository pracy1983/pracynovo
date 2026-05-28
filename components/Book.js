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
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-accent rounded-3xl blur-2xl opacity-20"></div>
            <motion.div
              whileHover={{ rotateY: 18, rotateX: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="relative w-52 h-[300px] rounded-r-xl shadow-[10px_10px_20px_rgba(0,0,0,0.4)] border-y border-r border-white/15 cursor-pointer overflow-hidden flex"
              style={{ 
                transformStyle: 'preserve-3d', 
                perspective: '1000px',
                transformOrigin: 'left center' 
              }}
            >
              {/* Lombada Simulada do Livro */}
              <div className="w-3 h-full bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-800 border-r border-white/10 z-20 flex-shrink-0"></div>
              
              {/* Capa Principal com Imagem Premium */}
              <div className="relative flex-grow h-full bg-dark">
                {/* Overlay de Brilho */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 z-10 pointer-events-none"></div>
                <img 
                  src="/images/placeholders/book-cover.png" 
                  alt="Capa do Livro Na Descoberta de Mim" 
                  className="w-full h-full object-cover z-0" 
                />
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