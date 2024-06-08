/** This file is essentially the format of the Movie section of the page.
 * It includes all of the different components and elements needed for the page,
 * the title, synopsis, image, the ReviewForm component, and the ReviewsList component. 
 * I used JavaScript to pass props into the different locations using {this.props.property}.
 * As per usual, all of the important files are imported at the top. */


import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default class Movie extends React.Component {
    render() {
        return (
            <div>
                <div className="movie-card">
                    <div className="movie-info">
                        <div className="title-synop">
                           <h2 className="movie-title">{this.props.title}</h2>
                           <p className="movie-synop">{this.props.synop}</p>
                           <ReviewForm /> 

                        </div>
                        <div className="img-exterior-border">
                            <div className="img-container">
                                <img 
                                        src={this.props.image} 
                                        alt={this.props.title} 
                                        className="movie-image" 
                                        width="300"
                                    /> 
                            </div>
                        </div>
                    </div>
                    <div className="review-info">
                        <ReviewList reviews={this.props.reviews}/>
                    </div>
                </div>
            </div>
        )
    };
}



