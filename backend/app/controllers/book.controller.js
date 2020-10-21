const db = require("../models");
const Book = db.libro;
const Op = db.Sequelize.Op;

// Create and Save a new Book
// req --> request (contains the body)
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre || !req.body.autor || !req.body.sinopsis) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Book
  const book = {
    nombre: req.body.nombre,
    autor: req.body.autor,
    sinopsis: req.body.sinopsis
  };

  // Save Book in the database
  Book.create(bicycle)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Bicycle."
      });
    });
};

// Retrieve all Books from the database.
exports.findAll = (req, res) => {
  
    Book.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving bicycles."
        });
      });
};

// Find a single Book with an id
exports.findOne = (req, res) => {
  let id = req.params.id;
  Book.findByPk(id)
    .then(data => {
      if(!data){
        res.status(400).send({
          message:
            "No Book found with that id"
        })
      }
      res.send(data);
      return;
    })
    .catch(err => {
      console.log(err.message);
      console.log("hola");
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving a book with id"
      });
      return;
    });
};

// Update a Book by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Book.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Book was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Book with id=${id}. Maybe Book was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Book with id=" + id
      });
    });
};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Book.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Book was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Book with id=${id}. Maybe Book was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Book with id=" + id
      });
    });
};

// Delete all Books from the database.
exports.deleteAll = (req, res) => {
  Book.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Book were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Books."
      });
    });
};