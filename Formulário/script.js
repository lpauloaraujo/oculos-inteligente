document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const area = document.getElementById('area').value;

  alert(`Nome: ${nome}\nEmail: ${email}\nÁrea: ${area}`);
});
