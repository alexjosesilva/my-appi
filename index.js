// app.js
const express = require('express');
const bodyParser = require('body-parser');
const airplanesRoutes = require('./routes/airplanesRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Configuração do view engine EJS
app.set('view engine', 'ejs');

// Middleware para interpretar o corpo da solicitação como JSON
app.use(bodyParser.json());

// Configuração do middleware para servir arquivos estáticos
app.use(express.static('public'));

// Rotas relacionadas aos aviões
app.use('/airplanes', airplanesRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado. Escutando na porta ${PORT}`);
});
