const ideas = require('../models/idea.model')
// search all idea
exports.fetchAllIdeas = (req,res) => {
    res.status(200).send(ideas);
}
//create  new idea
let idCount=1;
exports.createIdea = (req,res) =>{
    // read the req body
     const idea =  req.body;


    // need to generate the next idea id
  idea.id = ++idCount;

    //save it in the list of existing idea
  ideas[idCount] = idea;
    //return the response
  res.status(201).send(ideas[idCount] );

}
// update idea
exports.updateIdeas = (req,res) =>{
    // read the id passed in the path
    // 127.0.0.1:8080/ideaApp/v1/ideas/1
    const ideaId = req.params.id;
    // if idea is present -modify else return error
    if(ideas[ideaId]){
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId]);
    }
    else{
        res.status(400).send({
            message: "idea Id passed was not correct"
        })
    }
}
// delete ideas
exports.deleteIdea = (req,res) => {
  // check if present -yes delete if no give error msg
  if(ideas[req.params.id]){
    delete ideas[req.params.id];
    res.status(200).send({
      message:"Successfully deleted"
    })
  }
  else{
   res.status(400).send({
    message:"wrong idea id"
   })
  }
  //
}