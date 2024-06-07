import React from "react";
import Movie from "./Movie";



//container for all the Movie components and their data.


export default class MovieList extends React.Component {
       
    render() {

        let movieOne = {
            title: "The Princess Bride",
            synop: "A bedridden boy's grandfather reads him the story of a farm boy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
            image: "https://static.hollywoodreporter.com/sites/default/files/2013/11/princess_bride_poster_art_a_p.jpg"
        }
        let movieTwo = {
            title: "Little Shop of Horrors",
            synop: "A rock musical about a nerdy flower shop assistant, Seymore, his love interest Audrey, and his carnivorous plant Audrey II.",
            image: "../public/images/LittleShopOfHorrors.jpg"
        }
        let movieThree = {
            title: "Home Alone",
            synop: "The McCallister family is planning on going to Paris for Christmas vacation and in their rush to leave, leave the youngest member of the family, Kevin, at home! While the family is gone, Kevin has to defend the home against a couple of bumbling burglars.",
            image: "../public/images/HomeAlone.jpeg"
        }

        return (
            <div className="movieList-data">
                <Movie {...movieOne} />
                <Movie {...movieTwo}/>
                <Movie {...movieThree} />
            </div>
        )
    };
    
}