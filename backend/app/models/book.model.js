module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("libro", {
      nombre: {
        type: Sequelize.STRING
      }, 
      autor: {
        type: Sequelize.STRING
      },
      sinopsis: {
        type: Sequelize.STRING
      }
    }, { timestamps: false});

    return Book;
  };