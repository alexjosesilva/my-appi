// models/airplaneModel.js
let airplanes = [];

// Model para acessar os dados dos aviões
const airplaneModel = {
  // Retorna todos os aviões
  getAll: () => {
    return airplanes;
  },

  // Adiciona um novo avião
  add: (airplane) => {
    airplanes.push(airplane);
  },

  // Encontra um avião por ID
  findById: (id) => {
    return airplanes.find(airplane => airplane.id === id);
  },

  // Remove um avião por ID
  removeById: (id) => {
    airplanes = airplanes.filter(airplane => airplane.id !== id);
  },

  // Atualiza um avião por ID
  updateById: (id, newData) => {
    const index = airplanes.findIndex(airplane => airplane.id === parseInt(id));
    if (index !== -1) {
      airplanes[index] = { ...airplanes[index], ...newData };
      return airplanes[index];
    }
    return null;
  }
};

module.exports = airplaneModel;
