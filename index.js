const imc= document.querySelector('#imc');
const peso= document.getElementById('peso').value;
const altura= document.getElementById('altura').value;

console.log(peso, altura)

imc.addEventListener('click', function(){
    const peso= document.getElementById('peso').value;
    const altura= document.getElementById('altura').value;
    const mostrar=document.querySelector('#mostrar');
    const img=document.querySelector('#img');
    const resultado=parseInt(peso)/parseInt(altura*altura);
    mostrar.textContent=resultado;
    console.log(resultado);

    if(resultado<18.5){
        img.src="./img/bajoPeso.jpg"
    }
    else if(resultado<=24.9){
        img.src="./img/pesoNormal.jpg"
    }
    else if(resultado<=29.9){
        img.src="./img/sobrepeso.jpg"
    }
    else if(resultado<=34.9){
        img.src="./img/obecidadaUno.jpg"
    }
    else if(resultado<=39.9){
        img.src="./img/obecidadDos.jpg"
    }
    else if(resultado>=40){
        img.src="./img/obecidadTres.jpg"
    }
});