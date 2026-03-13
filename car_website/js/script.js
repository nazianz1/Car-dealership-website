function searchCars() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const cards = document.querySelectorAll('.car-card');

  let anyVisible = false;

  cards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    if (name.includes(query)) {
      card.style.display = 'block';
      anyVisible = true;
    } else {
      card.style.display = 'none';
    }
  });

  // Scroll to inventory section automatically
  if (query.length > 0) {
    document.getElementById('inventory').scrollIntoView({ behavior: 'smooth' });
  }
}
console.log("Website loaded successfully");