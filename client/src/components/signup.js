import React, { useState, useEffect } from 'react';
import '../App.css'
import { NavLink, useHistory } from 'react-router-dom';
import Footer from './footer';
const Signup = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        name: "", email: "", phone: "", work:"", password: "", cpassword: ""
    });

    const [nameIsValid, setNameIsValid] = useState();
    const [emailIsValid, setEmailIsValid] = useState();
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [phoneIsValid, setPhoneIsValid] = useState();
    const [passwordCPassword, setPasswordCPassword] = useState("");

    let name, value;

    const handleInputs = (event) => {
        //console.log(event);
        name = event.target.name;
        value = event.target.value;

        setUser({...user, [name]: value});
    }

    const PostData = async (event) => {
        event.preventDefault();

        setEmailIsValid("");
        setNameIsValid("");
        setPasswordCPassword("");
        setPasswordIsValid("");
        setPhoneIsValid("");

        const { name, email, phone, work, password, cpassword} = user;

        // setNameIsValid(name.trim().length > 0);
        // setPhoneIsValid(phone.length < 10);
        // setEmailIsValid(email.includes('@'));
        // setPasswordIsValid(password.trim().length > 6);

        if(name.trim().length == 0){
            setNameIsValid("Incorrect Name!")
        }

        else if(!(email.includes('@'))){
            setEmailIsValid("Incorrect email Address, it should contain @");
        }
        else if(phone.length < 10){
            setPhoneIsValid("Contact Number should contain 10 characters")
        }
        else if(password.trim().length < 8){
            setPasswordIsValid("Password is too short, it should contain atleast 8 characters")
        }
        else if(password != cpassword){
            setPasswordCPassword("Password and Confirm Password didn't match!")
        }

        else{

            /*----------------------------------Section--------------------------------------------------*/
            
            const res = await fetch("/register",{              // "/register"(POST) refers to auth.js file of server folder, means the code of the database insertion is written 
                //const res = await fetch("http://localhost:5000/register",{              // "/register"(POST) refers to auth.js file of server folder, means the code of the database insertion is written(no need to define proxy option in package.json file of client/frontent)
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({                //converting JSON to String
                        name, email, phone, work, password, cpassword          //sending all the data fetched from user
                    })
                 });
                const data = await res.json();           //string to JSON

                        /*----------------------------------COnclusion till this section--------------------------------------------------*/
     
        //earlier we were sending data using Postman as REST API, now in the above section we defined an header as json type
        //and sending this data converting into string, in postman, we were entering data manually and sending the POST request
        //in above block we arr sending the "user"(object) data instead of Postman ads POST resquest, then the /register code
        //is present in the auth.js file(server folder), then the data is stored in db as the execution code written in auth.js file in server folder

        if(res.status === 422){
            window.alert("Email already Exists!");
            console.log("Invalid Registration");
        }
        // else if(res.status === 400){
        //     window.alert("Password and Confirm Password does not match!");
        //     console.log("Invalid Registration");
        // }
        // else if(res.status === 423 || !data){
        //     window.alert("Password to short!");
        //     console.log("Invalid Registration");
        // }
        else {
            window.alert("Registration Successfull");
            console.log("Registration Successfull");

            history.push("/login");
        }
        }


    }

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Register</h1>
            </div>
            <div className="container register_div">
                <div className="row">
                    <div className="col-md-7 col-10 mx-auto">
                    <form method="POST" id="register-form">
                        <div class="form-group">
                            Your Name
                            <input type="text" className="form-control mt-2" id="name" name="name" value={user.name} onChange={handleInputs} placeholder="enter your name"/>
                            <div id="nameHelp" class="form-text" style={{color: "red"}}>{nameIsValid}</div>
                        </div>
                        <div class="form-group">
                            Email address
                            <input type="email" className="form-control mt-2" id="email" name="email" value={user.email} onChange={handleInputs} placeholder="enter name@example.com" />
                            <div id="emailHelp" class="form-text" style={{color: "red"}}>{emailIsValid}</div>
                        </div>
                        <div class="form-group">
                            Phone
                            <input type="number" className="form-control mt-2" id="phone" name="phone" value={user.phone} onChange={handleInputs} placeholder="enter Your Contact Number" />
                            <div id="phoneHelp" class="form-text" style={{color: "red"}}>{phoneIsValid}</div>

                        </div>
                        <div class="form-group">
                            Profession
                            <input type="text" className="form-control mt-2" id="work" name="work" value={user.work} onChange={handleInputs} placeholder="enter Your Profession" />
                        </div>
                        <div class="form-group">
                            Password
                            <input type="password" className="form-control mt-2" id="password" name="password" value={user.password} onChange={handleInputs} placeholder="enter Your Password" />
                            <div id="passHelp" class="form-text" style={{color: "red"}}>{passwordIsValid}</div>
                        </div>
                        <div class="form-group">
                            Confirm Password
                            <input type="password" className="form-control mt-2" id="cpassword" name="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Conform Password" />
                            <div id="passHelp" class="form-text" style={{color: "red"}}>{passwordCPassword}</div>
                        </div>
                        <div className="col-md-12  mb-3">
                            <input type="submit" name="signup" className='btn btn-primary' onClick={PostData} value="register"/>
                        </div>
                        </form>
                        <div className='already-have-account'>Already have an Account? <NavLink to="/login">Sign In</NavLink></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signup;