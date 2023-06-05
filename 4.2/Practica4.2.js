function palindromo(cadena){
    var verda = false;
    var cont = 0;
    let arr1 =[];
    let arr2 =[];
    for (let index = 0; index < cadena.length; index++) {
        arr1[index] = cadena.charAt(index)
    }
    for (let index = cadena.length; index >= 0; index--) {
        arr2[cont] = cadena.charAt(index);
        cont++;
    }
    document.write(arr2)
    document.write(arr1)
   for (let index = 0; index < arr1.length; index++) {
        if (arr1[index] != arr2[index]) {
            return false;
        }
    }
    return true;
}
function remplazar(cadena){
    let frase = cadena.replace("á","a");
    frase = frase.replace("é","e");
    frase = frase.replace("ó","o");
    frase = frase.replace("í","i");
    frase = frase.replace("ú","u");
    return frase;
}

function anyos(fecha){
    let fechaBuena= fecha.split("/",3);
    let anyoNac=fechaBuena[2]
    var curDate = new Date();
    let anyoActu = curDate.getFullYear();
    return anyoActu-anyoNac;
}

function cumpleanyos(fecha){
    let fechaBuena= moment(fecha);
    var curDate = new Date();
    return curDate.diff(fechaBuena,'days')
}
var opcion = parseInt(prompt("Dame la opción"));
switch (opcion) {
    case 4:
        var cadena = "";
        var pedir = true;
        do {
            cadena+=prompt("Dime una cadena");
            pedir = prompt("Quieres aumentar la cadena?")
            if (pedir == "no") {
                pedir = false
            }
        } while (pedir);
        cadena = cadena.toUpperCase();
        document.getElementById("texto").innerHTML = cadena + "<br>" + cadena.length
        break;
    case 5:
            var cadena = prompt("dime una palabra y te dire si es un palindromo");
            if (palindromo(cadena)) {
                document.getElementById("texto").innerHTML ="Es un palindromo"

            }
            else{
                document.getElementById("texto").innerHTML = "no es un palindromo"

            }
            break;
    case 6: 
            let frase = prompt("Dame una frase con tildes");
            document.getElementById("texto").innerHTML = remplazar(frase);
            break;
    case 7: 
            var fecha = prompt("dame una fecha")
            document.getElementById("texto").innerHTML ="Tienes " + anyos(fecha) + " años"
            break;
    case 8:
        var fecha = prompt("dame una fecha")
        cumpleanyos(fecha);
    default:
        break;
}