import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    //name, population, climate, terrain, how many films are showed
    state = {
        planet: []
    };
    componentDidMount() {
        this.loadPlanetInfo();
    }

    loadPlanetInfo = async () => {
        const response = await api.get("/planets/3/");
        console.log(response.data);
        this.setState({ planet: response.data});
    }

    render() {
        return (
            <div className="planet-info">
                <div className="planet_name">
                    {this.state.planet.name}
                </div>
                <div className="population">
                    Population: {this.state.planet.population}
                </div>
                <div className="climate">
                    Climate: {this.state.planet.climate}
                </div>
                <div className="terrain">
                    Terrain: {this.state.planet.terrain}
                </div>
            </div>
        )
    }
}