console.log("Hola");
let numero=25;

console.log("El numero es ",numero);
console.log(`El numero es ${numero}`);

let nombre="Luna";
console.log(`El nombre es ${nombre}`);

let bulean=true;
console.log(`La variable es ${bulean}`);

let vacia; 
console.log(`La variable vacia es ${vacia}`);

/*let res=numero+5;
console.log(`El resultado de la resta es ${res}`);*/

console.log(`El resultado de la resta es ${numero+5}`);


window.alert("ESto es una alerta");
let estado=window.confirm("bla bla...");
console.log(`la ventana arrojo ${estado}`);

/*let num1=window.prompt("Digite el primer número");
let res=numero+parseInt(num1);
console.log(`El resultado es ${res}`);*/

/*let num=window.prompt("Digite el primer número");
let num2=window.prompt("Digite el segundo");
let sum=num+num2+parseInt(num);
*/
//condicionales

/*if(num>num2){
    console.log(`El numero mayor es ${num}`);
}
else{
    console.log(`El numero mayor es ${num2}`);
}*/

//Operador ternario

/*let nummayor=(num>num2)
?`El numero mayor es ${num}`
:`El número mayor es ${num2}`

console.log(nummayor);

//Condicional con condición compuesta



let usuario=window.prompt("Digite su usuario");
let passwor=window.prompt("Digite su contraseña");

if(usuario== "Luna" && passwor=="lll") {
    alert("Bienvenido");
} 
else if(usuario=="Luna" && passwor!="ll"){
    alert("Revise su contraseña");
} 
else if(usuario!="luna" && passwor=="lll"){
    console.log=window.alert("Verifique su correo");
}
else if(usuario!="lun" && passwor!="llp"){
    console.log=window.alert("CRdenciales incorrectas");
}

let num1=parseInt(prompt("Ingrese el Primer numero")); 
let num2=parseInt(prompt("Ingrese el Segundo numero")); 
    let operacion=prompt("Digite la operacion que quiere realizar"); 
    switch(operacion){ case 'multiplicar': console.log(`el resultado de la multiplicacion es ${num1*num2} `); 
    break; 
    case 'sumar': console.log(`El resultado de la suma es ${num1+num2}`); 
    break; 
    case 'restar': console.log(`El resultado de la resta es ${num1-num2}`); 
    break; 
    case 'dividir': console.log(`El resultado de la divison es ${num1/num2}`); 
    break;
    case `potenciar`: console.log(`El resultado de la potenciacion es ${Math.sqrt(num1)}`);
    break;
}

 for (i=0;i<=5;i++){
    console.log("Hola soy Luna");
 }
*/

let repetir=1;
while(repetir=1){
    console.log("Hola");
repetir=prompt("Para conyinuar digita 1, 2 para salir");
}
