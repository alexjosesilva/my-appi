// script.js

// Função para buscar os dados dos aviões do servidor
// Função para buscar os dados dos aviões do servidor
function fetchAirplanesData() {
    // Faz uma requisição GET para a rota que lista todos os aviões
    return fetch('/airplanes') // Retorna a Promessa da requisição
      .then(response => response.json()) // Converte a resposta para JSON e retorna a Promessa resultante
      .catch(error => {
        console.error('Erro ao buscar os dados dos aviões:', error);
        throw error; // Lança o erro novamente para que ele possa ser tratado mais tarde, se necessário
      });
}
// Função para carregar os dados das aeronaves e criar a paginação
function loadAirplanes(page) {
    // Supondo que você tenha uma função no servidor para buscar os dados paginados
    // Vou usar uma simulação com dados fictícios para esta demonstração

    fetchAirplanesData()
    .then(data => {
        // Quando os dados forem retornados com sucesso, atribua-os à variável airplanesData
        airplanesData = data;
        console.log('Dados dos aviões:', airplanesData);
        // Aqui você pode fazer qualquer manipulação ou renderização dos dados, conforme necessário
        // Por exemplo, você pode iterar sobre os dados e adicionar cada avião a uma tabela HTML
    })
    .catch(error => {
        console.error('Erro ao buscar os dados dos aviões:', error);
    });

    const itemsPerPage = 5;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedData = airplanesData.slice(startIndex, endIndex);

    const tableBody = document.querySelector('#airplanes-table tbody');
    tableBody.innerHTML = '';

    slicedData.forEach(airplane => {
        const row = `
            <tr>
                <td>${airplane.companyName}</td>
                <td>${airplane.flightNumber}</td>
                <td>${airplane.destinationCity}</td>
                <td>${airplane.boardingGate}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    // Cria os links de paginação
    const totalPages = Math.ceil(airplanesData.length / itemsPerPage);
    const pagination = document.querySelector('#pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        if (i === page) {
            li.classList.add('active');
        }
        const link = document.createElement('a');
        link.classList.add('page-link');
        link.href = '#';
        link.innerText = i;
        li.appendChild(link);
        pagination.appendChild(li);

        // Adiciona um event listener para cada link de página
        link.addEventListener('click', () => {
            loadAirplanes(i);
        });
    }
}

// Inicializa a página com a primeira página de dados
loadAirplanes(1);
