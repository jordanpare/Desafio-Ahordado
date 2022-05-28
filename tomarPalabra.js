//JS NO USADO
function traer(array){
    const palabras = ['ESCORPION', 'LENOVO', 'ALFA', 'NORTE', 'GENESIS', 'JAVASCRIP'];
    let nombreLStore= localStorage.getItem('palabraG');
    if(nombreLStore === null){
        alert('Aun no escribio una Palabra');
    }else{
        palabras.push(nombreLStore);
        alert(palabras); 
    }
    return palabras;
}
