import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Booklist from './Components/Booklist';
import BookDetails from './Components/BookDetails';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Favorites from './Components/Favorites';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Booklist/>}/>
        <Route path="/books/:id" element={<BookDetails/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
