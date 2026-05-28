'use client'

import { motion } from 'framer-motion'

function MailIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

function PlayIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"/>
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

function SendIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z"/>
      <path d="M22 2 11 13"/>
    </svg>
  )
}

export default function Footer() {
  const contacts = [
    {
      title: 'Parcerias e Publicidade',
      items: [
        { icon: MailIcon, text: 'pracyassessoria@gmail.com', href: 'mailto:pracyassessoria@gmail.com' },
        { icon: PhoneIcon, text: '(11) 99689-2833', href: 'https://wa.me/5511996892833' },
      ],
    },
    {
      title: 'Cursos e Atendimento',
      items: [
        { icon: MailIcon, text: 'contato@aprendamagia.com.br', href: 'mailto:contato@aprendamagia.com.br' },
        { icon: PhoneIcon, text: '(11) 98479-1926', href: 'https://wa.me/5511984791926' },
      ],
    },
  ]

  const socials = [
    { icon: InstagramIcon, href: 'https://instagram.com/pracy', label: 'Instagram @pracy', color: 'from-pink-600 to-rose-600' },
    { icon: InstagramIcon, href: 'https://instagram.com/aprendamagia', label: 'Instagram @aprendamagia', color: 'from-pink-600 to-rose-600' },
    { icon: InstagramIcon, href: 'https://instagram.com/misticastbr', label: 'Instagram @misticastbr', color: 'from-pink-600 to-rose-600' },
    { icon: PlayIcon, href: 'https://youtube.com/@magiacompracy', label: 'YouTube', color: 'from-red-600 to-red-700' },
    { icon: MusicIcon, href: 'https://open.spotify.com/artist/pracy', label: 'Spotify', color: 'from-green-600 to-emerald-600' },
    { icon: SendIcon, href: 'https://t.me/magiacompracy', label: 'Telegram', color: 'from-cyan-600 to-blue-600' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-dark to-black py-20 px-4 border-t border-primary/20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen blur-3xl"
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {contacts.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-display font-bold mb-6 gradient-text">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors duration-300"
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display font-bold mb-6 gradient-text">Redes Sociais</h3>
            <div className="flex flex-wrap gap-4">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-gradient-to-br ${social.color} shadow-lg hover:shadow-xl transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-primary/20 pt-8 text-center"
        >
          <p className="text-white/60 text-sm mb-4">
            © 2026 Pracy. Todos os direitos reservados. ✨
          </p>
          <p className="text-white/40 text-xs">
            Feito com 💜 e muita magia
          </p>
        </motion.div>
      </div>
    </footer>
  )
}