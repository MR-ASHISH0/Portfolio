import React from 'react'

const Footer = () => {
  return (
 <footer className="footer">
  <div className="footer-bg">
    <div className="footer-container container grid">
      <div>
        <h1 className="footer-title">Ashish Saini</h1>
        <span className="footer-subtitle">Full Developer</span>
      </div>
      <ul className="footer-links">
        <li>
          <a href="#services" className="footer-link">Services</a>
        </li>
        <li>
          <a href="#portfolio" className="footer-link">Portfolio</a>
        </li>
        <li>
          <a href="#contact" className="footer-link">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/ashish-saini-1259812a6/" target="_blank" className="footer-social">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a href="https://github.com/MR-ASHISH0" target="_blank" className="footer-social">
          <i className="fa-brands fa-github" />
        </a>
        <a href="" target="_blank" className="footer-social">
          <i className="fa-brands fa-instagram" />
        </a>
      </div>
    </div>
    <p className="footer-copy">By Ashish Saini - @</p>
  </div>
</footer>

  )
}

export default Footer
