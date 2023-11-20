import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Teams = () => {

  const [teams, getTeams] = useState('');
  const url = "https://www.balldontlie.io/api/v1/players";

  useEffect(() => {
    getTeams();
  }, []);

  const getAllTeams = () => {
    axios.get(`${url}`)
      .then((response) => {
        console.log(response.data.data);
        const allTeams = response.data.data;
        getAllTeams(allTeams);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  return (
    <div className='team-container'>
      {}
    </div>
  )
}

export default Teams
