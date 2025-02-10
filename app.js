const express = require('express');
const axios = require('axios');
// import renderApi from '@api/render-api';
const renderApi = require('@api/render-api');

require('dotenv').config(); // מאפשר להשתמש במשתנים מהקובץ .env

const app = express();
const port = 3000;

// Endpoint שמחזיר את רשימת האפליקציות מ-Render
app.get('/services', async (req, res) => {
  try {
    const response = await axios.get('https://api.render.com/v1/services?limit=20', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.RENDER_API_KEY}`, // שימוש ב-API Key
      },
    });

    // שלח את המידע מה-API ללקוח כ-JSON
    res.json(response.data);
  } catch (error) {
    // אם יש שגיאה, החזר שגיאה ללקוח
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

// התחלת השרת
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
