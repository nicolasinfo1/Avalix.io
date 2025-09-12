const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// --- Cadastro ---
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const senha = registerForm.querySelector('input[type="password"]').value;

    // Salva no localStorage
    localStorage.setItem("usuarioNome", nome);
    localStorage.setItem("usuarioEmail", email);
    localStorage.setItem("usuarioSenha", senha);

    alert("✅ Cadastro bem sucedido!");

    // Limpa os campos
    registerForm.reset();

    // Fecha o modal (usa getOrCreateInstance para garantir)
    const registerModal = bootstrap.Modal.getOrCreateInstance(document.getElementById("registerModal"));
    registerModal.hide();
});

// --- Login ---
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;
    const senha = loginForm.querySelector('input[type="password"]').value;

    const usuarioEmail = localStorage.getItem("usuarioEmail");
    const usuarioSenha = localStorage.getItem("usuarioSenha");

    if (email === usuarioEmail && senha === usuarioSenha) {
        alert("🎉 Login bem sucedido!");
        loginForm.reset();

        const loginModal = bootstrap.Modal.getOrCreateInstance(document.getElementById("loginModal"));
        loginModal.hide();
    } else {
        alert("❌ Email ou senha incorretos!");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!");

    const botoes = document.querySelectorAll(".btn-warning");
    botoes.forEach(btn => {
    });
});



