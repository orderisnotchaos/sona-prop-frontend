
import React from 'react';

import ThemeContext from './assets/contexts/themeContext';
import Main from './components/Main/Main';
import Login from './routes/Login/Login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const APIURL = 'http://localhost:8000/';

  const [token, setToken] = React.useState(null);

  const varGetters = {token};

  const varSetters = {setToken};
  return(
    <ThemeContext.Provider value = {{...varGetters,...varSetters, APIURL}}>
      <BrowserRouter>
        <Routes>
          <Route exact path = '/' element = {<Main />} />
          <Route path = '/login' element = {<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );

}

export default App;
