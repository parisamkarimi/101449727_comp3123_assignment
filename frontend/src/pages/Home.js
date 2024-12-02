import React, { useEffect, useState } from 'react';
import { fetchEmployees, deleteEmployee } from '../api/apiService';
import { Link } from 'react-router-dom';

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const { data } = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        alert('Failed to load employees');
      }
    };
    loadEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees(employees.filter((emp) => emp._id !== id));
      alert('Employee deleted successfully');
    } catch (error) {
      alert('Failed to delete employee');
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>
                <Link to={`/employee/${employee._id}`}>View</Link>
                <Link to={`/edit-employee/${employee._id}`}>Edit</Link>
                <button onClick={() => handleDelete(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
