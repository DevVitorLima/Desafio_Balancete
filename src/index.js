const express = require("express");
const app = express();
const routes = require("./routes");

const mongoose = require("mongoose"); //Foi instalado o pacote na versão mongoose@5.11.15(Para resolver o erro)

mongoose.connect(
  "mongodb+srv://vitor:nucont@cluster0.ya9nc.mongodb.net/BancoNUCONT?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(routes);

app.listen(3000);
