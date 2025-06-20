function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

class CarrosselBeneficios {
  constructor(elemento, primeira, segunda, tempo, largura) {
      this.elemento = elemento;
      this.primeiraParte = primeira;
      this.segundaParte = segunda;
      this.mostrandoPrimeira = true;
      this.intervaloCarrossel = null;
      this.largura = largura;
      this.tempoIntervalo = tempo;
      this.iniciarCarrossel = this.iniciarCarrossel.bind(this);
      window.addEventListener('resize', this.iniciarCarrossel);
      this.iniciarCarrossel();
  }

  atualizarCarrossel(conteudo) {
      this.elemento.style.opacity = 0;

      setTimeout(() => {
          this.elemento.innerHTML = conteudo;
          this.elemento.style.opacity = 1;
      }, 300); 
    }

  iniciarCarrossel() {
      if (window.innerWidth < this.largura) {
          this.atualizarCarrossel(this.primeiraParte);
          if (!this.intervaloCarrossel) {
              this.intervaloCarrossel = setInterval(() => {
                  this.mostrandoPrimeira = !this.mostrandoPrimeira;
                  this.atualizarCarrossel(this.mostrandoPrimeira ? this.primeiraParte : this.segundaParte);
              }, this.tempoIntervalo);
          }
      } else {
          clearInterval(this.intervaloCarrossel);
          this.intervaloCarrossel = null;
          this.atualizarCarrossel(this.primeiraParte + this.segundaParte);
      }
  }
}

class CarrosselDepoimentos {
  constructor(elemento, primeiraM, segundaM, primeiraD, segundaD, tempo, largura) {
      this.elemento = elemento;
      this.primeiraParteM = primeiraM;
      this.segundaParteM = segundaM;
      this.primeiraParteD = primeiraD;
      this.segundaParteD = segundaD;
      this.mostrandoPrimeira = true;
      this.intervaloCarrossel = null;
      this.largura = largura;
      this.tempoIntervalo = tempo;
      this.iniciarCarrossel = this.iniciarCarrossel.bind(this);
      window.addEventListener('resize', this.iniciarCarrossel);
      this.iniciarCarrossel();
  }

  atualizarCarrossel(conteudo) {
      this.elemento.style.opacity = 0;

      setTimeout(() => {
          this.elemento.innerHTML = conteudo;
          this.elemento.style.opacity = 1;
      }, 300); 
    }

  iniciarCarrossel() {
    clearInterval(this.intervaloCarrossel);
    this.intervaloCarrossel = null;

    if (window.innerWidth < this.largura) {
        this.atualizarCarrossel(this.mostrandoPrimeira ? this.primeiraParteM : this.segundaParteM);
        this.mostrandoPrimeira = !this.mostrandoPrimeira;
        this.intervaloCarrossel = setInterval(() => {
            this.atualizarCarrossel(this.mostrandoPrimeira ? this.primeiraParteM : this.segundaParteM);
            this.mostrandoPrimeira = !this.mostrandoPrimeira;
        }, this.tempoIntervalo);
    } else {
        this.atualizarCarrossel(this.mostrandoPrimeira ? this.primeiraParteD : this.segundaParteD);
        this.mostrandoPrimeira = !this.mostrandoPrimeira;
        this.intervaloCarrossel = setInterval(() => {
            this.atualizarCarrossel(this.mostrandoPrimeira ? this.primeiraParteD : this.segundaParteD);
            this.mostrandoPrimeira = !this.mostrandoPrimeira;
        }, this.tempoIntervalo);
    }
}

}

// variáveis referentes ao controle do carrossel da sessão de benefícios
const listaBeneficios = document.getElementById('lista-beneficios');
const primeirosBeneficios = `<ul>
        <li><svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 30.4583C23.6042 30.4583 25.8177 29.5469 27.6406 27.724C29.4636 25.901 30.375 23.6875 30.375 21.0833C30.375 18.4792 29.4636 16.2656 27.6406 14.4427C25.8177 12.6198 23.6042 11.7083 21 11.7083C18.3959 11.7083 16.1823 12.6198 14.3594 14.4427C12.5365 16.2656 11.625 18.4792 11.625 21.0833C11.625 23.6875 12.5365 25.901 14.3594 27.724C16.1823 29.5469 18.3959 30.4583 21 30.4583ZM21 26.2917C19.5417 26.2917 18.309 25.7882 17.3021 24.7812C16.2952 23.7743 15.7917 22.5417 15.7917 21.0833C15.7917 19.625 16.2952 18.3924 17.3021 17.3854C18.309 16.3785 19.5417 15.875 21 15.875C22.4584 15.875 23.691 16.3785 24.6979 17.3854C25.7049 18.3924 26.2084 19.625 26.2084 21.0833C26.2084 22.5417 25.7049 23.7743 24.6979 24.7812C23.691 25.7882 22.4584 26.2917 21 26.2917ZM4.33335 37.75C3.18752 37.75 2.20662 37.342 1.39065 36.526C0.574673 35.7101 0.166687 34.7292 0.166687 33.5833V8.58333C0.166687 7.4375 0.574673 6.4566 1.39065 5.64062C2.20662 4.82465 3.18752 4.41667 4.33335 4.41667H10.8959L14.75 0.25H27.25L31.1042 4.41667H37.6667C38.8125 4.41667 39.7934 4.82465 40.6094 5.64062C41.4254 6.4566 41.8334 7.4375 41.8334 8.58333V33.5833C41.8334 34.7292 41.4254 35.7101 40.6094 36.526C39.7934 37.342 38.8125 37.75 37.6667 37.75H4.33335ZM4.33335 33.5833H37.6667V8.58333H29.2292L25.4271 4.41667H16.5729L12.7709 8.58333H4.33335V33.5833Z" fill="#C59300"/>
        </svg>Câmera integrada com captura por comando de voz</li>
        <li><svg width="35" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.33331 27.2501C4.5972 27.2501 3.12151 26.6424 1.90623 25.4272C0.690952 24.2119 0.083313 22.7362 0.083313 21.0001C0.083313 19.264 0.690952 17.7883 1.90623 16.573C3.12151 15.3577 4.5972 14.7501 6.33331 14.7501V10.5834C6.33331 9.43758 6.7413 8.45668 7.55727 7.64071C8.37324 6.82473 9.35415 6.41675 10.5 6.41675H16.75C16.75 4.68064 17.3576 3.20494 18.5729 1.98966C19.7882 0.774387 21.2639 0.166748 23 0.166748C24.7361 0.166748 26.2118 0.774387 27.4271 1.98966C28.6423 3.20494 29.25 4.68064 29.25 6.41675H35.5C36.6458 6.41675 37.6267 6.82473 38.4427 7.64071C39.2587 8.45668 39.6666 9.43758 39.6666 10.5834V14.7501C41.4028 14.7501 42.8785 15.3577 44.0937 16.573C45.309 17.7883 45.9166 19.264 45.9166 21.0001C45.9166 22.7362 45.309 24.2119 44.0937 25.4272C42.8785 26.6424 41.4028 27.2501 39.6666 27.2501V35.5834C39.6666 36.7292 39.2587 37.7102 38.4427 38.5261C37.6267 39.3421 36.6458 39.7501 35.5 39.7501H10.5C9.35415 39.7501 8.37324 39.3421 7.55727 38.5261C6.7413 37.7102 6.33331 36.7292 6.33331 35.5834V27.2501ZM16.75 23.0834C17.618 23.0834 18.3559 22.7796 18.9635 22.172C19.5712 21.5643 19.875 20.8265 19.875 19.9584C19.875 19.0904 19.5712 18.3525 18.9635 17.7449C18.3559 17.1372 17.618 16.8334 16.75 16.8334C15.8819 16.8334 15.1441 17.1372 14.5364 17.7449C13.9288 18.3525 13.625 19.0904 13.625 19.9584C13.625 20.8265 13.9288 21.5643 14.5364 22.172C15.1441 22.7796 15.8819 23.0834 16.75 23.0834ZM29.25 23.0834C30.118 23.0834 30.8559 22.7796 31.4635 22.172C32.0712 21.5643 32.375 20.8265 32.375 19.9584C32.375 19.0904 32.0712 18.3525 31.4635 17.7449C30.8559 17.1372 30.118 16.8334 29.25 16.8334C28.3819 16.8334 27.6441 17.1372 27.0364 17.7449C26.4288 18.3525 26.125 19.0904 26.125 19.9584C26.125 20.8265 26.4288 21.5643 27.0364 22.172C27.6441 22.7796 28.3819 23.0834 29.25 23.0834ZM14.6666 31.4167H31.3333V27.2501H14.6666V31.4167ZM10.5 35.5834H35.5V10.5834H10.5V35.5834Z" fill="#C59300"/>
        </svg>Assistente de IA integrado</li>
        <li><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.333313 33.6666V29.4999H6.06248L5.22915 28.7708C3.42359 27.1735 2.15623 25.3506 1.42706 23.302C0.697896 21.2534 0.333313 19.1874 0.333313 17.1041C0.333313 13.2499 1.48783 9.8211 3.79685 6.81763C6.10588 3.81415 9.11804 1.82631 12.8333 0.854085V5.22908C10.3333 6.13186 8.31942 7.66832 6.79165 9.83846C5.26387 12.0086 4.49998 14.4305 4.49998 17.1041C4.49998 18.6666 4.79512 20.1857 5.3854 21.6614C5.97567 23.1371 6.89581 24.4999 8.14581 25.7499L8.66665 26.2708V21.1666H12.8333V33.6666H0.333313ZM21.1666 33.1458V28.7708C23.6666 27.868 25.6805 26.3315 27.2083 24.1614C28.7361 21.9912 29.5 19.5694 29.5 16.8958C29.5 15.3333 29.2048 13.8142 28.6146 12.3385C28.0243 10.8628 27.1041 9.49992 25.8541 8.24992L25.3333 7.72908V12.8333H21.1666V0.333252H33.6666V4.49992H27.9375L28.7708 5.22908C30.4722 6.93047 31.7135 8.77943 32.4948 10.776C33.276 12.7725 33.6666 14.8124 33.6666 16.8958C33.6666 20.7499 32.5121 24.1787 30.2031 27.1822C27.8941 30.1857 24.8819 32.1735 21.1666 33.1458Z" fill="#C59300"/>
        </svg>Sincronização com seus apps favoritos</li>
      </ul>`;
const outrosBeneficios = `<ul>
        <li><svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.3125 22.8125H17.3542L26.7292 13.4375H20.1146L21.5208 7.1875H20.4792L11.1042 16.5625H17.7187L16.3125 22.8125ZM4.33332 24.8958H33.5V5.10417H4.33332V24.8958ZM4.33332 29.0625C3.18749 29.0625 2.20659 28.6545 1.39061 27.8385C0.574643 27.0226 0.166656 26.0417 0.166656 24.8958V5.10417C0.166656 3.95833 0.574643 2.97743 1.39061 2.16146C2.20659 1.34549 3.18749 0.9375 4.33332 0.9375H33.5C34.6458 0.9375 35.6267 1.34549 36.4427 2.16146C37.2587 2.97743 37.6667 3.95833 37.6667 5.10417V9.79167H38.7083C39.5764 9.79167 40.3142 10.0955 40.9219 10.7031C41.5295 11.3108 41.8333 12.0486 41.8333 12.9167V17.0833C41.8333 17.9861 41.5295 18.7326 40.9219 19.3229C40.3142 19.9132 39.5764 20.2083 38.7083 20.2083H37.6667V24.8958C37.6667 26.0417 37.2587 27.0226 36.4427 27.8385C35.6267 28.6545 34.6458 29.0625 33.5 29.0625H4.33332Z" fill="#C59300"/>
        </svg>Bateria com duração de até 20h</li>
        <li><svg width="42" height="35" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 38.6667C23.5417 38.6667 22.309 38.117 21.3021 37.0177C20.2951 35.9183 19.7917 34.5726 19.7917 32.9804C19.7917 31.3883 20.2951 30.0425 21.3021 28.9432C22.309 27.8438 23.5417 27.2942 25 27.2942C26.4583 27.2942 27.691 27.8438 28.6979 28.9432C29.7049 30.0425 30.2083 31.3883 30.2083 32.9804C30.2083 34.5726 29.7049 35.9183 28.6979 37.0177C27.691 38.117 26.4583 38.6667 25 38.6667ZM13.2292 25.8157L8.85417 20.9255C10.9028 18.6889 13.3073 16.9167 16.0677 15.6088C18.8281 14.301 21.8056 13.6471 25 13.6471C28.1944 13.6471 31.1719 14.3105 33.9323 15.6373C36.6927 16.9641 39.0972 18.7647 41.1458 21.0392L36.7708 25.8157C35.2431 24.1477 33.4722 22.8399 31.4583 21.8922C29.4444 20.9445 27.2917 20.4706 25 20.4706C22.7083 20.4706 20.5556 20.9445 18.5417 21.8922C16.5278 22.8399 14.7569 24.1477 13.2292 25.8157ZM4.375 16.149L0 11.3726C3.19444 7.80916 6.92708 5.02288 11.1979 3.01373C15.4687 1.00458 20.0694 0 25 0C29.9306 0 34.5312 1.00458 38.8021 3.01373C43.0729 5.02288 46.8056 7.80916 50 11.3726L45.625 16.149C42.9514 13.2301 39.8524 10.9461 36.3281 9.29707C32.8038 7.64805 29.0278 6.82354 25 6.82354C20.9722 6.82354 17.1962 7.64805 13.6719 9.29707C10.1476 10.9461 7.04861 13.2301 4.375 16.149Z" fill="#C59300"/>
        </svg>Conexão 5g e Wi-Fi</li>
        <li><svg width="48" height="18" viewBox="0 0 48 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3542 17.3334C8.89582 17.3334 7.58506 16.8647 6.42186 15.9272C5.25867 14.9897 4.52082 13.7917 4.20832 12.3334L2.69791 5.35425L0.40624 5.5105L0.0416565 1.34383C2.74999 1.10078 5.0677 0.927165 6.99478 0.822998C8.92186 0.718831 10.6493 0.666748 12.1771 0.666748C14.434 0.666748 16.2569 0.770915 17.6458 0.979248C19.0347 1.18758 20.2847 1.55216 21.3958 2.073C21.8819 2.31605 22.342 2.48966 22.776 2.59383C23.2101 2.698 23.618 2.75008 24 2.75008C24.3819 2.75008 24.7552 2.698 25.1198 2.59383C25.4844 2.48966 25.9097 2.33341 26.3958 2.12508C27.5417 1.60425 28.8611 1.23098 30.3542 1.00529C31.8472 0.779595 33.8264 0.666748 36.2917 0.666748C37.8889 0.666748 39.6597 0.718831 41.6042 0.822998C43.5486 0.927165 45.6667 1.08341 47.9583 1.29175L47.5937 5.40633L45.3542 5.25008L43.7917 12.3855C43.4792 13.8438 42.75 15.0331 41.6042 15.9532C40.4583 16.8733 39.1562 17.3334 37.6979 17.3334H33.0625C31.6042 17.3334 30.3194 16.8907 29.2083 16.0053C28.0972 15.1199 27.368 13.9827 27.0208 12.5938L25.6146 7.02091H22.4375L21.0312 12.5938C20.6493 14.0174 19.9028 15.1633 18.7917 16.0313C17.6805 16.8994 16.4132 17.3334 14.9896 17.3334H10.3542ZM8.27082 11.5001C8.37499 11.9862 8.61804 12.3855 8.99999 12.698C9.38193 13.0105 9.81596 13.1667 10.3021 13.1667H14.9375C15.4236 13.1667 15.8576 13.0192 16.2396 12.724C16.6215 12.4289 16.8646 12.0556 16.9687 11.6042L18.5833 5.30216C17.6458 5.12855 16.5868 5.01571 15.4062 4.96362C14.2257 4.91154 13.1493 4.8855 12.1771 4.8855C11.3785 4.8855 10.5191 4.89418 9.59895 4.91154C8.67881 4.9289 7.81943 4.9723 7.02082 5.04175L8.27082 11.5001ZM31.0312 11.6042C31.1354 12.0556 31.3785 12.4289 31.7604 12.724C32.1423 13.0192 32.5764 13.1667 33.0625 13.1667H37.6979C38.184 13.1667 38.618 13.0105 39 12.698C39.3819 12.3855 39.625 11.9862 39.7292 11.5001L41.0833 4.98966C40.3889 4.95494 39.5903 4.9289 38.6875 4.91154C37.7847 4.89418 36.9861 4.8855 36.2917 4.8855C35.25 4.8855 34.0955 4.91154 32.8281 4.96362C31.5608 5.01571 30.4236 5.12855 29.4167 5.30216L31.0312 11.6042Z" fill="#C59300"/>
        </svg>Design minimalista e resistente</li>
      </ul>`;
const tempoIntervaloB = 4000;

// variáveis referentes ao controle do carrossel da sessão depoimentos (desktop)
const depoimentos = document.getElementById('depoimento-container')
const primeiroDepoimentoD = `<div class="depoimento-card">
      <div class="aspas">❝</div>
      <p><em>Usei o VisionOne em uma apresentação e foi surreal. Parece mágica!</em></p>
      <p><em>Lucas</em></p>
      <span class="cargo">Designer de produto</span>
    </div>
    <img src="images/unsplash_Lgitb85y7-A.svg" alt="Foto do usuário" class="foto-usuario" /> `; 
const segundoDepoimentoD = `<div class="depoimento-card">
      <div class="aspas">❝</div>
      <p><em>Trabalho com engenharia e ter dados visíveis no campo mudou meu jogo.</em></p>
      <p><em>Carla</em></p>
      <span class="cargo">Engenheira civil</span>
    </div>
    <img src="images/unsplash_eqXNp1toYc0.svg" alt="Foto do usuário" class="foto-usuario" />`
const tempoIntervaloD = 5000;

// variáveis referentes ao controle do carrossel da sessão de depoimentos (desktop)
const primeiroDepoimentoM = `<div class="depoimento-card">
      <div class="aspas">❝</div>
      <p><em>Usei o VisionOne em uma apresentação e foi surreal. Parece mágica!</em></p>
      <p><em>Lucas</em></p>
      <span class="cargo">Designer de produto</span>
    </div>`
const segundoDepoimentoM = `<div class="depoimento-card">
      <div class="aspas">❝</div>
      <p><em>Trabalho com engenharia e ter dados visíveis no campo mudou meu jogo.</em></p>
      <p><em>Carla</em></p>
      <span class="cargo">Engenheira civil</span>
    </div>`

//instanciando os carrosséis
new CarrosselBeneficios(listaBeneficios, primeirosBeneficios, outrosBeneficios, tempoIntervaloB, 1057);
new CarrosselDepoimentos(depoimentos, primeiroDepoimentoM, segundoDepoimentoM, primeiroDepoimentoD, segundoDepoimentoD, tempoIntervaloD, 768);

// Seleciona o formulário pelo ID
const form = document.getElementById('notification-form');
const contadorDeClientes = document.getElementById('contador');

// Adiciona um "ouvinte" para o evento de submissão do formulário
form.addEventListener('submit', function(event) {
    // 1. Previne o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault();

    // 2. Coleta os valores dos campos de entrada
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // 3. Validação simples para garantir que os campos não estão vazios
    // A tag 'required' no HTML já faz uma validação, mas o JS oferece mais controle.
    if (!name || !email) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // 4. Exibe uma mensagem de sucesso para o usuário
    alert(`Obrigado, ${name}! ✅\nVocê será notificado sobre novidades no e-mail: ${email}`);

    // incrementar clientes
    let cliente = parseInt(contadorDeClientes.textContent);
    contadorDeClientes.textContent = cliente +1;
    // 5. Limpa o formulário após a submissão bem-sucedida
    form.reset();
});

