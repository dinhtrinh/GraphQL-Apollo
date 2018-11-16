const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/index');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());

mongoose.connect('mongodb://ndtrinh:test123456@ds259463.mlab.com:59463/shop', { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
  console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:true
}));

app.listen(4000, ()=>{
  console.log("Server started on port 4000...");
})
