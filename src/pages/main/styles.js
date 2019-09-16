import styled from "styled-components";
import whiteboard from "../../assets/whiteboard.png";
import button from "../../assets/button.svg";
import buttonHover from "../../assets/button_hover.svg";
import hr from "../../assets/hr.svg";
import left from "../../assets/left.svg";

export const PlanetInfo = styled.div`
  background: url(${whiteboard});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const PlanetBorder = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  width: 40%;
  position: relative;
  @media (max-width: 600px) {
    width: 80%;
    zoom: 0.7;
  }
  :before {
    background: url(${left});
    content: " ";
    position: absolute;
    left: -10px;
    top: -10px;
    background-size: 100%;
    background-repeat: no-repeat;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
  }

  :after {
    background: url(${left});
    content: " ";
    position: absolute;
    right: -5px;
    bottom: -1px;
    transform: rotate(180deg);
    background-size: 100%;
    background-repeat: no-repeat;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
  }

  .planet-name {
    text-align: center;
  }
  .hr {
    width: 100px;
  }
`;
export const NextPlanet = styled.a`
  background-image: url(${button});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  padding: 8px 15px;
  color: #4f4f4f;
  text-decoration: none;
  transition: all 0.3s ease;
  width: 100px;
  text-align: center;
  :hover {
    background-image: url(${buttonHover});
    color: #ccc;
  }
`;

export const PlanetSeparator = styled.hr`
  border: none;
  background: url(${hr});
  width: calc(100% + 20px);
  height: 7px;
  margin: 10px -15px;
`;
