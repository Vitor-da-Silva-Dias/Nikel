const nome = "Vitor Dias";
let nome2 = "";
let pessoaDefault = {
    nome: "Vitor Dias",
    idade: "30",
    ocupação: "estudante"
}

let nomes = ["Vitor Dias", "Maria Silva", "Pedro Silva"];
let pessoas = [
    {
        nome: "Vitor Dias",
    idade: "30",
    ocupação: "estudante"
    },
    {
         nome: "Maria Silva",
        idade: "25",
        ocupação: "UX/UI designer"
    }
];

function alterarNome(){
    nome2 = "Maria Silva";
    console.log("Valor alterado: ");
    console.log(nome2);
}

function recebeEalteranome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome: ");
    console.log(nome2);
}


function imprimirPessoa(pessoa){
console.log("Nome: ");
console.log(pessoa.nome);

console.log("Idade: ");
console.log(pessoa.idade);

console.log("Ocupação: ");
console.log(pessoa.ocupação);
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}

function imprimirPessoas(){
    console.log("-------------IMPRIMIR PESSOAS------------");
    pessoas.forEach((item) => {

        console.log("Nome: ");
        console.log(item.nome);

        console.log("Idade: ");
        console.log(item.idade);

        console.log("Ocupação: ");
        console.log(item.ocupação);
    }
    )
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    ocupação: "Porteiro"
});

console.log(pessoas);

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
    
 //       nome: "Maria Silva",
   //     idade: "25",
     //   ocupação: "UX/UI designer"
    
//});

//recebeEalteranome("João Silva Pereira");
//recebeEalteranome("Maria Silva");

//alterarNome();