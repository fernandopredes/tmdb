
import { Link } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
//CSS

import './NavBar.css'

const Navbar = () => {
  return (
    <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie/>MoviesLib</Link>
        </h2>
        <form>
          <input type="text" placeholder='Digite o título' />
          <button type='submit'><BiSearchAlt2/></button>
        </form>
      </nav>
  )
}

export default Navbar
