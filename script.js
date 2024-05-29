function gerarCartela() {
    const username = document.getElementById('username').value;
    const playerInfo = document.getElementById('player-info');
    const bingoCards = document.getElementById('bingo-cards');
    
    const bingoCard = document.createElement('div');
    bingoCard.classList.add('bingo-card');
    const cardContent = `
      <h2>${username}</h2>
      <p>Bingo</p>
      <div class="bingo-grid">
        ${gerarNumerosCartela().join('')}
      </div>
    `;
    bingoCard.innerHTML = cardContent;
    bingoCards.appendChild(bingoCard);
  }
  
  function gerarNumerosCartela() {
    const numeros = Array.from({length: 16}, (_, i) => i + 1); // Array de 1 a 16
    const shuffledNumeros = shuffleArray(numeros);
    const cells = shuffledNumeros.map(numero => `<div class="bingo-cell">${numero}</div>`);
    return cells;
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  
  