$(document).ready(function () {
    // Ajusta a altura da seção do rodapé
    var height = $('.footer').height();
    $('.sect-t-footer').css('height', height);
  
    // Seleção da imagem para efeito de animação ao passar o mouse
    const storyImg = document.querySelector('.storys-img');
  
    if (storyImg) {
      storyImg.addEventListener('mouseenter', () => {
        storyImg.style.animation = 'pulseLight 1.5s infinite';
      });
  
      storyImg.addEventListener('mouseleave', () => {
        storyImg.style.animation = 'none';
      });
    }
  
    // Criar efeito de luz na imagem (com div de glow-effect)
    const coffeeImg = document.querySelector('.coffee_img');
  
    if (coffeeImg) {
      const glowEffect = document.createElement('div');
      glowEffect.classList.add('glow-effect');
      coffeeImg.parentNode.insertBefore(glowEffect, coffeeImg);
  
      // Ajustar a posição do efeito de luz
      function updateGlowPosition() {
        const rect = coffeeImg.getBoundingClientRect();
        glowEffect.style.width = rect.width + "px";
        glowEffect.style.height = rect.height + "px";
        glowEffect.style.top = coffeeImg.offsetTop + "px";
        glowEffect.style.left = coffeeImg.offsetLeft + "px";
      }
  
      updateGlowPosition();
      window.addEventListener("resize", updateGlowPosition);
  
      // Ativar/desativar o efeito ao passar o mouse
      coffeeImg.addEventListener("mouseenter", () => {
        glowEffect.style.opacity = "1";
      });
  
      coffeeImg.addEventListener("mouseleave", () => {
        glowEffect.style.opacity = "0";
      });
    }
  
    function typeText(element, text, delay =  90, callback) {
        let i = 0; // Índice inicial do texto
        element.textContent = ""; // Garante que o texto esteja vazio antes de começar
    
        // Define o intervalo de digitação
        const interval = setInterval(() => {
          if (i < text.length) {
            element.textContent += text[i]; // Adiciona letra por letra
            i++;
          } else {
            clearInterval(interval); // Para o intervalo quando o texto termina
            if (callback) callback(); // Chama o callback quando terminar
          }
        }, delay);
      }
    
      // Texto para as linhas
      const textLine1 =
        "Aumente sua libido e energia com PowerMan. Nossa fórmula única combina ingredientes poderosos como Maca Peruana, Tribulus Terrestris e L-Citrulina,";
      const textLine2 =
        "proporcionando um impulso natural na testosterona e melhorando a circulação sanguínea. Ideal para quem busca performance sexual e vitalidade.";
    
      // Seleção dos elementos
      const line1Element = document.querySelector(".line1");
      const line2Element = document.querySelector(".line2");
    
      // Garante que a segunda linha esteja invisível inicialmente
      line2Element.style.opacity = "0";
      line2Element.style.visibility = "hidden";
    
      // Verifica se os elementos existem antes de executar
      if (line1Element && line2Element) {
        // Inicia a digitação da linha 1
        typeText(line1Element, textLine1, 40, () => {
          // Após a linha 1 terminar, inicia a linha 2
          line2Element.style.visibility = "visible"; // Torna visível
          line2Element.style.transition = "opacity 0.5s ease"; // Adiciona transição
          line2Element.style.opacity = "1"; // Gradualmente visível
    
          // Inicia a digitação da linha 2
          typeText(line2Element, textLine2, 90);
        });
      }
    });