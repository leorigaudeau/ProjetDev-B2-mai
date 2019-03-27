const { Fournisseur } = require('../../models/fournisseur.js');

const getFournisseur = (req,res) => {
    Fournisseur.find().then((fournisseur)=>{
        res.send(fournisseur);
    },e=>res.status(500).send(e))
};

const getFournisseurById = (req,res) => {
    const {id} = req.params;

    Fournisseur.findById(id).then((fournisseur)=>{
        if (!fournisseur) {
            res.status(404).send();
        }
        res.send(fournisseur);
    },e=>res.status(500).send(e))
};

module.exports={getFournisseur,getFournisseurById};