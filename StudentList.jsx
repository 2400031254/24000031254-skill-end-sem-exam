import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setStudents(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch students');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Student List</h2>
      <div style={{ display: 'grid', gap: '10px' }}>
        {students.map(student => (
          <div key={student.id} style={{ 
            border: '1px solid #ccc', 
            padding: '10px', 
            borderRadius: '5px' 
          }}>
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;