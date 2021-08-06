const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const defaultConf = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

server = express();
server.set('port', process.env.PORT || 3000);

//Middlewares:

server.use(express.urlencoded({extended: true}));

//Connecting to MongoDB

async function runFunctionalities(){
    //Connecting to DB:

    console.log('Connecting to DB...')
    await mongoose.connect('mongodb://localhost:27017/API', defaultConf)
    .catch(()=>{
        console.log('Could not connect to MongoDB');
        process.exit();
    })

    console.log('Connected to DB');
    server.listen(server.get('port'), ()=>{console.log(`Server on port: ${server.get('port')}`)});
}

runFunctionalities();

//Mongoose things:

const TvSchema = new mongoose.Schema({
    name: String,
    model: String,
    size: Number,
    idSerial: Number 
});

const TvModel = mongoose.model('TV', TvSchema);

//Routes

server.get('/api/items', cors() ,async (req, res)=>{
    let results = await TvModel.find({});
    res.json(results);
});

server.post('/api/items', async (req, res)=>{
    let body = req.body;
    let newitem = new TvModel({
        name: body.name,
        model: body.model,
        size: body.size,
        idSerial: null
    })
    await newitem.save((err)=>{
        if (err) return console.error(err);
        else console.log(`Saved the following item: ${body.name}, ${body.model}, ${body.size}, ${body.idSerial}`);
    })
});