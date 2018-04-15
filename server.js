const express = require('express')
const app = express();
const cors = require('cors');

const routes = require('./routes/index')

app.use(cors())

app.use('/', routes);
app.use(express.static(path.join(__dirname)));

app.listen(4040, () => console.log('Listening on port 4040'))