import React, { useState } from "react";
import team from "../assets/icon-teams.png";
import player from "../assets/icon-player.png";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(true);

  const viewTeams = () => {
      navigate("/teams");
  }
    
  const viewPlayers = () => {
        navigate("/players");
  }
    
  const logout = () => {
    localStorage.removeItem("token-info");
      setIsLoggedin(false);
      navigate("/login");
  };

  return (
    <div className="container">
      <div className="header-row">
        <div className="col-12 col-lg-12">
          <h2 className="text-center w-100">Our Expert Team</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <div onClick={viewTeams} className="team-member">
            <div className="photo">
              <img src={team} className="img-fluid" />
            </div>
            <h3>Teams</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div onClick={viewPlayers} className="view-member">
            <div className="photo">
              <img src={player} className="img-fluid" />
            </div>
            <h3>Players</h3>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="btn-row">
        <button onClick={logout} className="btn btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
