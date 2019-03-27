const { Fournisseur } = require('../../models/fournisseur.js');

const postFournisseur = (req,res) => {
    const fournisseur = new Fournisseur({
        nom: req.body.nom,
        description: req.body.description,
        adresse: req.body.adresse,
        telephone: req.body.telephone,
        mail: req.body.mail
    });
    fournisseur.save().then(fournisseur => {
        res.send(fournisseur);
    }, e => {
        res.status(500).send(e);
    });
};


module.exports={postFournisseur};

