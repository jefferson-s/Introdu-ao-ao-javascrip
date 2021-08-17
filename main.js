
function funcaochange(elemento){
    console.log(elemento.value);
}

function load(){
    alert("página carregada");
}
function clicou(){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://globallabs.academy/");
    //window.location.href = "https://instagram.com.br";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML =  "Obrigado por passar o mouse";
    //alert ("Trocar texto");
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse";
    //document.getElementById("mousemove").innerHTML =  "Passe o mouse aqui";
    //alert ("Trocar texto");
}

/*
function soma (n1, n2){
    return n1 + n2;
}
alert(soma(5,10));

/*
function validaidade (idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaidade(idade));

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
/*
var d = new Date();
    alert(d.getDate()"/"+ d.getMonth()++);
*/

/*
var count;
for (count = 0 ; count <= 5; count++)
{
    alert (count);
}
*/
/*
var count = 0;
while (count <= 5){
    console.log (count);
    alert (count);
    count++;
}*/

/*
var idade = prompt("Qual sua idade");
if (idade > 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}
*/
//var fruta = [{ nome:"maça", cor: "vermelha"}, { nome:"uva", cor: "roxa"}]
//console.log (fruta.nome);
//alert (fruta [1].nome);


//var fruta = { nome:"maça", cor: "vermelha"}
//console.log (fruta.nome);
//alert (fruta.cor);
//var lista = ["maça","pêra","laranja"];
//lista.push ("uva");
//lista.pop ();
//console.log (lista.reverse);
//alert (lista[1]);
//console.log(lista.toString());
//console.log (lista.join("-"))

//var nome = "Jefferson Kadaj";
//var idade = 36;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo" + nome);
//console.log (nome);
//console.log (idade + idade2);
//console.log (frase.replace ("Japão", "Brasil"));
