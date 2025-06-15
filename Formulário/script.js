// Seleciona o formulário pelo ID
const form = document.getElementById('notification-form');

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

    // 5. Limpa o formulário após a submissão bem-sucedida
    form.reset();
});

// ...existing code...

// Carrossel de depoimentos automático
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showCarouselItem(index) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

function nextCarouselItem() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showCarouselItem(currentIndex);
}

// Inicia o carrossel automático
setInterval(nextCarouselItem, 4000); // Troca a cada 4 segundos

// Exibe o primeiro item ao carregar
showCarouselItem(currentIndex);