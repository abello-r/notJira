'use client';

import { useEffect, useState } from 'react';
import { Chart, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

interface ChartData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		backgroundColor: string[];
		borderWidth: number;
		hoverOffset: number;
	}[];
}

export default function DoughnutGraph() {
	const [chartData, setChartData] = useState<ChartData | null>(null);

	useEffect(() => {
		const data = {
			labels: ['Marketing', 'Development', 'Design', 'Operations'],
			datasets: [
				{
					borderColor: '#2D2D2D',
					label: '# of Votes',
					data: [12, 19, 3, 5],
					backgroundColor: [
						getCssVariableValue('--graph-color-1'),
						getCssVariableValue('--graph-color-2'),
						getCssVariableValue('--graph-color-3'),
						getCssVariableValue('--graph-color-4'),
					],
					borderWidth: 1,
					hoverOffset: 4
				}
			]
		};
		setChartData(data);
	}, []);

	function getCssVariableValue(variable: string) {
		return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
	}

	Chart.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);
	Chart.defaults.font.size = 14;
	Chart.defaults.color = getCssVariableValue('--bg-color');

	return (
		<div>
			{chartData && (
				<Doughnut
					data={chartData}
					options={{
						cutout: '50%',
						radius: '60%',
						plugins: {
							legend: {
								display: true,
								position: 'top',
								align: 'center',
								labels: {
									color: getCssVariableValue('--text-color'),
									boxWidth: 20,
									padding: 20,
									usePointStyle: true,
								font: {
									size: 14
								}
							}
						},
						},
						animation: {
							duration: 2000,
							easing: 'easeInOutCubic'
						}
					}}
				/>
			)}
		</div>
	);
}
