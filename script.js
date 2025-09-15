// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Exemplo extra: alerta ao enviar formulário
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
});
