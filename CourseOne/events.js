var max_number = 100;
var min_number = 1;
var secret_number = Math.random()*(max_number-min_number)+min_number;

var secret_number_int = parseInt(secret_number);

console.log(secret_number_int);

var mensaje = "Coloca el numero magico"
var numero_usuario = 0;
var numero_usuario_int = 0;
while(true){
  numero_usuario = prompt(mensaje,"0");
  numero_usuario_int = parseInt(numero_usuario);
  if(numero_usuario == 0){
    break;
  }
  if(numero_usuario_int == secret_number_int){
    alert("Adivinaste el número secreto");
    break;
  }else if(numero_usuario_int < secret_number_int){
    mensaje = "El numero que ingresaste es menor que el numero mágico"
  }else{
    mensaje = "El numero que ingresaste es mayor que el numero mágico"
  }
  
}