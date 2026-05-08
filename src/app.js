import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
// TODO (ejercicio 4): importar movieRoutes y registrar la ruta /api/movies

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", userRoutes);
// TODO (ejercicio 4): app.use("/api/movies", movieRoutes);
app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => {
    res.send("API funcionando 🚀");
});

export default app;
