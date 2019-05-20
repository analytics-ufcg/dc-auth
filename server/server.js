const express = require("express");
const bodyParser = require("body-parser");
const logger = require("heroku-logger");
const cors = require("cors");
const passport = require("passport");

const auth = require("./routes/api/auth");
const usuarios = require("./routes/api/usuarios");

const app = express();
var db = require("./models/index");

const corsOption = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["authorization"]
};
app.use(cors(corsOption));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(bodyParser.json());

// Testa conexão com o BD
db.sequelize
  .authenticate()
  .then(() => {
    logger.info("Conexão com BD estabelecida com sucesso.");
  })
  .catch(err => {
    logger.error("Não foi possível conectar com o BD: ", err);
  });

// Usar as rotas
app.use("/api/usuarios", usuarios);
app.use("/api/auth", auth);

// Set static folder
app.use(express.static("dist"));

const port = process.env.PORT || 5000;

app.listen(port, () => logger.info(`Servidor rodando na porta ${port}`));
