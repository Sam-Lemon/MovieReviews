import React from 'react';
import './App.css';
import MovieList from './MovieList';
import { ReviewForm } from './ReviewForm';
import ReviewList from './ReviewList';


function App() {
  return (
    <div className="App">
      <MovieList />
      <ReviewForm />
      <ReviewList />
    </div>
  );
}

export default App;
