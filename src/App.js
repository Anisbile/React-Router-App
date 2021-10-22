import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Price from './pages/Price';
import About from './pages/About';
import Stocks from './pages/Stocks';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {
  const [Stock, setStock] = useState({})
  return (
    <div className="App">
     <Nav />
       <Switch>
      <Route exact path="/">
          <Home />
        </Route>
      <Route path="/stocks">
        <Stocks Stock={Stock} setStock={setStock} />
      </Route>
       <Route path="/price/:symbol" render={({location}) => <Price location={location} />}/>
      <Route path="/about">
          <About />
      </Route>
      </Switch>  
    </div>
  )
};

export default App
