import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';

const UpdateFaculty = () => {

    let history = useHistory();
    const { id } = useParams();

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [designation, setDesignation] = useState(null)
    

    useEffect(() => {
        loadStudents();
    }, [])



   let loadStudents = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/ptup/${id}`);
    console.log(result.data.name);

    setName(result.data.name);

    setEmail(result.data.email);
    setDesignation(result.data.designation);
    
   }



   const updateSingleStudent = async () => {
        let formField = new FormData()

        formField.append('name',name)
        formField.append('email',email)
        formField.append('designation',designation)
        

        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/ptup/${id}`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/showFaculty");
            alert("Details updated successfully !")
        })

    }


    return (
       
        <div className="container">
  <div className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">Update A Faculty</h2>
    
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
          placeholder="Enter Your Phone Number"
          name="designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
      </div><br />

      <button onClick={updateSingleStudent} className="btn btn-primary btn-block" style={{marginLeft:"82%"}}>Update Faculty</button>
   
  </div>
</div>
 
    );
};

export default UpdateFaculty;