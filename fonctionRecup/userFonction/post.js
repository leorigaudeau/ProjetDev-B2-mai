const { User } = require('../../models/user');

const postUser = (req,res) => {
    const user = new User({
        nom: req.body.nom,
        password: req.body.password
    });
    user.save().then(user => {
        res.send(user);
    }, e => {
        res.status(500).send(e);
    });
};


module.exports={postUser};