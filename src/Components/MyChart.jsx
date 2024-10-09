// MyChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
// Asegúrate de que estas importaciones son correctas
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale, // Importa CategoryScale
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

// Registra los componentes necesarios
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, Filler);

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'My Balance',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#db86b2',
            borderColor: '#B57295',
            data: [500, 300, 400, 500, 800, 650, 700, 690, 1000, 1200, 1050, 1300],
        },
    ],
};

const options = {
    maintainAspectRatio: true,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                borderDash: [3, 3],
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

const MyChart = () => (
    <Line data={data} options={options} />
);

export default MyChart; // Asegúrate de que estás usando export default correctamente
