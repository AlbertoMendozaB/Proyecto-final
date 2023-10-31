const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
const routerApi = require('./routes');

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.send('Node.js, Express, and Postgres API');
  });

  routerApi(app);

  app.listen(port,()=>{
    console.log("Port ==> ",port);
  });

  