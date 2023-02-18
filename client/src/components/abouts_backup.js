import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import profileimg from '../images/ajay.png';

const AboutB = () => {

    var include = "include";

const history = useHistory();

// async function populateQuote(){
//     const req = await fetch('/about', {
//         headers: {
//             'x-access-token': localStorage.getItem('token'),
//         },
//     })

//     const data = await req.json();

//     console.log(data);

//         if(!req.status === 200) {
//             const error = new Error(req.error);
//             throw error
//         }
// }

// useEffect(() => {
//     const token = localStorage.getItem('token')

//     if(token){
//         const user = jwt.decode(token);

//         if(!user){
//             localStorage.removeItem('token')
//             history.replace('/login');
//         }
//         else {
//             populateQuote();
//         }
//     }
//   }, [])

const callAboutPage = async () => {

        const res = await fetch('/about',{
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                include
            })
        });

        const data = await res.json();
        console.log(data);

        if(!res.status === 200) {
            const error = new Error(res.error);
            throw error
        }
}

     useEffect(() => {
        // const token = window.localStorage.getItem('userToken');
        // console.log(token);
        callAboutPage();
     }, [])


     const handleLogout = () => {
        localStorage.removeItem("userToken");
        window.location.reload();
     }

    return(
        <>
            <div className='container emp-profile'>
                <form>
                    <div className='row'>
                        <div className='col-md-4 img-class'>
                            <img src={profileimg} alt="my-pic" />
                        </div>

                        <div className='col-md-6'>
                            <div className='profile-head'>
                                <h5>Ajay Khatri</h5>
                                <h6 className='about-heading-class'>web Developer</h6>
                                <p className='profile-rating mt-3 mb-5'>Rankings: <span>1/10</span></p>


                                <ul className="nav">
                                    <li className="nav-item tab-class">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                    </li>
                                    <li className="nav-item tab-class">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-md-2'>
                            <input type="text" className='profile-edit-btn' name="btnAddMore" value="Edit Profile" />
                            <input type="submit" name="logout" value="logout" onClick={handleLogout} />
                        </div>
                    </div>

                    <duv className="row work-column">
                        {/* left side url */ }
                        <div className='col-md-4' >
                            <div className='profile-work'>
                                <p>Work Link</p>
                                <a href="#" className='link-class' target="_target">Youtube</a><br />
                                <a href="#" className='link-class' target="_target">Instagram</a><br />
                                <a href="#" className='link-class' target="_target">Facebook</a><br />
                                <a href="#" className='link-class' target="_target">LinkedIn</a><br />
                                <a href="#" className='link-class' target="_target">Pintrest</a><br />
                            </div>
                        </div>

                        {/* right side data toggle */}
                        <div className='col-md-8 pl-5 about-info'>
                            <div className='tab-content profile-tab' id="myTabContent">
                                <div className='tab-pane fade' id="profile" role="tabpanel" area-labelledby="profile-tab">
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">Expreience</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>Begineer</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">Pay Per Hour</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>100 /-</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">Total projects</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">Level of Communication</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">Availability </label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>6 months</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='tab-pane fade show active' id="home" role="tabpanel" area-labelledby="home-tab">
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">UserID</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>24242423423</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">Name</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>Ajay Khatri</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">Email</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>abc@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">Phone</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>24242423423</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">Profession</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </duv>
                </form>
            </div>
        </>
    )
}

export default AboutB;