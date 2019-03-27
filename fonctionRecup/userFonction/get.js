const { User } = require('../../models/user');

const getUsers = (req,res) => {
    User.find().then((user)=>{
        res.send(user);
    },e=>res.status(500).send(e))
};

const getUserById = (req,res) => {
    const {id} = req.params;
    User.findById(id).then((user)=>{
        if (!user) {
            res.status(404).send();
        }
        res.send(user);
    },e=>res.status(500).send(e))
};

module.exports={ getUsers,getUserById };