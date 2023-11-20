import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayPlayers from "./DisplayPlayers";

const Players = () => {
  const [players, getPlayers] = useState({});

  useEffect(() => {
    getPlayers();
  }, []);

  const getAllPlayers = () => {
    axios
      .get("https://www.balldontlie.io/api/v1/players")
      .then((response) => {
        console.log(response.data.data);
        const allPlayers = response.data.data;
        getAllPlayers(allPlayers);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

    return (
        <div className="player-container">
            <DisplayPlayers players={players}></DisplayPlayers>
        </div>
    );
};

export default Players;
