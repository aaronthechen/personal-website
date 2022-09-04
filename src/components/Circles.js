import { useState, useEffect } from 'react'

export default function Circles() {
	const [cycle, setCycle] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCycle(cycle => (cycle + 1) % 3)
		}, 1200);

		return () => clearInterval(interval);
	}, []);

	if (cycle === 0) {
		return (
			<div className='flex flex-row flex-wrap justify-end items-center sm:gap-8 gap-6'>
				<div className='lg:w-48 lg:h-48 sm:w-32 sm:h-32 w-12 h-12 bg-red rounded-full'></div>
				<div className='lg:w-48 lg:h-48 sm:w-32 sm:h-32 w-12 h-12 bg-yellow rounded-full'></div>
				<div className='lg:w-48 lg:h-48 sm:w-32 sm:h-32 w-12 h-12 bg-blue rounded-full'></div>
			</div>
		)
	}
	else if (cycle === 1) {
		return (
			<div className='flex flex-row flex-wrap justify-end items-center sm:gap-8 gap-6'>
				<div className='lg:w-48 lg:h-48 sm:w-32 sm:h-32 w-12 h-12 bg-blue rounded-full'></div>
				<div className='lg:w-48 lg:h-48 sm:w-32 sm:h-32 w-12 h-12 bg-red rounded-full'></div>
				<div className='lg:w-48 lg:h-48 sm:w-32 sm:h-32 w-12 h-12 bg-yellow rounded-full'></div>
			</div>
		)
	}
	else {
		return (
			<div className='flex flex-row flex-wrap justify-end items-center sm:gap-8 gap-6'>
				<div className='lg:w-48 lg:h-48 sm:w-32 sm:h-32 w-12 h-12 bg-yellow rounded-full'></div>
				<div className='lg:w-48 lg:h-48 sm:w-32 sm:h-32 w-12 h-12 bg-blue rounded-full'></div>
				<div className='lg:w-48 lg:h-48 sm:w-32 sm:h-32 w-12 h-12 bg-red rounded-full'></div>
			</div>
		)
	}
}
