const { mongoose } = require('../db/connectdb.js');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);


const fournisseur = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: flase
    },
    adresse: {
        type: String,
        required: true
    },
    
});


fournisseur.plugin(autoIncrement.plugin, 'Fournisseur');
var Fournisseur = mongoose.model('Fournisseur', fournisseur);

module.exports = { Fournisseur };