// script.js

// Comportamento de clique nos botões com efeito rápido de escala

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('mousedown', () => {
    btn.style.transform = 'scale(0.95)';
  });
  btn.addEventListener('mouseup', () => {
    btn.style.transform = 'scale(1)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});

// Adicionar foco e hover acessível para cards de filmes
document.querySelectorAll('.movie-card').forEach(card => {
  card.setAttribute('tabindex', '0');
});

