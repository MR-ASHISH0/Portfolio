import React from 'react'

const About = () => {
  return (
  <section className="about section" id="about">
  <h2 className="section-title">About Me</h2>
  <span className="section-subtitle">My Introduction</span>
  <div className="about-container container grid">
    <img src={require('../../Assets/Icons/aboutimg.png')} alt className="about-img" />
    <div className="about-data">
      <p className="about-description">
        An accomplished Frontend Developer with a passion for creating
        seamless user experiences. With a solid foundation in HTML, CSS,
        and JavaScript, I specialize in crafting visually captivating and
        intuitively navigable websites. Leveraging my expertise in
        responsive design and UI/UX principles, I bring concepts to life,
        ensuring each project is a masterpiece of precision and
        functionality.
      </p>
      <div className="about-info">
        <div>
          <span className="about-info-title">02+</span>
          <span className="about-info-name">Years <br />
            experience</span>
        </div>
        <div>
          <span className="about-info-title">20+</span>
          <span className="about-info-name">Completed <br />
            project</span>
        </div>
        <div>
          <span className="about-info-title">06+</span>
          <span className="about-info-name">Companies <br />
            worked</span>
        </div>
      </div>
      <div className="about-buttons">
        <a download href="/Assets/Resume.pdf" className="button button-flex">
          Download Resume<i className="fa-solid fa-file-arrow-down button-icon" />
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default About
