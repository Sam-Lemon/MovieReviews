import React from "react";
import ReviewForm from "./ReviewForm";




// form submits data to here, this compiles an array of comments,
// then is pushed over to ReviewList



//COMMENT!

export default class Review extends React.Component {
   
    render() {
        return (
           <div className="card w-75">
            <div className="card-header bg-success text-white">
                <p>{this.props.userName}</p> 
                <strong>{this.props.headline}</strong>
            </div>
            <div className="card-body">
                {this.props.content}
            </div>
           </div>
        );
    }
}









