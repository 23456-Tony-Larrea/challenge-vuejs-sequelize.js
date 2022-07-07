const express=require('express');
const cors=require('cors');
const app=express();
app.set('port',process.env.PORT||3000);
const users=require('./routes/users');
app.use(express.json());
app.use(cors());
//routes
app.use('/users',users);
app.listen(app.get('port'),()=>{
        console.log('listening on port',app.get('port'))
});