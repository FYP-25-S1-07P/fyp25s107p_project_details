import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <section className="bg-light py-5">
                <div className="container px-5">
                    <h1 className="display-5 fw-bolder text-center">
                        <span className="text-gradient">Contact Us</span>
                    </h1>
                    <p className="text-muted text-center mt-3">
                        If you have any questions or inquiries, feel free to contact us at:
                    </p>
                    <p className="text-center">
                        <a href="mailto:fyp25s107p@gmail.com" className="btn btn-primary">
                            fyp25s107p@gmail.com
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
