function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }

    else {
        console.log('Elemento não econtrado ou seletor inválido!');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador ++) {
    const tecla = listaDeTeclas[contador];
    //capturando o nome da classe do botão para localizar o nome da classe do arquivo de audio: 
    //no navegador digite: listaDeTeclas[0].classList para listar os valores do item
    const somDaTecla = listaDeTeclas[contador].classList[1]

    //string dinâmica
    const idAudio = `#som_${somDaTecla}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        // digite: console.log(evento) e no navegador ele ira mostrar as interações quando uma tecla for pressionada
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (evento) {
            tecla.classList.remove('ativa');
        }
    
}

