var elec = prompt("Dame la opción")
switch (elec) {
    case "1":
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
        if ((n1 % 2) == 0) {
            document.write("El númeor es par")
        }
        else{
            document.write("El número es impar")
        }
        break;

    case "3":
        var suma = 0;
        for (let index = 0; index <= 100; index++) {
            suma+= index;
        }
        document.write(suma);
        
        break;
    default:

        break;
}


