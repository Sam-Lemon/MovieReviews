import React from "react";
import ReviewForm from "./ReviewForm";




// form submits data to here, this turns it into a review,
// then is pushed over to ReviewList

//does these each need their own key value?



//COMMENT!

export default class Review extends React.Component {
   
    render() {
        return (
           <div className="card w-75">
            <div className="card-header bg-success text-white">
                <p><strong>{this.props.username}</strong></p> 
            </div>
            <div className="card-body">
                {this.props.body}
            </div>
           </div>
        );
    }
}








