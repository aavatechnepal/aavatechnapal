const mongoose = require ('mongoose');
const navData = require('../models/navsec');


// navData.create({
//     brandName : "aavatechnepal",
//     brandIconUrl : "kalpalogo.jpg",
//     links:[
//        {
//         label : 'home',
//         url : "/"
//        },
//        {
//         label : 'virtualLeaRNING',
//         url : "/virtuallearning"
//        },
//        {
//         label : 'it services',
//         url : "/itservices"
//        }
//     ]
// })

mongoose.connect('mongodb+srv://anil:anil1921@cluster0.634sltj.mongodb.net/AavaUserDataBase?retryWrites=true&w=majority')
.then(()=>{
    console.log(`Database Connected !`);
})
.catch((error)=>{
    console.log(`Database Not Connected ! ${error}`);
})

