import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from '../api/apiService';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    salary: '',
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const { data } = await getEmployeeById(id);
        setFormData(data);
      } catch (error) {
        alert('Failed to fetch employee data');
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(id, formData);
      alert('Employee updated successfully!');
      navigate('/');
    } catch (error) {
      alert('Failed to update employee');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Employee</h2>
      <input name="name" value={formData.name} onChange={handleChange} required />
      <input name="position" value={formData.position} onChange={handleChange} required />
      <input name="department" value={formData.department} onChange={handleChange} required />
      <input name="salary" value={formData.salary} onChange={handleChange} required />
      <button type="submit">Update Employee</button>
    </form>
  );
};

export default EditEmployee;
