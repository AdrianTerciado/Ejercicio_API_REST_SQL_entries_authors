const express = require("express");
const app = express();
const port = 3000;

const entriesRoutes = require("./routes/entries.routes");
const authorsRoutes = require("./routes/authors.routes")

//Middlewares
app.use(express.json());

// Importar middlwewares
const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// Rutas
// http://localhost:3000/
app.get("/", (req, res) => {
    res.status(200).send("Home!");
  });

//API
app.use('/api/entries',entriesRoutes);
app.use('/api/authors',authorsRoutes);

//app.use(error404);
app.use("*",error404); // Middleware que gestiona el error 404

// http://localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });