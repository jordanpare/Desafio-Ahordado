function habilitar(){
    text =document.getElementById("letra").value;
    val =0;
    if (text == "") {
        val++;
        }
    if(val == 0){
        document.getElementById("comprobar").disabled = false;
        }else{
            document.getElementById("comprobar").disabled = true;
        }

    }

document.getElementById("letra").addEventListener("keyup",habilitar);
