import React from 'react';
import Header from './ui/Header.js';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <div>Home</div>} />
        <Route exact path="/Services" component={() => <div>Services</div>} />
        <Route exact path="/Customsoftware" component={() => <div>Customsoftware</div>} />
        <Route exact path="/mobileapps" component={() => <div>mobileapps</div>} />
        <Route exact path="/websites" component={() => <div>websites</div>} />
        <Route exact path="/revolution" component={() => <div>revolution</div>} />
        <Route exact path="/about" component={() => <div>about</div>} />
        <Route exact path="/contact" component={() => <div>contact</div>} />
        <Route exact path="/estimate" component={() => <div>estimate</div>} />
      </Switch>
   </Router>
    </ThemeProvider>
    
  );
}

export default App;
