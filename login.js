document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('formLogin');
    const emailInput = document.getElementById('emailLogin');
    const senhaInput = document.getElementById('senhaLogin');
    const linkEsqueciSenha = document.getElementById('linkEsqueciSenha');

    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const senha = senhaInput.value;

        if (!email) {
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Por favor, insira seu e-mail.'
            });
            emailInput.focus();
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'E-mail inválido',
                text: 'Por favor, insira um e-mail válido.'
            });
            emailInput.focus();
            return;
        }

        if (!senha) {
            Swal.fire({
                icon: 'warning',
                title: 'Campo obrigatório',
                text: 'Por favor, insira sua senha.'
            });
            senhaInput.focus();
            return;
        }

        const dadosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuarioEncontrado = dadosCadastrados.find(usuario =>
            usuario.email === email && usuario.senha === senha
        );

        if (usuarioEncontrado) {
            Swal.fire({
                icon: 'success',
                title: 'Login realizado com sucesso!',
                text: `Bem-vindo, ${usuarioEncontrado.nome}!`,
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                window.location.href = 'formulario.html';
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Erro no login',
                text: 'E-mail ou senha incorretos.'
            });
        }
    });

    linkEsqueciSenha.addEventListener('click', (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'info',
            title: 'Atenção',
            text: 'Função "Esqueci minha senha" ainda não implementada.'
        });
    });
});

