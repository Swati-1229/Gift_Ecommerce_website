import React, { useState, useEffect } from 'react'
import "./Mobile_Navbar_bottom.scss"
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Mobile_Navbar_bottom() {
    const location = useLocation();

    // const isActive = location.pathname === '/Profile';
    const [ActiveTab, setActiveTab] = useState("Home")

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveTab("Home");
        } else if (location.pathname === "/Profile") {
            setActiveTab("Profile");
        } else if (location.pathname === "/category") {
            setActiveTab("Category");
        }
    }, [location.pathname]);

    return (
        <div className='Mobile_Navbar_bottom'>
            <Link to="/" className={`profile-link ${ActiveTab === "Home" ? 'active' : ""}`} onClick={() => setActiveTab("Home")}>
                <div className='Home-image'>
                    <img src={ActiveTab === "Home" ? "https://assets.winni.in/groot/2023/01/31/icons/mobilhome.png" : "https://assets.winni.in/groot/2023/01/31/icons/mobilehomeoutline.png"}></img>
                </div>
                <span className='Home'> Home</span>
            </Link>
            <Link to="">
                <div className='Category-image'>
                    <img src='	https://assets.winni.in/groot/2023/01/31/icons/mobilecategorydark.png'></img>
                </div>
                <span className='Category-title'> Category</span>
            </Link>
            <Link to="/Profile" className={`profile-link ${ActiveTab === "Profile" ? 'active' : ""}`} onClick={() => setActiveTab("Profile")}>
                <div className='Profile-image'>

                    <img src={ActiveTab === "Profile" ? 'https://assets.winni.in/groot/2023/01/31/icons/mobileprofiledark.png' : 'https://assets.winni.in/groot/2023/01/31/icons/mobileprofile.png'}></img>
                </div>
                <span className='Profile'>Profile</span>
            </Link>
        </div>
    )
}

export default Mobile_Navbar_bottom