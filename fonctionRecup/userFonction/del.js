const { User } = require('../../models/user');

const delUser = (req,res) => {
    const {id} = req.params;
    User.remove({"_id": id}).then((user)=>{
        if (!user) {
            res.status(404).send();
        }
        res.send(user)
    },e=>res.status(500).send(e))
};

module.exports={delUser};