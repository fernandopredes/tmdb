
import { Link, useNavigate } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import { FormEvent, useState } from 'react'
//CSS
import './NavBar.css'




const Navbar = () => {



  const [search, setSearch] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = (event : FormEvent) =>{
    event.preventDefault()

    if(!search){
      return
    } else {
      navigate(`/search?q=${search}`)
      setSearch('');
    }
  };

  return (
    <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie/>MoviesLib</Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Digite o título' onChange={(e) => setSearch(e.target.value)}  value={search}/>
          <button type='submit'><BiSearchAlt2/></button>
        </form>
      </nav>
  )
}

export default Navbar
