import React from "react";




// form submits data to here, this turns it into a review,
// then is pushed over to ReviewList

//does these each need their own key value?



//COMMENT!

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








