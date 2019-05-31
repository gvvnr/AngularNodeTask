const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname +'/dist/buy-products'));

app.get('/*' , (req , res) => {
  res.sendFile(path.json(__dirname+'/dist/buy-products/index.html'));
});

app.listen(process.env.PORT || 8080 ,() =>{
  console.log('server started',process.env.PORT);
});
