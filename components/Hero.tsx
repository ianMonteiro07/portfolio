'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  // CONFIGURAÇÃO DO WHATSAPP
  // Coloque seu número com DDD (apenas números)
  const whatsappNumber = "5582993610512"; 
  const whatsappMessage = encodeURIComponent("Olá Ian! Vi seu portfólio e gostaria de conversar sobre um projeto.");

  return (
    <section className="min-h-screen flex items-center justify-center pt-36 md:pt-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 w-full">
        
        {/* Área de Texto Animada */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
            Olá, eu sou
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white">
            Ian Monteiro
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-lg mb-8 leading-relaxed">
            <span className="font-bold text-gray-900 dark:text-white">Desenvolvedor Full Stack</span> de dia, <span className="font-bold text-gray-900 dark:text-white">Cantor & Compositor de MPB</span> de noite.
            <br />
            Criando harmonia entre código e arte.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#projetos" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/25">
              Ver Projetos
            </a>

            {/* BOTÃO ATUALIZADO AQUI */}
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-400 dark:border-gray-700 px-8 py-4 rounded-lg font-bold hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Vamos Conversar
            </a>
          </div>
        </motion.div>

        {/* Área da Imagem Animada */}
        <motion.div 
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl rotate-6 blur-2xl opacity-40 dark:opacity-30 animate-pulse scale-110"></div>
           
           <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl rotate-3 hover:rotate-0 transition duration-500">
             <Image 
               src="/perfil1-hero.jpg" 
               alt="Foto de Ian Monteiro" 
               fill 
               className="object-cover" 
               priority 
             />
           </div>
        </motion.div>
      </div>
    </section>
  );
}