const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const motDePasse = "P@ssw0rd";
// Fournisseurs-----------------------------------------------
const { Fournisseur } = require('./models/fournisseur'); 


//Routing-------------------------------------------------------------------------------------------------------
app.use(bodyParser.json());

app.get("/fournisseur",(req,res)=>{
    Fournisseur.find().then((fournisseur)=>{
        res.send(brasseur);
    },e=>res.status(500).send(e))
});

app.post("/fournisseur",(req,res)=>{
    const fournisseur = new Fournisseur({
        nom: req.body.nom,
      
    });
    fournisseur.save().then(fournisseur => {
        res.send(fournisseur);
    }, e => {
        res.status(500).send(e);
    });
});
console.log('Nous disposons votre serveur sur le port:3000');
app.listen(3000);

