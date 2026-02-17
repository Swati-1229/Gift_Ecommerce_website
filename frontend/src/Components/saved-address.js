import React from 'react'
import { useState } from 'react';
import Header from './Header'
import "./saved-address.scss"
import { Link } from 'react-router-dom';

function Savedaddress() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <Header></Header>
            <div className='AddressSection-main'>
                <div className='SavedAddressSection'>
                    <div className='SavedAddress'>
                        <span class="iconLeft">
                            <img alt="adress-icon" src="https://assets.winni.in/groot/2023/08/28/my-winni/mobile/adress-icon.png" className="iconImg" />
                        </span>
                        <span className="myAccount">My Address Book (1)</span>
                        <span class="iconRight" onClick={() => setShowModal(true)}>
                            <img alt="down-arrow" src="https://assets.winni.in/groot/2023/08/28/my-winni/mobile/down-arrow.png" className="" style={{ height: "10px;" }} />
                        </span>
                    </div>

                </div>
                <div className='Address-Details-section'>
                    <div className="address-card">
                        <div className="address-tag">
                            <span>Home</span>
                        </div>
                        <div className="address-content">
                            <div className="user-name">Swati Kumari</div>
                            <div className="user-phone">9060194869</div>
                            <div className="user-address">
                                Bus stand sono jamui bihar,<br />
                                Aghara-So - 811314
                            </div>
                            <div className="remove-section">
                                <i className="fa fa-trash" style={{ marginRight: '6px' }}></i>
                                Remove
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                showModal && (
                    <>
                        <div className="modal-backdrop" onClick={() => setShowModal(false)} />
                        <div className="sidebar-modal">
                            <div className="sidebar-content">
                                <button className="close-btn" onClick={() => setShowModal(false)}>✖</button>
                                <ul className="sidebar-menu">
                                    <li><i className="fa fa-user"></i>
                                        <span className='common-title'>My Accounts</span>
                                        <span class="iconRight">
                                            <img src="https://assets.winni.in/groot/2023/08/28/my-winni/mobile/side-arrow-grey.png" alt="Arrow icon" className="sideArrow" style={{ height: "11px;" }} />
                                        </span>
                                    </li>
                                    <li><i className="fa fa-list"></i>
                                        <span className='common-title'>My Orders</span>
                                        <span className="iconRight">
                                            <img src="https://assets.winni.in/groot/2023/08/28/my-winni/mobile/side-arrow-grey.png" alt="Arrow icon" className="sideArrow" style={{ height: "11px;" }} />
                                        </span></li>
                                    <Link to="/SavedAddress" style={{ textDecoration: "none" }}>
                                        <li className="active">
                                            <i className="fa fa-book"></i><span className='common-title'> My Address Book</span>
                                            <span className="iconRight">
                                                <img src="https://assets.winni.in/groot/2023/08/28/my-winni/mobile/side-arrow-grey.png" alt="Arrow icon" className="sideArrow" style={{ height: "11px;" }} />
                                            </span>
                                        </li>
                                    </Link>
                                    <li><i className="fa fa-wallet"></i><span className='common-title'> My Wallet</span>
                                        <span className="iconRight">
                                            <img src="https://assets.winni.in/groot/2023/08/28/my-winni/mobile/side-arrow-grey.png" alt="Arrow icon" className="sideArrow" style={{ height: "11px;" }} />
                                        </span></li>
                                    <li><i className="fa fa-gift"></i><span className='common-title'>Coupans</span>
                                        <span className="iconRight">
                                            <img src="https://assets.winni.in/groot/2023/08/28/my-winni/mobile/side-arrow-grey.png" alt="Arrow icon" className="sideArrow" style={{ height: "11px;" }} />
                                        </span></li>
                                    <li><i className="fa fa-clock"></i> <span className='common-title'>Reminder</span>
                                        <span className="iconRight">
                                            <img src="https://assets.winni.in/groot/2023/08/28/my-winni/mobile/side-arrow-grey.png" alt="Arrow icon" className="sideArrow" style={{ height: "11px;" }} />
                                        </span></li>
                                </ul>
                            </div>
                        </div>
                    </>
                )
            }


        </div>

    )
}

export default Savedaddress