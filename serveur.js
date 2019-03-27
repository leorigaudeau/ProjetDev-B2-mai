const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const motDePasse = "P@ssw0rd";

//User require-------------------------------------------------------------------------------------------------------
const { postUser} =  require("./fonctionRecup/userFonction/post");
const { getUsers,getUserById } =  require("./fonctionRecup/userFonction/get");
const { putUser} =  require("./fonctionRecup/userFonction/put");
const { delUser} =  require("./fonctionRecup/userFonction/del");



//Routing-------------------------------------------------------------------------------------------------------
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
console.log('Nous disposons votre serveur sur le port:3000');
app.listen(3000);

// User routing---------------------------------------------------------------------------------------------
app.post('/', (req, res) => {
    postUser(req,res);
 });
 app.get('/user',(req,res)=>{
     getUsers(req,res);
 });
 app.get('/user/:id',(req,res)=>{
     getUserById(req,res);
 });
 app.put('/user/:id',(req,res)=>{
     putUser(req,res);
 });
 app.delete('/user/:id',(req,res)=>{
     delUser(req,res);
 });