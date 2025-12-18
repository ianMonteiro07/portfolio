'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Por Lara Soares",
    description: "Site institucional desenvolvido para destacar a marca e serviços da Por Lara Soares. Focado em design elegante e alta performance.",
    techs: ["Next.js", "React", "Tailwind CSS","TypeScript"],
    image: "/porlara.png", // <--- Certifique-se que o arquivo está na pasta public
    link: "https://site-por-lara-soares.vercel.app/",
  },
  {
    title: "Oliveira & Associados",
  description: "Landing Page Jurídica Premium de alto padrão, focada em conversão e autoridade digital, com design moderno.",
  techs: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  image: "/logo-ad.png", // Certifique-se de que a print do site está com esse nome na pasta public
  link: "https://oliveira-associados-web.vercel.app/",
  },
  {
    title: "Kill & Cross",
    description: "Landing Page Premium de alto padrão, focada em exposiçao e marketing, com design moderno.",
    techs: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/kill.png", 
    link: "https://kill-cross-web.vercel.app/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Trabalhos Recentes</h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Uma seleção de projetos que demonstram minha paixão por criar soluções digitais.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants} 
              className="bg-white/90 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 dark:border-gray-700 group backdrop-blur-sm"
            >
              
              <div className="h-52 w-full bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                 {/* AQUI ESTAVA O PROBLEMA: Agora a tag Image está ativa! */}
                 <div className="absolute inset-0 group-hover:scale-110 transition duration-500 z-0">
                   <Image 
                     src={project.image} 
                     alt={project.title} 
                     fill 
                     className="object-cover" 
                   />
                 </div>
                 
                 {/* Overlay escuro ao passar o mouse */}
                 <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20 z-10"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techs.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200 text-xs rounded-full font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link 
                  href={project.link} 
                  target="_blank" 
                  className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors dark:bg-white dark:text-black dark:hover:bg-blue-600 dark:hover:text-white shadow-md"
                >
                  Visitar Projeto
                </Link>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}