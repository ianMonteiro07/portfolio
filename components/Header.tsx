'use client'; // Necessário ser client component

import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md dark:bg-black/80 border-b border-gray-100 dark:border-gray-800">
      <div className="p-6 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Ian Monteiro
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="#sobre" className="hover:text-blue-500 transition">Sobre</Link>
          <Link href="#projetos" className="hover:text-blue-500 transition">Projetos</Link>
          <Link href="#contato" className="hover:text-blue-500 transition">Contato</Link>
        </nav>
      </div>

      {/* BARRA DE PROGRESSO AQUI */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}