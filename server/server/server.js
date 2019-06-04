const PORT = process.env.PORT || 3333;

import os from "os";
import express from "express";
import http from "http";
import RoutesConfig from "./config/routes.conf";
//import DBConfig from "./config/db.conf";
import Routes from "./routes/index";


const app = express();

app.use('/', (req,res) =>{
  res.send("hello");
})
/*app.use(express.static(__dirname + '/dist'));*/
///buy-products
/*app.get('/!*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/BuyProducts/index.html'));
});*/

RoutesConfig.init(app);

Routes.init(app, express.Router());
http.createServer(app)
 // .listen(PORT, '192.168.42.242')//192.168.42.242
  .listen(PORT, () => {

    console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
    console.log(`enviroment: ${process.env.NODE_ENV}`);
  });
// /  .listen(PORT, '192.168.0.141');
