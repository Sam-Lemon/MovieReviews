import React from "react";
import Review from "./Review";


//container inside of a movie that houses Review components


// This will format the container for the ReviewForm and Reviews. 
// I want to format the this file to have ReviewForm on top, and a
// list of reviews in a column below. Then this component will go
// over into the MovieList (I believe).

// export default class MovieList extends React.Component {

    
// }

export default class ReviewList extends React.Component {
    render() {
       return(
            <div className="review-list">
                <div className="card w-75">
                    <div className="card-header bg-primary text-white">
                        Username and Time
                    </div>
                    <div className="card-body">
                        This is where the review text lives.
                    </div>
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>
       )
    };
}
