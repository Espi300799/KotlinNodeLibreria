module.exports = (sequelize, Sequelize) => {
    const Bicycle = sequelize.define("bicycle", {
      brand: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      }
    }, { timestamps: false});
    //Estoy to enmonado quiero mi yerba
    return Bicycle;
  };