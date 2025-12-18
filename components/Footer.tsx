export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-8 border-t border-gray-200 dark:border-gray-800 text-center">
      <p className="text-gray-600 dark:text-gray-400">
        © 2024 Desenvolvido com <span className="text-red-500">♥</span> e Next.js
      </p>
      
      <div className="mt-4 space-x-4">
        <a href="https://github.com/seunome" target="_blank" className="hover:text-blue-600 dark:text-white transition">GitHub</a>
        <a href="https://linkedin.com/in/seunome" target="_blank" className="hover:text-blue-600 dark:text-white transition">LinkedIn</a>
        <a href="mailto:seuemail@email.com" className="hover:text-blue-600 dark:text-white transition">Email</a>
      </div>
    </footer>
  );
}