'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyButton({ text, disabled = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text || disabled) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      
      // Resetar após 2 segundos
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      disabled={!text || disabled}
      className={`
        flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium
        transition-all duration-200 transform hover:scale-[1.02]
        ${!text || disabled
          ? 'bg-gray-700 cursor-not-allowed text-gray-400'
          : copied
            ? 'bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg'
            : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border border-gray-600 hover:border-gray-500'
        }
      `}
      aria-label={copied ? "Senha copiada" : "Copiar senha"}
    >
      {copied ? (
        <>
          <Check size={20} />
          <span>Copiado!</span>
        </>
      ) : (
        <>
          <Copy size={20} />
          <span>Copiar Senha</span>
        </>
      )}
    </button>
  );
}