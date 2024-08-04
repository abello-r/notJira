'use client';

import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);

const data = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				'red',
				'blue',
				'yellow',
				'green',
				'purple',
				'orange'
			],
			borderWidth: 1,
			hoverOffset: 4
		}
	]
};

export default function TeamGraph() {
	return (
		<div>
			<Doughnut
				data={data}
				options={{
					cutout: '80%',
					radius: '60%',
					plugins: {
						legend: {
							display: true
						}
					},
					animation: {
						duration: 2000,
						easing: 'easeInOutCubic'
					}
				}}
			/>
		</div>
	);
}
