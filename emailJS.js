// Inicializa o EmailJS (adicione seu user ID)
emailjs.init("Y0Z_p1BYR5Q1HYkBO");

// Função de envio de email
function enviarFormulario(event) {
    event.preventDefault(); // Evita o refresh da página

    // Dados do formulário
    const templateParams = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        empresa: document.getElementById("empresa").value,
        cnpj: document.getElementById("cnpj").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        cep: document.getElementById("cep").value,
        uf: document.getElementById("uf").value,
        logradouro: document.getElementById("log").value,
        cidade: document.getElementById("cidade").value,
        bairro: document.getElementById("bairro").value,
        mensagem: document.getElementById("mensagem").value
    };

    emailjs.send("service_933ldqf", "template_fqc6g3b", templateParams)
        .then(response => {
            alert("Formulário enviado com sucesso!");
        })
        .catch(error => {
            console.error("Erro ao enviar formulário:", JSON.stringify(error));
            alert("Erro ao enviar o formulário, tente novamente.");
        });
}

// Adiciona o evento de envio ao botão do formulário
document.querySelector("form").addEventListener("submit", enviarFormulario);
