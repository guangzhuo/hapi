const boom = require("boom");
const Car = require("../database/models/Car");

const getCars = async (request, h) => {
  try {
    // const aa = new Car({ name: "333" });
    // await aa.save();
    const cars = await Car.findOne({ id: "10006546" });
    return cars;
  } catch (error) {
    console.log(error);
    throw boom.boomify(error);
  }
};

const getSingleCar = async (req, reply) => {
  try {
    const id = req.params.id;
    const car = await Car.findById(id);
    return car;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new car
const addCar = async (req, reply) => {
  try {
    const car = new Car(req.body);
    return car.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing car
const updateCar = async (req, reply) => {
  try {
    const id = req.params.id;
    const car = req.body;
    const { ...updateData } = car;
    const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a car
const deleteCar = async (req, reply) => {
  try {
    const id = req.params.id;
    const car = await Car.findByIdAndRemove(id);
    return car;
  } catch (err) {
    throw boom.boomify(err);
  }
};

module.exports = {
  getCars,
  getSingleCar,
  addCar,
  updateCar,
  deleteCar,
};
