/**
 * Utilitários para geração e análise de senhas
 */

// Caracteres disponíveis para geração
const CHARACTER_SETS = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

/**
 * Gera uma senha aleatória com base nos critérios fornecidos
 */
export function generatePassword(options) {
  const {
    length = 12,
    includeLowercase = true,
    includeUppercase = true,
    includeNumbers = true,
    includeSymbols = true
  } = options;

  // Validar que pelo menos um conjunto está selecionado
  const selectedSets = [];
  if (includeLowercase) selectedSets.push(CHARACTER_SETS.lowercase);
  if (includeUppercase) selectedSets.push(CHARACTER_SETS.uppercase);
  if (includeNumbers) selectedSets.push(CHARACTER_SETS.numbers);
  if (includeSymbols) selectedSets.push(CHARACTER_SETS.symbols);

  if (selectedSets.length === 0) {
    return '';
  }

  // Garantir que pelo menos um caractere de cada conjunto selecionado seja incluído
  let password = '';
  selectedSets.forEach(set => {
    password += set[Math.floor(Math.random() * set.length)];
  });

  // Combinar todos os caracteres disponíveis
  const allCharacters = selectedSets.join('');

  // Completar o restante da senha
  for (let i = password.length; i < length; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  // Embaralhar a senha para evitar padrões
  return password.split('').sort(() => Math.random() - 0.5).join('');
}

/**
 * Calcula a força de uma senha
 * Retorna: { score: 0-100, strength: 'weak'|'fair'|'good'|'strong'|'very-strong' }
 */
export function calculatePasswordStrength(password) {
  if (!password) return { score: 0, strength: 'weak', feedback: 'Digite uma senha' };

  let score = 0;
  const length = password.length;
  const feedback = [];

  // Pontuação baseada no comprimento
  if (length >= 8) score += 10;
  if (length >= 12) score += 15;
  if (length >= 16) score += 20;
  if (length >= 20) score += 10;

  // Verificar tipos de caracteres
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSymbols = /[^A-Za-z0-9]/.test(password);

  if (hasLowercase) score += 10;
  if (hasUppercase) score += 10;
  if (hasNumbers) score += 10;
  if (hasSymbols) score += 15;

  // Bônus para combinação de diferentes tipos
  const characterTypes = [hasLowercase, hasUppercase, hasNumbers, hasSymbols].filter(Boolean).length;
  score += (characterTypes - 1) * 10;

  // Penalizar padrões simples
  if (/^[a-z]+$/.test(password) || /^[A-Z]+$/.test(password) || /^\d+$/.test(password)) {
    score -= 20;
    feedback.push('Use diferentes tipos de caracteres');
  }

  // Verificar sequências comuns
  const commonPatterns = ['123456', 'password', 'qwerty', 'abcdef', '000000'];
  if (commonPatterns.some(pattern => password.toLowerCase().includes(pattern))) {
    score -= 30;
    feedback.push('Evite padrões comuns');
  }

  // Limitar score entre 0 e 100
  score = Math.max(0, Math.min(100, score));

  // Determinar classificação de força
  let strength, color;
  if (score < 30) {
    strength = 'Muito Fraca';
    color = 'red';
  } else if (score < 50) {
    strength = 'Fraca';
    color = 'orange';
  } else if (score < 70) {
    strength = 'Boa';
    color = 'yellow';
  } else if (score < 85) {
    strength = 'Forte';
    color = 'green';
  } else {
    strength = 'Muito Forte';
    color = 'emerald';
  }

  // Sugestões de melhoria
  if (feedback.length === 0) {
    if (score < 70) {
      if (length < 12) feedback.push('Aumente o comprimento da senha');
      if (!hasSymbols) feedback.push('Adicione caracteres especiais');
      if (!hasNumbers) feedback.push('Inclua números');
      if (!hasUppercase) feedback.push('Use letras maiúsculas');
    } else {
      feedback.push('Sua senha está segura!');
    }
  }

  return { 
    score, 
    strength, 
    color,
    feedback: Array.isArray(feedback) && feedback.length > 0 ? feedback : ['Sua senha é boa!'],
    hasLowercase,
    hasUppercase,
    hasNumbers,
    hasSymbols
  };
}

/**
 * Estima o tempo necessário para quebrar a senha
 */
export function estimateCrackingTime(password) {
  const { score } = calculatePasswordStrength(password);
  
  if (!password || password.length < 4) return 'Instantâneo';
  
  // Estimativa muito simplificada baseada no score
  const combinations = Math.pow(94, password.length); // 94 caracteres possíveis
  const guessesPerSecond = 1e9; // 1 bilhão de tentativas por segundo (estimativa para um bom ataque)
  const seconds = combinations / guessesPerSecond;
  
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const years = days / 365;
  const centuries = years / 100;
  
  if (centuries > 1) return `+${Math.floor(centuries)} séculos`;
  if (years > 1) return `+${Math.floor(years)} anos`;
  if (days > 1) return `+${Math.floor(days)} dias`;
  if (hours > 1) return `+${Math.floor(hours)} horas`;
  if (minutes > 1) return `+${Math.floor(minutes)} minutos`;
  
  return `${Math.floor(seconds)} segundos`;
}