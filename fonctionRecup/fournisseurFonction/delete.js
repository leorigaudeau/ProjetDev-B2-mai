const { Fournisseur } = require('../../models/fournisseur.js');

const deleteFournisseurById = (req,res) => {
    const {id} = req.params;

    Fournisseur.remove({"_id": id}).then((fournisseur)=>{
        if (!fournisseur) {
            res.status(404).send();
        }
        res.send(fournisseur);
    },e=>res.status(500).send(e));
};

module.exports={deleteFournisseurById};