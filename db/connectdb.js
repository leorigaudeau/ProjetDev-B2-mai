const mongoose = require("mongoose");
const uri = process.env.DATABASE_URL || "mongodb+srv://Admin:P@ssw0rd@cluster0-sm8kp.mongodb.net/test?retryWrites=true";

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true });

module.exports = { mongoose }

