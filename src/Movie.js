import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
// import ReviewList from "ReviewList";
// import Stars from "Stars";
// import MovieList from "./MovieList";


//component that represents movie data (i.e. image, synopsis, rating, etc)

export default class Movie extends React.Component {
    render() {
        return (
            <div>
                <div className="title-image">
                    <div>
                        <h2 className="movie-title">{this.props.title}</h2>
                        <p className="movie-synop">{this.props.synop}</p>
                        <ReviewForm /> 
                        <ReviewList />
                    </div>
                </div>
                <p>{this.props.image}</p>


            </div>
        )
    };
}



