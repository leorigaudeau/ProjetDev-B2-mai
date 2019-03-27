const { mongoose } = require('../db/connectdb');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);


const user = new mongoose.Schema({
    Nom: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required:true
    }
});


user.plugin(autoIncrement.plugin, 'Users');
var User = mongoose.model('Users', user);

module.exports = { User };