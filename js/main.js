document.addEventListener('DOMContentLoaded', () => {
  fetch('data/lieux.json')
    .then(res => res.json())
    .then(lieux => {
      const container = document.getElementById('lieux');
      lieux.forEach(lieu => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h2>${lieu.nom}</h2>
          <p>${lieu.descriptionCourte}</p>
          <a class="button" href="lieu.html?id=${lieu.id}">Voir plus</a>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      document.getElementById('lieux').textContent = 'Erreur de chargement.';
      console.error(err);
    });
});
