// Espera o DOM carregar completamente para garantir que todos os elementos existam
document.addEventListener("DOMContentLoaded", () => {
  // --- Dados dos Certificados ---
  const certificatesData = [
    // ... (seus dados de certificados permanecem os mesmos) ...
    {
      title: "Git - Repositório de código",
      issuer: "Vivae",
      date: "Emitido em: Dez 2024",
      imageUrlFull:
        "https://media.licdn.com/dms/image/v2/D562DAQEM5XZ0HMGyEA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1733748501463?e=1747854000&v=beta&t=GMjyaKClk5mjnjRxNzKWret4OaUd9uRX6w5umIxFQ28",
      imageUrlThumbnail:
        "https://media.licdn.com/dms/image/v2/D562DAQEM5XZ0HMGyEA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1733748501463?e=1747854000&v=beta&t=GMjyaKClk5mjnjRxNzKWret4OaUd9uRX6w5umIxFQ28",
      altText: "Miniatura do certificado: Git - Repositório de código",
      verificationLink: null,
      credentialUrl: null,
      extraInfo: [],
    },
    {
      title: "Metodologias Ágeis",
      issuer: "Vivae",
      date: "Emitido em: Dez 2024",
      imageUrlFull:
        "https://media.licdn.com/dms/image/v2/D562DAQE8ew8fb5MsEg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734189870479?e=1747854000&v=beta&t=oO0lkUmyUvyzUQ0ukq93zVebZIQzZJmJrfYyWKLKZYM",
      imageUrlThumbnail:
        "https://media.licdn.com/dms/image/v2/D562DAQE8ew8fb5MsEg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734189870479?e=1747854000&v=beta&t=oO0lkUmyUvyzUQ0ukq93zVebZIQzZJmJrfYyWKLKZYM",
      altText: "Miniatura do certificado: Metodologias Ágeis",
      verificationLink: null,
      credentialUrl: null,
      extraInfo: [],
    },
    {
      title: "Design UI e UX",
      issuer: "Serviço Nacional de Aprendizagem Industrial",
      date: "Emitido em: Set 2024",
      imageUrlFull:
        "https://media.licdn.com/dms/image/v2/D562DAQHGTsCGBhumuQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1729618148142?e=1747854000&v=beta&t=CS6g3FKqVVTeuJ67RUh4bJm3xSbn9iz4iWIBKhELuA0",
      imageUrlThumbnail:
        "https://media.licdn.com/dms/image/v2/D562DAQHGTsCGBhumuQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1729618148142?e=1747854000&v=beta&t=CS6g3FKqVVTeuJ67RUh4bJm3xSbn9iz4iWIBKhELuA0",
      altText: "Miniatura do certificado: Design UI e UX",
      verificationLink: null,
      credentialUrl: null,
      extraInfo: [],
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Emitido em: Set 2024",
      imageUrlFull:
        "https://i.ibb.co/Xrtckgbt/Captura-de-tela-2025-05-15-071254.png",
      imageUrlThumbnail:
        "https://i.ibb.co/Xrtckgbt/Captura-de-tela-2025-05-15-071254.png",
      altText: "Miniatura do certificado: Responsive Web Design (freeCodeCamp)",
      credentialUrl:
        "https://www.freecodecamp.org/certification/Tyxiel/responsive-web-design",
      verificationLink: null,
      extraInfo: [],
    },
    {
      title: "Google Cloud Computing Foundations Certificate",
      issuer: "Google",
      date: "Emitido em: Jun 2024",
      imageUrlFull:
        "https://i.ibb.co/QwTPJT1/Captura-de-tela-2025-05-15-073027.png",
      imageUrlThumbnail:
        "https://i.ibb.co/QwTPJT1/Captura-de-tela-2025-05-15-073027.png",
      altText:
        "Miniatura do certificado: Google Cloud Computing Foundations (Google)",
      credentialUrl:
        "https://www.credly.com/badges/3c57c8c7-6045-47b8-9d1e-63df42b0a4f2/linked_in_profile",
      verificationLink: null,
      extraInfo: [],
    },
    {
      title: "Prototipagem de Maquetes Físicas e Digitais para Projetos",
      issuer: "Serviço Nacional de Aprendizagem Industrial",
      date: "Emitido em: Ago 2023",
      imageUrlFull:
        "https://media.licdn.com/dms/image/v2/D562DAQEW2_QOvd-xBQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1729617642304?e=1747854000&v=beta&t=Zz3P6MX7Zj25DY34_9BYoVn1Ehjy3O6ZwgsVW_2aQ9M",
      imageUrlThumbnail:
        "https://media.licdn.com/dms/image/v2/D562DAQEW2_QOvd-xBQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1729617642304?e=1747854000&v=beta&t=Zz3P6MX7Zj25DY34_9BYoVn1Ehjy3O6ZwgsVW_2aQ9M",
      altText: "Miniatura do certificado: Prototipagem",
      verificationLink: null,
      credentialUrl: null,
      extraInfo: [],
    },
  ];

  // --- Função para Gerar o HTML de um Item de Certificado (Estrutura Unificada) ---
  function createCertificateHtml(cert) {
    let itemHtml = `
      <div class="certificate-item">
          <h4>${cert.title}</h4>
          <p class="certificate-issuer">${cert.issuer}</p>
          <p class="certificate-date">${cert.date}</p>
    `;

    if (
      cert.imageUrlFull &&
      cert.imageUrlThumbnail &&
      cert.altText !== undefined
    ) {
      itemHtml += `
            <a href="${cert.imageUrlFull}" class="certificate-thumbnail-link">
                <img src="${cert.imageUrlThumbnail}" alt="${cert.altText}" class="certificate-image" loading="lazy">
            </a>
        `;
    } else {
      console.error("Dados de imagem ausentes para certificado:", cert.title);
      itemHtml += `<p>Imagem do certificado não disponível.</p>`;
    }

    let linksHtml = "";

    if (cert.credentialUrl) {
      linksHtml += `
          <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="certificate-credential-button">
              <i class='bx bx-link-external'></i> Acessar Credencial
          </a>
        `;
    }

    if (cert.verificationLink) {
      linksHtml += `
            <a href="${cert.verificationLink}" target="_blank" rel="noopener noreferrer" class="certificate-verification-link">
                <i class='bx bx-link-external'></i> Ver Certificado
            </a>
        `;
    }

    if (linksHtml) {
      itemHtml += `<div class="certificate-links">${linksHtml}</div>`;
    }

    if (cert.extraInfo && cert.extraInfo.length > 0) {
      cert.extraInfo.forEach((info) => {
        itemHtml += `<p class="certificate-extra-info">${info}</p>`;
      });
    }

    itemHtml += `</div>`;
    return itemHtml;
  }

  const certificatesGrid = document.querySelector(".certificates-grid");

  if (certificatesGrid) {
    let allCertificatesHtml = "";
    certificatesData.forEach((cert) => {
      allCertificatesHtml += createCertificateHtml(cert);
    });
    certificatesGrid.innerHTML = allCertificatesHtml;
  }

  const projectsData = [
    // NOVOS PROJETOS ADICIONADOS AQUI:
    {
      title: "Quentinhas do Grau",
      description:
        "Um website simples que simula uma loja virtual de alimentos (quentinhas), implementando funcionalidades como carrinho de compras e emissão de nota fiscal (simulada). Foco na experiência do usuário e design responsivo.",
      imageUrl:
        "https://i.ibb.co/tPYzg4Cx/Captura-de-tela-2025-05-15-081658.png",
      altText: "Captura de tela do projeto Quentinhas do Grau",
      projectUrl: "https://tyxiel.github.io/Quentinhas-do-Grau/",
      techs: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "HTML Semântico",
        "Design Responsivo",
      ],
    },
    {
      title: "Estufa Automática",
      description:
        "Projeto de uma estufa automatizada com conexão Wi-Fi, utilizando Arduino (MEGA 2560) e ESP32 para controle e monitoramento. O sistema gerencia temperatura (LM35), umidade (DHT11), luminosidade (LDR), e aciona componentes como ventoinha, LEDs, bombas d'água (via relés) e um servo motor, com interação via display LCD e botão.",
      imageUrl: "./img/estufa.jpg", // Imagem placeholder
      altText: "Imagem do projeto Estufa Automática (pendente)",
      projectUrl: "https://github.com/Tyxiel/auto-greenhouse",
      techs: [
        "Arduino (C/C++)",
        "ESP32",
        "Sensores (DHT11, LDR, LM35)",
        "Atuadores (Servo, Relés)",
        "Display LCD",
        "Comunicação Wi-Fi",
        "Eletrônica Embarcada",
        "Prototipagem",
      ],
    },
    // PROJETOS EXISTENTES:
    {
      title: "Monsters Antique",
      description:
        "Este é um projeto de desenvolvimento web de uma loja online fictícia, a Ordem dos Guardiões da Noite. Desenvolvido com HTML5, CSS3 e JavaScript no front-end, e SQL Server e API local no back-end, suportando postagens e login funcional.",
      imageUrl:
        "https://i.ibb.co/HfYDCQKD/Captura-de-tela-2025-05-14-171011.png",
      altText: "Captura de tela do projeto Monsters Antique (Loja Monstro)",
      projectUrl: "https://github.com/gabrielBehling/LojaMonstro",
      techs: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "SQL Server",
        "Back-end",
        "Responsividade",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Tarefa CRUD",
      description:
        "Projeto CRUD (Create, Read, Update, Delete) em arquitetura MVC, desenvolvido com .NET 6.0 (C#) e banco de dados SQL Server. Utiliza DataTables para exibição e Bootstrap para estilização.",
      imageUrl:
        "https://i.ibb.co/SDHWy9HF/Captura-de-tela-2025-05-14-171334.png",
      altText: "Captura de tela do projeto Tarefa CRUD",
      projectUrl: "https://github.com/Tyxiel/TarefaCRUD",
      techs: ["C#", ".NET 6.0", "MVC", "SQL Server", "DataTables", "Bootstrap"],
    },
    {
      title: "App de Clima",
      description:
        "Versão anterior de um app de clima, explorando diferentes abordagens de design e funcionalidades.",
      imageUrl: "https://i.ibb.co/k93dWR9/image.png",
      altText: "Captura de tela do App de Clima Antigo",
      projectUrl: "https://gabrielbehling.github.io/Weather-App/",
      techs: ["HTML", "CSS", "JavaScript", "APIs"],
    },
    {
      title: "Outro App de Clima Simples",
      description:
        "Um aplicativo web que busca e exibe as condições atuais do clima para uma cidade digitada pelo usuário, utilizando uma API de clima pública.",
      imageUrl: "https://i.ibb.co/Qn5cWvc/image.png",
      altText: "Captura de tela do App de Clima Simples",
      projectUrl: "https://tyxiel.github.io/Simple-Weather-App/",
      techs: ["HTML5", "CSS3", "JavaScript", "API REST"],
    },
    {
      title: "Buscador de CEP",
      description:
        "Ferramenta para buscar informações de endereço a partir de um CEP brasileiro, utilizando a API ViaCEP.",
      imageUrl: "https://i.ibb.co/s3sYKFz/image.png",
      altText: "Captura de tela do Buscador de CEP",
      projectUrl: "https://tyxiel.github.io/appViaCep2/",
      techs: ["HTML", "CSS", "JavaScript", "ViaCEP API"],
    },
    {
      title: "Buscador de CNPJ",
      description:
        "Aplicativo web para consultar dados públicos de empresas brasileiras através do CNPJ.",
      imageUrl: "https://i.ibb.co/BZKbf2F/image.png",
      altText: "Captura de tela do Buscador de CNPJ",
      projectUrl: "https://tyxiel.github.io/CNPJSearchApp/",
      techs: ["HTML", "CSS", "JavaScript", "API Pública"],
    },
    {
      title: "Product Landing Page",
      description:
        "Exemplo de página de destino (landing page) para um produto fictício, focando no design responsivo e layout.",
      imageUrl: "https://i.ibb.co/2hS2brm/image.png",
      altText: "Captura de tela da Product Landing Page",
      projectUrl: "https://tyxiel.github.io/Product-Landing-Page/",
      techs: ["HTML", "CSS", "Responsividade"],
    },
    {
      title: "Documentação Simples de Go",
      description:
        "Documentação técnica simples sobre a linguagem de programação Go, demonstrando estrutura e formatação para documentação web.",
      imageUrl: "https://i.ibb.co/2YJPGNS/image.png",
      altText: "Captura de tela da Documentação Simples de Go",
      projectUrl: "https://tyxiel.github.io/Technical-Doc/",
      techs: ["HTML", "CSS"],
    },
  ];

  // --- Função para Gerar o HTML de um Item de Projeto ---
  function createProjectHtml(project) {
    const techsHtml = project.techs
      .map((tech) => `<span>${tech}</span>`)
      .join("");

    return `
            <a
                href="${project.projectUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="project-card"
                aria-label="${project.title} - Ver Projeto"
            >
                <div class="project-content">
                    <img
                        src="${project.imageUrl}"
                        alt="${project.altText}"
                        loading="lazy"
                    />
                    <div class="project-info">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-techs">
                            ${techsHtml}
                        </div>
                    </div>
                </div>
            </a>
        `;
  }

  // --- Renderização dos Projetos na Página ---
  const projectsGrid = document.querySelector(".projects-grid");

  if (projectsGrid) {
    let allProjectsHtml = "";
    projectsData.forEach((project) => {
      allProjectsHtml += createProjectHtml(project);
    });
    projectsGrid.innerHTML = allProjectsHtml;
  }

  // --- Script para atualizar o link ativo da navegação na rolagem ---
  const sections = document.querySelectorAll(
    "#welcome-section, #projects, #skills, #certificates, #contact"
  );
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");
  const subNavLinks = document.querySelectorAll(
    ".sub-navigation .sub-nav-link, .sub-navigation .sub-nav-logo-link"
  );
  const navbar = document.getElementById("navbar");
  let navbarHeight = navbar ? navbar.offsetHeight : 60;

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

    subNavLinks.forEach((link) => {
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

  // --- Script para Menu Hambúrguer Mobile ---
  const hamburgerButton = document.querySelector(".hamburger-menu");
  const subNavigation = document.querySelector(".sub-navigation");
  const subNavLinksElements = document.querySelectorAll(".sub-navigation a");
  const hamburgerIcon = hamburgerButton
    ? hamburgerButton.querySelector("i")
    : null;

  function toggleMobileMenu() {
    if (subNavigation && hamburgerButton) {
      subNavigation.classList.toggle("open");
      hamburgerButton.classList.toggle("open");
      if (hamburgerIcon) {
        if (subNavigation.classList.contains("open")) {
          hamburgerIcon.classList.remove("bx-menu");
          hamburgerIcon.classList.add("bx-x");
          document.body.style.overflowY = "hidden";
        } else {
          hamburgerIcon.classList.remove("bx-x");
          hamburgerIcon.classList.add("bx-menu");
          document.body.style.overflowY = "";
        }
      }
    }
  }

  if (hamburgerButton) {
    hamburgerButton.addEventListener("click", toggleMobileMenu);
  }

  if (subNavLinksElements.length > 0) {
    subNavLinksElements.forEach((link) => {
      const linkHref = link.getAttribute("href");
      if (linkHref && linkHref.startsWith("#")) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const elementPosition =
              targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
            setTimeout(toggleMobileMenu, 300);
          } else {
            toggleMobileMenu();
          }
        });
      } else {
        link.addEventListener("click", () => {
          if (subNavigation && subNavigation.classList.contains("open")) {
            // Não fecha o menu imediatamente se for um link externo para permitir que o navegador o abra
            // Apenas garante que o overflow do body seja resetado se o menu estivesse aberto
            // toggleMobileMenu(); // Removido para links externos, eles devem abrir em nova aba
          }
        });
      }
    });
  }

  window.addEventListener("resize", () => {
    if (
      window.innerWidth > 768 &&
      subNavigation &&
      subNavigation.classList.contains("open")
    ) {
      toggleMobileMenu();
    }
    const currentNavbar = document.getElementById("navbar");
    if (currentNavbar) {
      navbarHeight = currentNavbar.offsetHeight;
    }
  });

  // --- Script para animar barras de progresso ao entrar na tela ---
  const skillsSection = document.getElementById("skills");
  const progressBars = document.querySelectorAll(".progress-bar-fill");

  if (skillsSection && progressBars.length > 0) {
    const animateProgressBars = (entries, observerInstance) => {
      // Adicionado observerInstance
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((bar) => {
            const level = bar.getAttribute("data-level");
            if (level) {
              bar.style.width = level;
            }
          });
          // observerInstance.unobserve(entry.target); // Descomente se quiser que anime apenas uma vez
        } else {
          // Opcional: Resetar animação ao sair da tela
          // progressBars.forEach(bar => {
          //     bar.style.width = '0%';
          // });
        }
      });
    };

    const observer = new IntersectionObserver(animateProgressBars, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });
    observer.observe(skillsSection);
  }

  // --- Script para Modal/Lightbox de Certificados (com Delegação de Eventos) ---
  const modal = document.getElementById("certificate-modal");
  const modalOverlay = modal ? modal.querySelector(".modal-overlay") : null;
  const modalImage = document.getElementById("modal-image");
  const modalCloseButton = modal ? modal.querySelector(".modal-close") : null;

  function openModal(imageUrl, altText) {
    if (modal && modalImage) {
      modalImage.src = imageUrl;
      modalImage.alt = altText || "Certificado em tamanho maior";
      modal.classList.add("open");
      document.body.classList.add("modal-open");
    }
  }

  function closeModal() {
    if (modal && modalImage) {
      modal.classList.remove("open");
      document.body.classList.remove("modal-open");
      // setTimeout(() => { modalImage.src = ""; modalImage.alt = ""; }, 300); // Opcional
    }
  }

  if (certificatesGrid) {
    certificatesGrid.addEventListener("click", function (e) {
      const thumbnailLink = e.target.closest("a.certificate-thumbnail-link");
      if (thumbnailLink) {
        e.preventDefault();
        const imageUrl = thumbnailLink.getAttribute("href");
        const imgElement = thumbnailLink.querySelector("img");
        const altText = imgElement
          ? imgElement.getAttribute("alt")
          : "Certificado";
        if (imageUrl) {
          openModal(imageUrl, altText);
        }
      }
    });
  }

  if (modalCloseButton) {
    modalCloseButton.addEventListener("click", closeModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeModal);
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && modal.classList.contains("open")) {
      closeModal();
    }
  });

  // --- Script para atualizar o ano no rodapé ---
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
}); // Fim do DOMContentLoaded listener

// --- Script para Movimento das Formas, Título e Subtítulo ---

document.body.addEventListener("mousemove", (evt) => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  // Move as formas com maior intensidade e um atraso (stagger)
  gsap.to(".shape", {
    x: (mouseX - window.innerWidth / 2) * 0.15,
    y: (mouseY - window.innerHeight / 2) * 0.15, 
    stagger: -0.02,
    duration: 0.8,
    ease: "power2.out",
  });

  // Move o título e o subtítulo com menor intensidade (efeito de paralaxe)
  gsap.to("#welcome-section .main-title, #welcome-section .sub-content", {
    x: (mouseX - window.innerWidth / 2) * 0.08,
    y: (mouseY - window.innerHeight / 2) * 0.08,
    duration: 0.8,
    ease: "power2.out",
  });
});

// Retorna as formas, título e subtítulo para a posição original quando o mouse sair
document.body.addEventListener("mouseleave", () => {
  gsap.to(".shape, #welcome-section .main-title, #welcome-section .sub-content", {
    x: 0,
    y: 0,
    stagger: 0.05,
    duration: 0.5,
    ease: "power2.out",
  });
});
