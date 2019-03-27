const mongoose = require("mongoose");
const uri = "mongodb+srv://Admin:<P@ssw0rd>@cluster0-sm8kp.mongodb.net/test?retryWrites=true";

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true });

module.exports = { mongoose }

