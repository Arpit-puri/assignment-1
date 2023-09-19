import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Week1',
		User: 500,
		Guest: 400
	},
	{
		name: 'Week2',
		User: 350,
		Guest: 200
	},
	{
		name: 'Week3',
		User: 100,
		Guest: 450
	},
	{
		name: 'Week4',
		User: 180,
		Guest: 380
	},
	
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-xl shadow-md border flex flex-col flex-1">
			<strong className="text-black text-lg font-extrabold">Activities</strong>
			<p className=' font-light ml-2'>May-June</p>
			<div className="mt-3 w-full flex-1 text-xs">
				
				<ResponsiveContainer width="100%" height="100%">
				
					<BarChart
						width={100}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Guest" fill="rgb(81, 195, 81)" />
						<Bar dataKey="User" fill="rgb(203, 77, 77)" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
