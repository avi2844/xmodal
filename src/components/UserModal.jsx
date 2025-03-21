import { useEffect, useState } from "react";
import "./UserModal.css";

function UserModal({setOpen}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        dob: ''
    });
    function handleSubmit(e){
        e.preventDefault();
        if(formData.phone.length < 10){
            alert('Invalid phone number. Please enter a 10-digit phone number.');
        }
        else if(Date.now() < new Date(formData.dob).getTime()){
            alert('Invalid date of birth. Date of Birth cannot be in the future.');
        }
        else{
            setFormData({
                name: '',
                email: '',
                phone: '',
                dob: ''
            });
        }
    }
  return (
    <div className="modal" onClick={() => setOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Fill Details</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input name="username" id='username' type="text" value={formData.name} required onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}></input>
            <label htmlFor="email">Email Address:</label>
            <input name="email" id='email' type='email' required value={formData.email} onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}></input>
            <label htmlFor="phone">Phone Number:</label>
            <input name="phone" id='phone' type='number' required value={formData.phone} onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}></input>
            <label htmlFor="dob">Date of Birth:</label>
            <input name="dob" id='dob' type='date' required value={formData.dob} onChange={(e) => setFormData(prev => ({...prev, dob: e.target.value}))}></input>
            <button style={{width: '30%'}}type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserModal;
