/**
 * Inicializa o servidor Express.Js e conecta ao banco de dados PostgreSQL pelo Prisma.
 */
import app from "./libs/app";
import "./libs/db";

const port = 3000;
app.listen(port, () => {
  console.log(`API escutando na porta ${port}`);
});
