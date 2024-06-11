# Biblioteca Virtual

Este é um simples script em JavaScript para gerenciar uma biblioteca virtual. Com este script, você pode adicionar livros à sua biblioteca, removê-los e listar todos os livros disponíveis. Cada livro pode ser caracterizado por seu nome, autor, tamanho (em páginas) e gênero.

## Como usar

1. Execute o script em um ambiente JavaScript (por exemplo, no Node.js).
2. Siga as instruções fornecidas no console.

### Adicionar um livro

Digite o nome do livro, em seguida, forneça o tamanho (em páginas), o nome do autor e, por fim, o gênero do livro quando solicitado.

### Remover um livro

Digite 'del' para excluir um livro da biblioteca. Você será solicitado a fornecer o nome do livro que deseja remover.

### Listar todos os livros

Digite 'sair' a qualquer momento para listar todos os livros presentes na biblioteca e encerrar o programa.

## Exemplo de uso:

```
Bem vindo(a) a Biblioteca Virtual da Mari!
Digite o nome do livro que deseja adicionar:
> Dom Quixote
Qual o tamanho do seu livro (páginas)?
> 800
Nome do Autor(a):
> Miguel de Cervantes
Gênero do livro:
> Romance
Digite 'SAIR' para sair ou digite o nome do próximo livro:
Deseja excluir algum livro? Digite 'del'.
> del
[ { nome: 'Dom Quixote', tamanho: '800', autor: 'Miguel de Cervantes', genero: 'Romance' } ]
Digite o nome do livro que deseja excluir:
> Dom Quixote
Livro removido com sucesso!
Digite 'SAIR' para sair ou digite o nome do próximo livro:
Deseja excluir algum livro? Digite 'del'.
> sair
```

Divirta-se explorando sua biblioteca virtual com este script!
