import React, { useState } from 'react';
import './AttendanceTable.css'

const AttendanceTable = () => {
  
  const [students, setStudents] = useState([
    { id: 1, name: 'ARUN ', rollNo: '22BME001', status: 'present' },
    { id: 2, name: 'BARATH', rollNo: '22BME002', status: 'absent' },
    { id: 3, name: 'DHONI', rollNo: '22BME003', status: 'present' },
    { id: 4, name: 'ELIL', rollNo: '22BME004', status: 'present' },
    { id: 5, name: 'FARHAN', rollNo: '22BME005', status: 'present' },
    { id: 6,name: 'GANESH', rollNo: '22BME006', status: 'present' },
    { id: 7,name: 'JAI', rollNo: '22BME007', status: 'present' },
    { id: 8, name: 'KISHORE', rollNo: '22BME008', status: 'present' },
    { id: 9, name: 'LOKESK', rollNo: '22BME009', status: 'present' },
    { id: 10, name: 'MANI', rollNo: '22BME010', status: 'present' },
  
  ]);

  const toggleStatus = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, status: student.status === 'present' ? 'absent' : 'present' }
          : student
      )
    );
  };

  return (
    <table class="d">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Roll No</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.rollNo}</td>
            <td>
              <button onClick={() => toggleStatus(student.id)}>
                {student.status === 'present' ? 'Present' : 'Absent'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;