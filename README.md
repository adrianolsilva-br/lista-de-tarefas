# Lista de Tarefas
Aplicação de lista de tarefas desenvolvida com Next.js, React, TypeScript, Jest e Testing Library.

O projeto permite adicionar e excluir tarefas, além de exibir a quantidade de tarefas cadastradas.

# Tecnologias utilizadas
- Next.js
- React
- TypeScript
- Jest
- Testing Library
- CSS Modules

# Instalação
Clone o projeto e acesse a pasta:

```bash
git clone https://github.com/adrianolsilva-br/lista-de-tarefas
cd lista-de-tarefas
```
# Instale as dependências:

```bash
npm install
```

# Executando o projeto
Para iniciar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Após iniciar, acesse no navegador:
http://localhost:3000

# Executando os testes
Para executar todos os testes:

```bash
npm test
```
Os testes foram desenvolvidos utilizando Jest e Testing Library.

# Testes realizados
O projeto possui testes para:

- Renderização do componente NovaTarefa;
- Validação e preenchimento do campo de nova tarefa;
- Existência e configuração do botão de submissão;
- Renderização do componente ItemLista;
- Exibição do nome e ID da tarefa;
- Renderização das tarefas na página principal;
- Exibição da mensagem quando a lista está vazia;
- Funcionamento do hook useContadorDeTarefas;
- Verificação dos valores retornados pelo hook;
- Atualização do valor do hook quando o total de tarefas é alterado.

# Estrutura dos testes
Os testes de componentes utilizam recursos da Testing Library, como:

- render()
- screen
- userEvent

O hook useContadorDeTarefas é testado de forma isolada utilizando:

- renderHook()
- waitFor()

Os testes verificam principalmente a renderização correta dos elementos e os valores retornados pelo hook.

# Comandos principais

```bash
npm install	: Instala as dependências do projeto
npm run dev	: Inicia o projeto em modo de desenvolvimento
npm test	: Executa os testes
```

# Observação
Os dados das tarefas são mantidos em memória para fins de desenvolvimento e testes. O projeto não utiliza uma API externa ou banco de dados para armazenamento das tarefas.
