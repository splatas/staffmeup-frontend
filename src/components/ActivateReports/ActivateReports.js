import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from "../Button";

export const ActivateReports = () => {
  return (
      <Button><Link to="/reports">View Reports</Link></Button>
  )
};

