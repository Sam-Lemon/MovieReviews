import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import MovieList from './MovieList';
import { ReviewForm } from './ReviewForm';
import ReviewList from './ReviewList';


function App() {
  return (
    <div className="App">
      <MovieList />
      <ReviewList />
      <ReviewForm />

    </div>
  );
}

export default App;
