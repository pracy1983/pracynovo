'use client'

import { motion } from 'framer-motion'

export default function Music() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
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
            Minha Música
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Deixe-se levar pelos sons do meu álbum "Transcendental"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-10 border border-primary/20 shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-20">
            <motion.div
              animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary rounded-full mix-blend-screen blur-3xl opacity-50"
            ></motion.div>
            <motion.div
              animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full mix-blend-screen blur-3xl opacity-50"
            ></motion.div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-64 h-64 flex-shrink-0 relative group">
              {/* Sombra de Projeção Cósmica Ampliada */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-indigo-500 to-secondary rounded-2xl blur-2xl opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 animate-pulse-glow"></div>
              <img 
                src="/images/placeholders/album-cover.png" 
                alt="Capa do Álbum Transcendental" 
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-white/20 transform group-hover:scale-103 transition-transform duration-500"
              />
            </div>

            <div className="flex-grow text-center md:text-left">
              <h3 className="text-4xl font-display font-bold mb-4 gradient-text">Transcendental</h3>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Uma coleção de músicas que te convidam a uma jornada interior, 
                explorando melodias etéreas e letras profundas.
              </p>
              
              <div className="mb-8">
                <iframe 
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/album/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator" 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                ></iframe>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold flex items-center gap-2 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.66 11.66a.75.75 0 0 1-1.16.92 5.54 5.54 0 0 1-6.91-1.25.75.75 0 0 1 .92-1.16 4.04 4.04 0 0 0 5.07.91.75.75 0 0 1 1.16.92zm1.46-2.17a.75.75 0 0 1-1.18 1 7.04 7.04 0 0 1-8.79-1.57.75.75 0 0 1 1-1.18 5.54 5.54 0 0 0 6.9 1.25.75.75 0 0 1 1.07.7zM15.43 8.3c-2.3-1-5-1.07-7.22-.38a.75.75 0 0 1-.41-1.42c2.6-.79 5.67-.71 8.28.32a.75.75 0 0 1-.65 1.48z" fill="#fff"></path></svg>
                  Spotify
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-full text-white font-semibold flex items-center gap-2 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18h-2a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h2l3 3 3-3-3-3h-2zm-3-12h-2a4 4 0 0 0-4-4v0a4 4 0 0 0 4 4h2l3-3-3-3zM2 12h2a4 4 0 0 0 4 4v0a4 4 0 0 0 4-4H2z" fill="#fff"></path></svg>
                  Apple Music
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}