import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBooking] = useState([]);

    const handleDelete=id=>{
        const proceed=confirm('Are you sure you want to delete?')
        if(proceed){
            fetch(`http://localhost:5000/booking/${id}`,{
                method:'DELETE'
            }
            
            )
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('deleted successfully')
                    const remaining=bookings.filter(booking=>booking._id!==id)
                    setBooking(remaining);
                }
                
            })
        }
    }

    const url=`http://localhost:5000/booking?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBooking(data))
    })

    const handleConfirm=id=>{
      fetch(`http://localhost:5000/booking/${id}`,{
        method:'PATCH',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
          console.log(data)
          //update status
          const remaining=bookings.filter(booking=>booking._id!==id);
          const updated=bookings.find(booking=>booking._id===id)
          const updatedBooking=[updated,...remaining];
          updated.status='confirm';
          setBooking(updatedBooking)
        }
      })
    }
    return (
        <div>
            <h2>booking length: {bookings.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking=><BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm} ></BookingRow>)
      }
     
     
     
      
      
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
        </div>
    );
};

export default Bookings;