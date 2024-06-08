/** I imported all of the required files for the webpage. React is needed to 
run React functionality, './App.css' is all of the styling, 'bootstrap....'
is for any Bootstrap used in the page, and MovieList is the component
that holds all of the data for the page.*/

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import MovieList from './MovieList';


function App() {
  return (
      <div className="App">
        <MovieList />
    </div>
  );
}

export default App;
