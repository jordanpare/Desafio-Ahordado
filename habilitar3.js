function habilitar3(){
    text =document.getElementById("letra1").value;
    val =0;
    if (text == "") {
        val++;
        }
    if(val == 0){
        document.getElementById("btn3").disabled = false;
        }else{
            document.getElementById("btn3").disabled = true;
        }
    }
document.getElementById("letra1").addEventListener("keyup",habilitar3);
