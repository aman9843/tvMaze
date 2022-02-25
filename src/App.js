import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'; //Routes
import './App.css';
//components
import Navbar from './components/Navbar';


//pages
import HomePage from './pages/HomePage';
import About from './pages/About';
import SinglePage from './pages/SinglePage';

const App = () => {
  return (
  

   
  
      <Router>
      <Navbar />
      <div className='container'>
        <Switch>  
          <Route exact path="/">

              <HomePage /> 

          </Route>
          <Route exact path="/about">

              <About /> 

          </Route>
          <Route exact path="/singleshow/:id">

              <SinglePage />

          </Route>
        </Switch>
      
  </div>
  </Router>
     
    
  );
}

export default App;
