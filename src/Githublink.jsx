import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'

export function Githublink() {
  return (
    <Link to={'https://github.com/ClinenCcoarite/Buscador-Peliculas'} className='github'>
      <AiFillGithub />
      <p>Github</p>
    </Link>
  )
}

