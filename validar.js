
function esValido(c) {
    c = c.charCodeAt(0);
    return (c >= 65 && c <= 90) || (c == 32); // [A-Z ]
  }
  
  function validarEntrada(cadena) {
    for (var i = 0; i < cadena.length; i++) {
      if (!esValido(cadena[i])) {
        break;
      }
    }
    return i == cadena.length;
  }
    
  function validarTextarea(elem) {
    var txt = elem.value;
    if (!validarEntrada(txt)) {
      elem.classList.add('invalido');
        if((validarEntrada(txt))==false){
          alert("❗Solo letras Mayusculas y sin acentos");
          document.querySelector('#letra').value = '';
          }
    } else {
      elem.classList.remove('invalido');
    }
  }

function limpiarText (){
  var txt='';
  document.querySelector('#letra').value = '';
  validarEntrada(txt);
}
