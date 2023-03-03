import React, { useState } from 'react'
import './Services.css'

const Services = () => {
    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I can offer</span>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-browser services_icon"></i>
                    <h3 className="services_title">Web <br /> Developer</h3>
                </div>
                <span onClick={() => toggleTab(1)} className="services_button">
                    View more <i class="uil uil-arrow-right services_button_icon"></i>
                </span>

                <div className={toggle === 1 ? "services_model active_model" : "services_model"}>
                    <div className="services_model_content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_model_close"></i>
                        <h3 className="services_model_title">Web Developer</h3>
                        <p className="services_model_description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                        <ul className="services_model_services grid">
                            <li className="services_model_service">
                            <i class="uil uil-check-circle services_model_icon"></i>
                            <p className="services_model_info">I develop the user interface</p>
                            </li>
                            <li className="services_model_service">
                            <i class="uil uil-check-circle services_model_icon"></i>
                            <p className="services_model_info">I develop a web page</p>
                            </li>
                            <li className="services_model_service">
                            <i class="uil uil-check-circle services_model_icon"></i>
                            <p className="services_model_info">I provide full-stack services</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services_content">
                <div>
                    <i className="uil uil-object-group services_icon"></i>
                    <h3 className="services_title">UI/UX <br /> Designer</h3>
                </div>
                <span onClick={() => toggleTab(2)} className="services_button">
                    View more<i class="uil uil-arrow-right services_button_icon"></i>
                </span>

                <div className={toggle === 2 ? "services_model active_model" : "services_model"}>
                    <div className="services_model_content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_model_close"></i>
                        <h3 className="services_model_title">UI/UX Designer</h3>
                        <p className="services_model_description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                        <ul className="services_model_services grid">
                            <li className="services_model_service">
                            <i class="uil uil-check-circle services_model_icon"></i>
                            <p className="services_model_info">I develop the user interface</p>
                            </li>
                            <li className="services_model_service">
                            <i class="uil uil-check-circle services_model_icon"></i>
                            <p className="services_model_info">I develop a web page</p>
                            </li>
                            <li className="services_model_service">
                            <i class="uil uil-check-circle services_model_icon"></i>
                            <p className="services_model_info">I provide full-stack services</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services_content">
                <div>
                    <i className="uil uil-apple-alt services_icon"></i>
                    <h3 className="services_title">IOS <br /> Developer</h3>
                </div>
                <span onClick={() => toggleTab(3)} className="services_button">
                    View more<i class="uil uil-arrow-right services_button_icon"></i>
                </span>

                <div className={toggle === 3 ? "services_model active_model" : "services_model"}>
                    <div className="services_model_content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_model_close"></i>
                        <h3 className="services_model_title">IOS Developer</h3>
                        <p className="services_model_description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                        <ul className="services_model_services grid">
                            <li className="services_model_service">
                            <i class="uil uil-check-circle services_model_icon"></i>
                            <p className="services_model_info">I develop the user interface</p>
                            </li>
                            <li className="services_model_service">
                            <i class="uil uil-check-circle services_model_icon"></i>
                            <p className="services_model_info">I develop a web page</p>
                            </li>
                            <li className="services_model_service">
                            <i class="uil uil-check-circle services_model_icon"></i>
                            <p className="services_model_info">I provide full-stack services</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services