import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import router from "./routes.js"

// En la guía aquí es donde se encuentran las variables de entorno
// pero tenerlas en texto quemado no es buena práctica, así que...
// estoy usando dotenv para PORT y para el JWT_SECRET

dotenv.config()

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
})