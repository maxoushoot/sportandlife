function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

document.addEventListener('DOMContentLoaded', () => {
  const id = getParam('id');
  fetch('data/lieux.json')
    .then(res => res.json())
    .then(lieux => {
      const lieu = lieux.find(l => String(l.id) === id);
      if (lieu) {
        document.getElementById('nom').textContent = lieu.nom;
        document.getElementById('description').textContent = lieu.description;
        const link = `https://www.google.com/maps/search/?api=1&query=${lieu.lat},${lieu.lon}`;
        const map = document.getElementById('map');
        map.href = link;
      } else {
        document.querySelector('.container').innerHTML = '<p>Lieu non trouvé.</p>';
      }
    })
    .catch(err => {
      document.querySelector('.container').textContent = 'Erreur de chargement.';
      console.error(err);
    });
});
