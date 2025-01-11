import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import HospitalManager from "./components/Dashboard/HospitalManager";
import PantryStaff from "./components/Dashboard/PantryStaff";
import DeliveryPersonnel from "./components/Dashboard/DeliveryPersonnel";

const Dashboard = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Retrieve the user role from localStorage
    const role = localStorage.getItem("role");
    setUserRole(role);
  }, []);

  if (!userRole) {
    // If the user is not logged in or the role is undefined, redirect to login
    return <Navigate to="/login" replace />;
  }

  // Dynamically render the dashboard based on the user's role
  return (
    <>
      {userRole === "HospitalManager" && <HospitalManager />}
      {userRole === "PantryStaff" && <PantryStaff />}
      {userRole === "DeliveryPersonnel" && <DeliveryPersonnel />}
    </>
  );
};

export default Dashboard;
