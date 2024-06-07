import React, { useState } from "react";
import StarRating from "./StarRating";



// form at bottom of movie  component that allows users
// to leave reviews. When submitted, the review should
// be added to the movie.


// I want Customer Reviews centered, Write a Review on the left,
// big text box aligned on left, submit button below text box on right.
// **On submit, ReviewForm gets pushed to Review**




export default function ReviewForm () {

    const [userName, setUserName] = useState(" ");
    const [headline, setHeadline] = useState(" ");
    const [reviewBody, setReviewBody] = useState(" ");

    function handleUserNameChange(e) {
        setUserName(e.target.value);
    }

    function handleHeadlineChange(e) {
        setHeadline(e.target.value);
    }

    function handleReviewBodyChange(e) {
        setReviewBody(e.target.value);
    }

    function handleReset() {
        setUserName('');
        setHeadline('');
        setReviewBody('');
    }


    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <h1 className="review-stars"><StarRating /></h1>
                <input  
                    placeholder="Username"
                    value={userName}
                    onChange={handleUserNameChange}
                />
                <input
                    placeholder="Headline"
                    value={headline}
                    onChange={handleHeadlineChange}
                />
                <input
                placeholder="Write your review here"
                value={reviewBody}
                onChange={handleReviewBodyChange}
                />
                <button onClick={handleReset}>Submit</button>
            </form>


        </div>
    );
}




