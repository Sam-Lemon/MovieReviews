import React, { useState } from "react";
import StarRating from "./StarRating";



// form at bottom of movie  component that allows users
// to leave reviews. When submitted, the review should
// be added to the movie.


// I want Customer Reviews centered, Write a Review on the left,
// big text box aligned on left, submit button below text box on right.
// **On submit, ReviewForm gets pushed to Review**




export const ReviewForm = (props) => {

    const [name, setName] = useState(" ");
    const [headline, setHeadline] = useState(" ");
    const [reviewBody, setReviewBody] = useState(" ");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, headline, reviewBody);
        
        }   

    return (
        <div className="review-form-container">
            <h3 className="form-header">Write a Review</h3>
            <form className="review-form" onSubmit={handleSubmit}>
                <h1 className="review-stars"><StarRating /></h1>
                <label>
                    Name:
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        type="name" 
                        placeholder="John Smith" 
                        id="name" 
                        name="name" 
                    />
                </label>
                <label>
                    Headline:
                    <input value={headline} 
                        onChange={(e) => setHeadline(e.target.value)} 
                        type="headline" 
                        id="headline" 
                        name="headline" 
                    />
                </label>
                <label>
                    Review:
                    <input 
                        value={reviewBody} 
                        onChange={(e) => setReviewBody(e.target.value)} 
                        type="reviewBody" 
                        id="reviewBody" 
                        name="reviewBody" 
                    />
                </label>
                <label> 
                    <button className="btn btn-primary">Submit</button>
                </label>
            </form>
        </div>
    )
}



