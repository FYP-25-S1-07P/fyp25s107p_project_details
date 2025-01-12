import React from 'react';
import teamMembers from '../data/TeamMembers';
import projectKeyComponents from '../data/projectKeyComponents';

const HomePage = () => {

    return (
        <div>
            {/* About Section */}
            <section className="bg-light py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center my-5">
                                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Our Project</span></h2>
                                <p className="lead fw-light mb-4">
                                    Welcome to the official website of our Final Year Project:<br />
                                    <strong>Interactive Real Estate Price Prediction in Singapore</strong>
                                </p>
                                <p className="text-muted">
                                    Our project is focused on developing a user-friendly platform that utilizes <strong>artificial intelligence</strong> and
                                    <strong> machine learning</strong> to predict real estate prices in Singapore. This platform is designed to enable users to
                                    input property details and receive instant price estimates based on historical data and property attributes.
                                </p>
                                <p className="text-muted">
                                    Key components of our project include:
                                </p>
                                {/* Accordion */}
                                <div className="accordion" id="projectComponentsAccordion">
                                    {projectKeyComponents.map((component, index) => (
                                        <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header" id={`heading${index}`}>
                                                <button
                                                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${index}`}
                                                    aria-expanded={index === 0 ? "true" : "false"}
                                                    aria-controls={`collapse${index}`}
                                                >
                                                    {component.title}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${index}`}
                                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                aria-labelledby={`heading${index}`}
                                                data-bs-parent="#projectComponentsAccordion"
                                            >
                                                <div className="accordion-body">
                                                    {component.content}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-muted mt-4">
                                    This website not only showcases our project journey but also serves as a platform to share updates, milestones, and insights into how data-driven technologies are shaping the future of real estate in Singapore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-5 bg-light">
                <div className="container px-5">
                    <h2 className="display-5 fw-bolder text-center mb-5">
                        <span className="text-gradient d-inline">Meet Our Team</span>
                    </h2>
                    <div className="row gx-5 gy-4">
                        {teamMembers.map((member, index) => (
                            <div className="col-md-4 col-sm-6" key={index}>
                                <div className="card h-100 border-0 shadow">
                                    <div className="card-body text-center">
                                        <h5 className="card-title fw-bold">{member.name}</h5>
                                        <p className="card-text mb-1"><strong>UOW ID:</strong> {member.uowId}</p>
                                        <p className="card-text mb-1"><strong>SIM ID:</strong> {member.simId}</p>
                                        <p className="card-text">
                                            <a href={`mailto:${member.email}`} className="text-decoration-none">
                                                {member.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
