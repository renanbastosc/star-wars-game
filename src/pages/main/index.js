import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    //name, population, climate, terrain, how many films are showed
    state = {
        planet: []
    };

    film_state = {
        films: []
    }
    componentDidMount() {
        this.loadPlanetInfo();
    }

    loadPlanetInfo = async () => {
        const planet_id = Math.floor(Math.random() * 21);
        const response = await api.get("/planets/" + planet_id);
        /* const uri_films = response.data.films;

        const films = [];

        uri_films.map(async function (film) {
            const res_film = await api.get(film);
            films.push(res_film.data.title);
        });
        response.data.films_name = films;*/

        response.data.films_length = response.data.films.length;

        console.log(response.data); 

        this.setState({ planet: response.data });
    }

    render() {
        const { planet } = this.state;
        return (
            <div className="planet-info">
                <div className="planet_name">
                    {planet.name}
                </div>
                <div className="population">
                    Population: {planet.population}
                </div>
                <div className="climate">
                    Climate: {planet.climate}
                </div>
                <div className="terrain">
                    Terrain: {planet.terrain}
                </div>
                <div className="films_appear">
                    Featured in {planet.films_length} films
                </div>
                <div className="next_planet">
                    <a href="">Next</a>
                </div>
            </div>
        )
    }
}