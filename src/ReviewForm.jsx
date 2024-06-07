import React, { useState } from "react";
import StarRating from "./StarRating";



// form at bottom of movie  component that allows users
// to leave reviews. When submitted, the review should
// be added to the movie.


// I want Customer Reviews centered, Write a Review on the left,
// big text box aligned on left, submit button below text box on right.
// **On submit, ReviewForm gets pushed to Review**




function ReviewForm () {

    const [userName, setUserName] = useState(" ");
    const [reviewBody, setReviewBody] = useState(" ");

    function handleUserNameChange(e) {
        setUserName(e.target.value);
    }

    function handleReviewBodyChange(e) {
        setReviewBody(e.target.value);
    }

    function handleReset() {
        setUserName('');
        setReviewBody('');
    }


    return (
        <div className="review-form">
            <form onSubmit={e => e.preventDefault()}>
                <h1 className="review-stars"><StarRating /></h1>
                <div>
                    <div>
                        <label className="form-usernameLabel">Username</label>
                        <input 
                            className="input-fields" 
                            value={userName}
                            onChange={handleUserNameChange}
                        />
                    </div>
                    <div>
                        <label className="form-reviewBodyLabel">Write your review here</label>
                        <input
                        className="input-fields"
                        id="reviewBodyInput"
                        value={reviewBody}
                        onChange={handleReviewBodyChange}
                        />
                    </div>
                </div>
                <button onClick={handleReset}>Submit</button>
            </form>


        </div>
    );
}

export default ReviewForm;




