var elec = prompt("Dame la opción")
switch (elec) {
    case "1":
        function mayor() {
            var n1, n2, n3;
        n1 = prompt("Dime el número 1")
        n2 = prompt("Dime el número 2")
        n3 = prompt("Dime el número 3")

        if (n1 > n2 && n1 > n3) {
            document.write("El número mayor es " + n1)
        }
        else if (n2 > n1 && n2 > n3) {
            document.write("El número mayor es " + n2)
        }
        else if (n3 > n1 && n3 > n2) {
            document.write("El número mayor es " + n3)
        }
        }
        break;

    case "2":
        var mayor;
        var par;
        n1 = prompt("Dame el número y te daré datos sobre el");
        if (n1 >= 0) {
            document.write("El número es positivo")
        }
        else {
            document.write("El número es negativo")
        }
        document.write(" ")
        if ((n1 % 2) == 0) {
            document.write("El númeor es par")
        }
        else{
            document.write("El número es impar")
        }
        break;

    case "3":
        var suma = 0;
        for (let index = 1; index <= 100; index++) {
            suma+= index;
        }
        document.write(suma);
        break;
    
    case "4":
        var empieza = parseInt(prompt("Introduce el número"));
        var suma = 0;
        for (let index = empieza; index < empieza+100;index ++){
            suma+=  index;
        }
        document.write(suma)
        break;

    case "5":
        n1 = prompt("Dime el número 1")
        n2 = prompt("Dime el número 2")
        n3 = prompt("Dime el número 3")
        var nums = [n1,n2,n3];
        nums.sort;
        document.write("El numero más grande es el " + nums[2] + " El número más pequeño es el " + nums[0])
        break;
    case "6":
        var nums = [];
        var num;
        var cont = 0;
        do {
            num = parseInt(prompt("Dame un número"));
            if (num <= 0 ) {
                break;
            }
            nums[cont] = num;
            cont++;
            
        } while (num > 0);
        nums.sort;
        var largo = nums.length;
        document.write("El número mayor es " + nums[largo-1] + " El número menor es el " + nums[0])
        break;
    case "7":
        var cont = 0;
        var temperaturas = [];
        do {
            var temperatura = parseInt(prompt("Dame la temperatura en Farenheit"));
            if (temperatura == 999) {
                break;
            }
            temperaturas[cont] = (temperatura-32) * 5/9;
            document.write(temperaturas[cont] + " , ")
            cont ++;

        } while (temperatura != 999);
        break;

    case "8":
        var kmh = parseInt(prompt("Dame la temperatura en km/h"));
        var ms = kmh/3.6;
        var distancia = parseInt(prompt("Dame la distancia"))
        document.write("Haces  " + + distancia*ms + " metros")
        break;
        default:

        break;
}


