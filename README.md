# 🔐 Gerador de Senhas Seguras - Next.js 14

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-blue)
![React](https://img.shields.io/badge/React-18-blue)
![GitHub stars](https://img.shields.io/github/stars/seu-usuario/gerador-senhas?style=social)

![Preview](https://img.shields.io/badge/Preview-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-blue)
![React](https://img.shields.io/badge/React-18-blue)
![License](https://img.shields.io/badge/License-MIT-green)

Um gerador de senhas moderno, seguro e responsivo desenvolvido com Next.js 14 e Tailwind CSS, seguindo as melhores práticas de UI/UX e segurança.

![Preview da Aplicação](https://via.placeholder.com/800x450/3b82f6/ffffff?text=Gerador+de+Senhas+Seguras)

## ✨ Funcionalidades

### 🔧 Geração Avançada
- ✅ **Comprimento ajustável** (4-32 caracteres) com slider intuitivo
- ✅ **Seleção de tipos de caracteres**:
  - Letras minúsculas (a-z)
  - Letras maiúsculas (A-Z)
  - Números (0-9)
  - Símbolos especiais (!@#$%^&*)
- ✅ **Geração em tempo real** com feedback visual
- ✅ **Configurações recomendadas** com um clique

### 📊 Análise de Segurança
- ✅ **Força da senha** em tempo real com pontuação 0-100
- ✅ **Classificação visual** (Muito Fraca → Muito Forte)
- ✅ **Estimativa de tempo** para quebrar a senha
- ✅ **Resumo detalhado** dos caracteres utilizados
- ✅ **Entropia calculada** em bits

### 🎨 Interface Moderna
- ✅ **Tema claro/escuro** com toggle suave
- ✅ **Design responsivo** para todos os dispositivos
- ✅ **Animações suaves** e transições
- ✅ **Feedback visual** imediato
- ✅ **Cores otimizadas** para acessibilidade

### 🛠️ Utilidades
- ✅ **Copiar para clipboard** com confirmação visual
- ✅ **Regeneração rápida** com um clique
- ✅ **Dicas de segurança** contextualizadas
- ✅ **Interface intuitiva** e amigável

## 🚀 Demonstração

**Visite a aplicação online:** [https://gerador-senhas.vercel.app](https://gerador-senhas.vercel.app) *(link de exemplo)*

### Capturas de Tela

| Modo Claro | Modo Escuro |
|------------|-------------|
| ![Modo Claro](https://via.placeholder.com/400x600/f8fafc/0f172a?text=Modo+Claro) | ![Modo Escuro](https://via.placeholder.com/400x600/0f172a/f8fafc?text=Modo+Escuro) |

## 🛠️ Tecnologias Utilizadas

- **Frontend Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) + CSS Modules
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Type Checking**: TypeScript (opcional)
- **Hospedagem**: Vercel (recomendado)

## 📦 Instalação Local

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Git

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/joartur/gerador-senhas.git
cd gerador-senhas
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure o ambiente** (opcional)
```bash
# Crie um arquivo .env.local se necessário
cp .env.example .env.local
```

4. **Execute em modo desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**
```
Abra http://localhost:3000 no seu navegador
```

## 🏗️ Estrutura do Projeto

```
gerador-senhas/
├── app/                    # Páginas e layouts (App Router)
│   ├── layout.js          # Layout principal com tema
│   ├── page.js            # Página inicial
│   ├── manifest.js        # Configuração PWA
│   └── robots.js          # Configuração SEO
├── components/            # Componentes React
│   ├── PasswordGenerator.js # Componente principal
│   ├── PasswordStrengthMeter.js # Analisador de força
│   ├── CopyButton.js      # Botão de copiar
│   ├── ThemeProvider.js   # Gerenciador de tema
│   ├── ThemeToggle.js     # Toggle tema claro/escuro
│   └── index.js          # Export dos componentes
├── lib/                  # Utilitários e lógica
│   ├── passwordUtils.js  # Funções de geração e análise
│   └── index.js          # Export das funções
├── styles/               # Estilos globais
│   └── globals.css      # Estilos Tailwind e customizados
├── public/               # Arquivos estáticos
│   ├── favicon.ico      # Ícone do site
│   └── icon.png         # Ícone para PWA
├── tailwind.config.js    # Configuração do Tailwind
├── next.config.js       # Configuração do Next.js
├── postcss.config.js    # Configuração do PostCSS
├── package.json         # Dependências e scripts
└── README.md           # Documentação
```

## 📖 Como Usar

### 1. Gerar uma Senha
1. Ajuste o **comprimento** usando o slider (12-16 caracteres recomendados)
2. Selecione os **tipos de caracteres** desejados
3. Clique em **"Gerar Nova Senha"** ou aguarde a geração automática

### 2. Analisar a Segurança
- Observe a **barra de força** que atualiza em tempo real
- Verifique o **tempo estimado** para quebrar a senha
- Analise o **resumo de caracteres** utilizado

### 3. Copiar e Usar
- Clique no botão **"Copiar Senha"** para copiar para a área de transferência
- Use a senha gerada em seus cadastros
- **Importante**: Nunca reutilize senhas entre diferentes serviços

## 🔒 Segurança e Privacidade

### 🛡️ Garantias de Segurança
- ✅ **Geração local**: Tudo acontece no seu navegador
- ✅ **Sem tracking**: Nenhum dado é enviado para servidores
- ✅ **Open source**: Código aberto para auditoria
- ✅ **Algoritmo seguro**: Geração criptograficamente segura

### 📝 Política de Privacidade
- **Zero coleta de dados**: Não coletamos nenhuma informação
- **Sem cookies**: Não utilizamos cookies de rastreamento
- **Totalmente offline**: Funciona sem conexão à internet
- **Código auditável**: Todo o código está disponível publicamente

## 🎨 Design System

### Cores (Modo Claro)
- **Primária**: Indigo 600 → Purple 600 (gradiente)
- **Neutras**: Slate 50-900 (escala)
- **Sucesso**: Emerald 500-600
- **Aviso**: Amber 500-600
- **Erro**: Rose 500-600

### Tipografia
- **Fonte principal**: Inter (Google Fonts)
- **Fonte monoespaçada**: Fira Code (para senhas)
- **Hierarquia**: 
  - Títulos: 2.5rem (bold)
  - Subtítulos: 1.25rem (semibold)
  - Corpo: 1rem (regular)
  - Legenda: 0.875rem (regular)

### Componentes
- **Cards**: Borda sutil, sombra suave, cantos arredondados
- **Botões**: Gradientes, hover states, estados de loading
- **Inputs**: Bordas claras, focus rings, placeholder sutil
- **Sliders**: Thumb customizado, track colorido

## 📱 Responsividade

| Dispositivo | Layout | Características |
|-------------|---------|-----------------|
| **Mobile** (< 640px) | Coluna única | Toque otimizado, textos ajustados |
| **Tablet** (640px - 1024px) | Grid adaptativo | Layout flexível, cards ajustados |
| **Desktop** (> 1024px) | Grid de 2-3 colunas | Espaçamento amplo, sidebars |

## 🧪 Testes

### Testes Realizados
1. ✅ **Cross-browser**: Chrome, Firefox, Safari, Edge
2. ✅ **Dispositivos**: Mobile, Tablet, Desktop
3. ✅ **Acessibilidade**: Navegação por teclado, leitores de tela
4. ✅ **Performance**: Lighthouse score > 90
5. ✅ **Segurança**: Análise de dependências

### Executar Testes Locais
```bash
# Testes de linting
npm run lint

# Build de produção
npm run build

# Iniciar produção
npm start
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estes passos:

1. **Fork** o projeto
2. **Crie uma branch** para sua feature (`git checkout -b feature/nova-feature`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. **Push** para a branch (`git push origin feature/nova-feature`)
5. **Abra um Pull Request**

### Padrões de Código
- Siga o ESLint configurado
- Use TypeScript quando possível
- Mantenha testes atualizados
- Documente novas funcionalidades

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

**Texto da Licença MIT:**

MIT License

Copyright (c) 2024 [JOAMERSON VARELA]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) pelo framework incrível
- [Tailwind CSS](https://tailwindcss.com/) pela estilização utilitária
- [Lucide](https://lucide.dev/) pelos ícones de qualidade
- Comunidade open source por todas as contribuições

## 📞 Suporte

### Problemas Conhecidos
- Nenhum problema conhecido atualmente

### Reportar Bugs
1. Verifique se o bug já foi reportado nas [Issues](https://github.com/seu-usuario/gerador-senhas/issues)
2. Crie uma nova issue com:
   - Descrição detalhada
   - Passos para reproduzir
   - Comportamento esperado vs atual
   - Screenshots (se aplicável)

### Sugestões
- Use a seção de [Discussions](https://github.com/seu-usuario/gerador-senhas/discussions)
- Descreva a feature sugerida
- Explique o benefício para os usuários

## 🌟 Estrelas

Se este projeto foi útil para você, considere dar uma estrela no GitHub!

[![Star History Chart](https://api.star-history.com/svg?repos=seu-usuario/gerador-senhas&type=Date)](https://star-history.com/#seu-usuario/gerador-senhas&Date)

---

**Desenvolvido com ❤️ para a comunidade de segurança digital**

> ⚠️ **Aviso**: Este gerador produz senhas fortes, mas a segurança completa depende de práticas adequadas como uso de gerenciadores de senhas e autenticação de dois fatores.
