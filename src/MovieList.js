import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, filterTitle, filterRating }) => {
    console.log(movies)
  return (
    <div className="movie-list">
      {movies
        .filter(movie => 
          movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
          movie.rating >= filterRating
        )
        .map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
