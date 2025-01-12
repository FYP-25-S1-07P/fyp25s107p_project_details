import React from 'react';
import profileImg from '../assets/house.jpg';

const Header = () => {
    return (
        <header className="py-5">
            <div className="container px-5 pb-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-xxl-5">
                        <div className="text-center text-xxl-start">
                            <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                                <div className="text-uppercase">Interactive &middot; Predictive &middot; Reliable</div>
                            </div>
                            <div className="fs-3 fw-light text-muted">Empowering Real Estate Decision-Making with</div>
                            <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Data-Driven Insights</span></h1>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="#team">Meet Our Team</a>
                                <a
                                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                                    href="https://1drv.ms/f/s!AnqUUAZXW2eMa3dQHAITD5OTrUU?e=7nNtaR"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Project Updates
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7">
                        <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                            <div className="profile">
                                <img className="profile-img" src={profileImg} alt="Project Team" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
