"use client"
import React, { useEffect, useState, useRef } from 'react';
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
  ChartData,
  ChartTypeRegistry
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Timeframe = 'week' | 'month' | 'year';

export default function LineGraph() {
    const [timeframe, setTimeframe] = useState<Timeframe>('month');
    const chartRef = useRef<ChartJS<'line', number[], string> | null>(null);
    const [chartData, setChartData] = useState<ChartData<'line', number[], string>>({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        if (chartRef.current) {
            const chart = chartRef.current;
            const ctx = chart.ctx;

            const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
            gradient.addColorStop(0, '#000AFF');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            setChartData({
                labels: getTimeframeLabels(timeframe),
                datasets: [
                    {
                        label: 'Monthly Sales',
                        data: getData(timeframe),
                        fill: true,
                        borderColor: 'rgba(82, 113, 255, 1)',
                        backgroundColor: 'rgba(82, 113, 255, 1)',
                        tension: 0.1
                    }
                ]
            });
        }
    }, [timeframe]);

    const getTimeframeLabels = (timeframe: Timeframe) => {
        switch (timeframe) {
            case 'year':
                return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
            case 'month':
                return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            case 'week':
            default:
                return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        }
    };

    const getData = (timeframe: Timeframe) => {
        switch (timeframe) {
            case 'week':
                return [12, 19, 3, 5, 2, 3, 9];
            case 'month':
                return [65, 59, 80, 81, 56, 55, 40];
            case 'year':
                return [150, 200, 175, 125, 225, 200, 250];
            default:
                return [];
        }
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    };
    
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Monthly Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: {
                target: 'origin',
                below: 'rgba(82, 113, 255, 1)'
            },
            backgroundColor: [
              'rgba(82, 113, 255, 1)',
            ],
            borderColor: [
              'rgba(82, 113, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
}
