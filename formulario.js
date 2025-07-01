document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formDenuncia');
  const loadingScreen = document.getElementById('loadingScreen');
  const confirmationScreen = document.getElementById('confirmationScreen');
  const btnLogin = document.getElementById('btnLogin');
  const btnNovaDenuncia = document.getElementById('btnNovaDenuncia');

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validação simples (HTML5 já faz, mas reforçando)
    if (!formulario.checkValidity()) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    // Mostrar tela de carregamento
    loadingScreen.style.display = 'flex';

    // Simula envio async (exemplo: 2s)
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      confirmationScreen.style.display = 'flex';
    }, 2000);
  });

  btnLogin.addEventListener('click', () => {
    // Redireciona para login
    window.location.href = 'login.html';
  });

  btnNovaDenuncia.addEventListener('click', () => {
    // Esconde confirmação e reseta form
    confirmationScreen.style.display = 'none';
    formulario.reset();
  });
});
