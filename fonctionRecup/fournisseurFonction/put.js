const { Fournisseur } = require('../../models/fournisseur.js');

const updateFournisseurById = (req,res) => {
    const {id} = req.params;
    const fournisseur = new Fournisseur({
        nom: req.body.nom,
        description: req.body.description,
        adresse: req.body.adresse,
        telephone: req.body.telephone,
        mail: req.body.mail
    });
    Fournisseur.findByIdAndUpdate(id,fournisseur).then((fournisseur)=>{
        res.send(fournisseur);
    },e=>res.status(500).send(e))
};

module.exports={updateFournisseurById};