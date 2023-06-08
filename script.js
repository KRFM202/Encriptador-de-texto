function Encriptar() {
    var contenidoDesencriptado = document.querySelector(".mensaje").value;
    var parrafo = document.querySelector(".bloque-resultado p");
    var fraseEncriptada = contenidoDesencriptado.split('').map(function (char) {
        switch (char.toLowerCase()) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return char;
        }
    }).join('');

    cambiarDisplay();

    parrafo.textContent = fraseEncriptada;

}

function Desencriptar() {
    var contenidoEncriptado = document.querySelector(".mensaje").value;
    var parrafo = document.querySelector(".bloque-resultado p");

    var correspondencias = {
        ai: 'a',
        enter: 'e',
        imes: 'i',
        ober: 'o',
        ufat: 'u'
    };

    var fraseDesencriptada = contenidoEncriptado.replace(/ai|enter|imes|ober|ufat/g, function(match) {
        return correspondencias[match];
    });

    cambiarDisplay();

    parrafo.textContent = fraseDesencriptada;

}

function Copiar(){
    var parrafoCopiado = document.getElementById("copia-parrafo");
    var checkCopiado = document.getElementById("copia-check");
    checkCopiado.style.display = "flex";

    setTimeout(function(){
        checkCopiado.style.display = "none";

    }, 2000);

    return parrafoCopiado.textContent;
    
}


function Pegar(contenido){
    var contenidoPegado = document.querySelector(".mensaje");

   if(contenido) {
    contenidoPegado.value = contenido;
   }
   else {
    contenidoPegado.value = "";
   }
}

function LimpiarTextarea() {
    var contenidoTextarea = document.querySelector(".mensaje");
    contenidoTextarea.value = "";
}

function cambiarDisplay() {
    var valor = "flex";
    var contenidoCheck = document.querySelector(".mensaje").value;
    var bloqueSecundario = document.getElementById("b-secund");
    var bloqueResultado = document.getElementById("b-result");

    if (contenidoCheck !== "") {
        bloqueResultado.style.display = valor;
        bloqueSecundario.style.display = "none";
    } else {
        bloqueResultado.style.display = "none";
        bloqueSecundario.style.display = valor;
    }
}

var btnEncriptar = document.querySelector(".btn-encriptar");
btnEncriptar.addEventListener('click', function (event) {
    event.preventDefault();
    Encriptar();
});

var btnDesencriptar = document.querySelector(".btn-desencriptar");
btnDesencriptar.addEventListener('click', function (event) {
    event.preventDefault();
    Desencriptar();
});

var contenidoCopiado;

var btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener('click', function(event) {
    event.preventDefault();
     contenidoCopiado = Copiar();

});

var btnPegar = document.querySelector(".btn-pegar");
btnPegar.addEventListener('click', function(event){
    event.preventDefault();
    Pegar(contenidoCopiado);

});

var btnLimpiar = document.querySelector(".btn-limpiar");
btnLimpiar.addEventListener('click', function(event){
    event.preventDefault();
    LimpiarTextarea();
});

