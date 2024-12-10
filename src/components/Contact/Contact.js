import React from 'react'

const Contact = () => {
  return (
<section className="project-contact section">
  <div className="project-bg">
    <div className="project-container container grid">
      <div className="project-data">
        <h2 className="project-title">Do you have a new project?</h2>
        <p className="project-description">
          Contact me now and get a 50% discount on your new project.
        </p>
        <a href="#contact" className="button button-flex button-white">Contact Me
          <i className="fa-regular fa-comment-dots project-icon button-icon" />
        </a>
      </div>
      <img src={require("../../Assets/Icons/contactme.png")} alt className="project-img" />
    </div>
  </div>
</section>

  )
}

export default Contact
