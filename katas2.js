// comece a criar a sua função add na linha abaixo
function add(num1, num2){
    let resultado = num1 + num2
    return resultado
}
add(3 , 2)

// descomente a linha seguinte para testar sua função
// console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(a, x){
    let soma= 0
    for (i=1; i<=x; i++)
        soma+= add(a, 0)
        return soma    
}
multiply(5, 7)

// descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power (base, expoente){
    let quadrado = 1 
    for (x=1; x<= expoente; x++)
    quadrado*= multiply (base, 1)
    return quadrado
}
power(3, 4)
// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(f){
    let fatorial = 1;
    for(let i = 1; i<=f; i++)
      fatorial *= multiply(i, 1);
    return fatorial;  
}
factorial(6)

// descomente a linha seguinte para testar sua função
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');