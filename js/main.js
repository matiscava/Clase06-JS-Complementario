const personas= [];
let agregar=true;

class Sujeto{
    constructor(nombre,apellido,altura){
        this.nombre=nombre.toLowerCase();
        this.apellido=apellido.toLowerCase();
        this.altura=altura;
    }
    datos(){
        console.log(this.nombre+" "+this.apellido+" mide "+(parseFloat(this.altura)/100).toFixed(2)+" mts");
    }
}
function medida(numero){
    numero=parseInt(prompt("Ingrese su altura en centimetros"));
    while(isNaN(numero)){
        if (isNaN(numero)){
            numero=parseInt(prompt ("Ingrese su altura en centimetros usando numeros"));
        } else {
            break;
        };
    };
    return numero;
}
//TOMAR DATOS Y COMPLETAR EL ARRAY
do{
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let altura;
    altura = medida(altura);
    let persona = new Sujeto(nombre,apellido,altura);
    persona.datos();
    personas.push(persona);
    agregar = confirm("¿Quiere agregar otra persona?");

}while(agregar != false)


personas.sort(function(a,b){
    return a.altura - b.altura;
});
console.log("Array ordenado del más bajo al mas alto");
console.log(personas);

