import { useState, useEffect } from 'react'

export default function Shapes() {
	const [shape, setShape] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setShape(shape => (shape + 1) % 3)
		}, 1000);
		
		return () => clearInterval(interval);
	}, []);

	if (shape === 0) {
		return (
			<div className='lg:w-72 lg:h-72 md:w-56 md:h-56 w-28 h-28 bg-red'></div>
		)
	}
	else if (shape === 1) {
		return (
			<div className='lg:w-72 lg:h-72 md:w-56 md:h-56 w-28 h-28 bg-yellow rounded-full'></div>
		)
	}
	else {
		return (
			<div className=" h-0 w-0 border-x-bg lg:border-x-[10rem] lg:border-b-[18rem] md:border-x-[8rem] md:border-b-[14rem] border-x-[4rem] border-b-[7rem] border-b-blue"></div>
		)
	}
}
