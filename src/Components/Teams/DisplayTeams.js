import React from 'react';
import team from "../../assets/icon-teams.png";

const DisplayTeams = (props) => {
    
    const { teams } = props;

    if (teams > 0) {
        return (
            teams.map((team, index) => {
                console.log(team);
                return (
                  <div>
                    <div class="col-md-3">
                      <div class="team-member">
                        <div class="photo">
                          <img src={team} class="img-fluid" />
                        </div>
                                <h3>{team.team.full_name}</h3>
                                <h4>{}</h4>
                      </div>
                    </div>
                  </div>
                );
            })
        )
    }
  return (
    <div>
      
    </div>
  )
}

export default DisplayTeams
