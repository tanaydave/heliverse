import React, { useEffect, useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";
import axios from "axios";

const PantryStaff = () => {
  const [dietCharts, setDietCharts] = useState([]);

  useEffect(() => {
    const fetchDietCharts = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:8000/api/dietCharts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDietCharts(response.data);
      } catch (error) {
        console.error("Failed to fetch diet charts:", error);
      }
    };

    fetchDietCharts();
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Pantry Staff Dashboard</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell>Diet Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dietCharts.map((chart) => (
            <TableRow key={chart._id}>
              <TableCell>{chart.patientName}</TableCell>
              <TableCell>{chart.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default PantryStaff;
