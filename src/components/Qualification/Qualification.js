import React from 'react'

const Qualification = () => {
  return (
 <section className="qualification section">
  <h2 className="section-title">Qualification</h2>
  <span className="section-subtitle">My journey</span>
  <div className="qualification-container container">
    <div className="qualification-tabs">
      <div className="qualification-button button-flex qualification-active" data-target="#education">
        <i className="fa-solid fa-graduation-cap qualification-icon" />
        Education
      </div>
      <div className="qualification-button button-flex" data-target="#work">
        <i className="fa-solid fa-briefcase qualification-icon" />
        Work
      </div>
    </div>
    <div className="qualification-section">
      <div className="qualification-content qualification-active" data-content id="education">
        {/* qualifi 1 */}
        <div className="qualification-data">
          <div>
            <h3 className="qualification-title">
            Master of Computer Applications.
            </h3>
            <span className="qualification-subtitle">Rajasthan Technical University</span>
            <div className="qualification-date">
              <i className="fa-solid fa-calendar-days" />
              2024 - 2026
            </div>
          </div>
          <div>
            <span className="qualification-round" />
            <span className="qualification-line" />
          </div>
        </div>
        {/* qualifi 2 */}
        <div className="qualification-data">
          <div />
          <div>
            <span className="qualification-round" />
            <span className="qualification-line" />
          </div>
          <div>
            <h3 className="qualification-title">
              Full Stack Web Development
            </h3>
            <span className="qualification-subtitle">REGex Software</span>
            <div className="qualification-date">
              <i className="fa-solid fa-calendar-days" />
              2023 - 2024
            </div>
          </div>
        </div>
        {/* qualifi 3 */}
        <div className="qualification-data">
          <div>
            <h3 className="qualification-title">Frontend Development</h3>
            <span className="qualification-subtitle">Coursera</span>
            <div className="qualification-date">
              <i className="fa-solid fa-calendar-days" />
              2021 - 2022
            </div>
          </div>
          <div>
            <span className="qualification-round" />
            <span className="qualification-line" />
          </div>
        </div>
        {/* qualifi 4 */}
        <div className="qualification-data">
          <div />
          <div>
            <span className="qualification-round" />
            {/* <span class="qualification-line"></span> */}
          </div>
          <div>
            <h3 className="qualification-title">Digital Marketing</h3>
            <span className="qualification-subtitle">Google</span>
            <div className="qualification-date">
              <i className="fa-solid fa-calendar-days" />
              2019 - 2020
            </div>
          </div>
        </div>
      </div>
      {/* qualific content 2  */}
      <div className="qualification-content" data-content id="work">
        {/* qualifi 1 */}
        <div className="qualification-data">
          <div>
            <h3 className="qualification-title">Full Stack Developer</h3>
            <span className="qualification-subtitle">Fiverr</span>
            <div className="qualification-date">
              <i className="fa-solid fa-calendar-days" />
              2022 - Present
            </div>
          </div>
          <div>
            <span className="qualification-round" />
            <span className="qualification-line" />
          </div>
        </div>
        {/* qualifi 2 */}
        <div className="qualification-data">
          <div />
          <div>
            <span className="qualification-round" />
            <span className="qualification-line" />
          </div>
          <div>
            <h3 className="qualification-title">Ui/Ux Designer</h3>
            <span className="qualification-subtitle">Freelancer</span>
            <div className="qualification-date">
              <i className="fa-solid fa-calendar-days" />
              2022 - Present
            </div>
          </div>
        </div>
        {/* qualifi 3 */}
        <div className="qualification-data">
          <div>
            <h3 className="qualification-title">Content Creator</h3>
            <span className="qualification-subtitle">YouTube</span>
            <div className="qualification-date">
              <i className="fa-solid fa-calendar-days" />
              2019 - Present
            </div>
          </div>
          <div>
            <span className="qualification-round" />
            {/* <span class="qualification-line"></span> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Qualification
