

import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';

const UpdateStudent = () => {


    // "id": 1,
    // "name": "Prateel",
    // "email": "p@gmail.com",
    // "address": "UP",
    // "contactdetails": "Contact",
    // "yearofpassing": 2021


    let history = useHistory();
    const { id } = useParams();

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    
    const [contactdetails, setContact] = useState(null)

    const [address, setAddress] = useState(null)
    const [yearofpassing, setYop] = useState(null)
    

        useEffect(() => {
            loadStudents();
        }, [])



   let loadStudents = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/studentup/${id}`);
    console.log(result.data.name);

    setName(result.data.name);
    setAddress(result.data.address);
    setEmail(result.data.email);
    setContact(result.data.contactdetails);
    setYop(result.data.yearofpassing);
    
   }



   const updateSingleStudent = async () => {
        let formField = new FormData()

        formField.append('name',name)
        formField.append('email',email)
        formField.append('address',address)
        formField.append('contactdetails',contactdetails)
        formField.append('yearofpassing',yearofpassing)


        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/studentup/${id}`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/showStudent");
            alert("Details updated successfully !")
        })

    }


    return (
       
        <div className="container">
  <div className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">Update A Student</h2>
    
    <div className="form-group">

      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
        <br />

      <div className="form-group">
        <input
          type="email"
          className="form-control form-control-lg"
          placeholder="Enter Your E-mail Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Your address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div><br />

      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Your Contact"
          name="contactdetails"
          value={contactdetails}
          onChange={(e) => setContact(e.target.value)}
        />
      </div><br />

      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Your Year of Passing"
          name="yearofpassing"
          value={yearofpassing}
          onChange={(e) => setYop(e.target.value)}
        />
      </div>

      <button onClick={updateSingleStudent} className="btn btn-primary btn-block" style={{marginLeft:"90%",marginTop:"2%"}}>Update</button>
   
  </div>
</div>
 
    );
};

export default UpdateStudent;