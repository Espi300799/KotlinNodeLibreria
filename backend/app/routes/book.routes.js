module.exports = app => {
    const books = require("../controllers/book.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Bicycle
    router.post("/", books.create);
  
    // Retrieve all Bicycles
    router.get("/", books.findAll);
  
    // Retrieve a single bicycle with id
    router.get("/:id", books.findOne);
  
    // Update a bicycle with id
    router.put("/:id", books.update);
  
    // Delete a bicycle with id
    router.delete("/:id", books.delete);
  
    // Delete all bicycles
    router.delete("/", books.deleteAll);
  
    app.use('/api/libreria', router);
  };