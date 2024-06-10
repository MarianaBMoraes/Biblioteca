let biblioteca = [];

let livros = {
  nome: "",
  tamanho: "",
  autor: "",
  genero: "",
};
var opcao = "";
let remover = "";

console.log("Bem vindo(a) a Biblioteca Virtual da Mari!");
console.log("Digite o nome do livro que deseja adicionar:");

process.stdin.on("data", function (data) {
  if (data.toString().trim().toLowerCase() == "sair") {
    console.log(biblioteca);
    process.exit();
  } else if (data.toString().trim().toLowerCase() == "del") {
    console.log(biblioteca);
    console.log("Digite o nome do livro que deseja excluir:");
    opcao = "del";
  } else {
    var entrada = data.toString().trim().toLowerCase();
    if (opcao === "del") {
      for (let i = 0; i < biblioteca.length; i++) {
        //livros.nome = biblioteca[i];
        if (biblioteca[i].nome.toLowerCase() === entrada) {
          biblioteca.splice(i, 1);
          console.log("Livro removido com sucesso!");
          break;
        }
      }
      console.log("Digite 'SAIR' para sair ou digite o nome do próximo livro:");
      console.log("Deseja excluir algum livro? Digite 'del'.");
      opcao = "";
    } else {
      if (!livros.nome) {
        livros.nome = entrada;
        console.log("Qual o tamanho do seu livro (páginas)?");
      } else if (!livros.tamanho) {
        livros.tamanho = entrada;
        console.log("Nome do Autor(a):");
      } else if (!livros.autor) {
        livros.autor = entrada;
        console.log("Genero do livro:");
      } else if (!livros.genero) {
        livros.genero = entrada;
        biblioteca.push(livros);
        livros = {};
        console.log(
          "Digite 'SAIR' para sair ou digite o nome do próximo livro:"
        );
        console.log("Deseja excluir algum livro? Digite 'del'.");
      }
    }
  }
});
