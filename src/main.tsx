import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//Componentes

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

//CSS
import './index.css'
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='search' element={<Search />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
