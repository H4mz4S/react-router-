import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import MovieDetail from './MovieDetail'; 
import './App.css';

const App = () => {
  
  const [movies, setMovies] = useState([
    {
      title: 'Avengers: Endgame',
      description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaw6QTsDE3d6-qOL5xMa4-JDdBNTa3uspCrg&s',
      rating: 5,
      trailer: 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
    },
    {
      title: 'Interstellar',
      description: 'In a post-apocalyptic and starving world, a team of explorers search for a new habitable planet for the human species.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl7C-jNfb02jOg_rBuFwWDY3nYmoh-rHdxM0n1NkhA5TbAIH0my3pad43KirzoQ-UsjIE&usqp=CAU',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    },
    {
      title: 'The Dark Knight',
      description: 'When a threat better known as The Joker emerges from his mysterious past and unleashes chaos on Gotham City, Batman must face the greatest psychological and physical challenges to fight injustice.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhi1arS70w_kXQTF-GctH3Vz_vXSLK3ZxHVQ&s',
      rating: 5,
      trailer:'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers from mysterious rebels the true nature of his reality and his role in the war against those who control it.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JpAa61BgkNomeBtnOV74IKWanzABJ7Byug&s',
      rating: 5,
      trailer:'https://www.youtube.com/watch?v=vKQi3bBA1y8',
    },
    {
      title: 'Hunger Games',
      description: 'Katniss Everdeen volunteers to take her younger sisters place in the Hunger Games, a televised competition in which two teenagers from each of the twelve districts of Panem are randomly selected to fight to the death.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXs7oi0jhwHM1GiZA8xIBd-T4tsmNJ9sJDg&s',
      rating: 5,
      trailer:'https://www.youtube.com/watch?v=mfmrPu43DF8',
    },
    {
      title: 'The Truman Show',
      description: 'An insurance salesman discovers that his entire life is actually a TV show.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSulN-r5zj5M7R2wfu9dk4A7aKkAAbNXi5I_w&s',
      rating: 4,
      trailer:'https://www.youtube.com/watch?v=dlnmQbPGuls',
    }
    
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <div className="container">
        <h1>ZEE FLEM</h1>
        <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
        <AddMovie addMovie={addMovie} />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} filterTitle={filterTitle} filterRating={filterRating} />} />
          <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

