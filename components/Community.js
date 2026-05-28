'use client'

import { motion } from 'framer-motion'

function SendIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z"/>
      <path d="M22 2 11 13"/>
    </svg>
  )
}

function UsersIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

export default function Community() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-cyan/5 to-dark"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan to-primary rounded-full blur-3xl opacity-50 animate-pulse-glow"></div>
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-cyan to-primary rounded-full flex items-center justify-center shadow-2xl">
              <UsersIcon className="w-16 h-16 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-display font-bold mb-6 gradient-text"
        >
          Comunidade Mágica
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Junte-se a milhares de pessoas que compartilham a mesma paixão por magia, 
          espiritualidade e autoconhecimento. Vamos crescer juntos! ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://t.me/magiacompracy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-12 py-5 gradient-rainbow rounded-full text-white font-bold text-xl shadow-2xl"
          >
            <SendIcon className="w-7 h-7" />
            Entrar no Telegram
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-white/60"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald rounded-full animate-pulse"></div>
            <span>Conteúdo exclusivo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            <span>Lives e eventos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan rounded-full animate-pulse"></div>
            <span>Comunidade ativa</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}