const nombre = "Pablo";

const texto = "Hola, buenos 'días'";
console.log(texto);

const numero = 2;

const defineFalse = false;

const mayorQue = 2 < 1;
console.log(mayorQue);


const arregloNombre = ['Pablo', 'Daniel', 'Martin', 'Camilo'];

console.log(arregloNombre[2]);

const objetoNombre = {
    edad: 20,
    nombre: 'Pablo',
    carro:{
        modelo: 2020, 
        marca: 'Mazada',
    }
}

console.log(objetoNombre.edad);

function hola(){
    console.log('Hola');
}

hola();

for(var i = 0 ; i < 10 ; i++){
    function mostrar(){
        alert("Hola")[i];
    }
}
