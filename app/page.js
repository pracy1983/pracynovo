'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Channels from '@/components/Channels'
import Music from '@/components/Music'
import Book from '@/components/Book'
import Services from '@/components/Services'
import Community from '@/components/Community'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Channels />
      <Music />
      <Book />
      <Services />
      <Community />
      <Footer />
      <div style={{ textAlign: 'center', fontSize: 11, opacity: 0.5, padding: '8px 0' }}>MM-05FB02</div>
    </main>
  )
}