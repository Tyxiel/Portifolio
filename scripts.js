// Espera o DOM carregar completamente para garantir que todos os elementos existam
document.addEventListener("DOMContentLoaded", () => {
  // --- Script para atualizar o link ativo da navegação na rolagem ---

  const sections = document.querySelectorAll(
    "#welcome-section, #projects, #skills, #contact"
  );

  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  const navbar = document.getElementById("navbar");
  const navbarHeight = navbar ? navbar.offsetHeight : 60;

  function updateActiveLink() {
    const scrollPos = window.scrollY + navbarHeight + 1;

    let currentSectionId = null;

    sections.forEach((section) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          currentSectionId = section.id;
        }
      }
    });

    if (
      currentSectionId === null &&
      sections.length > 0 &&
      window.scrollY < sections[0].offsetTop + navbarHeight
    ) {
      currentSectionId = sections[0].id;
    }

    navLinks.forEach((link) => {
      const linkHref = link.getAttribute("href");
      if (linkHref && linkHref.startsWith("#")) {
        const targetId = linkHref.substring(1);

        if (targetId === currentSectionId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);

  updateActiveLink();

  // --- Fim do Script de rolagem ---

  // --- Script para atualizar o ano no rodapé (Mantido) ---
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  // --- Fim do Script do rodapé ---
}); // Fim do DOMContentLoaded

// --- Script para animar barras de progresso ao entrar na tela ---

const skillsSection = document.getElementById("skills");
const progressBars = document.querySelectorAll(".progress-bar-fill");

// Verifica se a seção de habilidades e as barras de progresso existem
if (skillsSection && progressBars.length > 0) {
    const animateProgressBars = (entries, observer) => {
        entries.forEach(entry => {
            // Se a seção de habilidades estiver visível
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const level = bar.getAttribute("data-level");
                    if (level) {
                        // Define a largura para o valor especificado no data-level
                        bar.style.width = level;
                    }
                });
                // Opcional: Desconectar o observer após a animação para que só ocorra uma vez
                // observer.unobserve(entry.target);
            } else {
                 // Opcional: Resetar a largura quando a seção sair da tela
                 // progressBars.forEach(bar => {
                 //     bar.style.width = '0%';
                 // });
            }
        });
    };

    // Cria um novo Intersection Observer
    // rootMargin: "-100px 0px -100px 0px" faz com que a animação dispare quando a seção
    // estiver 100px para dentro da viewport (em cima e embaixo), evitando disparar
    // prematuramente ou tardiamente. Ajuste conforme necessário.
    const observer = new IntersectionObserver(animateProgressBars, {
        root: null, // Observa a viewport
        rootMargin: "0px", // Margem ao redor do root (viewport)
        threshold: 0.1 // A animação dispara quando 10% da seção está visível
    });

    // Observa a seção de habilidades
    observer.observe(skillsSection);
}

// --- Fim do Script de animação das barras ---

// --- Script para Menu Hambúrguer Mobile ---

const hamburgerButton = document.querySelector(".hamburger-menu");
const subNavigation = document.querySelector(".sub-navigation");
const subNavLinks = document.querySelectorAll(".sub-navigation a");
const hamburgerIcon = hamburgerButton ? hamburgerButton.querySelector("i") : null;
const navbar = document.getElementById("navbar");
// Recalcula a altura da navbar para rolagem suave
const navbarHeight = navbar ? navbar.offsetHeight : 60;


// Função para alternar o estado do menu mobile e o ícone do hambúrguer
function toggleMobileMenu() {
    if (subNavigation && hamburgerButton) {
        subNavigation.classList.toggle("open");
        hamburgerButton.classList.toggle("open");

        // Alterna entre ícones de menu e fechar
        if (hamburgerIcon) {
            if (subNavigation.classList.contains("open")) {
                hamburgerIcon.classList.remove("bx-menu");
                hamburgerIcon.classList.add("bx-x");
                 // Adiciona ou remove overflow hidden no body para evitar scroll indesejado no mobile
                document.body.style.overflowY = 'hidden';

            } else {
                hamburgerIcon.classList.remove("bx-x");
                hamburgerIcon.classList.add("bx-menu");
                document.body.style.overflowY = ''; // Restaura scroll
            }
        }
    }
}

// Adiciona o evento de clique no botão hambúrguer
if (hamburgerButton) {
    hamburgerButton.addEventListener("click", toggleMobileMenu);
}

// Adiciona evento de clique nos links do menu mobile
if (subNavLinks.length > 0) {
    subNavLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        // Verifica se é um link âncora (começa com #)
        if (linkHref && linkHref.startsWith("#")) {
             link.addEventListener("click", function(e) {
                e.preventDefault(); // Previne o comportamento padrão do link

                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Calcula a posição de rolagem considerando a altura da navbar
                    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - navbarHeight; // Subtrai a altura da navbar

                    // Realiza a rolagem suave
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });

                    // Fecha o menu mobile após o clique
                    toggleMobileMenu();
                }
            });
        } else {
             // Para links externos ou para outras páginas, apenas fecha o menu
             link.addEventListener("click", toggleMobileMenu);
        }
    });
}

 // Opcional: Fecha o menu mobile ao redimensionar a janela (para desktop)
 window.addEventListener('resize', () => {
     if (window.innerWidth > 768 && subNavigation && subNavigation.classList.contains('open')) {
         toggleMobileMenu();
     }
     // Atualiza a altura da navbar em caso de redimensionamento que mude a altura
     navbarHeight = navbar ? navbar.offsetHeight : 60;
 });


// --- Fim do Script de Menu Hambúrguer Mobile ---
