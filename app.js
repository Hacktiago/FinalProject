const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();

const mongoose = require('mongoose');
const LegalCase = require('./public/legalCase');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname,"public")))

const password = 'abogadosCNS'
const dbname = 'casos'
const mongo_uri = `mongodb+srv://ProyectoCNS:${password}@cluster0.6jb8q.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(mongo_uri, function(err){
    console.log('Entre');
    if(err){
        throw err;
    }else {
        console.log(`Successfully connected to ${mongo_uri}`);
    }
});

app.post('/register', (req, res) =>{
    const{name, surname, email, idUser, phoneNumber} = req.body

    const legalCase = new LegalCase({name, surname, email, idUser, phoneNumber});

    legalCase.save(err =>{
        if(err){
            res.status(500).send('ERROR AL REGISTRAR');
        }else{
            res.status(200).send('CASO REGISTRADO');
        }
    }); 
});

app.listen(3000, ()=>{
    console.log('server started');
})
module.exports = app;