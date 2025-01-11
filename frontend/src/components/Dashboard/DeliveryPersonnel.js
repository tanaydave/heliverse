import React, { useEffect, useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";

const DeliveryPersonnel = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("https://heliverse-3i2e.onrender.com/api/deliveryTasks", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(response.data);
      } catch (error) {
        console.error("Failed to fetch delivery tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Delivery Personnel Dashboard</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task ID</TableCell>
            <TableCell>Patient Name</TableCell>
            <TableCell>Delivery Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task._id}>
              <TableCell>{task._id}</TableCell>
              <TableCell>{task.patientName}</TableCell>
              <TableCell>{task.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default DeliveryPersonnel;
