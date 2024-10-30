var imagemAtual = 0;
var imagens = document.querySelectorAll("#carousel-marcador .foto");

function abrirModal(elemento){
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modalImage");

    imagemAtual = Array.from(imagens).indexOf(elemento);


    modal.style.display = "flex";
    modalImage.src = elemento.src; 
}

function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function mudarImagem(direcao) {

    imagemAtual += direcao;

    if (imagemAtual < 0) {
        imagemAtual = imagens.length - 1; 
    } else if (imagemAtual >= imagens.length) {
        imagemAtual = 0; 
    }


    var modalImage = document.getElementById("modalImage");
    modalImage.src = imagens[imagemAtual].src;
}