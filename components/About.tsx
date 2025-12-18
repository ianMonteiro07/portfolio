'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", 
  "Tailwind CSS", "Node.js", "Composição Musical", "Violão/Canto"
];

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 overflow-visible">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start items-center gap-16">
        
        {/* --- ÁREA DA IMAGEM --- */}
        <motion.div 
          className="flex-1 flex justify-center relative z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
           <div className="absolute inset-0 bg-gradient-to-tl from-blue-500 to-purple-500 rounded-3xl -rotate-6 blur-2xl opacity-30 dark:opacity-20 animate-pulse scale-110"></div>
           
           <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-3xl overflow-hidden border-[6px] border-white dark:border-gray-800 shadow-2xl rotate-3 hover:rotate-0 transition duration-500">
             <Image 
               src="/perfil-sobre.jpg" 
               alt="Ian Monteiro - Música e Código" 
               fill 
               className="object-cover object-top" 
             />
           </div>
        </motion.div>
        
        {/* --- ÁREA DO TEXTO ATUALIZADA --- */}
        <motion.div 
          className="flex-1 z-10 md:pt-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Mais que linhas de código
          </h2>
          
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-6 leading-relaxed font-medium">
            Meu nome é Ian Monteiro. Atualmente estou em formação em Ciência da Computação pela Afya UNIMA, onde aprimoro meu raciocínio lógico e domínio tecnológico. Acredito que a programação e a música compartilham a mesma essência: construir algo complexo e belo a partir de elementos simples.
          </p>
          
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-8 leading-relaxed font-medium">
            Como desenvolvedor, busco a arquitetura limpa e a performance. Como músico de MPB, busco a melodia que toca a alma. Trago essa sensibilidade artística para o design das minhas interfaces e a lógica estruturada, que a graduação me proporciona, para as minhas composições.
          </p>

          {/* Grid de Skills */}
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                className="bg-white/60 dark:bg-gray-800 p-3 rounded-lg text-center font-bold text-gray-800 dark:text-gray-200 border border-white/50 dark:border-gray-700 flex items-center justify-center gap-2 hover:border-blue-500 transition shadow-sm backdrop-blur-sm"
              >
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}