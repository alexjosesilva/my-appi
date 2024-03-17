// controllers/airplanesController.js
const airplaneModel = require('../models/airplaneModel');

// Controlador para manipular as solicitações relacionadas aos aviões
const airplanesController = {
  // Rota para listar todos os aviões
  list: (req, res) => {
    const airplanes = airplaneModel.getAll();
    res.status(200).json(airplanes);
    //res.status(200).render('airplaneView', { airplanes });
    console.log(airplanes);
  },

  // Rota para cadastrar um novo avião
  create: (req, res) => {
    const { companyName, destinationCity, flightNumber, boardingGate } = req.body;
    
    if (!companyName || !destinationCity || !flightNumber || !boardingGate) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }
    const newAirplane = {
      id: Date.now(), // Gera um ID único baseado no timestamp
      companyName,
      destinationCity,
      flightNumber,
      boardingGate
    };
    airplaneModel.add(newAirplane);
    res.status(201).json(newAirplane);
  },

  // Rota para buscar um avião por ID
  getById: (req, res) => {
    const airplaneId = parseInt(req.params.id);
    const airplane = airplaneModel.findById(airplaneId);
    if (!airplane) {
      return res.status(404).json({ error: 'Avião não encontrado.' });
    }
    res.status(200).json(airplane);
  },

  // Rota para remover um avião por ID
  removeById: (req, res) => {
    const airplaneId = parseInt(req.params.id);
    const removedAirplane = airplaneModel.removeById(airplaneId);
    if (!removedAirplane) {
      return res.status(404).json({ error: 'Avião não encontrado.' });
    }
    res.status(200).json({ message: 'Avião removido com sucesso.', airplane: removedAirplane });
  },

  // Rota para atualizar um avião por ID
  update: (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    
    const updatedAirplane = airplaneModel.updateById(id, newData);
    
    if (updatedAirplane) {
      res.status(200).json({ message: 'Avião atualizado com sucesso', airplane: updatedAirplane });
    } else {
      res.status(404).json({ message: 'Avião não encontrado' });
    }
  }
};

module.exports = airplanesController;
