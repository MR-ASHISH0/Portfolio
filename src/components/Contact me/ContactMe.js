import React from 'react'

const ContactMe = () => {
  return (
 <section className="contact section" id="contact">
  <h2 className="section-title">Contact me</h2>
  <span className="section-subtitle">Get in touch</span>
  <div className="contact-container container grid">
    <div>
      <div className="contact-info">
        <i className="fa-regular fa-envelope contact-icon" />
        <div>
          <h3 className="contact-title">Email</h3>
          <a href="mailto:as542saini@gmail.com" target="_blank" className="contact-subtitle">as542saini@gmail.com</a>
        </div>
      </div>
      <div className="contact-info">
        <i className="fa-brands fa-linkedin-in contact-icon" />
        <div>
          <h3 className="contact-title">Linkedin</h3>
          <a className="contact-subtitle" href="https://www.linkedin.com/in/ashish-saini-1259812a6/" target="_blank">@Ashish</a>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}

export default ContactMe
