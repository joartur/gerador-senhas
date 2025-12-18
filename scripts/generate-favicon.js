// scripts/generate-favicon.js
const { createCanvas } = require('canvas');
const fs = require('fs');

const canvas = createCanvas(64, 64);
const ctx = canvas.getContext('2d');

// Fundo gradiente
const gradient = ctx.createLinearGradient(0, 0, 64, 64);
gradient.addColorStop(0, '#3b82f6');
gradient.addColorStop(1, '#8b5cf6');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 64, 64);

// Cadeado
ctx.fillStyle = '#ffffff';
ctx.beginPath();
ctx.roundRect(16, 24, 32, 24, 8);
ctx.fill();

ctx.beginPath();
ctx.arc(32, 30, 8, 0, Math.PI * 2);
ctx.fill();

// Salvar como PNG (para depois converter)
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('public/favicon.png', buffer);

console.log('Favicon PNG criado em public/favicon.png');