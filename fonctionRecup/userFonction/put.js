const { User } = require('../../models/user');


const putUser = (req,res) => {
    const {id} = req.params;
    const user = new User({
        nom: req.body.nom,
        brasseurid: req.body.brasseurid,
        tauxAlcool: req.body.tauxAlcool,
        typeBiereid: req.body.typeBiere,
    });
    
    User.findByIdAndUpdate(id,user).then((user)=>{
        if (!user) {
            res.status(404).send();
        }
        res.send(user);
    },e=>res.status(500).send(e))
};

module.exports={putUser};