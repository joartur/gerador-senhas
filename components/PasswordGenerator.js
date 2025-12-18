'use client';

import { useState, useEffect } from 'react';
import { RefreshCw, Shield, Lock, Settings, Zap, Check, X, Type, Hash, Asterisk, CaseUpper, CaseLower } from 'lucide-react';
import { generatePassword, calculatePasswordStrength, estimateCrackingTime } from '@/lib/passwordUtils';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import CopyButton from './CopyButton';

export default function PasswordGenerator() {
  // Estado dos controles
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [strength, setStrength] = useState(() => calculatePasswordStrength(''));
  const [crackingTime, setCrackingTime] = useState('Instantâneo');
  const [generationCount, setGenerationCount] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  // Gerar senha inicial
  useEffect(() => {
    generateNewPassword();
  }, []);

  // Atualizar análise da senha
  useEffect(() => {
    const newStrength = calculatePasswordStrength(password);
    setStrength(newStrength);
    setCrackingTime(estimateCrackingTime(password));
  }, [password]);

  // Gerar nova senha com feedback visual
  const generateNewPassword = async () => {
    if (![includeLowercase, includeUppercase, includeNumbers, includeSymbols].some(Boolean)) {
      return;
    }

    setIsGenerating(true);
    
    // Pequeno delay para feedback visual
    await new Promise(resolve => setTimeout(resolve, 150));
    
    const newPassword = generatePassword({
      length,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols
    });
    
    setPassword(newPassword);
    setGenerationCount(prev => prev + 1);
    setIsGenerating(false);
  };

  // Resetar para configurações recomendadas
  const resetToRecommended = () => {
    setLength(16);
    setIncludeLowercase(true);
    setIncludeUppercase(true);
    setIncludeNumbers(true);
    setIncludeSymbols(true);
  };

  // Handler para mudança de comprimento
  const handleLengthChange = (e) => {
    const newLength = parseInt(e.target.value);
    setLength(newLength);
  };

  // Atualizar senha quando configurações mudarem
  useEffect(() => {
    const timer = setTimeout(() => {
      if (password && [includeLowercase, includeUppercase, includeNumbers, includeSymbols].some(Boolean)) {
        const newPassword = generatePassword({
          length,
          includeLowercase,
          includeUppercase,
          includeNumbers,
          includeSymbols
        });
        setPassword(newPassword);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [length, includeLowercase, includeUppercase, includeNumbers, includeSymbols]);

  const isGenerateDisabled = ![includeLowercase, includeUppercase, includeNumbers, includeSymbols].some(Boolean);

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Cabeçalho do gerador */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
            <Settings className="text-indigo-600 dark:text-indigo-400" size={28} />
            Gerador de Senhas
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-1 text-sm md:text-base max-w-3xl">
            Configure as opções abaixo e gere senhas seguras instantaneamente
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-800/80 px-4 py-2 rounded-full backdrop-blur-sm">
          <Zap size={16} className="text-amber-500" />
          <span>Gerado: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{generationCount}x</span></span>
        </div>
      </div>

      {/* Grid principal - 2 colunas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Coluna 1: Configurações (2/3 da tela) */}
        <div className="lg:col-span-2 space-y-6 lg:space-y-8">
          {/* Seção de senha gerada */}
          <div className="bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-200/80 dark:border-slate-700/50 shadow-lg shadow-slate-200/30 dark:shadow-slate-900/30">
            <div className="flex flex-col lg:flex-row gap-5 md:gap-6 items-stretch">
              {/* Campo da senha */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <label className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2">
                    <Lock size={18} className="text-indigo-600 dark:text-indigo-400" />
                    Senha Gerada
                  </label>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      {length} caracteres
                    </span>
                    <span className="hidden sm:inline text-slate-400">•</span>
                    <span className="hidden sm:inline text-slate-600 dark:text-slate-400">
                      Geração #{generationCount}
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={password}
                    readOnly
                    className="w-full px-4 py-4 text-lg md:text-xl font-mono tracking-wider bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent pr-28 shadow-inner"
                    aria-label="Senha gerada"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                    <button
                      onClick={generateNewPassword}
                      disabled={isGenerateDisabled || isGenerating}
                      className={`p-2 rounded-lg transition-all ${isGenerating ? 'animate-spin' : 'hover:bg-slate-100 dark:hover:bg-slate-700'} ${isGenerateDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      aria-label="Gerar nova senha"
                      title="Gerar nova senha"
                    >
                      <RefreshCw size={20} className={isGenerating ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'} />
                    </button>
                  </div>
                </div>
                
                {/* Informações extras */}
                <div className="flex flex-wrap gap-3 mt-4 text-sm">
                  <div className="flex items-center gap-2 bg-slate-50/80 dark:bg-slate-800/50 px-3 py-2 rounded-lg">
                    <span className="text-slate-600 dark:text-slate-400">Tempo estimado:</span>
                    <span className="font-semibold text-amber-600 dark:text-amber-500">{crackingTime}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50/80 dark:bg-slate-800/50 px-3 py-2 rounded-lg">
                    <span className="text-slate-600 dark:text-slate-400">Entropia:</span>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-500">
                      {Math.round(password.length * 5.5)} bits
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Botão copiar */}
              <div className="lg:w-auto flex items-center">
                <div className="w-full lg:w-48">
                  <CopyButton text={password} disabled={!password} />
                </div>
              </div>
            </div>
          </div>

          {/* Controle de comprimento */}
          <div className="bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-200/80 dark:border-slate-700/50 shadow-lg shadow-slate-200/30 dark:shadow-slate-900/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center">
                  <span className="text-xl text-indigo-600">📏</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white text-lg">Comprimento da Senha</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Escolha quantos caracteres sua senha terá</p>
                </div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-transparent">
                {length}
              </div>
            </div>
            
            <input
              type="range"
              min="4"
              max="32"
              value={length}
              onChange={handleLengthChange}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              aria-label="Comprimento da senha"
            />
            
            <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mt-3 px-1">
              <span className="font-medium">4</span>
              <span className="font-medium">8</span>
              <span className="font-medium text-indigo-600 dark:text-indigo-400">12</span>
              <span className="font-medium text-indigo-600 dark:text-indigo-400">16</span>
              <span className="font-medium">20</span>
              <span className="font-medium">24</span>
              <span className="font-medium">28</span>
              <span className="font-medium">32</span>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
              <div className="text-center p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <div className="font-semibold text-slate-800 dark:text-white">Curto</div>
                <div className="text-slate-600 dark:text-slate-400">4-8 chars</div>
              </div>
              <div className="text-center p-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 rounded-lg">
                <div className="font-semibold">Ideal</div>
                <div>12-16 chars</div>
              </div>
              <div className="text-center p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <div className="font-semibold text-slate-800 dark:text-white">Longo</div>
                <div className="text-slate-600 dark:text-slate-400">20+ chars</div>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna 2: Análise de Segurança (1/3 da tela) */}
        <div className="space-y-6 lg:space-y-8">
          {/* Análise de força */}
          <div className="bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-200/80 dark:border-slate-700/50 shadow-lg shadow-slate-200/30 dark:shadow-slate-900/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 flex items-center justify-center">
                <span className="text-xl text-rose-600">🛡️</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white text-lg">Análise de Segurança</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Força e qualidade da senha</p>
              </div>
            </div>
            
            <PasswordStrengthMeter strength={strength} />
          </div>

          {/* Dica rápida */}
          <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="text-indigo-600 dark:text-indigo-400 text-lg mt-0.5">💡</div>
              <div>
                <div className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">Dica de Segurança</div>
                <div className="text-indigo-600/90 dark:text-indigo-400 text-xs mt-1">
                  Use senhas com 16+ caracteres e todos os tipos selecionados para máxima segurança
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEÇÃO "TIPOS DE CARACTERES" E "RESUMO DE CARACTERES" - LADO A LADO EM DESKTOP */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Tipos de Caracteres - Coluna Esquerda */}
        <div className="bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-200/80 dark:border-slate-700/50 shadow-lg shadow-slate-200/30 dark:shadow-slate-900/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center">
              <Type className="text-emerald-600 dark:text-emerald-400" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-white text-lg">Tipos de Caracteres</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Selecione quais tipos incluir na senha</p>
            </div>
          </div>
          
          {/* Layout vertical interno */}
          <div className="space-y-3">
            {[
              { 
                label: 'Letras Minúsculas', 
                value: includeLowercase, 
                setter: setIncludeLowercase, 
                example: 'a b c d e f',
                icon: <CaseLower size={20} />,
                color: 'from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30',
                iconColor: 'text-blue-600 dark:text-blue-400',
                borderColor: 'border-blue-300 dark:border-blue-800'
              },
              { 
                label: 'Letras Maiúsculas', 
                value: includeUppercase, 
                setter: setIncludeUppercase, 
                example: 'A B C D E F',
                icon: <CaseUpper size={20} />,
                color: 'from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30',
                iconColor: 'text-indigo-600 dark:text-indigo-400',
                borderColor: 'border-indigo-300 dark:border-indigo-800'
              },
              { 
                label: 'Números', 
                value: includeNumbers, 
                setter: setIncludeNumbers, 
                example: '0 1 2 3 4 5 6 7 8 9',
                icon: <Hash size={20} />,
                color: 'from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30',
                iconColor: 'text-emerald-600 dark:text-emerald-400',
                borderColor: 'border-emerald-300 dark:border-emerald-800'
              },
              { 
                label: 'Símbolos Especiais', 
                value: includeSymbols, 
                setter: setIncludeSymbols, 
                example: '! @ # $ % & * ( )',
                icon: <Asterisk size={20} />,
                color: 'from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30',
                iconColor: 'text-amber-600 dark:text-amber-400',
                borderColor: 'border-amber-300 dark:border-amber-800'
              },
            ].map((type, index) => (
              <label 
                key={index} 
                className={`flex items-center gap-4 p-4 bg-slate-50/80 dark:bg-slate-800/30 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-700/50 transition-all duration-200 cursor-pointer border ${type.value ? type.borderColor : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600'}`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${type.color} flex items-center justify-center shadow-sm`}>
                  <div className={type.value ? type.iconColor : 'text-slate-500 dark:text-slate-500'}>
                    {type.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-slate-800 dark:text-slate-200">{type.label}</div>
                    <input
                      type="checkbox"
                      checked={type.value}
                      onChange={(e) => type.setter(e.target.checked)}
                      className="w-5 h-5 text-indigo-600 dark:text-indigo-500 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:ring-offset-0"
                    />
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-mono">{type.example}</div>
                </div>
              </label>
            ))}
          </div>
          
          {isGenerateDisabled && (
            <div className="mt-6 p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-xl text-rose-700 dark:text-rose-400 text-sm">
              <div className="flex items-center gap-3">
                <div className="text-lg">⚠️</div>
                <div>
                  <div className="font-semibold">Selecione pelo menos um tipo</div>
                  <div className="mt-1 text-rose-600 dark:text-rose-300">
                    Marque uma ou mais opções acima para habilitar a geração de senhas
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Resumo de Caracteres - Coluna Direita */}
        <div className="bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-200/80 dark:border-slate-700/50 shadow-lg shadow-slate-200/30 dark:shadow-slate-900/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 flex items-center justify-center">
              <span className="text-xl text-emerald-600 dark:text-emerald-400">📊</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-white text-lg">Resumo de Caracteres</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Análise dos tipos usados na senha atual</p>
            </div>
          </div>
          
          {/* Layout vertical interno */}
          <div className="space-y-4">
            {[
              { 
                label: 'Letras Minúsculas', 
                value: strength.hasLowercase, 
                description: 'Caracteres de a a z',
                count: password.match(/[a-z]/g)?.length || 0,
                color: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-400',
                borderColor: 'border-blue-300 dark:border-blue-800'
              },
              { 
                label: 'Letras Maiúsculas', 
                value: strength.hasUppercase, 
                description: 'Caracteres de A a Z',
                count: password.match(/[A-Z]/g)?.length || 0,
                color: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-400',
                borderColor: 'border-indigo-300 dark:border-indigo-800'
              },
              { 
                label: 'Números', 
                value: strength.hasNumbers, 
                description: 'Dígitos de 0 a 9',
                count: password.match(/\d/g)?.length || 0,
                color: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-400',
                borderColor: 'border-emerald-300 dark:border-emerald-800'
              },
              { 
                label: 'Símbolos', 
                value: strength.hasSymbols, 
                description: 'Caracteres especiais',
                count: password.match(/[^A-Za-z0-9]/g)?.length || 0,
                color: 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-400',
                borderColor: 'border-amber-300 dark:border-amber-800'
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-4 bg-slate-50/80 dark:bg-slate-800/30 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-700/50 transition-colors border ${item.value ? item.borderColor : 'border-transparent'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} border border-slate-200 dark:border-slate-700`}>
                    <div className="text-center">
                      <div className="font-bold text-lg">{item.count}</div>
                      <div className="text-xs opacity-75">chars</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-800 dark:text-slate-200">{item.label}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{item.description}</div>
                  </div>
                </div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border ${
                  item.value 
                    ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-500 border-slate-300 dark:border-slate-600'
                }`}>
                  {item.value ? <Check size={18} /> : <X size={18} />}
                </div>
              </div>
            ))}
          </div>
          
          {/* Total de caracteres */}
          <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-800 dark:text-white">Total de Caracteres</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Todos os tipos combinados</div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
                {password.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTÕES NA PARTE INFERIOR */}
      <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-700">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={generateNewPassword}
            disabled={isGenerateDisabled || isGenerating}
            className={`flex-1 max-w-md sm:max-w-none flex items-center justify-center gap-3 text-lg py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isGenerateDisabled || isGenerating
                ? 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed border border-slate-300 dark:border-slate-600'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 text-white shadow-lg hover:shadow-xl border border-indigo-700 dark:border-indigo-800'
            } ${isGenerating ? 'animate-pulse' : ''}`}
          >
            {isGenerating ? (
              <>
                <RefreshCw size={22} className="animate-spin" />
                Gerando...
              </>
            ) : (
              <>
                <RefreshCw size={22} />
                Gerar Nova Senha
              </>
            )}
          </button>
          
          <button
            onClick={resetToRecommended}
            className="flex-1 max-w-md sm:max-w-none flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-medium transition-all duration-200 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 dark:from-slate-800 dark:to-slate-900 dark:hover:from-slate-700 dark:hover:to-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 shadow hover:shadow-md"
          >
            <Shield size={20} />
            Configurações Recomendadas
          </button>
        </div>
        
        {/* Indicador de segurança */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-full border border-emerald-200 dark:border-emerald-800 backdrop-blur-sm">
            <Shield size={16} className="text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm text-emerald-700 dark:text-emerald-300">
              🔒 Suas senhas são geradas localmente e nunca são enviadas para servidores
            </span>
          </div>
        </div>
      </div>

      {/* Estilos para o slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.2);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
        }
        
        .dark .slider::-webkit-slider-thumb {
          border: 3px solid #1e293b;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.2);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .dark .slider::-moz-range-thumb {
          border: 3px solid #1e293b;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
        }
        
        /* Melhorar contraste e acessibilidade */
        @media (prefers-contrast: high) {
          .slider::-webkit-slider-thumb {
            border: 3px solid #000;
          }
          
          .dark .slider::-webkit-slider-thumb {
            border: 3px solid #fff;
          }
        }
      `}</style>
    </div>
  );
}