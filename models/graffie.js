const mongoose = require("mongoose")
const graffieschema = mongoose.Schema({
graffiename: String,
habitat: String,
classification: String,
price: Number
})
module.exports = mongoose.model("graffie", graffieschema)