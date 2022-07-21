import apiURL from './api.js';

const player = document.getElementById('player');
const score = document.getElementById('score');

export default async function addScore() {
  await fetch(apiURL, {

    method: 'POST',
    body: JSON.stringify({
      user: player.value,
      score: score.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  player.value = '';
  score.value = '';
}