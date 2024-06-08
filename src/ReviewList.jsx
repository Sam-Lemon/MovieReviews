import React from "react";
import Review from "./Review";



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