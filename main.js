function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // if e else para caso chame o elemento pelo console do navegador
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }

    else {
        console.log('Elemento não econtrado ou seletor inválido!');
    }
}

// lista de teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

// para cada tecla adiciona a função de tocar som
for (let contador = 0; contador < listaDeTeclas.length; contador ++) {
    const tecla = listaDeTeclas[contador];
    //capturando o nome da classe do botão para localizar o nome da classe do arquivo de audio: 
    //no navegador digite: listaDeTeclas[0].classList para listar os valores do item
    const somDaTecla = listaDeTeclas[contador].classList[1]

    //string dinâmica
    const idAudio = `#som_${somDaTecla}`;

    // se a tecla for pressionada executa a função de tocar o som
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // se a barra de espaço ou o enter forem pressionados adiciona a classe no elemento html para estilizar o botão indicando que foi pressionado
    tecla.onkeydown = function (evento) {
        // digite: console.log(evento) e no navegador ele ira mostrar as interações quando uma tecla for pressionada
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    // se a barra de espaço ou o enter forem soltos tira a classe voltando o estilo do botão para o estado normal
    tecla.onkeyup = function (evento) {
            tecla.classList.remove('ativa');
        }
    
}

