const express = require('express');
const routerApi = require('./routes')

const app = express();
const port = 8000;

//To receive info in json; send by POST
app.use(express.json());

app.get('/', (req, res) =>{
  res.send('hola mi server en express');
});

//path to index in routes
routerApi(app);

app.listen(port, () =>{
  //console.log("sisas parce! mi port" + port);
})
