import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './footer';
import '../App.css'
import { useHistory } from 'react-router-dom';
const Contact = () => {

    const [name, setname] = useState('');
    const [number, setnumber]= useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');

    const changename = (event) => {
        setname(event.target.value)
    }

    const changeemail = (event) => {
        setemail(event.target.value)
    }
    const changenumber = (event) => {
        setnumber(event.target.value)
    }
    
    const changemessage = (event) => {
        setmessage(event.target.value)
    }

    const formsubmit = (event) => {
        event.preventDefault();
        alert(`Thankyou for your time ${name} having emailaddress ${email} and phonenumber ${number} and you gave us message ${message}`);
        setname('');
        setemail('');
        setmessage('');
        setnumber('');
    }

    return(
        <>


            <div className="grid auto-fit">
                <div className='internal-grid'><img className='contact-image-class' src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" /><a href="tel:9876543212" className='contact-content'>
                                
                                Phone: +91 - 9876543212
                           
                        </a></div>
                <div className='internal-grid'> <img className='contact-image-class' src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" /><a href="mailto:abcd@gmail.com" className='contact-content'>
                                
                                Email: abcd@gmail.com
                           
                        </a></div>
                <div className='internal-grid'><img className='contact-image-class' src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" /> <a href="tel:9876543212" className='contact-content'>
                                
                Address: Rajasthan, India
                           
                        </a></div>
            </div>

        
            <div className="container register_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formsubmit}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">FullName</label>
                            <input type="text" className="form-control mt-2" id="exampleFormControlInput1" value={name} placeholder="enter your name" onChange={changename}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1" className="mt-4">Phone</label>
                            <input type="number" className="form-control mt-2" id="exampleFormControlInput1" value={number} placeholder="Your Contact Number" onChange={changenumber}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1" className="mt-4">Email address</label>
                            <input type="email" className="form-control mt-2" id="exampleFormControlInput1" value={email} placeholder="name@example.com" onChange={changeemail}/>
                        </div>

                        
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1" className="mt-4">Message</label>
                            <textarea className="form-control mt-2" id="exampleFormControlTextarea1" value={message} rows="3" onChange={changemessage}></textarea>
                        </div>
                        <div className="col-md-12 mt-5">
                            <button className="btn btn-primary" type="submit">Submit Form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;