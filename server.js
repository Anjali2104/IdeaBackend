const express = require('express');
const app = express();
app.use(myMiddleware);
function myMiddleware(req,res,next){
    console.log('inside middleware');
    next();
}
app.listen(8080,()=>{
    console.log(`server started at 8080`);
})