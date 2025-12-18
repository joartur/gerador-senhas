import PasswordGenerator from '@/components/PasswordGenerator'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Cartão principal com layout melhorado */}
        <div className="card animate-fade-in">
          <PasswordGenerator />
        </div>
        
        {/* Seções de informações - Layout grid otimizado */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Dicas de Segurança */}
          <div className="card hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Dicas de Segurança</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <span className="text-blue-500 dark:text-blue-400 mt-0.5">•</span>
                <span className="text-gray-700 dark:text-gray-300">Use pelo menos <strong>12 caracteres</strong> para maior segurança</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <span className="text-blue-500 dark:text-blue-400 mt-0.5">•</span>
                <span className="text-gray-700 dark:text-gray-300">Combine <strong>letras, números e símbolos</strong> de forma imprevisível</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <span className="text-blue-500 dark:text-blue-400 mt-0.5">•</span>
                <span className="text-gray-700 dark:text-gray-300">Nunca reutilize senhas entre diferentes sites e serviços</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <span className="text-blue-500 dark:text-blue-400 mt-0.5">•</span>
                <span className="text-gray-700 dark:text-gray-300">Considere usar um <strong>gerenciador de senhas</strong> confiável</span>
              </li>
            </ul>
          </div>
          
          {/* O que Evitar */}
          <div className="card hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-orange-900/30 dark:to-red-800/30 flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">O que Evitar</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <span className="text-red-500 dark:text-red-400 mt-0.5">✗</span>
                <span className="text-gray-700 dark:text-gray-300">Informações pessoais como nomes, datas de nascimento ou números de telefone</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <span className="text-red-500 dark:text-red-400 mt-0.5">✗</span>
                <span className="text-gray-700 dark:text-gray-300">Sequências simples como "123456", "abcdef" ou "qwerty"</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <span className="text-red-500 dark:text-red-400 mt-0.5">✗</span>
                <span className="text-gray-700 dark:text-gray-300">Palavras comuns do dicionário ou combinações óbvias</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <span className="text-red-500 dark:text-red-400 mt-0.5">✗</span>
                <span className="text-gray-700 dark:text-gray-300">Senhas muito curtas (menos de 8 caracteres são extremamente vulneráveis)</span>
              </li>
            </ul>
          </div>
          
          {/* Recursos Avançados */}
          <div className="card hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-800/30 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Recursos Avançados</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">•</span>
                <span className="text-gray-700 dark:text-gray-300"><strong>Análise de força em tempo real</strong> com pontuação detalhada</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">•</span>
                <span className="text-gray-700 dark:text-gray-300"><strong>Geração com múltiplos critérios</strong> personalizáveis</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">•</span>
                <span className="text-gray-700 dark:text-gray-300"><strong>Copiar com um clique</strong> para área de transferência</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50/50 dark:bg-gray-800/30 rounded-lg">
                <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">•</span>
                <span className="text-gray-700 dark:text-gray-300"><strong>Interface moderna e responsiva</strong> em todos dispositivos</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Estatísticas */}
        <div className="mt-12 md:mt-16 card">
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Por que Senhas Fortes São Importantes?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">81%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">das violações usam senhas fracas ou roubadas</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">1.7s</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">para quebrar uma senha de 8 caracteres</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">65%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">das pessoas reutilizam senhas entre contas</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">+10 anos</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">para quebrar uma senha de 12+ caracteres</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}