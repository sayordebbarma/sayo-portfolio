import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Get in touch</h2>
        <span className="section_subtitle">Connect with me</span>

        <div className="contact_container grid container">
            <div className="cotact_content">
                <h3 className="contact_title">Talk to me</h3>

                <div className="contact_info">
                    <div className="contact_card">
                        <i className="bx bx-mail-send contact_card_icon"></i>

                        <h3 className="contact_card_title">Email</h3>
                        <span className="contact_card_data">user@gmail.com</span>

                        <a href="mailto:examplemail@gmail.com" className="contact_button">
                            Write me 
                            <i className="bx bx-right-arrow-alt contact_button_icon"></i>
                        </a>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-whatsapp contact_card_icon"></i>

                        <h3 className="contact_card_title">WhataApp</h3>
                        <span className="contact_card_data">123-456-789</span>

                        <a href="" className="contact_button">
                            Write me 
                            <i className="bx bx-right-arrow-alt contact_button_icon"></i>
                        </a>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-discord-alt contact_card_icon"></i>

                        <h3 className="contact_card_title">Discord</h3>
                        <span className="contact_card_data">sassa123</span>

                        <a href="" className="contact_button">
                            Write me 
                            <i className="bx bx-right-arrow-alt contact_button_icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="cotact_content">
                <h3 className="contact_title">Write your message</h3>

                <form className="contact_form">
                    <div className="contact_form_div">
                        <label htmlFor="" className="contact_form_tag">Name</label>
                        <input type="text" name="name" className="contact_form_input" placeholder='Enter your name'/>
                    </div>

                    <div className="contact_form_div">
                        <label htmlFor="" className="contact_form_tag">Email</label>
                        <input type="email" name="email" className="contact_form_input" placeholder='Enter your email'/>
                    </div>

                    <div className="contact_form_div">
                        <label htmlFor="" className="contact_form_tag">Your message</label>
                            <textarea name="messafe" cols="30" rows="10" className="contact_form_input" placeholder='Enter your thoughts'></textarea>
                        </div>
                    
                    <a href="#contacts" className="button button--flex">Send Message</a>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact