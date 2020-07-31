const express = require('express');
const PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
	res.statusCode = 200;
	res.render('index.html');
});

app.listen(PORT, () => {
	console.log('Server is up for port ' + PORT);
});