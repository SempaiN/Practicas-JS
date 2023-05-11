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
        n1 = parseInt(prompt("Dime el número 1"))
        n2 = parseInt(prompt("Dime el número 2"))
        n3 = parseInt(prompt("Dime el número 3"))
        var nums = [n1,n2,n3];
        var max = 0;
        var min = 999999999999999;
        for (let index = 0; index < nums.length; index++) {
            if (nums[index] > max) {
                max = nums[index];
            }
            if (nums[index]< min) {
                min= nums[index];
            }
        }
        document.write("El numero más grande es el " + max+ " El número más pequeño es el " + min)
        break;
    case "6":
        var nums = [];
        var num;
        var cont = 0;
        var max = 0;
        var min = 999999999999999;
        do {
            num = parseInt(prompt("Dame un número"));
            if (num <= 0 ) {
                break;
            }
            nums[cont] = num;
            cont++;
        } while (num > 0);
        for (let index = 0; index < nums.length; index++) {
            if (nums[index] > max) {
                max = nums[index];
            }
            if (nums[index]< min) {
                min= nums[index];
            }
        }
        
        document.write("El número mayor es " + max)
        document.write("El número menor es " + min)
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

    case "9":
        var dineroInicial,dineroFinal,original,conversion;
        original = parseInt(prompt("Dime la divisa original 1.- Euro 2.- Dolar 3.- Libra"))
        conversion = parseInt(prompt("Ahora dime a que lo quieres convertir 1.- Euro 2.-Dolar 3.- Libra"))
        dineroInicial = parseFloat(prompt("Dame el dinero que quieres converir"))
        
        if (original == 1 && conversion == 2) {
            dineroFinal = dineroInicial * 1.11;
            document.write(dineroInicial + "€ = " + dineroFinal+ "$" )
        }

        if (original == 1 && conversion == 3) {
            dineroFinal = dineroInicial * 0.84
            document.write(dineroInicial + "€ = " + dineroFinal + "£")
        }

        if (original == 2 && conversion == 1) {
            dineroFinal = dineroInicial * 0.90;
            document.write(dineroInicial + "$ = " + dineroFinal+ "€" )
        }

        if(original == 2 && conversion == 3){
            dineroFinal = dineroInicial * 0.76;
            document.write(dineroInicial + "$ = " + dineroFinal+ "£")
        }
        
        if(original == 3 &&  conversion == 1){
            dineroFinal = dineroInicial*1.199;
            document.write(dineroInicial + "£ = " + dineroFinal+ "€")
        }

        if (original == 3 && conversion == 2) {
            dineroFinal = dineroInicial  * 1.32
            document.write(dineroInicial + "£ = " + dineroFinal+ "$")
        }
        break;        
        
    case "10":
        var mensaje = confirm("¿Descendente o ascendente? Descendente == aceptar")
        var a = parseInt(prompt("Dame el primer número"))
        var b = parseInt(prompt("Dame el segundo número"))
        if (mensaje && a > b) {
            for (let index = a; index >= b; index--) {
                
                document.write(a + ",");
                
            }
        }
        if (mensaje && a < b) {
            for (let index =b ; index >= a; index--) {
                document.write(index+",")
            }
        }
        if (!mensaje && a > b) {
            for (let index = b; index <=  a; index++) {
                document.write(index + ",")
                
            }
        }
        if(!mensaje && b>a){
            for (let index = a; index <=b; index++) {
                document.write(index+",")   
            }
        }
        break;
    case 11:
        for (let index = 50; index <= 100; index += 5) {
            document.write(index + ",");
        }
        break;
    case "12":
        var multi = parseInt(prompt("Dame el primer número"));
        var numero1 = parseInt(prompt("Ingresa un número 1"));
        var numero2 = parseInt(prompt("Ingresa un número 2"));
        
        document.write("Los múltiplos de " + multi + " entre " + numero1 + " y " + numero2 + " son: ");
        for (let i = numero1; i <= numero2; i++) {
            if (i % multi === 0) {
                document.write(i + ", ");
            }
        }
        break;
}

     
        

                
                
           

    