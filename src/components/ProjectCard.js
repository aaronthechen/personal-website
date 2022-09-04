import React from 'react'

export default function ProjectCard({ color, children, title, tags, link }) {
	const tagItems = tags.map(tag =>
		<div className='border-text underline w-fit p-1'>{tag}</div>
	);
	return (
		<a href={link} target="_blank" rel="noreferrer">
			<div className={`${"bg-"+color} h-96 w-72 p-4 flex flex-col justify-between wrap-image outline-animation`}>
				<div className='w-full text-left text-lg flex flex-col gap-4'>
					<h1 className='font-bold text-2xl underline'>{title}</h1>
					{children}
				</div>
				<div className='text-sm flex flex-row flex-wrap gap-2'>{tagItems}</div>
			</div>
		</a>
	)
}
