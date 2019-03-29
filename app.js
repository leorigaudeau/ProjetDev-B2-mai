const bodyParser = require('body-parser');
const express = require('express');
const app = express();
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
app.use(bodyParser.json());

app.get("/fournisseur",(req,res)=>{
    getFournisseur(req,res);
});
app.get("/fournisseur/:id",(req,res)=>{
    getFournisseurById(req,res);
});

app.post("/fournisseur",(req,res)=>{
    postFournisseur(req,res);
});

app.put("/fournisseur/:id",(req,res)=>{
    updateFournisseurById(req,res);
});

app.delete("/fournisseur/:id",(req,res)=>{
    deleteFournisseurById(req,res);
});


// User routing---------------------------------------------------------------------------------------------
app.post('/user', (req, res) => {
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



console.log('Nous disposons votre serveur sur le port:3000');
const port = process.env.PORT || 3000
app.listen(port);
