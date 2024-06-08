import React, { useState } from "react";
import StarRating from "./StarRating";
import ReviewList from "./ReviewList";

/** Below is the component for the review form. I set my state 
 * here at the top, and created a few function to handle the 
 * user's inputs by using the setter function to update the 
 * state of the review.*/

function ReviewForm () {

    const [userName, setUserName] = useState(" ");
    const [body, setBody] = useState(" ");

    function handleUserNameChange(e) {
        setUserName(e.target.value);
    }

    function handleBodyChange(e) {
        setBody(e.target.value);
    }

    function handleReset() {
        {ReviewList.reviews.push(userName, body)};
        setUserName('');
        setBody('');
    }


/** Below is the rendering of the form. There's a header, the StarRating
 * component that was imported at the top, a username label and input, a 
 * (review) body label and input, and a submit button. For some reason none
 * of this works and I'm not sure why.*/

    return (
        <div className="review-form">
            <form onSubmit={e => e.preventDefault()}>
                <p className="rating-header">Rate this movie</p>
                <h1 className="review-stars"><StarRating /></h1>
                <div>
                    <div className="form-username">
                        <label className="form-usernameLabel">Username:</label>
                        <input 
                            className="input-fields" 
                            value={userName}
                            onChange={handleUserNameChange}
                        />
                    </div>
                    <div className="form-content">
                        <label className="form-reviewBodyLabel">Write your review here:</label>
                        <input
                        className="input-fields"
                        id="bodyInput"
                        value={body}
                        onChange={handleBodyChange}
                        />
                    </div>
                </div>
                <div className="btn-container">
                    <button className="submit-btn" onClick={handleReset}>Submit</button>

                </div>
            </form>


        </div>
    );
}

export default ReviewForm;




