import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link } from "react-router-dom";
import UseEmail from "../../services/UseEmail";
import "./footer.css"

const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const { loading, submitted, error, sendEmail } = UseEmail("https://public.herotofu.com/v1/6c335210-5a45-11ee-a450-5f0c9649ec83");

    const handleChange = (event) => {
        console.log("in handleChange", event.target.name, event.target.value);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };


    const sendExampleEmailRequest = () => {
        sendEmail({
            example_user: formData.email,
            example_data: JSON.stringify(formData),
        });
    };

    return (
        <div className="footer">
            <div className="address">
                <h3>Address</h3><br />
                <i class="bi bi-sign-turn-left-fill"></i>&nbsp;Shivshankar P. Randale &
                Co.
                <br />
                <br />
                <i class="bi bi-telephone-fill"></i>&nbsp;+91-7028200411
                <br />
                <br />
                <i class="bi bi-envelope-open"></i>&nbsp;sprca@gmail.com
                <br />
                <br />
            </div>
            <div className="address">
                {" "}
                <h3>Services</h3><br />
                <i class="bi bi-sign-turn-left-fill"></i>&nbsp;Shivshankar P. Randale &
                Co.
                <br />
                <br />
                <i class="bi bi-telephone-fill"></i>&nbsp;+91-7028200411
                <br />
                <br />
                <i class="bi bi-envelope-open"></i>&nbsp;sprca@gmail.com
                <br />
                <br />
            </div>
            <div className="address">
                <h3>Useful Links</h3>
                <div className="topnav" style={{ margin: 0 }}>
                    <Link className="link" to="/">
                        Home
                    </Link><br />
                    <Link className="link" to="/pages">
                        Pages
                    </Link><br />
                    <Link className="link" to="/services">
                        Services
                    </Link><br />
                    <Link className="link" to="/cases">
                        Cases
                    </Link><br />
                    <Link className="link" to="/blogs">
                        Blogs
                    </Link><br />
                    <Link className="link" to="/contact">
                        Contact Us
                    </Link><br />
                </div>
            </div>
            <div style={{ "paddingRight": "10%" }}>
                <div className="contact-form">
                    <h3 style={{ color: "antiquewhite" }}>Contact Form:</h3><br />
                    <Form>
                        <FloatingLabel
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                            label="Full Name*"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Full Name*"
                                value={formData.name}
                                name="name"
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                            label="Email Address*"
                        >
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email Address*"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                            label="Message*"
                        >
                            <Form.Control
                                as="textarea"
                                name="message"
                                placeholder="Message*"
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                    </Form>
                    <div>
                        <button className="btn btn-primary" onClick={sendExampleEmailRequest}>Contact us</button>
                    </div>
                </div>
                <div style={{ "color": "antiquewhite", "paddingLeft": "10vw" }}>
                    {submitted && 'Thanks for Contacting us,\n Our Team will reach out to you shortly'}
                    {error ? `Unexpected error: ${error}` : null}
                    {loading && 'Please wait ...'}
                </div>
            </div>

            {/* <ReactWhatsapp
        className="btn btn-primary"
          onClick={handleSubmit}
          number="917028200411"
          message={formData.message}
        >Chat in Whatsapp
        </ReactWhatsapp> */}
        </div>
    );
};

export default Footer;