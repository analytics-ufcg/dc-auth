const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const models = require("../../models/index");
const Usuario = models.usuario;
const expressJwt = require("express-jwt");
const keys = require("../../config/keys");

const BAD_REQUEST = 400;
const SUCCESS = 200;

const authenticate = expressJwt({
  secret: keys.secretOrKey,
  requestProperty: "auth",
  getToken: function (req) {
    if (req.headers["authorization"]) {
      return req.headers["authorization"];
    }
    return null;
  }
});

module.exports = router;
