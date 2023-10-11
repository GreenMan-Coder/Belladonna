const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const app = express();
const port = 8000;

//To receive info in json; send by POST
app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
  res.send('hola mi server en express');
});

//path to index in routes
routerApi(app);

//Error midlewares must to be used after routing implementation
//Order is a condition to deploy
// app.use(logErrors);
// app.use(ormErrorHandler);
// app.use(boomErrorHandler);
// app.use(errorHandler);

app.listen(port, () =>{
  console.log("Puerto: " + port);
})
