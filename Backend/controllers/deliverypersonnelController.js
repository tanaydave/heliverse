const DeliveryPersonnel = require('../models/DeliveryPersonnel');

// Create a new delivery personnel
const createDeliveryPersonnel = async (req, res) => {
  try {
    const { name, contactInfo } = req.body;
    const newDeliveryPersonnel = new DeliveryPersonnel({ name, contactInfo });
    await newDeliveryPersonnel.save();
    res.status(201).json(newDeliveryPersonnel);
  } catch (error) {
    res.status(500).json({ message: 'Error creating delivery personnel', error });
  }
};

// Get all delivery personnel
const getDeliveryPersonnel = async (req, res) => {
  try {
    const deliveryPersonnel = await DeliveryPersonnel.find();
    res.status(200).json(deliveryPersonnel);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching delivery personnel', error });
  }
};

// Get a single delivery personnel
const getDeliveryPersonnelById = async (req, res) => {
  try {
    const deliveryPersonnel = await DeliveryPersonnel.findById(req.params.id);
    if (!deliveryPersonnel) return res.status(404).json({ message: 'Delivery personnel not found' });
    res.status(200).json(deliveryPersonnel);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching delivery personnel', error });
  }
};

// Update delivery personnel
const updateDeliveryPersonnel = async (req, res) => {
  try {
    const updatedDeliveryPersonnel = await DeliveryPersonnel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDeliveryPersonnel) return res.status(404).json({ message: 'Delivery personnel not found' });
    res.status(200).json(updatedDeliveryPersonnel);
  } catch (error) {
    res.status(500).json({ message: 'Error updating delivery personnel', error });
  }
};

// Delete delivery personnel
const deleteDeliveryPersonnel = async (req, res) => {
  try {
    const deletedDeliveryPersonnel = await DeliveryPersonnel.findByIdAndDelete(req.params.id);
    if (!deletedDeliveryPersonnel) return res.status(404).json({ message: 'Delivery personnel not found' });
    res.status(200).json({ message: 'Delivery personnel deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting delivery personnel', error });
  }
};

module.exports = { createDeliveryPersonnel, getDeliveryPersonnel, getDeliveryPersonnelById, updateDeliveryPersonnel, deleteDeliveryPersonnel };
