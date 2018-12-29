const mat = {};

function sumar(x1,x2){
    return x1+x2;
}

function restar(x1,x2){
    return x1-x2;
}

function multiplicar(x1,x2){
    return x1*x2;
}

function dividir(x1,x2){
    if(x2 == 0){ console.log('No se puede dividir x 0'); return false; }
    return x1/x2;
}

mat.s = sumar;
mat.r = restar;
mat.m = multiplicar;
mat.d = dividir;

module.exports = mat; 