//código del cuadrado
console.group('cuadrado');
const ladoCuadrado = 5;

console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;

console.log(`El perimetro cuadrado es de ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado ** 2;

console.log(`El área del cuadrado es de ${areaCuadrado} cm2`);
console.groupEnd();

//código del triangulo
console.group('triangulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);

console.log(`La altura del triángulo mide ${alturaTriangulo}`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log(`El perimetro cuadrado es de ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(`El área del triangulo es de ${areaTriangulo} cm2`);
console.groupEnd();

//código del circulo
console.group('triangulo');
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log(`El radio del circulo es de ${radioCirculo}cm`);

console.log(`El diametro del ciruslo es de ${diametroCirculo}cm`);

console.log(`PI ${PI}`);

console.log(`El perimetro del circulo es de ${perimetroCirculo} cm`);

console.log(`El área del circulo es de ${areaCirculo} cm2`);
console.groupEnd();