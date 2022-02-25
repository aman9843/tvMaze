import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <nav className='navbar_nav'>
                <h3 className='navbar_brand'>
              <Link to="/">
              <MovieFilterIcon style={{fontSize:"50px"}}/>Your Favourite Tv Show
              </Link>
              </h3>
              <ul className='nav_links'>
                  <li className='links_link'>
                      <Link to="/">Home</Link>
                  </li>
                  <li className='links_link'>
                      <Link to="/about">About</Link>
                  </li>
              </ul>
            </nav>
        </div>
        
    </div>
  )
}

export default Navbar