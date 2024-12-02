import React, { useState } from 'react';
import { createEmployee } from '../api/apiService';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    salary: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEmployee(formData);
      alert('Employee added successfully!');
    } catch (error) {
      alert('Failed to add employee');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="position" placeholder="Position" value={formData.position} onChange={handleChange} required />
      <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
      <input name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
