const express = require('express');

const app = express();
app.use(express.json())
// MIDDLEWARE
app.use(myMiddleware);
function myMiddleware(req,res,next){
    console.log('inside middleware');
    next();
}
// STICH THE ROUTE TO THE SERVER
require('./routes/idea.routes')(app);
// STARTING SERVER
app.listen(8060,()=>{
    console.log(`server started at 8060`);
})