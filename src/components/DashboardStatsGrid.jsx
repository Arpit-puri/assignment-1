import React from 'react'
import {  IoPieChart, IoPeople } from 'react-icons/io5'

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
			<div className = "bg-white rounded-xl p-4 flex-1 border shadow-lg items-center">
				<div className="rounded-full ml-3 h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Revenue</span>
					<div className="flex items-center space-x-16">
						<strong className="text-xl text-gray-700 font-semibold">$54232</strong>
						<span className="text-sm text-green-500 pl-2">+343</span>
					</div>
				</div>
			</div>
			<div className = "bg-white rounded-xl p-4 flex-1 border shadow-lg items-center">
				<div className="rounded-full h-12 w-12 flex ml-3 items-center justify-center bg-orange-600">
					<IoPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Transaction</span>
					<div className="flex items-center space-x-16">
						<strong className="text-xl text-gray-700 font-semibold">$3423</strong>
						<span className="text-sm text-green-500 pl-2">-343</span>
					</div>
				</div>
			</div>
			<div className = "bg-white rounded-xl p-4 flex-1 border shadow-lg items-center">
				<div className="rounded-full h-12 w-12 ml-3 flex items-center justify-center bg-yellow-400">
					<IoPeople className="text-2xl m-2 text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Likes</span>
					<div className="flex items-center space-x-16">
						<strong className="text-xl text-gray-700 font-semibold">12313</strong>
						<span className="text-sm text-red-500 pl-2">-30</span>
					</div>
				</div>
			</div>
			<div className = "bg-white rounded-xl p-4 flex-1 border shadow-lg  items-center">
				<div className="rounded-full h-12 w-12 ml-3 flex items-center justify-center bg-green-600">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total People</span>
					<div className="flex items-center space-x-16">
						<strong className="text-xl text-gray-700 font-semibold">16432</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</div>
		</div>
	)
}


