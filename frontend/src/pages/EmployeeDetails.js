import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeById } from '../api/apiService';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const { data } = await getEmployeeById(id);
        setEmployee(data);
      } catch (error) {
        alert('Failed to fetch employee details');
      }
    };
    fetchEmployee();
  }, [id]);

  return (
    <div>
      <h2>Employee Details</h2>
      {employee ? (
        <div>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Position:</strong> {employee.position}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Salary:</strong> {employee.salary}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
