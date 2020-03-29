const express = require("express");
const routes = require("./routes");
const {errors} = require("celebrate");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/*
Rota / Recursos 

*/

/*
Metodos http


GET : Captura informações

POST: Criar informações

PUT: Alterar Informações

DELETE :  Deletar Informações
*/

/*
Tipos de Parametro

Query          : parametros nomeados enviados na rota apos '?' (Filtros, paginação)
Route          : Parametros utilizados para identificar recursos
Request Body   : Corpo da requisição, utilizado para criar ou alterar recursos


BD---
MY SQL
SQL LITE
MS SQL SERVER
POSTGREE
ORACLE 

NOSQL

MongoDB
CouchDB

DRIVER- SELECT * FROM users
Query Builde : table('users').select('*').where()




*/





