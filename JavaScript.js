document.querySelectorAll('nav a').forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();
const target = document.querySelector(link.getAttribute('href'));
  if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  });
});

const botao = document.getElementById('btn-recolher');
const sidebar = document.querySelector('.sidebar');

botao.addEventListener('click', () => {
    sidebar.classList.toggle('recolhido');
});

    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('nav a');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          menuLinks.forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(section => observer.observe(section));

    const cards = document.querySelectorAll('.card');
    const cardObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.6s ease';
      cardObserver.observe(card);
    });

const btnTopo = document.getElementById('btn-topo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.classList.add('show');
    } else {
        btnTopo.classList.remove('show');
    }
});