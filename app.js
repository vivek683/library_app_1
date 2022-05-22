const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
// part 1 point 2 - The bodyparser module has been imported into the javascript file.
const bodyParser = require('body-parser');

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');
const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 
// part 2 point 2 - the cors function is used
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 
app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
// q3. in the route module the spelling of the homeRouter has been changed into homeroute.js 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 

app.get('/',function(req,res){

    res.render('index',{});
    
});



//part 1 point 5 -  The console statement changed to server 5000.

app.listen(5000,()=>{
    console.log("Server Ready on 5000");
});
