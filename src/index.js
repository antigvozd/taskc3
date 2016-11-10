import express from 'express';
import canonize from './customize';

const app = express();
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2b', (req, res) => {
	res.json({
		url: req.query.url,
		username: canonize(req.query.url)
	});
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
