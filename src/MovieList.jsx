import React from "react";
import Movie from "./Movie";



//container for all the Movie components and their data.


export default class MovieList extends React.Component {

    render() {
        return (
            <div className="movieList-data">
                <Movie />
            </div>
        )
    };
    
}