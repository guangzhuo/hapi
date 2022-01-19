const { carController } = require("../controllers");
const carRoute = [
  {
    method: "GET",
    path: "/api/cars",
    handler: carController.getCars,
  },
  {
    method: "GET",
    path: "/api/cars/:id",
    handler: carController.getSingleCar,
  },
  {
    method: "POST",
    path: "/api/cars",
    handler: carController.addCar,
    // schema: documentation.addCarSchema
  },
  {
    method: "PUT",
    path: "/api/cars/:id",
    handler: carController.updateCar,
  },
  {
    method: "DELETE",
    path: "/api/cars/:id",
    handler: carController.deleteCar,
  },
];

module.exports = carRoute;
