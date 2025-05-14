// Espera o DOM carregar completamente para garantir que todos os elementos existam
document.addEventListener("DOMContentLoaded", () => {
  // --- Dados dos Certificados ---
  const certificatesData = [
    {
      title: "Git - Repositório de código",
      issuer: "Vivae",
      date: "Emitido em: Dez 2024",
      type: "image",
      imageUrlFull:
        "https://media.licdn.com/dms/image/v2/D562DAQEM5XZ0HMGyEA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1733748501463?e=1747854000&v=beta&t=GMjyaKClk5mjnjRxNzKWret4OaUd9uRX6w5umIxFQ28",
      imageUrlThumbnail:
        "https://media.licdn.com/dms/image/v2/D562DAQEM5XZ0HMGyEA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1733748501463?e=1747854000&v=beta&t=GMjyaKClk5mjnjRxNzKWret4OaUd9uRX6w5umIxFQ28",
      altText: "Miniatura do certificado: Git - Repositório de código",
      verificationLink: null,
      extraInfo: [],
    },
    {
      title: "Metodologias Ágeis",
      issuer: "Vivae",
      date: "Emitido em: Dez 2024",
      type: "image",
      imageUrlFull:
        "https://media.licdn.com/dms/image/v2/D562DAQE8ew8fb5MsEg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734189870479?e=1747854000&v=beta&t=oO0lkUmyUvyzUQ0ukq93zVebZIQzZJmJrfYyWKLKZYM",
      imageUrlThumbnail:
        "https://media.licdn.com/dms/image/v2/D562DAQE8ew8fb5MsEg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734189870479?e=1747854000&v=beta&t=oO0lkUmyUvyzUQ0ukq93zVebZIQzZJmJrfYyWKLKZYM",
      altText: "Miniatura do certificado: Metodologias Ágeis",
      verificationLink: null,
      extraInfo: [],
    },
    {
      title: "Design UI e UX",
      issuer: "Serviço Nacional de Aprendizagem Industrial",
      date: "Emitido em: Set 2024",
      type: "image",
      imageUrlFull:
        "https://media.licdn.com/dms/image/v2/D562DAQHGTsCGBhumuQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1729618148142?e=1747854000&v=beta&t=CS6g3FKqVVTeuJ67RUh4bJm3xSbn9iz4iWIBKhELuA0",
      imageUrlThumbnail:
        "https://media.licdn.com/dms/image/v2/D562DAQHGTsCGBhumuQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1729618148142?e=1747854000&v=beta&t=CS6g3FKqVVTeuJ67RUh4bJm3xSbn9iz4iWIBKhELuA0",
      altText: "Miniatura do certificado: Design UI e UX",
      verificationLink: null,
      extraInfo: [],
    },
    // Certificado "Medalha de Ouro OBG" removido
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Emitido em: Set 2024",
      type: "credential",
      credentialUrl:
        "https://www.freecodecamp.org/certification/Tyxiel/responsive-web-design",
      logoUrl:
        "https://design-style-guide.freecodecamp.org/img/fcc_primary_small.svg",
      logoAltText: "Logo freeCodeCamp",
      iconClass: null,
      linkText: "Exibir credencial",
      descriptionPlaceholder:
        "Certificado do freeCodeCamp atestando proficiência em HTML5 e CSS3 para desenvolvimento web responsivo, focando em design mobile-first e layouts flexíveis.",
      extraInfo: [],
    },
    {
      title: "Google Cloud Computing Foundations Certificate",
      issuer: "Google",
      date: "Emitido em: Jun 2024",
      type: "credential",
      credentialUrl:
        "https://www.credly.com/badges/3c57c8c7-6045-47b8-9d1e-63df42b0a4f2/linked_in_profile",
      logoUrl: null,
      logoAltText: null,
      iconClass: "bx bxl-google-cloud",
      linkText: "Exibir credencial",
      descriptionPlaceholder:
        "Certificado Google Cloud Foundations cobrindo conceitos essenciais de computação em nuvem no Google Cloud Platform (GCP), incluindo infraestrutura, dados e machine learning.",
      extraInfo: [],
    },
    {
      title: "Prototipagem de Maquetes Físicas e Digitais para Projetos",
      issuer: "Serviço Nacional de Aprendizagem Industrial",
      date: "Emitido em: Ago 2023",
      type: "image",
      imageUrlFull:
        "https://media.licdn.com/dms/image/v2/D562DAQEW2_QOvd-xBQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1729617642304?e=1747854000&v=beta&t=Zz3P6MX7Zj25DY34_9BYoVn1Ehjy3O6ZwgsVW_2aQ9M",
      imageUrlThumbnail:
        "https://media.licdn.com/dms/image/v2/D562DAQEW2_QOvd-xBQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1729617642304?e=1747854000&v=beta&t=Zz3P6MX7Zj25DY34_9BYoVn1Ehjy3O6ZwgsVW_2aQ9M",
      altText: "Miniatura do certificado: Prototipagem",
      verificationLink: null,
      extraInfo: [],
    },
  ];

  // --- Função para Gerar o HTML de um Item de Certificado ---
  function createCertificateHtml(cert) {
    let itemHtml = `
            <div class="certificate-item">
                <h4>${cert.title}</h4>
                <p class="certificate-issuer">${cert.issuer}</p>
                <p class="certificate-date">${cert.date}</p>
        `;

    if (cert.type === "image") {
      itemHtml += `
                <a href="${cert.imageUrlFull}" class="certificate-thumbnail-link">
                    <img src="${cert.imageUrlThumbnail}" alt="${cert.altText}" class="certificate-image" loading="lazy">
                </a>
            `;
    } else if (cert.type === "credential") {
      if (cert.descriptionPlaceholder) {
        itemHtml += `
                      <p class="certificate-description-placeholder">${cert.descriptionPlaceholder}</p>
                  `;
      }
      itemHtml += `
                <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="certificate-credential-item-link">
            `;
      if (cert.logoUrl) {
        itemHtml += `<img src="${cert.logoUrl}" alt="${cert.logoAltText}" class="certificate-issuer-logo" loading="lazy">`;
      } else if (cert.iconClass) {
        itemHtml += `<i class='${cert.iconClass}'></i>`;
      }
      itemHtml += `
                    <span>${cert.linkText}</span>
                    <i class='bx bx-link-external'></i>
                </a>
            `;
    }

    if (cert.verificationLink) {
      itemHtml += `
                 <div class="certificate-links">
                     <a href="${cert.verificationLink}" target="_blank" rel="noopener noreferrer" class="certificate-link">Ver Certificado <i class='bx bx-link-external'></i></a>
                 </div>
             `;
    }

    if (cert.extraInfo && cert.extraInfo.length > 0) {
      cert.extraInfo.forEach((info) => {
        itemHtml += `<p class="certificate-extra-info">${info}</p>`;
      });
    }

    itemHtml += `</div>`;

    return itemHtml;
  }

  // --- Renderização dos Certificados na Página ---
  const certificatesGrid = document.querySelector(".certificates-grid");

  if (certificatesGrid) {
    let allCertificatesHtml = "";

    certificatesData.forEach((cert) => {
      allCertificatesHtml += createCertificateHtml(cert);
    });

    certificatesGrid.innerHTML = allCertificatesHtml;
  }

  const projectsData = [
    {
      // Projeto: Tarefa CRUD - URL da imagem atualizada
      title: "Tarefa CRUD",
      description:
        "Projeto CRUD (Create, Read, Update, Delete) em arquitetura MVC, desenvolvido com .NET 6.0 (C#) e banco de dados SQL Server. Utiliza DataTables para exibição e Bootstrap para estilização.",
      imageUrl:
        "https://i.ibb.co/SDHWy9HF/Captura-de-tela-2025-05-14-171334.png", // <-- URL REAL DA IMAGEM ADICIONADA
      altText: "Captura de tela do projeto Tarefa CRUD",
      projectUrl: "https://github.com/Tyxiel/TarefaCRUD",
      techs: ["C#", ".NET 6.0", "MVC", "SQL Server", "DataTables", "Bootstrap"],
    },
    {
      title: "App de Clima Simples",
      description:
        "Um aplicativo web que busca e exibe as condições atuais do clima para uma cidade digitada pelo usuário, utilizando uma API de clima pública.",
      imageUrl: "https://i.ibb.co/Qn5cWvc/image.png",
      altText: "Captura de tela do App de Clima Simples",
      projectUrl: "https://tyxiel.github.io/Simple-Weather-App/",
      techs: ["HTML5", "CSS3", "JavaScript", "API REST"],
    },
    {
      // Projeto: Monsters Antique (Loja Monstro) - URL da imagem e link atualizados
      title: "Monsters Antique",
      description:
        "Este é um projeto de desenvolvimento web de uma loja online fictícia, a Ordem dos Guardiões da Noite. Desenvolvido com HTML5, CSS3 e JavaScript no front-end, e SQL Server e API local no back-end, suportando postagens e login funcional.",
      imageUrl:
        "https://i.ibb.co/HfYDCQKD/Captura-de-tela-2025-05-14-171011.png", // <-- URL REAL DA IMAGEM ADICIONADA
      altText: "Captura de tela do projeto Monsters Antique (Loja Monstro)", // Alt text atualizado
      projectUrl: "https://github.com/gabrielBehling/LojaMonstro", // <-- URL REAL DO PROJETO ADICIONADA
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
      title: "App de Clima Antigo",
      description:
        "Versão anterior de um app de clima, explorando diferentes abordagens de design e funcionalidades.",
      imageUrl: "https://i.ibb.co/k93dWR9/image.png",
      altText: "Captura de tela do App de Clima Antigo",
      projectUrl: "https://gabrielbehling.github.io/Weather-App/",
      techs: ["HTML", "CSS", "JavaScript", "APIs"],
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
  } // --- Script para atualizar o link ativo da navegação na rolagem ---

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
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // --- Fim do Script de rolagem ---

  // --- Script para Menu Hambúrguer Mobile ---
  const hamburgerButton = document.querySelector(".hamburger-menu");
  const subNavigation = document.querySelector(".sub-navigation");
  const subNavLinksElements = document.querySelectorAll(".sub-navigation a"); // Corrigido para selecionar todos os links a
  const hamburgerIcon = hamburgerButton
    ? hamburgerButton.querySelector("i")
    : null;
  // navbarHeight já definido acima

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
    // Usar o novo nome da variável
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
        link.addEventListener("click", toggleMobileMenu);
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

  // --- Fim do Script de Menu Hambúrguer Mobile ---

  // --- Script para animar barras de progresso ao entrar na tela ---
  const skillsSection = document.getElementById("skills");
  const progressBars = document.querySelectorAll(".progress-bar-fill");

  if (skillsSection && progressBars.length > 0) {
    const animateProgressBars = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((bar) => {
            const level = bar.getAttribute("data-level");
            if (level) {
              bar.style.width = level;
            }
          });
          // observer.unobserve(entry.target); // Descomente se quiser que anime apenas uma vez
        } else {
          // Opcional: Resetar animação ao sair da tela
          // progressBars.forEach(bar => {
          //     bar.style.width = '0%';
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

  // --- Fim do Script de animação das barras ---

  // --- Script para Modal/Lightbox de Certificados (com Delegação de Eventos) ---
  const modal = document.getElementById("certificate-modal");
  const modalOverlay = modal ? modal.querySelector(".modal-overlay") : null;
  const modalImage = document.getElementById("modal-image");
  const modalCloseButton = modal ? modal.querySelector(".modal-close") : null;
  // certificatesGrid já selecionado anteriormente

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
      // setTimeout(() => { modalImage.src = ""; modalImage.alt = ""; }, 300); // Opcional: Limpar imagem após fechar
    }
  }

  if (certificatesGrid) {
    certificatesGrid.addEventListener("click", function (e) {
      const thumbnailLink = e.target.closest("a.certificate-thumbnail-link");
      if (thumbnailLink) {
        e.preventDefault();
        const imageUrl = thumbnailLink.getAttribute("href");
        const altText = thumbnailLink.querySelector("img")
          ? thumbnailLink.querySelector("img").getAttribute("alt")
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
  }); // --- Script para atualizar o ano no rodapé ---

  // --- Fim do Script de Modal/Lightbox ---

  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  } // --- Fim do Script do rodapé ---
}); // Fim do DOMContentLoaded listener
