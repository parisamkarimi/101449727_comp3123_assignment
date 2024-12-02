import React, { useState } from 'react';
import { searchEmployees } from '../api/apiService';

const SearchEmployee = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const { data } = await searchEmployees(`query=${query}`);
      setResults(data);
    } catch (error) {
      alert('Failed to search employees');
    }
  };

  return (
    <div>
      <h2>Search Employees</h2>
      <input
        type="text"
        placeholder="Search by department or position"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.position} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchEmployee;
