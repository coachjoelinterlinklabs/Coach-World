const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => res.send('Coach World API running'));


// Example endpoint: get token info (placeholder)
app.get('/token-info', (req, res) => {
res.json({ name: 'Coach Joel Coin', symbol: 'CJC' });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server started on', PORT));