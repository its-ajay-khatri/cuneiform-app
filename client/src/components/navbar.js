import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';

import { UserContext } from '../App';

const Navbar = () => {

    const { state, dispatch } = useContext(UserContext);

    const RenderMenu = () => {
        if(state){
            return(
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink></li>
                    
                </>
            )
        }
        else {
            return(
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Register</NavLink>
                    </li>
                </>
            )
        }
    }

    //const  [userName, setUserName] = useState('');
    //const [show, setShow] = useState(false);

    // const userHomePage = async () => {
    //     try{
    //         const res = await fetch('/getdata', {
    //             method: "GET",
    //             headers:{
    //                 "Content-Type": "application/json"
    //             },
    //         });

    //         const data = await res.json();               //fetching all the information of logged in user
    //         console.log(data);
    //         setUserName(data.name);
    //         setShow(!show);
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }

    // useEffect(() => {
    //     userHomePage();
    // }, []);

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">BrandName</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <RenderMenu />
                </ul>
            </div>
            </nav>
        </>
    )
}

export default Navbar;