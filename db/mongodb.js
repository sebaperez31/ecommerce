var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecommerce", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {if (err) throw err; });

module.exports = mongoose;