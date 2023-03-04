import React from 'react'
import './Qualification.css'

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My education journey</span>

        <div className="qualification_container container">
          <div className="qualification_tabs">
            <div className="qualification_button qualification_active  button_flex">
              <div className="uil uil-graduation-cap qualification_icon"></div> Education
            </div>

            <div className="qualification_button button_flex">
              <div className="uil uil-briefcase-alt qualification_icon"></div> Experience
            </div>
          </div>

          <div className="qualification_sections">
            <div className="qualification_content">
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">web Developement</h3>
                  <span className="qualification_subtitle">Bhopal - Institute</span>
                  <div className="qualification_calender">
                    <div className="uil uil-calender qualification_icon"></div> 2021 - present
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

                <div>
                  <h3 className="qualification_title">IOS developement</h3>
                  <span className="qualification_subtitle">Bhopal - Institute</span>
                  <div className="qualification_calender">
                    <div className="uil uil-calender qualification_icon"></div> 2021 - present
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">web Design</h3>
                  <span className="qualification_subtitle">Bhopal - Institute</span>
                  <div className="qualification_calender">
                    <div className="uil uil-calender qualification_icon"></div> 2021 - present
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

                <div>
                  <h3 className="qualification_title">Video Editting</h3>
                  <span className="qualification_subtitle">Bhopal - Institute</span>
                  <div className="qualification_calender">
                    <div className="uil uil-calender qualification_icon"></div> 2021 - present
                  </div>
                </div>
              </div>
            </div>

            <div className="qualification_content">
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Product Management</h3>
                  <span className="qualification_subtitle">Bhopal - Institute</span>
                  <div className="qualification_calender">
                    <div className="uil uil-calender qualification_icon"></div> 2021 - present
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

                <div>
                  <h3 className="qualification_title">Blender Modelling</h3>
                  <span className="qualification_subtitle">Bhopal - Institute</span>
                  <div className="qualification_calender">
                    <div className="uil uil-calender qualification_icon"></div> 2021 - present
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Figma Designer</h3>
                  <span className="qualification_subtitle">Bhopal - Institute</span>
                  <div className="qualification_calender">
                    <div className="uil uil-calender qualification_icon"></div> 2021 - present
                  </div>
                </div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Qualification