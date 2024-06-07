import React from "react";
import Movie from "./Movie";


//container for all the Movie components and their data.


export default class MovieList extends React.Component {
       
    render() {

        let movies = [{
            
                title: "The Princess Bride",
                synop: "A bedridden boy's grandfather reads him the story of a farm boy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
                image: "https://static.hollywoodreporter.com/sites/default/files/2013/11/princess_bride_poster_art_a_p.jpg",
                reviews: [
                    {
                        username: 'Billy',
                        rating: 5,
                        body: 'This movie is a classic!'
                    },
                    {
                        username: 'Jim',
                        rating: 4,
                        body: 'I love the music in this movie.'
                    }
                ]
            },
            {
                title: "Little Shop of Horrors",
                 synop: "A rock musical about a nerdy flower shop assistant, Seymore, his love interest Audrey, and his carnivorous plant Audrey II.",
                image: "../images/LittleShopOfHorrors.jpg",
                reviews: [
                    {
                        username: 'Janice',
                        rating: 4,
                        body: 'My favorite musical of all time!'
                    },
                    {
                        username: 'Jim',
                        rating: 3,
                        body: 'The dentist really freaked me out, but otherwise, good movie.'
                    }
                ]
            },
            {
                title: "Home Alone",
                synop: "The McCallister family is planning on going to Paris for Christmas vacation and in their rush to leave, leave the youngest member of the family, Kevin, at home! While the family is gone, Kevin has to defend the home against a couple of bumbling burglars.",
                image: "https://www.ruthlessreviews.com/wp-content/uploads/2020/12/home-alone-meta.jpeg",
                reviews: [
                    {
                        username: 'Jonathon',
                        rating: 2,
                        body: "I really don't get why people like this movie."
                    },
                    {
                        username: 'Kennedi',
                        rating: 4,
                        body: 'I wish sometimes I could also be left home alone.'
                    }
                ]
            }
        ];

        return (
            <div className="movieList-data">
               {movies.map((movie, index) => {
                return <Movie title={movie.title} synop={movie.synop} image={movie.image} reviews={movie.reviews} key={index} />
               })}
            </div>
        )
    }
};