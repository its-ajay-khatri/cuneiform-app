import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import bannerimg from '../images/hero-img.png'
const Home = () => {

    const  [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);

    const userHomePage = async () => {
        try{
            const res = await fetch('/getdata', {
                method: "GET",
                headers:{
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();               //fetching all the information of logged in user
            console.log(data);
            setUserName(data.name);
            setShow(!show);

            if(!res.status === 200 ){
                const error = new Error(res.error);
                throw error;
            }
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);

    return(
        <>
           <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justfy-content-center flex-column">
                                    <h1 className="heading-class">
                                        <stong className="brand-name">{ show ? userName : "FullStack Developer" }</stong>
                                    </h1>
                                    <h2 className="my-3">
                                        { show ? `Glad to See you Back! ${userName} ` : "We are a team of talented developers developing websites" }
                                    </h2>
                                    <div className="mt-3 btn-class">
                                        <NavLink to="/contact" className="btn-get-started">Get Started</NavLink>

                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={bannerimg} className="img-fluid animated" alt="Home img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;