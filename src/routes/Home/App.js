import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Faqs from './Components/Faqs/Faqs';
import Homepage from './Pages/Homepage';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route path="/faqs" component={Faqs} />
    </Router>
  );
}

export default App;
