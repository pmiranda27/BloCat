const quantidadeTrovadorismo = document.getElementById('quantidade-trovadorismo');
const barraTrovadorismo = document.getElementById('dropdown-trovadorismo');
var trovadorismoIsOpen = false;



const listaTrovadorismo = [
    {
        'nome': 'Trovadorismo',
        'url': 'https://www.youtube.com/watch?v=N8aCwmWgVyA'
    },
    {
        'nome': 'Cantigas',
        'url': 'https://www.youtube.com/watch?v=ea65K0B9TLk'
    },
];


window.addEventListener('load', function (e) {
    console.log('Funcionou, Lista Trovadorismo tem tamanho de: ', listaTrovadorismo.length);
    quantidadeTrovadorismo.innerText = `${listaTrovadorismo.length} vídeos`
});

barraTrovadorismo.addEventListener('click', function (e) {
    if(trovadorismoIsOpen){
        trovadorismoIsOpen = false;
    }else {
        trovadorismoIsOpen = true;
    }
});