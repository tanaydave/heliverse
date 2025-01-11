import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import HospitalManager from "../components/Dashboard/HospitalManager";
import PantryStaff from "../components/Dashboard/PantryStaff";
import DeliveryPersonnel from "../components/Dashboard/DeliveryPersonnel";

const Dashboard = () => {
  const [userRole, setUserRole] = useState('');

  
  useEffect(() => {
    // Retrieve the user role from localStorage
    const role = localStorage.getItem("role");
    console.log("Role from localStorage:", role); // Logs the role from localStorage
    setUserRole(role);
  }, []); // Runs once when the component mounts
  useEffect(() => {
    // Log whenever userRole changes
    console.log("Updated userRole:", userRole);
  }, [userRole]);
  

  // Dynamically render the dashboard based on the user's role
  return (
    <>
      {userRole === "admin" && <HospitalManager />}
      {userRole === "pantryStaff" && <PantryStaff />}
      {userRole === "deliveryPersonnel" && <DeliveryPersonnel />}
    </>
  );
};

export default Dashboard;
