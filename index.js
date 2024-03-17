// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const airplanesRoutes = require('./routes/airplanesRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Adiciona o middleware CORS para permitir todas as origens
app.use(cors());

// Configuração do view engine EJS
app.set('view engine', 'ejs');

// Middleware para interpretar o corpo da solicitação como JSON
app.use(bodyParser.json());

// Configuração do middleware para servir arquivos estáticos
app.use(express.static('public'));
app.use(express.static('views'));

// Rotas relacionadas aos aviões
app.use('/airplanes', airplanesRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado. Escutando na porta ${PORT}`);
});
