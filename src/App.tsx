import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Movies from './components/movies';
import MoviePage from './components/moviePage'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path="/movies/:id" element={<MoviePage />} /> {/* Movie details */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
