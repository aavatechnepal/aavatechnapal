const mongoose = require ('mongoose');

const navDetails = new mongoose.Schema({
    brandName : String,
    brandUlrIcon : String,
    links: [
        {
            label : String,
            url : String,
        }
    ]
})
const navData = mongoose.model('nav', navDetails);
module.exports = navData;