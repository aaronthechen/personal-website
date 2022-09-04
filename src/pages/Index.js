import { HashLink } from 'react-router-hash-link';

import Slider from '../components/Slider'
import Shapes from '../components/Shapes'
import Circles from '../components/Circles';

export default function Index() {
  return (
    <div className='bg-bg md:px-8 flex flex-col items-center justify-center gap-8'>
      <div className='min-h-screen w-3/4 flex flex-row justify-evenly items-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='lg:text-4xl text-2xl'>Hi! I'm</h1>
          <h1 className='font-bold lg:text-8xl text-6xl underline decoration-2'>Aaron Chen</h1>
          <h2 className='text-xl'>Programmer, Designer, Learner</h2>
          <div className='flex flex-row gap-4'>
            <HashLink className='font-light hover:font-bold w-fit' smooth to="/#contact">
              Contact Me
            </HashLink>
            <HashLink className='font-light hover:font-bold w-fit' to="/blog">
              Blog
            </HashLink>
          </div>
        </div>
        <div className='lg:w-80 md:w-80 w-52 flex justify-center items-center'>
          <Shapes />
        </div>
      </div>

      <div className='min-h-screen w-3/4 flex lg:flex-row flex-col gap-8 items-center'>
        <div className='flex flex-col gap-8 text-xl'>
          <h1 className='font-bold lg:text-8xl text-6xl underline decoration-2'>About Me</h1>
          <div className='flex flex-col gap-4'>
            <p>Ever since I was a child, I've loved the process of learning. From art history to computer science, I believe that any field of study can be a valuable asset.</p>
            <p>I'm currently a junior at Clements High School, participating in the varsity Orchestra group, CS Club, Mu Alpha Theta, and a variety of other clubs.</p>
            <p>I'm a 2x AIME qualifier, USACO Silver participant, and co-founder of <a className='underline hover:font-bold' href="https://scholarsforsociety.org/" target="_blank" rel="noreferrer">Scholars for Society.</a></p>
            <p>In my spare time, I like to hang out with my friends, code software projects (like the one you see right now!), and listen to music.</p>
          </div>
        </div>
        <Circles/>
      </div>

      <div className='min-h-screen w-3/4 flex flex-col justify-center items-center gap-8'>
        <h1 className='font-bold lg:text-8xl text-6xl underline decoration-2'>Projects</h1>
        <Slider />
      </div>

      <div id='contact' className='min-h-screen flex flex-col justify-center items-center gap-8'>
        <h1 className='font-bold lg:text-8xl text-6xl underline decoration-2'>Contact Me</h1>
        <div className="flex flex-row text-2xl gap-8">
          <a className='hover:font-bold hover:text-red w-fit' href="mailto:aaronchen31415@gmail.com" target="_blank" rel="noreferrer">Email</a>
          <a className='hover:font-bold w-fit' href="https://github.com/aaronthechen" target="_blank" rel="noreferrer">GitHub</a>
          <a className='hover:font-bold hover:text-blue w-fit' href="https://linkedin.com/in/aaron-chen-844b08245" target="_blank" rel="noreferrer">Linkedin</a>
        </div>
      </div>
    </div>
  )
}
