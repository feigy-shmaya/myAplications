const express = require('express');
const axios = require('axios');
const renderApi = require('@api/render-api');

require('dotenv').config();

const app = express();
const port = 3000;

app.get('/services', async (req, res) => {
  try {
    const response = await axios.get('https://api.render.com/v1/services?limit=20', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.RENDER_API_KEY}`, 
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services from Render' });
  }
});

app.get('/', (req, res) => {
      res.send('👩🏻‍💻💻👩🏻‍💻💻👩🏻‍💻💻👩🏻‍💻💻👩🏻‍💻💻');
  });

  renderApi.auth('rnd_NwH41vedjRSap8U6TiTHlT4UQIew');
  renderApi.listServices({includePreviews: 'true', limit: '20'})
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
