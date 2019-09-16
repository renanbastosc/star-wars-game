import React, { Component } from "react";
import api from "../../services/api";
import {
  PlanetInfo,
  PlanetBorder,
  NextPlanet,
  PlanetSeparator
} from "./styles.js";

class Main extends Component {
  state = {
    planet: []
  };

  componentDidMount() {
    this.loadPlanetInfo();
  }

  loadPlanetInfo = async () => {
    const planet_id = Math.floor(Math.random() * 19 + 1);
    const response = await api.get("/planets/" + planet_id);
    response.data.films_length = response.data.films.length;
    this.setState({ planet: response.data });
  };

  render() {
    const { planet } = this.state;
    return (
      <PlanetInfo>
        <PlanetBorder>
          <div className="planet-name">{planet.name}</div>
          <PlanetSeparator />
          <div className="population">Population: {planet.population}</div>
          <div className="climate">Climate: {planet.climate}</div>
          <div className="terrain">Terrain: {planet.terrain}</div>
          <div className="films">Featured in {planet.films_length} films</div>
        </PlanetBorder>
        <NextPlanet href="">Next</NextPlanet>
      </PlanetInfo>
    );
  }
}
export default Main;
