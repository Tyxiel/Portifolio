// Espera o DOM carregar completamente para garantir que todos os elementos existam
document.addEventListener("DOMContentLoaded", () => {
  // --- Script para atualizar o link ativo da navegação na rolagem ---

  // Seleciona todas as seções da página que a navegação aponta
  // Certifique-se que os IDs das seções (#welcome-section, #projects, #skills, #contact)
  // correspondem aos atributos href dos links da navbar.
  // Adicionei #skills aqui
  const sections = document.querySelectorAll(
    "#welcome-section, #projects, #skills, #contact"
  );

  // Seleciona todos os links principais de navegação na navbar
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  // Obtém a altura da navbar para ajustar o cálculo da posição de rolagem
  // Isso é importante porque a navbar fixa cobre o topo da página.
  const navbar = document.getElementById("navbar");
  const navbarHeight = navbar ? navbar.offsetHeight : 60; // Usa 60px como fallback se a navbar não for encontrada

  // Função principal que verifica a posição de rolagem e atualiza o link ativo
  function updateActiveLink() {
    // Obtém a posição atual da rolagem ajustada pela altura da navbar
    // Adicionamos um pequeno buffer (+1) para garantir que a seção seja detectada corretamente
    const scrollPos = window.scrollY + navbarHeight + 1;

    let currentSectionId = null;

    // Itera sobre cada seção para determinar qual está atualmente visível na viewport
    sections.forEach((section) => {
      // Verifica se a seção existe antes de acessar offsetTop e offsetHeight
      if (section) {
        const sectionTop = section.offsetTop; // Posição do topo da seção em relação ao documento
        const sectionHeight = section.offsetHeight; // Altura da seção

        // Verifica se a posição da rolagem está dentro dos limites verticais da seção
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          currentSectionId = section.id; // Define a seção atual visível
        }
      }
    });

    // Caso o usuário esteja no topo da página, acima da primeira seção,
    // define a primeira seção como a ativa por padrão.
    if (
      currentSectionId === null &&
      sections.length > 0 &&
      window.scrollY < sections[0].offsetTop + navbarHeight
    ) {
      currentSectionId = sections[0].id;
    }

    // Itera sobre todos os links de navegação
    navLinks.forEach((link) => {
      // Extrai o ID da seção do atributo href do link (removendo o '#')
      const linkHref = link.getAttribute("href");
      // Verifica se o href é um link interno (começa com '#')
      if (linkHref && linkHref.startsWith("#")) {
        const targetId = linkHref.substring(1);

        // Se o ID do link corresponder ao ID da seção visível, adiciona a classe 'active'
        // Caso contrário, remove a classe 'active'.
        if (targetId === currentSectionId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  }

  // Adiciona um listener para o evento 'scroll' na janela
  // A função updateActiveLink será chamada toda vez que o usuário rolar a página.
  window.addEventListener("scroll", updateActiveLink);

  // Chama a função uma vez ao carregar a página
  // Isso garante que o link correto seja marcado como ativo na carga inicial,
  // mesmo que a página carregue já rolada para uma seção diferente do topo.
  updateActiveLink();

  // --- Fim do Script de rolagem ---

  // --- Script para atualizar o ano no rodapé (Mantido) ---
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  // --- Fim do Script do rodapé ---

  // Removidos:
  // - Script de mudança de ícones no hover da navbar (pode ser feito com CSS ou removido se não for necessário)
  // - Script de mousemove para cursor customizado e animação dos shapes (se não for manter, remova o GSAP também)
}); // Fim do DOMContentLoaded
