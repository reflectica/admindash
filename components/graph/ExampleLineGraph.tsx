import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineGraph = () => {
  const chartRef = useRef<ChartJS<'line'> | null>(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, 'rgba(82, 113, 255, 1)'); // Starting color
      gradient.addColorStop(1, 'rgba(82, 113, 255, 0)'); // Fading to transparent

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  const data = {
    labels: ['Nov 1', 'Nov 4', 'Nov 8', 'Nov 12', 'Nov 16'],
    datasets: [
      {
        label: '',
        data: [6.5, 8, 7.5, 6, 8.4],
        fill: true,
        backgroundColor: 'rgba(82, 113, 255, 1)', // Solid blue color
        borderColor: 'rgba(82, 113, 255, 1)', // Solid blue color for the line
        borderWidth: 4, // Increased thickness of the line
        tension: 0.3, // Slightly smooth curve
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgba(82, 113, 255, 1)',
        pointBorderWidth: 3, // Thicker border for points
        pointRadius: 6, // Larger points
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(82, 113, 255, 1)',
        titleFont: { size: 16 },
        titleColor: 'white',
        bodyFont: { size: 14 },
        bodyColor: 'white',
        displayColors: false,
        borderRadius: 4,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(128, 128, 128, 1)',
          font: {
            size: 12,
            weight: 'bold' as 'bold' | 'normal' | 'lighter' | 'bolder',
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false, // Hide y-axis labels
          beginAtZero: true,
        },
      },
    },
  };

  return <Line ref={chartRef} data={data} options={options} />;
};

export default LineGraph;
