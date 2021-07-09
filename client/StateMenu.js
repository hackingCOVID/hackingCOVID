import React from "react";
import { Dropdown } from "react-bootstrap";

const StateMenu = ({fakeFunction}) => {
  const mapData = require("./geojson.json");
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose a State
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {mapData.features.map((state) => (
            <Dropdown.Item onClick={() => fakeFunction(state.properties.abbreviation)}>
              {state.properties.abbreviation}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default StateMenu;
