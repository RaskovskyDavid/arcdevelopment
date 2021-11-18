import React , {useState} from 'react';
import Header from './ui/Header.js';
import { ThemeProvider } from '@material-ui/core/styles';
import Footer from './ui/Footer.js';
import theme from './ui/Theme.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from '../components/LandingPage.js';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Header 
      value={value} setValue={setValue} 
      selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} 
      />
      <Switch>
        <Route exact 
        path="/"
         component={LandingPage} />
        <Route exact path="/Services" component={() => <div>Services</div>} />
        <Route exact path="/customsoftware" component={() => <div>Customsoftware</div>} />
        <Route exact path="/mobileapps" component={() => <div>mobileapps</div>} />
        <Route exact path="/websites" component={() => <div>websites</div>} />
        <Route exact path="/revolution" component={() => <div>revolution</div>} />
        <Route exact path="/about" component={() => <div>about</div>} />
        <Route exact path="/contact" component={() => <div>contact</div>} />
        <Route exact path="/estimate" component={() => <div>estimate</div>} />
      </Switch>
      <Footer 
      value={value} setValue={setValue} 
      selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}  />
   </Router>
  </ThemeProvider>
    
  );
}

export default App;
