const Sequelize = require("sequelize");
const logger = require("heroku-logger");

// Models
const UsuarioModel = "./postgres/usuario.js";

if (!global.hasOwnProperty("models")) {
  const db = require("../config/keys").postgresURI;
  console.log(db)
  // Connect to Postgres
  const sequelize = new Sequelize(db, {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false,
    dialectOptions: {
      ssl: process.env.NODE_ENV === 'production'
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  global.models = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    usuario: sequelize.import(UsuarioModel)
  };

  Object.keys(global.models).forEach(modelName => {
    console.log(modelName);
    if (global.models[modelName].associate) {
      global.models[modelName].associate(global.models);
    }
  });
  
  sequelize.sync({ force: false }).then(() => {
    console.log("BD sincronizado");
  });
}
module.exports = global.models;
