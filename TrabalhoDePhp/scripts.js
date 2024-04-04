const menuItemsContainer = document.querySelector('.menu-items');

const pratos = [
  { nome: 'Prato 1', descricao: 'Descrição do prato 1.', preco: 'R$ 15,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 2', descricao: 'Descrição do prato 2.', preco: 'R$ 20,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 3', descricao: 'Descrição do prato 3.', preco: 'R$ 25,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 4', descricao: 'Descrição do prato 4.', preco: 'R$ 18,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 5', descricao: 'Descrição do prato 5.', preco: 'R$ 22,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 6', descricao: 'Descrição do prato 6.', preco: 'R$ 17,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 7', descricao: 'Descrição do prato 7.', preco: 'R$ 21,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 8', descricao: 'Descrição do prato 8.', preco: 'R$ 19,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 9', descricao: 'Descrição do prato 9.', preco: 'R$ 24,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 10', descricao: 'Descrição do prato 10.', preco: 'R$ 16,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 11', descricao: 'Descrição do prato 11.', preco: 'R$ 27,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 12', descricao: 'Descrição do prato 12.', preco: 'R$ 30,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 13', descricao: 'Descrição do prato 13.', preco: 'R$ 23,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 14', descricao: 'Descrição do prato 14.', preco: 'R$ 28,00', imagem: 'https://via.placeholder.com/150' },
  { nome: 'Prato 15', descricao: 'Descrição do prato 15.', preco: 'R$ 26,00', imagem: 'https://via.placeholder.com/150' }
];

pratos.forEach(prato => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  menuItem.innerHTML = `
    <img src="${prato.imagem}" alt="${prato.nome}">
    <h2>${prato.nome}</h2>
    <p>${prato.descricao}</p>
    <span>${prato.preco}</span>
  `;

  menuItemsContainer.appendChild(menuItem);
});
