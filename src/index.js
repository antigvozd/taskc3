import express from 'express';
import canonize from './customize';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2c', (req, res) => {
	const username = req.query.fullname != undefined ? canonize(req.query.fullname) : 'Invalid username';
	res.send(username);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
