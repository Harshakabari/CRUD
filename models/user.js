const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/anydatabase`);

const userSchems = mongoose.Schema({
    name:String,
    email:String,
    image:String

})

module.exports = mongoose.model("user",userSchems);