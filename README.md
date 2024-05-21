# Como iniciar

Após clonar o projeto, execute o comando `npm install` para instalar as dependências do projeto.

### Pronto para rodar

Comandos disponíveis:

- `dev`: inicia o servidor em modo **desenvolvedor**, reinicia ao aplicar alterações no código.
- `build`: compila o projeto em JavaScript na pasta **dist**.
- `start`: inicia o servidor em modo **produção** a partir do projeto compilado na pasta **dist**.

Uso:

```bash
npm run [comando]
# or
yarn [comando]
# or
pnpm [comando]
# or
bun [comando]
```

## Endpoints disponíveis

- `/api/status`: Retorna todos os status cadastrados.
- `/api/status/:id`: Retorna as informações de um status específico com base no ID fornecido.
- `/api/status`: Cria um novo status com base nos dados fornecidos no corpo da requisição.
- `/api/status/:id`: Atualiza as informações de um status específico com base no ID fornecido e nos dados fornecidos no corpo da requisição.
- `/api/status/:id`: Exclui um status específico com base no ID fornecido.
