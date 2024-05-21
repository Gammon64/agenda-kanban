/**
 * Configura o servidor Express.js
 */
import express from "express";
import status_route from "../routes/status";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Configuração do CORS
const whitelist = ["http://localhost:3000", "http://localhost:3001"];
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else callback(new Error("Not allowed by CORS"));
  },
};

// Configuração do Express.js
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/", status_route);

// Rota de boas vindas
app.get("/", (req, res) => {
  res.send("Boas vindas!");
});

export default app;
