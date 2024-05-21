import { Router } from "express";

/**
 * Endpoints para operaćões CRUD de status
 */
const status_route = Router();

/**
 * Busca todos os status.
 */
status_route.get("/status", async (req, res) => {
  try {
    // Busca todos os status
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar status");
  }
});

/**
 * Busca um status pelo ID
 */
status_route.get("/status/:id", async (req, res) => {
  try {
    // Busca um status pelo ID
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro interno ao buscar status");
  }
});

/**
 * Cria um novo status
 */
status_route.post("/status", async (req, res) => {
  try {
    // Cria um novo status
  } catch (error: any) {
    console.error(error);
    if (error.name === "ValidationError" || error.name === "CastError")
      res.status(400).send("Dados inválidos: " + error.message);
    else res.status(500).send("Erro interno ao criar status");
  }
});

/**
 * Atualiza um status pelo ID
 */
status_route.put("/status/:id", async (req, res) => {
  try {
    // Atualiza um status pelo ID
  } catch (error: any) {
    console.error(error);
    if (error.name === "ValidationError" || error.name === "CastError")
      res.status(400).send("Dados inválidos: " + error.message);
    else res.status(500).send("Erro interno ao atualizar status");
  }
});

/**
 * Exclui um status pelo ID
 */
status_route.delete("/status/:id", async (req, res) => {
  try {
    // Exclui um status pelo ID
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro interno ao excluir status");
  }
});

export default status_route;
