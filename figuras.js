//Codigo del cuadrado
console.group('Cuadrado');
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrado = perimetroCuadrado * perimetroCuadrado;
console.log(`El area del cuadrado es: ${areaCuadrado} cm cuadrados`);
console.groupEnd();

//Codigo del Triangulo
console.group('Triangulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y la base es de: ${baseTriangulo} cm `);
console.log(`La altura del triangulo es: ${alturaTriangulo} cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del triangulo es: ${areaTriangulo} cm cuadrados `);
console.groupEnd();

//Codigo del Circulo
console.group('Circulo');
const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo} cm`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es: ${diametroCirculo} cm`);

const pi = Math.PI;
console.log(`El valor de pi es: ${pi}`);

const perimetroCirculo = diametroCirculo * pi;
console.log(`El perimetro del circulo es: ${perimetroCirculo} cm`);

const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log(`El area del circulo es ${areaCirculo} cm cuadrados`);
console.groupEnd();




// Funciones para que sean dinamicos los valores
//Funciones Cuadrado
function perimetroCuadrado1 (lado) {
    return lado * 4;
}

function areaCuadrado1 (lado) {
    return lado * lado;
}

//Funciones Triangulo
function perimetroTriangulo1 (lado1, lado2, base) {
    return (Number(lado1) + Number(lado2) + Number(base));
}

//Lo mismo de arriba solo que en funcion tipo flecha
//let perimetroTriangulo2 = (lado1, lado2, base) => {lado1 + lado2 + base};

function areaTriangulo1 (base, altura) {
    return (base * altura) / 2;
}

//Funciones Circulo
function perimetroCirculo1 (radio) {
    return (radio * 2) * Math.PI;
}

function areaCirculo1 (radio) {
    return (radio * radio) * Math.PI;
}

//Este es un ejemplo de funcion de flecha
let areaCirculo2 = radio => {(radio * radio) * Math.PI};



//Funcion para la altura de uin triangulo isosceles

function alturaIsosceles (lados, base) {
   
    if (lados !== base) {
        alert('Es un triangulo Isosceles.');
    } else{
        alert('No es un triangulo isosceles.');
    };
  

    let resultado =  lados **2 - (base **2) / 4;
    return Math.sqrt (resultado);
}



//AQui interactuamos con el Html
// Apartado del Cuadrado
function calcularPerimetroCuadrado () {
    let input = document.getElementById('inputCuadrado');
    let value = input.value;

    const perimetro = perimetroCuadrado1(value);
    alert(perimetro);
}

function calcularAreaCuadrado () {
    let input = document.getElementById('inputCuadrado');
    let value = input.value;

    const area = areaCuadrado1(value);
    alert(area);
}

// Apartado Triangulo
function calcularPerimetroTriangulo () {
    const input = document.getElementById('inputLado1');
    const lado1 = input.value

    const input2 = document.getElementById('inputLado2')
    const lado2 = input2.value

    const input3 = document.getElementById('inputBase2');
    const base = input3.value


    const perimetroTrian = perimetroTriangulo1(lado1, lado2, base);
    alert(perimetroTrian);
}

function calcularAreaTriangulo () {
    const input = document.getElementById('inputLado1');
    const lado1 = input.value

    const input2 = document.getElementById('inputLado2')
    const lado2 = input2.value

    const input3 = document.getElementById('inputBase2');
    const base = input3.value

    const input4 = document.getElementById('inputAltura')
    const altura = input4.value

    const areaTrian = areaTriangulo1(base, altura);
    alert(areaTrian);
}

//Apartado Circulo
function calcularPerimetroCirculo () {
    const input = document.getElementById('inputRadio');
    const radio = input.value

    const perimetroCir = perimetroCirculo1(radio);
    alert(perimetroCir);
}

function calcularAreaCirculo () {
    const input = document.getElementById('inputRadio');
    const radio = input.value

    const areaCirculo = areaCirculo1(radio);
    alert(areaCirculo);
}

//Apartado triangulo isosceles
function calcularAlturaIsosceles () {
    const input = document.getElementById('inputLados');
    const lados = input.value

    const input2 = document.getElementById('inputBase');
    const base = input2.value

    const alturaIsosceles1 = alturaIsosceles (lados, base);
    alert(alturaIsosceles1);
}