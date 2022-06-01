
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}
const palabras = ['ESCORPION', 'LENOVO', 'ALFA', 'NORTE', 'GENESIS', 'JAVASCRIP'];
let nombreLStore= localStorage.getItem('palabraG');
if(nombreLStore === null){
    //alert('Aun no escribio una Palabra');
}else{
    palabras.push(nombreLStore);
}
const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos=0;
document.querySelector('#output').innerHTML =palabraConGuiones;
document.querySelector('#comprobar').addEventListener('click', function(){
    let haFallado = true;
    const letra= document.querySelector('#letra').value;
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            haFallado=false;
        }
    }
    if(haFallado){
        if(letra != ''){
            contadorFallos++;
            borraeOcultar(contadorFallos);
            if(contadorFallos ==7){
                alert(':( PERDISTE !!! La Palabra era: '+ palabra);
                if(alert){
                    document.getElementById("comprobar").disabled = true;
                    document.getElementById("nuevoJuego").disabled = false;
                }
            }            
        }        
    }else{
        if(palabraConGuiones.indexOf('_')< 0){
            document.querySelector('#ganador').style.display = 'flex';
            document.getElementById("comprobar").disabled = true;
            document.getElementById("nuevoJuego").disabled = false;
        }
    }    
    document.querySelector('#output').innerHTML =palabraConGuiones;
    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();
});

function borraeOcultar(contadorFallos){
    if(contadorFallos==1){
        const img = document.querySelector('#lintelImgDos');
        img.classList.remove("ocultar");
        const span = document.querySelector('#letraMala1');
        span.classList.remove("ocultar");
        let letraMala = document.getElementById('letra').value;
        document.querySelector('#letraMala1').innerHTML = letraMala;  
    }

    if(contadorFallos==2){
        const img = document.querySelector('#lintelImgTres');
        img.classList.remove("ocultar");
        const span = document.querySelector('#letraMala2');
        span.classList.remove("ocultar");
        let letraMala = document.getElementById('letra').value;
        document.querySelector('#letraMala2').innerHTML = letraMala;
    }

    if(contadorFallos==3){
        const img = document.querySelector('#lintelImgCuatro');
        img.classList.remove("ocultar");
        const span = document.querySelector('#letraMala3');
        span.classList.remove("ocultar");
        let letraMala = document.getElementById('letra').value;
        document.querySelector('#letraMala3').innerHTML = letraMala;
    }
    if(contadorFallos==4){
        const img = document.querySelector('#lintelImgCinco');
        img.classList.remove("ocultar");
        const span = document.querySelector('#letraMala4');
        span.classList.remove("ocultar");
        let letraMala = document.getElementById('letra').value;
        document.querySelector('#letraMala4').innerHTML = letraMala;
    }
    if(contadorFallos==5){
        const img = document.querySelector('#lintelImgSeis');
        img.classList.remove("ocultar");
        const span = document.querySelector('#letraMala5');
        span.classList.remove("ocultar");
        let letraMala = document.getElementById('letra').value;
        document.querySelector('#letraMala5').innerHTML = letraMala;
    }
    if(contadorFallos==6){
        const img = document.querySelector('#lintelImgSiete');
        img.classList.remove("ocultar");
        const span = document.querySelector('#letraMala6');
        span.classList.remove("ocultar");
        let letraMala = document.getElementById('letra').value;
        document.querySelector('#letraMala6').innerHTML = letraMala;
    }
   if(contadorFallos==7){
        const img = document.querySelector('#lintelImgOcho');
        img.classList.remove("ocultar");        
        const span = document.querySelector('#letraMala7');
        span.classList.remove("ocultar");
        let letraMala = document.getElementById('letra').value;
        document.querySelector('#letraMala7').innerHTML = letraMala;
    }
}
