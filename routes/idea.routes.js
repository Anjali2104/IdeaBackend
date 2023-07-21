const ideaController = require('../controllers/idea.controller')
module.exports = (app) =>{
    app.get("/ideaApp/v1/ideas",ideaController.fetchAllIdeas)
    app.post("/ideaApp/v1/ideas", ideaController.createIdea)
    app.put("/ideaApp/v1/ideas/:id" ,ideaController.updateIdeas)
    app.delete("/ideaApp/v1/ideas/:id",ideaController.deleteIdea);
}