import React from 'react'
import ProjectCard from './ProjectCard'

export default function Slider() {
  return (
    <div className='flex flex-row flex-wrap justify-evenly gap-8 w-full'>
      <ProjectCard color="white" title="SlapJack" tags={['Node.js', 'Socket.io']} link="https://github.com/aaronthechen/SlapJackGame">
        My first ever web app! A simple port of the card game SlapJack with WebSockets, rooms, chat functions, and a rudimentary front-end.
      </ProjectCard>
      <ProjectCard color="white" title="Relayter" tags={['REST API', 'Front-end']} link="https://github.com/aaronthechen/relayter">
        A school project/game designed to help improve your vocabulary through related words, generated by the Datamuse API.
      </ProjectCard>
      <ProjectCard color="white" title="Software Supply Chain Attacks" tags={['Research', 'Cybersecurity']} link="https://github.com/aaronthechen/software-supply-chain-attack-tools">
        A survey paper detailing a comprehensive recount of software supply chain attacks.
      </ProjectCard>
      <ProjectCard color="white" title="Personal Website" tags={['React', 'Tailwind']}>
        This current website! Design inspired by Bauhaus aesthetics and built with React.
      </ProjectCard>
    </div>
  )
}