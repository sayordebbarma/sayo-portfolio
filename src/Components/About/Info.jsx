import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
        <i class="uil uil-trophy about_icon"></i>
            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle">1 Years Working</span>
        </div>

        <div className="about_box">
        <i class="uil uil-briefcase about_icon"></i>
            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">35+ Projects</span>
        </div>

        <div className="about_box">
        <i class="uil uil-headphones-alt about_icon"></i>
            <h3 className="about_title">Supports</h3>
            <span className="about_subtitle">24/7</span>
        </div>
    </div>
  )
}

export default Info