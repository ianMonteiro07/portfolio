import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    // REMOVIDO: 'bg-gray-50' e 'dark:bg-gray-900'
    // AGORA: O fundo é transparente e vai mostrar o degradê que está no body!
    <main className="min-h-screen text-gray-900 dark:text-white">
      <Header />
      
      <Hero />
      <Projects />
      <About />
      <Footer />
      <ThemeToggle />
    </main>
  );
}