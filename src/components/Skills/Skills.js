import React from 'react'
import "./Skills.css"

const Skills = () => {
    return (
        <section class="skills section" id="skills">
            <h1 className='nav-link'>My Skills</h1>
            <div className="cards">
                <div className="skill-card">
                    <img src={require('../../Assets/c.svg').default} alt />
                    <h2>C</h2>
                </div>
                <div className="skill-card">
                    <img src={require('../../Assets/html.svg').default} alt />
                    <h2>HTML</h2>
                </div>
                <div className="skill-card">
                    <img src={require('../../Assets/css.svg').default} alt />
                    <h2>CSS</h2>
                </div>
                <div className="skill-card">
                    <img src={require('../../Assets/js.svg').default} alt />
                    <h2>JavaScript</h2>
                </div>
                <div className="skill-card">
                    <img src={require('../../Assets/react.svg').default} alt />
                    <h2>ReactJS</h2>
                </div>

                <div className="skill-card">
                    <img src={require('../../Assets/angular.svg').default} alt />
                    <h2>Angular</h2>
                </div>
                <div className="skill-card">

                    <img src={require('../../Assets/nodejs.svg').default} alt="Node.js Logo" />
                    <h2>NodeJS</h2>
                </div>
                <div className="skill-card">
                    <img src={require('../../Assets/mongodb.svg').default} alt />
                    <h2>MongoDB</h2>
                </div>
                <div className="skill-card">
                    <img src={require('../../Assets/git.svg').default} alt />
                    <h2>GIT</h2>
                </div>
                <div className="skill-card">
                    <img src={require('../../Assets/amazon-web-services.svg').default} alt />
                    <h2>AWS</h2>
                </div>


                <div className="skill-card">
                    <img src={require('../../Assets/flask.svg').default} alt />
                    <h2>Flask</h2>
                </div>
                <div className="skill-card">
                    <img src={require('../../Assets/flutter.svg').default} alt />
                    <h2>Flutter</h2>
                </div>



                <div className="skill-card">
                    <img src={require('../../Assets/linux-96.png')} alt />
                    <h2>Linux</h2>
                </div>

                <div className="skill-card">
                    <img src={require('../../Assets/mysql.svg').default} alt />
                    <h2>MySQL</h2>
                </div>


            </div>
        </section>

    )
}

export default Skills
