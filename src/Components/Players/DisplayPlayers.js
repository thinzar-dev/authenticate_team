import React from 'react';
import player from "../../assets/icon-player.png";

const DisplayPlayers = (props) => {

    const { players } = props;
    
    if (players > 0) {
        return (
            players.map(player => {
                console.log(player);
                return (
                    <div>
                        <div class="col-md-3">
                            <div class="player-member">
                                <div class="photo">
                                    <img src={player} class="img-fluid" />
                                </div>
                                <h3>`${player.first_name} ${player.last_name}`</h3>
                                <h4>{player.team.full_name}</h4>
                      </div>
                    </div>
                  </div>
                );
            })
        )
    }
}

export default DisplayPlayers
