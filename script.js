// Se le pide usuario que se registre
let nombre = prompt('ingrese su nombre');
  console.log(nombre);
let apellido = prompt('ingrese apellido');
  console.log(apellido);
let nombreApellido = nombre + " " + apellido;
  console.log(nombreApellido);
  alert("¡Hola bienvenido" + " " + nombre + " " + apellido + "!");

// se le pide al usuario ingresar un nemro y se le suma 7
alert("PRIMER EJERCICIO")
let numero = parseInt(prompt("Porfavor ingresa un número"));
for (let i = 7; i <= 14; i++) {
  let resultado = numero + i;
  console.log(numero + " + " + i + " = " + resultado);
  alert(resultado);
}
// se le pide al usuario que ingrese palabras para formar una oración
alert("SEGUNDO EJERCICIO")
let entrada = prompt("Ingresa una palabra para formar una oración o'ESC' si no desea realizar la oración");
while(entrada != "ESC" ){
    alert("El usuario ingresó\n"+ entrada);
    otro = prompt("Ingresa otra palabra o 'ESC' para salir");
    if(otro == "ESC" || otro == "esc"){
      break;
    }else{
      entrada = entrada + ' ' + otro
    }
}
// se le pide al usuario que iongrese un numero para que visualice le numero 
//de veces que le saldra el mensaje final
alert("TERCER EJERCICIO")
let numeroVeces = parseInt(prompt("Porfavor ingresa un número para ver su saludo final"));
for (let i = 1; i <= numeroVeces; i++) {
  console.log("¡Gracias por participar!");
  alert("¡GRACIAS POR PARTICIPAR!");
}
