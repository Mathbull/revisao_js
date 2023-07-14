function funcaoChange(elemento){
    console.log(elemento.value)

}

/*
function load(){ // para quando a página carregar
    alert("Abrindo a página")
}
*/

/*
function trocar(elemento){ // passei o mouse no <p> com o id especifico q gerou uma injeção de html
    //document.getElementById("mousemove").innerHTML = "<h2>obrigado por passar a mouse</h2>"
    elemento.innerHTML = "<h3>Passou o muse</h3>"
    
}

function voltar(elemento){ //retirei o mouse que gerou outra injeção de html, no caso para a que já estava
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui" // podemos tbm passar o proprio elemento
}
*/


/*
function redirecionar(){ // formar de redirecionar atravez de JS, sendo duas foras de fazer isso:
    window.open(`https://github.com/Mathbull/revisao_js`) // cria uma nova janela
    window.location.href = `https://github.com/Mathbull/revisao_js` // abre na msm janela
}
*/

/*
function clicou(){ // obtemnto elemento pelo seu id na tag para injetara html
    document.getElementById("agradecimento").innerHTML = `<b>Você clicou</b>` ;
    //console.log(document.getElementById("agradecimento"))
}
*/


/*
function clicou(){ /// onclick para chamar função com alerta
    alert("Obrigado por clicar")
}
*/



// conceitos Básicos de função, var, varaiavel local e global, prompt:
/*
var n1 = 4;
var n2 = 2;
function soma (){
    return n1 + n2;
};

console.log(soma())
var validar = 0


function validaIdade(idade){
    
    if (idade >=18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual sua idade");
console.log(validar);
*/
