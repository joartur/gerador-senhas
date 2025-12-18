import { Inter } from 'next/font/google'
import '../styles/globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gerador de Senhas Seguras | NextJS',
  description: 'Gerador de senhas seguras com análise de força e múltiplas opções',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="light">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white transition-colors duration-200">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
              {/* Header com toggle de tema */}
              <header className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-10 gap-4">
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent mb-2">
                    🔐 Gerador de Senhas Seguras
                  </h1>
                  <p className="text-blue-700/80 dark:text-gray-300 text-base md:text-lg max-w-3xl">
                    Crie senhas fortes e seguras com nosso gerador. Personalize o comprimento, 
                    caracteres especiais e muito mais para garantir a máxima proteção.
                  </p>
                </div>
                <ThemeToggle />
              </header>
              
              {children}
              
              <footer className="text-center py-8 mt-12 text-blue-600/70 dark:text-gray-400 text-sm border-t border-blue-200/50 dark:border-gray-700">
                <p className="mb-2">🔒 Gerador de Senhas Seguras - Desenvolvido com Next.js & Tailwind CSS</p>
                <p>Use esta ferramenta para criar senhas fortes e únicas para todas as suas contas</p>
                <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs">
                  <span className="px-3 py-1 bg-blue-100/70 dark:bg-gray-800 rounded-full text-blue-800 dark:text-gray-300">🏆 Open Source</span>
                  <span className="px-3 py-1 bg-blue-100/70 dark:bg-gray-800 rounded-full text-blue-800 dark:text-gray-300">🔐 Segurança</span>
                  <span className="px-3 py-1 bg-blue-100/70 dark:bg-gray-800 rounded-full text-blue-800 dark:text-gray-300">📱 Responsivo</span>
                  <span className="px-3 py-1 bg-blue-100/70 dark:bg-gray-800 rounded-full text-blue-800 dark:text-gray-300">🌓 Modo Claro/Escuro</span>
                </div>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}