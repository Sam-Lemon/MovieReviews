import React from "react";
import Review from "./Review";

//container inside of a movie that houses Review components


// This will format the container for the ReviewForm and Reviews. 
// I want to format the this file to have ReviewForm on top, and a
// list of reviews in a column below. Then this component will go
// over into the MovieList (I believe).

// export default class MovieList extends React.Component {

    
// }


//POST!

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews,
            content: props.content,
            count: 0
        };
    }

    render() {

/** The reviews array hold any reviews currently held in this
 * state.*/
        let reviews = [];
        if (this.state.reviews) {
            for (let review of this.state.reviews) {
                reviews.push(<Review {...review} />)
            }
        }

       return(
        <div className="review-list">
            <div className="user-reviews">{this.state.content}</div>
            <div>
                {reviews} 
            </div>
        </div>
       )
    };
}



/** In the future I'd like to add a thumbs up/down button to the
 * reviews and put the top liked comment at the top. 
 */