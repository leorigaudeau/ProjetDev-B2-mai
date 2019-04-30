const express = require('express');
const app = express();
const cors = require('cors');
// Fournisseurs-----------------------------------------------
const { Fournisseur } = require('./models/fournisseur'); 
const { getFournisseur, getFournisseurById } =  require("./fonctionRecup/fournisseurFonction/get");
const { postFournisseur } =  require("./fonctionRecup/fournisseurFonction/post");
const { updateFournisseurById } =  require("./fonctionRecup/fournisseurFonction/put");
const { deleteFournisseurById } =  require("./fonctionRecup/fournisseurFonction/delete");
//User require-------------------------------------------------------------------------------------------------------
const { postUser} =  require("./fonctionRecup/userFonction/post");
const { getUsers,getUserById } =  require("./fonctionRecup/userFonction/get");
const { putUser} =  require("./fonctionRecup/userFonction/put");
const { delUser} =  require("./fonctionRecup/userFonction/del");



//Routing-------------------------------------------------------------------------------------------------------
app.use(cors());
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });
app.get("/fournisseur",(req,res, next)=>{
    getFournisseur(req,res);
});
app.get("/fournisseur/:id",(req,res, next)=>{
    getFournisseurById(req,res);
});

app.post("/fournisseur",(req,res, next)=>{
    postFournisseur(req,res);
});

app.put("/fournisseur/:id",(req,res, next)=>{
    updateFournisseurById(req,res);
});

app.delete("/fournisseur/:id",(req,res, next)=>{
    deleteFournisseurById(req,res);
});


// User routing---------------------------------------------------------------------------------------------
app.post('/user', (req, res, next) => {
    postUser(req,res);
 });
 app.get('/user',(req,res, next)=>{
     getUsers(req,res);
 });
 app.get('/user/:id',(req,res, next)=>{
     getUserById(req,res);
 });
 app.put('/user/:id',(req,res, next)=>{
     putUser(req,res);
 });
 app.delete('/user/:id',(req,res, next)=>{
     delUser(req,res);
 });



console.log('Nous disposons votre serveur sur le port:3000');
const port = process.env.PORT || 3000
app.listen(port);
