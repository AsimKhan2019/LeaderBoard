import apiURL from './api.js';

const scoreList = document.getElementById('scoreList');
// const score = document.getElementById('score');

export default async function renderHTML() {
  await fetch(apiURL)
    .then((response) => response.json())
    .then((json) => {
      scoreList.innerHTML = '';
      json.result
        .sort((a, b) => (parseInt(a.score, 10) > parseInt(b.score, 10) ? -1 : 0))
        .forEach((player) => {
          const li = document.createElement('li');
          const spanName = document.createElement('span');
          const spanScore = document.createElement('span');
          spanName.className = 'name';
          spanName.innerText = player.user;
          spanScore.className = 'score';
          spanScore.innerText = player.score;
          li.append(spanName);
          li.append(spanScore);
          scoreList.append(li);
        });
    });
}