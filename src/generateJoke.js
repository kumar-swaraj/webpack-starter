import axios from 'axios';

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await axios.get('https://icanhazdadjoke.com', config);

  document.getElementById('joke').textContent = res.data.joke;
}

export default generateJoke;
