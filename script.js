fetch('data.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('hero-name').innerHTML = `Hi, I'm <span>${data.profile.name}</span>`;
    document.getElementById('hero-role').textContent = data.profile.role;
    document.getElementById('hero-description').textContent = data.profile.description;
    document.getElementById('hero-button').href = "#projects";
  })
  .catch(err => console.error("Error loading data.json:", err));
