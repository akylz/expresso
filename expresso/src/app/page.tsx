'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Smile, Book, Users, Star } from 'lucide-react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <header className="fixed w-full z-10 p-4 bg-white bg-opacity-80 backdrop-blur-lg shadow-sm">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/dashboard/process" className="text-3xl font-extrabold text-indigo-600">expresso</Link>
          <div className="space-x-6">
            <Link href="/quiz" className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors">chose</Link>
            <Link href="/frs" className="text-2xl text-gray-600 hover:text-indigo-600 transition-colors">show</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-24">
        <section className="flex flex-col md:flex-row items-center justify-between mb-24">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-indigo-600 mb-6 animate-fade-in-down">
              Welcome!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 animate-fade-in-up">
            Empowering children with autism and delayed developement to recognize and understand emotions through fun, interactive, and engaging experiences. Unlock emotional growth, confidence, and joy through play&#128200;
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors animate-fade-in">
             Start the Adventure!
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <Image
              src="/children.svg?height=400&width=400"
              alt="Children learning about emotions"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section id="about" className="mb-24">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-3xl font-bold text-indigo-600 mb-4">About Expresso</h2>
              <p className="text-gray-600 leading-relaxed">
              Our program helps children develop the skill of recognizing emotions through facial expressions, from joy to surprise to anger. We focus on strengthening nonverbal communication, guiding children to interpret emotional cues and connect with others with ease.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="mb-24">
          <h2 className="text-4xl font-bold text-indigo-600 mb-12 text-center">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Emotion Recognition", description: "Learn to identify different emotions through expressive images and interactive exercises", icon: Smile },
              { title: "Interactive Stories", description: "Engage with captivating stories that help understand emotions in various contexts", icon: Book },
              { title: "Multiplayer Games", description: "Play with friends and family to enhance social emotional learning in a fun environment", icon: Users },
              { title: "Progress Tracking", description: "Monitor your child's learning journey with detailed, easy-to-understand progress reports", icon: Star },
            ].map((feature, index) => (
              <div key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <feature.icon className="w-12 h-12 mb-4 text-indigo-600" />
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white bg-opacity-80 backdrop-blur-lg shadow-md py-6">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2024 expresso. All rights reserved.</p>
        </div>
      </footer>

      <div 
        className="fixed inset-0 pointer-events-none bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"
        style={{
          opacity: Math.min(scrollY / 1000, 0.5),
          transition: 'opacity 0.3s ease-out',
        }}
      />
    </div>
  )
}