const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/Router');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use('/api', router);

//Para conectar a api
app.use(cors());

//conectando ao banco:
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error)=>{
    console.error('ERROR'+error.message);
});

app.listen(process.env.PORT || 2222, ()=>{
    console.log("Servidor na porta: http://localhost:2222");
})
