import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from '../Layout/Navbar2';
import { Link, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { useState, useEffect } from "react";
import axios from 'axios';
import Adminbar from '../Layout/Adminbar';
import { isExpired } from 'react-jwt';


function AddEmployee(props) {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get('http://localhost:8080/admin/employee/getemployees');
    // console.log(result.data);
    setEmployees(result.data);
  }
  if(isExpired(localStorage.getItem('jwtToken'))){
    alert("Session Timeout Please Login again");
    window.location.href = "/";
  }

  return (
    <div>
      <Adminbar></Adminbar>
     
      <br></br>
      <div className="container">
      <br></br>
      <br></br>
        <div className="row">
          <div className="col-md-4 offset-md-4 border rounded  mt-2 shadow">
            <form >
              <div className="mb-10">
                <br></br>
                
                <Link to="/employeeform"> <Button style={{ marginRight: '50px', backgroundColor: '#7986CB' }}>AddEmployee</Button></Link>
                <Link to="/managerform"><Button style={{ backgroundColor: '#7986CB' }}>Add Manager</Button></Link>
              </div>
              <br></br>
            </form>
          </div>

        </div>
      </div>



      <div className="container">
        <br></br>
        <div className="py-4 table-responsive">
          <table className="table table-striped table-hover table-lg" >
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Department</th>
                <th scope="col">Email Id</th>
                <th scope="col">Reporting Manager</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            <tbody class="table-group-divider">
              {
                employees.map((employees, index) => (
                  <tr>
                    {/* <th scope="row" key={index}> {index + 1} </th> */}
                    <td>{employees.employeeId}</td>
                    <td>{employees.firstName}</td>
                    <td>{employees.lastName}</td>
                    <td>{employees.role}</td>
                    <td>{employees.emailId}</td>
                    <td>{employees.memailId || '-'}</td>
                    <td>
                      {/* <Link to={`/assignmanager`} className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">View</Link> */}
                      {/* <Link   to={`/editemployee/${employees.id}`}className="btn btn-light mx-2"  >Edit</Link>
                                    <button type="button" className="btn btn-danger mx-2"
                                    onClick={()=>assignManager(employees.EmployeeId,employees.ManagerId)}>Delete</button> */}


                      {/* {employees.memailId ? (
                         <button  className="btn btn-outline-info">Assigned</button>
                      ) : (
                        // <Link to={`/assignmanager`} className="btn btn-info">Not Assign</Link>
                        <button  className="btn btn-outline-info">Not Assigned</button>
                      )
                      } */}
                    </td>

                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;