/*Escucha de Eventos*/  
  document.addEventListener("DOMContentLoaded",load) // Se ocupa cuando NO quiero que [<script src="../js/script.js"></script>] tenga que estár ubicadp hasta el final del documento JS (como en el bootstrap) 

function load(){
    document.getElementById("mDatos").addEventListener("click",mostrarDatos);
    document.getElementById("temas").addEventListener("change",temaSeleccionado);
    /*
    var galeria = document.getElementsByClassName ("galeria");

    for(i in galeria){
        galeria[i].addEventListener("click", usuarios);
    }*/
    document.getElementById("encripta").addEventListener("click",encriptar);
}




function temaSeleccionado(){
    var articulos = document.getElementsByTagName("article");

    for(var i = 0; i < articulos.length; i++)
        articulos[i].style.display = "none";

 var valor = document.getElementById("temas").value;
 document.getElementById(valor).style.display="block";
}


                //Lo que haría la variable "valor"
//   switch(valor){
//       case 'datos':
//            document.getElementById(valor).style.display = "block";
//          break;
//        case 'if':
//            document.getElementById(valor).style.display = "block";
//            break;
//        case 'while':
//            document.getElementById(valor).style.display = "block";
//            break;
//        case 'for':
//            document.getElementById(valor).style.display = "block";
//            break;
//        case 'forin':
//            document.getElementById(valor).style.display = "block";
//            break;
//        case 'estilo':
//            document.getElementById(valor).style.display = "block";
//            break;
//       case 'prom':
//            document.getElementById(valor).style.display = "block";
//            break;
//      }

/* Opción Datos*/
function mostrarDatos(){
    var letra = document.getElementById("letra").value;
    var num = document.getElementById("n1").value;

    var f = fecha();


    var entero = parseInt(num);
    var flotante = parseFloat(num);

    var datos = "Caracter: " + letra + "<br/>Cadena: " + 
    letra + num + "<br/> Entero: " + entero + "<br/> Flotante: " + 
    flotante + "<br/> Operación: " + (entero + flotante) + "<br/>Fecha: " + f;

    //alert (datos);
    document.getElementById("resultado").innerHTML = datos;
}

function fecha(){
    var fec = new Date();
    return fec;
}

/* Opción If*/
function si(){
    var num = parseInt(document.getElementById("n2").value);

    var opc = document.getElementsByName("opcion");

        for (var i=0; i < opc.length; i++){
            if(opc[i].checked == true)
                var che = opc[i].value; 
        }

        alert(che);
    var res = 0;    
    switch(che){
        case 'a':
                var tipo = num % 2
                if(tipo == 0)
                    res = "Es un número par";
                else
                    res = "Es un número impar";    
                break;    

        case 'b':
                if(num >=18)
                    res = "Puedes votar";
                else 
                    res = "Aún no eres mayor de edad, no puedes votar";
                break;
    }
    
    document.getElementById("resultado").innerHTML = res;
}

/* Opción While*/
function factorialWhile(){
    var num = document.getElementById("n3").value;

    var fact = num;
    fact--; // <---- Aqui va ir restando 
            // num=6 entonces fact=5

    var datos = num + "! =";
    document.getElementById("etiqueta").innerHTML = datos;

    datos = num; // Para que no tenga el simbolo-> ! la variable datos
    while(fact > 1){
        num *= fact; // En el css vendría siendo num=num*fact; num va a ser igual a num*fact (6x5)// Entonces nos daría 30
                     // entons num=30
        datos += ' * ' + fact; //  En el css vendría siendo datos=datos + * + fact; 
                               //  Aquí va a concatenar lo que hay en la variable "datos" (num + "! =") más el * y más el fact (5)
        fact--;
    }

    datos += ' = ' + num;
    document.getElementById("res").value = datos;
}

/* Opción For*/
function factorial(){
    var num = document.getElementById("n4").value;
    
    var fact = num-1;

    var dato = num + "! = ";

    datos = num;
    while(fact > 1){
        num *= fact; 
        datos += ' * ' + fact;
        fact--;
    }

    res = dato + datos + '= '+ num;
    document.getElementById("resultado").innerHTML = res;
}

function arreglo() { 
    var semana = new Array('Domingo ','Lunes ','Martes ','Miercoles ','Jueves ','Viernes ','Sábado ');
    var num = parseInt(document.getElementById("n5").value);
    var datos = '';

    for(dia in semana){
        datos += semana[dia] + ',';
    }

    datos += '<br/>Día ' + num + ': ' + semana[num-1];
    document.getElementById("resultado").innerHTML = datos;
}

/* Opción Estilos*/

function verde(){
    document.getElementById("resultado").style.backgroundColor="#499749";
}
function azul(){
    document.getElementById("resultado").style.backgroundColor="#2e6da0";
}

function todo(){
    document.getElementById("resultado").classList.add("mas"); //Aquí le va agregar los estilos que están en la clase "mas" en css
}
function nada(){
    document.getElementById("resultado").classList.remove("mas");
    document.getElementById("resultado").style.backgroundColor="transparent";   
}
/* Opción Promedio*/

function promedio(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    var prom = (num1 + num2 + num3)/3;

    document.getElementById("resultado").innerHTML = prom;
}

/* Resolver con addEventListener
function usuarios(){
    document.getElementById("foto").src = "../img/" + this.name + ".png";
}*/

/* Resolver con paso de parametros */
function usuarios(nombreFoto){
    document.getElementById("foto").src = "../img/" + nombreFoto + ".png";
}

function encriptar(){
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("contraseña").value;
    var passEnc = sha256_digest(pass);    
    document.getElementById("contraseña").value = sha256_digest(document.getElementById("contraseña").value);
    var datos = "Usuario: " + user + "<br/>Contraseña: " + pass + "<br/>Contraseña Encriptada: " + passEnc;
    document.getElementById("resultado").innerHTML = datos;
}