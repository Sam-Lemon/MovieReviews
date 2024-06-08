import React from "react";

/** This is the review that is created by the review from by 
 * passing props username and body.*/

export default class Review extends React.Component {
   
    render() {
        return (
           <div id="indv-review" className="card w-90 pb-2 mb-2">
            <div className="card-header">
                <p><strong>{this.props.username}</strong></p> 
            </div>
            <div className="card-body">
                {this.props.body}
            </div>
           </div>
        );
    }
}








