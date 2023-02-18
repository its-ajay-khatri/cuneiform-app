import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileimg from '../images/user-image.png';
import '../App.css'

const About = () => {
const history = useHistory();
const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try{
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();           //fetching details of the user who logged in
            console.log(data);
            setUserData(data);

            if(!res.status === 200 ){
                const error = new Error(res.error);
                throw error;
            }
        }
        catch(err){
            console.log(err);
            history.push('/login');
        }
    }


    useEffect(() => {
        callAboutPage();
    }, [])

    return(
        <>
            <div className='container emp-profile'>
                <form method="GET">
                    <div className='row'>
                        <div className='col-md-4 img-class'>
                            <img src={profileimg} alt="my-pic" />
                        </div>

                        <div className='col-md-6'>
                            <div className='profile-head'>
                                <h5>{ userData.name }</h5>
                                <h6 className='about-heading-class'>{ userData.work }</h6>
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
                            {/* <input type="submit" name="logout" value="logout" onClick={handleLogout} /> */}
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
                                <div className='tab-pane fade about-class' id="profile" role="tabpanel" area-labelledby="profile-tab">
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

                                <div className='tab-pane fade show active about-class' id="home" role="tabpanel" area-labelledby="home-tab">
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">UserID</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>{ userData._id }</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">Name</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>{userData.name }</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">Email</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>{ userData.email }</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">Phone</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>{userData.phone }</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 details-label'>
                                            <label htmlFor="User ID">Profession</label>
                                        </div>
                                        <div className='col-md-6 details-class'>
                                            <p>{ userData.work }</p>
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

export default About;