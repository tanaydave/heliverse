const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import Routes
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const dietChartRoutes = require('./routes/dietChartRoutes');
const pantryStaffRoutes = require('./routes/pantryStaffRoutes');
const deliveryPersonnelRoutes = require('./routes/deliveryPersonnelRoutes');
const deliveryTaskRoutes = require("./routes/deliveryTaskRoutes")

// Routes Middleware

app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/diet-charts', dietChartRoutes);
app.use('/api/pantry-staff', pantryStaffRoutes);
app.use('/api/delivery-personnel', deliveryPersonnelRoutes);
app.use("/api/deliveryTasks", deliveryTaskRoutes);


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster1.ij73z.mongodb.net/`);
    console.log("database connected")
  
  }



// Start the server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
