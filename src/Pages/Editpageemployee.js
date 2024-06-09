import Employeedropdown from './Employeedropdown';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { isExpired } from 'react-jwt';
function Editpageemployee(props) {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(
        {
            employeeId: "",
            firstName: "",
            lastName: "",
            password: "",
            mobileNumber: "",
            gender: "",
            memailId: "",
            dateOfBirth: "",
            address: "",
            city: "",
            state: "",
            pinCode: "",
            emailId: "",
            country: "",

        }
    );
    if(isExpired(localStorage.getItem('jwtToken'))){
        alert("Session Timeout Please Login again");
        window.location.href = "/";
      }

    // const [isFormValid, setIsFormValid] = useState(false);
    // const [errors, setErrors] = useState({});
    // const validateForm = () => {
    //     const errors = {};
    //     if (!emailId) {
    //         errors.emailId = 'EmailId is required';

    //     }
    //     else if (!/\S+@\S+\.\S+/.test(emailId)) {
    //         errors.emailId = 'Email is invalid';
    //     }

    //     setErrors(errors);
    //     setIsFormValid(Object.keys(errors).length === 0);
    // };
    const { emailId } = useParams();
    useEffect(() => {
        const loadEmployee = async () => {
            const reqdata = await fetch(`http://localhost:8086/view/${emailId}`);

            const res = reqdata.json();
            setEmployee(await res);
        }
        loadEmployee();
    },
        []);
        




    const { employeeId, firstName, lastName, password, mobileNumber, memailId, gender, dateOfBirth, address, role, city, state, pinCode, country } = employee;

    const onInputChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    }

    const submithandler = async (e) => {
        e.preventDefault();
        console.log("hello hi ");
        // if (isFormValid) {
        //     console.log('submitting form', { emailId });
        // }
        console.log(employee);
        const response = await axios.put(`http://localhost:8086/view/put/${emailId}`, { employeeId, firstName, lastName, password, mobileNumber, memailId, gender, dateOfBirth, address, role, city, state, pinCode, country });
        navigate("/displayemployee");
    };

    return (
        <div>
            <Employeedropdown></Employeedropdown>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <br></br>
                        <h2 className="text-center  m-4"> Edit Profile </h2>
                        <form className="bg-transparent" onSubmit={submithandler}>

                            <div className='row'>
                                <div className='col-md-5'>
                                    <div className=" mb-1" style={{display:'inline-block',width:'100%'}}>
                                        <b><label htmlFor="firstName" className="form-label" style={{display:'inline-block',width:'30%',marginLeft:'10px',textalign: 'left'}}>FirstName</label></b>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="Firstname*"
                                            name="firstName"
                                            value={firstName}
                                            autoComplete="off"
                                            onChange={onInputChange}
                                            style={{display:'inline-block', width: '230px', height: '2px', marginLeft: '5px', textalign: 'center', padding: '18px', fontSize: '14px' }}
                                        ></input>
                                       
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b><label htmlFor="lastName" className="form-label"style={{ textalign: 'center'}}>LastName</label></b>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="Lastname*"
                                            name="lastName"
                                            value={lastName}
                                            onChange={onInputChange}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '50px', padding: '18px', fontSize: '14px' }}
                                        ></input>
                                        
                                    </div>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b> <label htmlFor="password" className="form-label">Password</label></b>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="Password*"
                                            name="password"
                                            value={password}
                                            onChange={onInputChange}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '5px', textalign: 'center', padding: '18px', fontSize: '14px' }}
                                        ></input>
                                        {/* {errors.password && <div style={{ color: 'red' }}>{errors.password}
                                        </div>} */}

                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b><label htmlFor="dateOfBirth" className="form-label">DOB</label></b>

                                        <input
                                            type={"Date"}
                                            className="form-control"
                                            placeholder="dateOfBirth*"
                                            name="dateOfBirth"
                                            value={dateOfBirth}
                                            onChange={(e) => onInputChange(e)}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '50px', padding: '18px', fontSize: '14px' }}
                                        ></input>
                                        {/* {errors.password && <div style={{color:'red'}}>{errors.password}
                                            </div>} */}

                                    </div>

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b><label htmlFor="mobileNumber" className="form-label">Mobile Number</label></b>
                                        <input
                                            type={"tel"}
                                            className="form-control"
                                            placeholder="mobileNumber*"
                                            name="mobileNumber"
                                            value={mobileNumber}
                                            onChange={(e) => onInputChange(e)}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '5px', textalign: 'center', padding: '18px', fontSize: '14px' }}
                                        ></input>
                                        {/* {errors.password && <div style={{ color: 'red' }}>{errors.password}
                                        </div>} */}

                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b> <label htmlFor="gender" className="form-label">Gender</label></b>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="gender*"
                                            name="gender"
                                            value={gender}
                                            onChange={(e) => onInputChange(e)}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '50px', padding: '18px', fontSize: '14px' }}
                                        ></input>
                                        {/* {errors.password && <div style={{color:'red'}}>{errors.password}
                                            </div>} */}

                                    </div>

                                </div>
                            </div>





                            <div className='row'>

                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b>  <label htmlFor="address" className="form-label"   style={{ textalign: 'center'}}>Address</label></b>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="address*"
                                            name="address"
                                            value={address}
                                            onChange={(e) => onInputChange(e)}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '5px', textalign: 'center', padding: '18px', fontSize: '14px' }}
                                        ></input>

                                    </div>

                                </div>
                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b> <label htmlFor="city" className="form-label">City</label></b>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="city*"
                                            name="city"
                                            value={city}
                                            onChange={(e) => onInputChange(e)}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '50px', padding: '18px', fontSize: '14px' }}
                                        ></input>


                                    </div>

                                </div>
                            </div>



                            <div className='row'>


                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b> <label htmlFor="pinCode" className="form-label">Pincode</label></b>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="pincode*"
                                            name="pinCode"
                                            value={pinCode}
                                            onChange={(e) => onInputChange(e)}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '5px', textalign: 'center', padding: '18px', fontSize: '14px' }}
                                        ></input>

                                    </div>
                                </div>

                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b>  <label htmlFor="country" className="form-label">Country</label></b>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="country*"
                                            name="country"
                                            value={country}
                                            onChange={(e) => onInputChange(e)}
                                            autoComplete="off"
                                            style={{ width: '230px', height: '2px', marginLeft: '50px', padding: '18px', fontSize: '14px' }}



                                        ></input>

                                    </div>
                                </div>
                            </div>



                            <div className='row'>


                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b><label htmlFor="state" className="form-label">State</label></b>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="state*"
                                            name="state"
                                            value={state} 
                                            onChange={(e) => onInputChange(e)}
                                            autoComplete="off"
                                            
                                            style={{ width: '230px', height: '2px', marginLeft: '5px', textalign: 'center', padding: '18px', fontSize: '14px' }}
                                        ></input>

                                    </div>
                                </div>

                                <div className='col-md-5'>
                                    <div className="mb-1">
                                    <b><label htmlFor="memailId" className="form-label">Manager</label></b>
                                        <input
                                            type={"email"}
                                            className="form-control"
                                            placeholder="emailid"
                                            name="memailId"
                                            value={memailId} disabled
                                            onChange={(e) => onInputChange(e)}
                                            style={{ width: '230px', height: '2px', marginLeft: '50px', padding: '18px', fontSize: '14px' }}
                                        ></input>

                                    </div>
                                </div>
                            </div>



                            <div className='row'>


                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b><label htmlFor="emailId" className="form-label">Email Id</label></b>
                                        <input
                                            type={"email"}
                                            className="form-control"
                                            placeholder="Employee emailid*"
                                            name="emailId"
                                            value={emailId} disabled
                                            onChange={(e) => onInputChange(e)}
                                            style={{ width: '230px', height: '2px', marginLeft: '5px', textalign: 'center', padding: '18px', fontSize: '14px' }}
                                        ></input>

                                    </div>
                                </div>

                                <div className='col-md-5'>
                                    <div className="mb-1">
                                        <b><label htmlFor="role" className="form-label form-floating">Department</label></b>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="Department*"
                                            name="role"
                                            value={role} disabled
                                            onChange={(e) => onInputChange(e)}
                                            style={{ width: '230px', height: '2px', marginLeft: '50px', padding: '18px', fontSize: '14px' }}
                                        ></input>

                                    </div>
                                </div>
                            </div>


                                                        <br></br>

                            <button type="submit" className="btn btn-outline-success">Submit</button>
                            <Link to="/displayemployee" type="submit" className="btn btn-outline-danger mx-2">Cancel</Link>

                        </form>


                    </div>

                </div>
            </div>


            <h1></h1>
        </div>
    );

}

export default Editpageemployee;