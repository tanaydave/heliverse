import React, { useEffect, useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";
import axios from "axios";

const HospitalManager = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:8000/api/patients", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPatients(response.data);
      } catch (error) {
        console.error("Failed to fetch patients:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Hospital Manager Dashboard</Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>Add New Patient</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell>Room Number</TableCell>
            <TableCell>Assigned Diet Chart</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient._id}>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.roomNumber}</TableCell>
              <TableCell>{patient.dietChart ? "Assigned" : "Not Assigned"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default HospitalManager;
