import React from "react";
import { ReviewForm } from "./ReviewForm";
// import ReviewList from "ReviewList";
// import Stars from "Stars";
// import MovieList from "./MovieList";


//component that represents movie data (i.e. image, synopsis, rating, etc)

export default class Movie extends React.Component {

    render() {
        return (
            <div>
                <div className="movie-data">Movie.js render working</div>
                <p>Movie Title</p>
                <p>Movie Image</p>
                <p>Movie Synopsis</p>
                <ReviewForm /> 
            </div>
            
        )
    };
}



