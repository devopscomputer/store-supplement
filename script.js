$(document).ready(function(){
    var height = $('.footer').height();
    $('.sect-t-footer').css('height', height);
});

const storyImg = document.querySelector('.storys-img');

storyImg.addEventListener('mouseenter', () => {
  storyImg.style.animation = 'pulseLight 1.5s infinite';
});

storyImg.addEventListener('mouseleave', () => {
  storyImg.style.animation = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
    const storyImg = document.querySelector('.coffee_img');
  
    if (storyImg) {
      // Criar o efeito de luz como um elemento extra
      const glowEffect = document.createElement('div');
      glowEffect.classList.add('glow-effect');
  
      // Inserir o efeito antes da imagem
      storyImg.parentNode.insertBefore(glowEffect, storyImg);
  
      // Ajustar a posição com JS para garantir alinhamento
      function updateGlowPosition() {
        const rect = storyImg.getBoundingClientRect();
        glowEffect.style.width = rect.width + "px";
        glowEffect.style.height = rect.height + "px";
        glowEffect.style.top = storyImg.offsetTop + "px";
        glowEffect.style.left = storyImg.offsetLeft + "px";
      }
  
      updateGlowPosition();
      window.addEventListener("resize", updateGlowPosition);
  
      // Efeito ao passar o mouse
      storyImg.addEventListener("mouseenter", () => {
        glowEffect.style.opacity = "1";
      });
  
      storyImg.addEventListener("mouseleave", () => {
        glowEffect.style.opacity = "0";
      });
    }
  });
  