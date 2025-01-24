import React, { useState } from 'react'

const DataTable = () => {

    const [currentPage,setCurrentPage] = useState(1);
    const [usersPerPage,setUsersPerPage] = useState(5);

    const users = [
    { id: 1, name: "Alice", age: 25, occupation: "Engineer" },
    { id: 2, name: "Bob", age: 30, occupation: "Designer" },
    { id: 3, name: "Charlie", age: 28, occupation: "Teacher" },
    { id: 4, name: "Diana", age: 22, occupation: "Developer" },
    { id: 5, name: "Edward", age: 35, occupation: "Manager" },
    { id: 6, name: "Fiona", age: 29, occupation: "Doctor" },
    { id: 7, name: "George", age: 33, occupation: "Lawyer" },
    { id: 8, name: "Hannah", age: 27, occupation: "Nurse" },
    { id: 9, name: "Ian", age: 40, occupation: "Scientist" },
    { id: 10, name: "Jane", age: 24, occupation: "Artist" },
    { id: 11, name: "Kevin", age: 31, occupation: "Chef" },
    ]

    const totalPages = Math.ceil(users.length/ usersPerPage);

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev+1,totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.min(prev-1,1));
    }

    const handleUsersPerPageChange = (event) => {
      setUsersPerPage(parseInt(event.target.value, 10));
      setCurrentPage(1);
    };
  
    const startIndex = (currentPage - 1) * usersPerPage;
    const currentUsers = users.slice(startIndex, startIndex + usersPerPage);
    
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h2>Users Data Table</h2>

        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
          <thead>
            <tr>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Id</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Age</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Occupation</th>
            </tr>
          </thead>
          <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{user.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{user.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{user.age}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{user.occupation}</td>
            </tr>
          ))}
        </tbody>
        </table>
        <div style={{ marginBottom: "20px" }}>
        <label htmlFor="usersPerPage">Users per page: </label>
        <select
          id="usersPerPage"
          value={usersPerPage}
          onChange={handleUsersPerPageChange}
          style={{ padding: "5px", marginLeft: "10px" }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          style={{ padding: "10px 20px", marginRight: "10px", cursor: "pointer" }}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{ padding: "10px 20px", marginLeft: "10px", cursor: "pointer" }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default DataTable