const DeliveryTask = require('../models/DeliveryTask');

// Create a new delivery task
const createDeliveryTask = async (req, res) => {
  try {
    const { patientId, dietChartId, deliveryPersonnelId, status } = req.body;

    const deliveryTask = new DeliveryTask({
      patientId,
      dietChartId,
      deliveryPersonnelId,
      status: status || 'Pending', // Default status is 'Pending'
    });

    const savedTask = await deliveryTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error creating delivery task', error });
  }
};

// Get all delivery tasks
const getDeliveryTasks = async (req, res) => {
  try {
    const tasks = await DeliveryTask.find()
      .populate('patientId', 'name age') // Populating patient details
      .populate('dietChartId', 'mealPlan') // Populating diet chart details
      .populate('deliveryPersonnelId', 'name contactInfo'); // Populating delivery personnel details

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving delivery tasks', error });
  }
};

// Get a specific delivery task by ID
const getDeliveryTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await DeliveryTask.findById(id)
      .populate('patientId', 'name age')
      .populate('dietChartId', 'mealPlan')
      .populate('deliveryPersonnelId', 'name contactInfo');

    if (!task) {
      return res.status(404).json({ message: 'Delivery task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving delivery task', error });
  }
};

// Update delivery task status
const updateDeliveryTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedTask = await DeliveryTask.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Delivery task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error updating delivery task', error });
  }
};

// Delete a delivery task
const deleteDeliveryTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await DeliveryTask.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Delivery task not found' });
    }

    res.status(200).json({ message: 'Delivery task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting delivery task', error });
  }
};

module.exports = {
  createDeliveryTask,
  getDeliveryTasks,
  getDeliveryTaskById,
  updateDeliveryTaskStatus,
  deleteDeliveryTask,
};
