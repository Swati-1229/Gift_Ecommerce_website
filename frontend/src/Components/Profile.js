import React, { useEffect, useState } from 'react'
import "./Profile.scss"
import Mobile_Navbar_bottom from './Mobile_Navbar_bottom'
import { Link, useLocation, Navigate, useNavigate } from 'react-router-dom'

function Profile() {

    const [LogedInUser, setLogedInUser] = useState(null)
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        const storeduserdata = JSON.parse(localStorage.getItem("loginUser"))
        if (storeduserdata) {
            setLogedInUser(storeduserdata || null)
        }
    }, [location])
    const handlelogOut = () => {
        localStorage.removeItem("loginUser")
        navigate("/")
    }

    return (
        <div>
            <div className='adbprofile profile-content'>
                <div className='Login-section'>
                    <div className='user_about_section'>
                        <div className='profile-icon'>
                            <img className="img-width" alt="ic-user" loading="lazy" src="https://assets.winni.in/groot/2025/06/16/mobile/ic-user.png"></img>
                        </div>

                        <div className='Login-details'>
                            {LogedInUser ? (
                                <div className="loggedUser">
                                    <div className="fs18 truncate fw600">
                                        <span className="fw600">Hello,</span>
                                        <span id="userName">Ms. Swati kumari</span>
                                    </div>
                                    <a className="fw500 fs15 truncate email-text color-inherit" id="userEmailId">swati28012019@gmail.com</a>
                                    <div className="fw500 fs15 truncate color-inherit" id="userMobileNumber">
                                        <a className="color-inherit user-mobile-number">
                                            +91 9060194869</a>
                                    </div>
                                </div>)
                                : (<div className='LoginSignup'>
                                    Log In/Sign Up
                                </div>
                                )}
                        </div>
                        {LogedInUser && (
                            <div className='edit-colum'>
                                <a href=" /my-winni/user-mywinni-info">
                                    <div className="edit-profile display-flex-items__center bg-white">
                                        <img className="edit-img" alt="pen" loading="lazy" src="https://assets.winni.in/groot/2025/06/16/mobile/edit-profile.png" />
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <div className='bottom-operator'></div>
                <div className='orders-container'>
                    <div className='container-width-set'>
                        <div className='order-section'>
                            <div className='orders-icon-section common-icon-section'>
                                <div className='orders-icon common-icon-image' >
                                    <img src="https://assets.winni.in/groot/2025/06/16/mobile/order.png" loading="lazy" className="img-width__common" alt="orders"></img>
                                </div>
                            </div>
                            <div className='order-title common-title-part'>
                                <span>Orders</span>
                            </div>
                            <div className='right-arrow-image-section'>
                                <img className="right-arrow__img" loading="lazy" src="https://assets.winni.in/groot/2025/06/16/mobile/go.png" alt="arrow"></img>
                            </div>

                        </div>
                    </div>
                    <div className='bottom-operator'></div>
                </div>
                <div className='orders-container'>
                    <div className='container-width-set'>
                        <div className='order-section'>
                            <div className='myaccount-icon-section common-icon-section'>
                                <div className='myaccount-icon common-icon-image' >
                                    <img src="https://assets.winni.in/groot/2025/06/16/mobile/account.png" loading="lazy" class="img-width__common" alt="orders" />                        </div>
                            </div>
                            <div className='myaccount-title common-title-part'>
                                <span> My Account</span>
                            </div>
                            <div className='right-arrow-image-section'>
                                <img className="right-arrow__img" loading="lazy" src="https://assets.winni.in/groot/2025/06/16/mobile/go.png" alt="arrow"></img>
                            </div>

                        </div>
                        <div className='order-section'>
                            <div className='mywallet-icon-section common-icon-section'>
                                <div className='mywallet-icon common-icon-image' >
                                    <img src="https://assets.winni.in/groot/2025/06/16/mobile/wallet.png" loading="lazy" class="img-width__common" alt="orders" />
                                </div>
                            </div>
                            <div className='mywallet-title common-title-part'>
                                <span> My Wallet</span>
                            </div>
                            <div className='right-arrow-image-section'>
                                <img className="right-arrow__img" loading="lazy" src="https://assets.winni.in/groot/2025/06/16/mobile/go.png" alt="arrow"></img>
                            </div>

                        </div>
                        <div className='order-section'>
                            <div className='coupans-icon-section common-icon-section'>
                                <div className='coupans-icon common-icon-image' >
                                    <img src="https://assets.winni.in/groot/2025/06/16/mobile/coupon.png" loading="lazy" class="img-width__common" alt="orders" />                            </div>
                            </div>
                            <div className='coupan-title common-title-part'>
                                <span> Coupans</span>
                            </div>
                            <div className='right-arrow-image-section'>
                                <img className="right-arrow__img" loading="lazy" src="https://assets.winni.in/groot/2025/06/16/mobile/go.png" alt="arrow"></img>
                            </div>

                        </div>
                        <Link to="/SavedAddress">
                            <div className='order-section'>
                                <div className='saveaddress-icon-section common-icon-section'>
                                    <div className='savedaddress-icon common-icon-image' >
                                        <img src="https://assets.winni.in/groot/2025/06/16/mobile/saved-address.png" loading="lazy" class="img-width__common" alt="orders" />                        </div>
                                </div>
                                <div className='savedaddress-title common-title-part'>
                                    <span> Saved Address</span>
                                </div>
                                <div className='right-arrow-image-section'>
                                    <img className="right-arrow__img" loading="lazy" src="https://assets.winni.in/groot/2025/06/16/mobile/go.png" alt="arrow"></img>
                                </div>

                            </div>
                        </Link>
                        <div className='order-section'>
                            <div className='reminder-icon-section common-icon-section'>
                                <div className='reminder-icon common-icon-image' >
                                    <img src="https://assets.winni.in/groot/2025/06/16/mobile/reminder.png" loading="lazy" class="img-width__common" alt="orders" /> </div>
                            </div>
                            <div className='reminder-title common-title-part'>
                                <span> Reminders</span>
                            </div>
                            <div className='right-arrow-image-section'>
                                <img className="right-arrow__img" loading="lazy" src="https://assets.winni.in/groot/2025/06/16/mobile/go.png" alt="arrow"></img>
                            </div>

                        </div>
                    </div>
                    <div className='bottom-operator'>
                    </div>
                </div>
                <div className='orders-container'>
                    <div className='container-width-set'>
                        <div className='order-section'>
                            <div className='currency-icon-section common-icon-section'>
                                <div className='currency-icon common-icon-image' >
                                    <img src="https://assets.winni.in/groot/2025/06/16/mobile/currency.png" loading="lazy" class="img-width__common" alt="orders"></img>
                                </div>
                            </div>
                            <div className='currency-title common-title-part'>
                                <span>Currency</span>
                            </div>
                            <div className='right-arrow-image-section'>
                                <img className="right-arrow__img" loading="lazy" src="https://assets.winni.in/groot/2025/06/16/mobile/go.png" alt="arrow"></img>
                            </div>

                        </div>
                    </div>
                    <div className='bottom-operator'></div>
                </div>
                <div className='orders-container'>
                    <div className='container-width-set'>
                        <div className='order-section'>
                            <div className='currency-icon-section common-icon-section'>
                                <div className='currency-icon common-icon-image' >
                                    <img src="https://assets.winni.in/groot/2025/06/16/mobile/help-center.png" loading="lazy" class="img-width__common" alt="orders" />                            </div>
                            </div>
                            <div className='currency-title common-title-part'>
                                <span>Help Center</span>
                            </div>
                            <div className='right-arrow-image-section'>
                                <img className="right-arrow__img" loading="lazy" src="https://assets.winni.in/groot/2025/06/16/mobile/go.png" alt="arrow"></img>
                            </div>

                        </div>
                    </div>
                    <div className='bottom-operator'></div>
                </div>
                <div className="info-links-section">
                    <div className=" container-width-set">
                        <div className="info-links ">
                            <a className=" adbProfileFAQ " href="/s/faq">FAQs</a>
                            <a className=" adbProfileAboutUs" href="/about-us">About Us</a>
                            <a className=" adbProfilePrivacyPolicy" href="s/privacy-policy">Privacy
                                Policy</a>
                            <a className=" adbProfileCondition" href="/s/terms-and-conditions">Terms &amp;
                                Conditions</a>
                        </div>
                    </div>
                    <div class="bottom-operator"></div>
                </div>

                {LogedInUser && (
                    <div className="logout-section">
                        <div className="adbProfileLogOut loggedUser container logout-container">
                            <div className="modal-trigger" data-target="confirmLogout">
                                <div className=" logout-btn__wrapper ">
                                    <img className="logout-icon" src="https://assets.winni.in/groot/2025/06/16/mobile/logout.png" loading="lazy" alt="logout" />
                                    <span className="fs16 fw600 logout-text" onClick={handlelogOut}>LOGOUT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Mobile_Navbar_bottom></Mobile_Navbar_bottom>

        </div>
    )
}

export default Profile