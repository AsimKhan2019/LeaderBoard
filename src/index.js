import './style.css';

const realScore = require('./modules/loadScore.js');
const addScore = require('./modules/add.js');

const refreshBtn = document.getElementById('refresh');
const scoreBtn = document.getElementById('submitScore');

window.addEventListener('load', async () => {
  await realScore.loadScore();
});

refreshBtn.addEventListener('click', async () => {
  await realScore.loadScore();
});

scoreBtn.addEventListener('click', async () => {
  await addScore.addScore();
});
