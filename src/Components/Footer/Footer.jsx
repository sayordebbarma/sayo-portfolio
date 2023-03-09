import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Sayor Debbarma</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#services" className="footer_link">Services</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.instagram.com/ig_sayordb" className="footer_social_icon" target="_blank">
                <i class="uil uil-instagram"></i>
                </a>

                <a href="https://github.com/sayordebbarma" className="footer_social_icon" target="_blank">
                <i class="uil uil-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/sayor-debbarma-220a4b222/" className="footer_social_icon" target="_blank">
                <i class="uil uil-linkedin"></i>
                </a>

                <a href="" className="footer_social_icon" target="_blank">
                <i class="uil uil-dribbble"></i>
                </a>

                <a href="" className="footer_social_icon" target="_blank">
                <i class="uil uil-behance"></i>
                </a>
            </div>

            <span className="footer_copyright">
                Copyright &#169; 2023 portfolio Limited.
            </span>
        </div>
    </section>
  )
}

export default Footer