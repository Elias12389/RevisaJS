//Exercício 01

//MODIFICAR O TEXTO QUE CONSTA NA TAG

//GUARDAR O ELEMENTO DENTRO DA VARIÀVEL
const txt = document.querySelector("#tituloExemplo1");

//PEGANDO O BOTÃO
const btn = document.querySelector("#btnAlterarTexto");

//PEGANDO O BOTÃO RESTAURAR/RESET
const btnReset = document.querySelector("#btnRestaurarTexto");

//addEventListener significa: "FICAR OBSERVANDO/ESCUTANDO ALTERAÇÂO NO PADRÃO DO ELEMENTO"

btn.addEventListener("click", () => {
  txt.textContent = "ALTEROU";
});

//quando clicar ele restaurar
btnReset.addEventListener("click", () => {
  txt.innerHTML = "Texto original";
});

//Exercicio 02
const caixaCor = document.querySelector("#caixaCor");
const btnRestaurarCor = document.querySelector("#btnMudarCor");

btnRestaurarCor.addEventListener("click", () => {
  //Seleciona qual class quero remover o estilo
  caixaCor.classList.remove("alert-primnary");
  caixaCor.classList.add("alert-success");
  caixaCor.textContent = "Minha aparencia mudou!!!";
});

//Exercicio 03
//CAMPO DE TEXTO (jeito do professor/mais "dificil")
/*const inputNome = document.querySelector("#nomeAluno");*/
//BTN
const btnSaudar = document.querySelector("#btnSaudar");
//pegar onde vou mostrar a mensagem
const msgAluno = document.querySelector("#mensagemAluno");

btnSaudar.addEventListener("click", () => {
  //Jeito mais fácil, colocando para atribuir o valor na variável assim que a função for executada
  const nome = document.querySelector("#nomeAluno").value;
  const nomeSemEspacos = nome.trim();
  if (nomeSemEspacos === "") {
    mensagemAluno.textContent = "Digite seu nome para continuar";
    mensagemAluno.classList.remove("alert-light");
    mensagemAluno.classList.add("alert-danger");
    //Essencial esse return para que o código entenda que ele deve sair da função assim que acabar, dessa forma aplicando o estilo de fato.
    return;
  }

  mensagemAluno.classList.remove("alert-danger");
  mensagemAluno.classList.add("alert-sucess");
  mensagemAluno.textContent = `Olá, ${nomeSemEspacos}! seja bem-vindo`;
});
