
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = (props) => {
    const {inputs, setInputs} = props;
        const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
        // first element is a variable 'hasBeenSubmitted' is a variable to gain access value of our state
        // getter is to get access or received access to the variable
        const [inputsError, setInputsError] = useState("");
        // setter is to update value of our getter
    const onChange = e => {
        setInputs({ 
            ...inputs, 
        [e.target.name]:e.target.value
        })
    }
            const createUser = (e) => {
                e.preventDefault();
                const newUser = {props};
                console.log("Welcome", newUser);
                setHasBeenSubmitted( true );
            }
            const handleUser = (e) => {
                setInputs(e.target.value);
                if(e.target.value.length <1 ) {
                    setInputsError("More than 1 character required!");
                } else if(e.target.value.length <3 ){
                    setInputsError("Inputs must be 3 characters or longer!")
                }
            }


        const formMessage = () => {
                if( setHasBeenSubmitted ) {
                    return "Thank you for submitting the form!";
                }else{
                    return "Welcome, please submit the form";
                }
            }
        
    return (
        <>
{/* <form>
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
</div>
<div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form> */}

    <div className="mx-auto">
            <form  onSubmit={  (e) => e.preventDefault() }>
                
                <div class="form-group">
                    <label>First Name: </label>
                    <input className="form-control w-50" type="text" name="firstName" onChange={onChange}/>
                    {
                        inputs.firstName.length > 0 && inputs.firstName.length < 3 ? 
                        <p style={{color:'red'}}>First Name must be more than 3 characters.</p> :
                        ''
                    }
                </div>
                <div class="form-group">
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={onChange} />
                    {
                        inputs.lastName.length > 0 &&inputs.lastName.length < 3 ? 
                        <p style={{color:'red'}}>Last Name must be more than 3 characters.</p> :
                        ''
                    }
                </div>
                <div class="form-group">
                    <label>Email Address: </label>
                    <input type="text" name="email" onChange={onChange} />
                    {
                        inputs.email.length > 0 && inputs.email.length < 3 ? 
                        <p style={{color:'red'}}>Email must be more than 3 characters.</p> :
                        ''
                    }
                </div>
                <div class="form-group">
                    <label>Password: </label>
                    <input type="password" name="password" onChange={onChange}/>
                    {
                        inputs.password.length > 0 && inputs.password.length < 5 ? 
                        <p style={{color:'red'}}>Password must be more than 5 characters.</p> :
                        ''
                    }
                </div>
                <div class="form-group">
                    <label> Confirm Password: </label>
                    <input type="password" name="confPassword" onChange={onChange}/>
                    {
                        inputs.confPassword.length > 0 && inputs.confPassword !== inputs.password ? 
                        <p style={{color:'red'}}>Confirmation password must be the same as your password.</p> :
                        ''
                    }
                </div>
                <input className="btn btn-primary" type="submit" value="Create User" />
            </form>
            </div>
            <h3>Your Form Data</h3>
            <p>First Name: {inputs.firstName} </p> 
            <p>Last Name: {inputs.lastName} </p>
            <p>Email: {inputs.email} </p>
            <p>Password: {inputs.password} </p>
            <p>Confirm Password: {inputs.confPassword} </p>
            
        </>
    );
};

export default UserForm;
