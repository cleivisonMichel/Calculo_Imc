const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
e.preventDefault();
const inputPeso = e.target.querySelector('#peso');
const inputAltura = e.target.querySelector('#altura');

const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);

if (!peso){
    setResultado('Peso invalido', false)
    return;
}

if (!altura){
    setResultado('Altura invalido', false)
    return;
}

// Calcular o Imc
const imc = getImc(peso, altura);

const nivelImc = getNivelImc(imc)

const msg = `Seu IMC é ${imc} (${nivelImc}).`;

setResultado(msg, true);

});

//Condição
/*
menos que 18,5 Abaixo do peso
Entre 18,5 e 24,9 : Peso normal
entre 25 e 29,9 :Sobrepeso
entre 30 e 34,9 : Obesidade grau 1
entre 35 e 39,9 : Obesidade grau 2
Mais do que 40 : Obesidade grau 3 */
//função cria o Nivel imc
function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];
if(imc >= 39.9) return nivel[5]
if(imc >= 34.9) return nivel[4]
if(imc >= 29.9) return nivel[3]
if(imc >= 24.9) return nivel[2]
if(imc >= 18.5) return nivel[1]
if(imc < 18.5) return nivel[0]

}

// função calcular Imc
function getImc(peso, altura){
const imc = peso / altura ** 2;
return imc.toFixed(2);
}




//Criar um paragrafo
function criaP(){
    const p = document.createElement('p');
    return p;
}  

// função que retorna uma mensagem
function setResultado (msg, isValide){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValide){
         p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p)
}

