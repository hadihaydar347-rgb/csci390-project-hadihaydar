import React from 'react'
import { useState } from 'react';

const Guests=()=> {
    const [contacts, setContacts] = useState([]);
  
    

  
  const [formData, setFormData] = useState(['', '', '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData[0] || !formData[1] || !formData[2]) return;

    
    setContacts([...contacts, [formData[0], Number(formData[1]), formData[2]]]);

    setFormData(['', '', '']);
  };

  return (
    <div className="main-content">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            required
            placeholder="Enter name"
            value={formData[0]}
            onChange={(e) => setFormData([e.target.value, formData[1], formData[2]])}
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            required
            placeholder="Enter age"
            value={formData[1]}
            onChange={(e) => setFormData([formData[0], e.target.value, formData[2]])}
          />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            required
            placeholder="Enter country"
            value={formData[2]}
            onChange={(e) => setFormData([formData[0], formData[1], e.target.value])}
          />
        </div>

        <button type="submit" className="submit-btn">Add Contact</button>
      </form>

      
      <h3>Submitted List</h3>
      {contacts.length === 0 ? (
        <p className="card">No contacts added yet. Fill out the form above to add one!</p>
      ) : (
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((person, index) => (
              <tr key={index}>
                <td>{person[0]}</td>
                <td>{person[1]}</td>
                <td>{person[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
export default Guests;