const { mongoose } = require('../db/connectdb');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);


const user = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true
    }
});


user.plugin(autoIncrement.plugin, 'Users');
var User = mongoose.model('Users', user);

module.exports = { User };