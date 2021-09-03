import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async (key) => {
  const { data } = await axios.get(`http://swapi.dev/api/planets/`);
  return data;
};

const Planets = () => {
  const { resolveData, status } = useQuery(["planets"], fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>

      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {resolveData.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
