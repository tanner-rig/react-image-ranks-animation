import axios from 'axios';
import Promise from 'bluebird';

export function isImageValid(rankings) {
  return Promise.map(rankings, (ranking)=>{
    return axios.get(ranking.url)
      .then(function () {
        ranking.valid = true;
        return ranking;
      })
      .catch(function () {
        ranking.valid = false;
        return ranking;
      });
  });
}
