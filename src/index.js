import './style.css';
import renderHTML from './modules/render.js';
import addScore from './modules/add.js';
import loadScore from './modules/loadScore.js';

const refreshBtn = document.getElementById('refresh');
const scoreBtn = document.getElementById('submitScore');

window.addEventListener('load', async () => {
  await loadScore();
});

refreshBtn.addEventListener('click', async () => {
  await renderHTML();
});

scoreBtn.addEventListener('click', async () => {
  await addScore();
});
