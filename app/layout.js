import '@/styles/globals.css'

export const metadata = {
  title: 'Pracy - Dubladora, Cantora, Compositora',
  description: 'Conheça o trabalho de Pracy: dublagem, música, magia e espiritualidade.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-dark text-light">
        {children}
      </body>
    </html>
  )
}