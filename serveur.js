const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const motDePasse = "P@ssw0rd";


//Routing-------------------------------------------------------------------------------------------------------
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
console.log('Nous disposons votre serveur sur le port:3000');
app.listen(3000);

