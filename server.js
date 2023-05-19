const express = require ('express');
const path = require ('path');
const bodyParser = require ('body-parser');
const bcrypt = require ('bcrypt');

// const routes = require ('./router/main');

const aavaUser = require ('./models/userSchema');
const navData = require ('./models/navsec');
const database = require ('./database/dbConn');





const app = express();
const PORT = process.env.PORT || 1000;


// app.use('',routes);

//setting templte engine
app.set('view engine', 'ejs');

//middleware
app.use(express.urlencoded({extended:false}));

//Accessing public folder path 
const publicPath = path.join(__dirname, ('public'));
app.use(express.static(publicPath));




app.get('/', async (req, res)=>{
    const navDetails = await navData.findOne({"_id": "6437e52280a8145c2e4daa2f"})
    console.log(navDetails)
    res.render('index', {
        navDetails:navDetails
    });
})

//virual learning hub
app.get('/virtuallearning', (req, res)=>{
    res.render('virtuallearning');
})
//it services
app.get('/IT_Services', (req, res)=>{
    res.render('IT_Services');
})
//Digital _Marketing
app.get('/Digital_Marketing', (req, res)=>{
    res.render('Digital_Marketing');
})
//Social_Media_Management
app.get('/Social_Media_Management', (req, res)=>{
    res.render('Social_Media_Management');
})


//register form
app.get('/signup', (req, res)=>{
    res.render('signup');
})
//login form
app.get('/login', (req, res)=>{
    res.render('login');
})



//accessing data from register/signup form 
app.post('/signup', async (req, res)=>{
    try {
       
     const sendData = aavaUser(req.body);
     if(sendData.password === sendData.confPassword){
        const emialValid = await aavaUser.findOne({email: sendData.email});
        if(emialValid){
            res.status(400).send('This email already Exit !');
        }
        else{
            await sendData.save();
            res.render('login');
        }
     
     }
     else{
        res.send("your password not match ");
     }
     
     
    } catch (error) {
     res.status(400).send(`your form is not submitted ! ${error}`);
     
    }
 })


 //login form
 app.post('/login',async(req, res)=>{
   try {
    const userPassword = req.body.password;
    const checkEmail = req.body.email;
    const databaseData = await aavaUser.findOne({email:checkEmail});
    // if(databaseData.password === userPassword){
        const isMacth = await bcrypt.compare(userPassword, databaseData.password);
        if(isMacth){
            res.render("index");
        }
        
    else{
        res.status(400).send('your password not match')
    }
    
   } catch (error) {
    res.status(400).send(error)
    
   }

 })



 


app.listen(PORT, (req ,res)=>{
    console.log(`Server is running on port no : ${PORT}`);
})