'use client';

export default function PasswordStrengthMeter({ strength }) {
  // Garantir que strength tenha os dados necessários
  const { 
    score = 0, 
    strength: strengthText = 'Muito Fraca', 
    color = 'red', 
    feedback = []
  } = strength || {};
  
  const getColorClasses = () => {
    switch (color) {
      case 'red': return 'from-red-500 to-red-600';
      case 'orange': return 'from-orange-500 to-amber-600';
      case 'yellow': return 'from-yellow-500 to-yellow-600';
      case 'green': return 'from-green-500 to-emerald-600';
      case 'emerald': return 'from-emerald-500 to-teal-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getSegmentWidth = () => {
    if (score < 30) return '20%';
    if (score < 50) return '40%';
    if (score < 70) return '60%';
    if (score < 85) return '80%';
    return '100%';
  };

  // Converter feedback para array se não for
  const feedbackArray = Array.isArray(feedback) ? feedback : [feedback].filter(Boolean);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Força da Senha</h3>
        <span className={`font-bold text-xl bg-gradient-to-r ${getColorClasses()} bg-clip-text text-transparent`}>
          {strengthText}
        </span>
      </div>
      
      {/* Barra de progresso */}
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${getColorClasses()} transition-all duration-500 ease-out`}
          style={{ width: getSegmentWidth() }}
        />
      </div>
      
      {/* Score numérico */}
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Pontuação:</span>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">{score}/100</span>
          <div className="text-sm px-2 py-1 rounded bg-gray-700">
            {Math.round((score / 100) * 5)}/5 ★
          </div>
        </div>
      </div>
      
      {/* Feedback */}
      {feedbackArray.length > 0 && (
        <div className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <h4 className="font-medium mb-2 text-gray-300">Recomendações:</h4>
          <ul className="space-y-1">
            {feedbackArray.map((item, index) => (
              <li key={index} className="flex items-center text-sm text-gray-300">
                <span className="mr-2">
                  {typeof item === 'string' && (item.includes('segura') || item.includes('boa') || item.includes('bom')) ? '✅' : '💡'}
                </span>
                {typeof item === 'string' ? item : JSON.stringify(item)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}