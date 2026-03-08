import { useScrollReveal } from '../hooks/useScrollReveal';
import profileAvatar from '../assets/profile-avatar.png';
import './About.css';

function About({ data }) {
    const sectionRef = useScrollReveal();

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title light reveal">About</h2>

                <div className="about-wrapper">
                    <div className="about-image-container reveal reveal-delay-1">
                        <img
                            src={profileAvatar}
                            alt={data.personal_info.name}
                            className="about-image"
                        />
                    </div>

                    <div className="about-text reveal reveal-delay-2">
                        <p className="about-description">
                            Hi, I'm <span className="highlight">{data.personal_info.name}</span>. I'm an{' '}
                            <span className="highlight">AI automation engineer</span> from{' '}
                            {data.personal_info.location}. {data.about_statement}
                        </p>
                        <ul className="about-summary-list">
                            <li>9+ years of experience in <strong>Automation Development & Testing</strong></li>
                            <li>Proficient in <strong>Selenium, TestNG, BDD, Cucumber</strong> test frameworks</li>
                            <li>CI/CD pipeline expertise with <strong>Jenkins & TeamCity</strong></li>
                            <li>Perfecto Mobile Functional & Test Automation experience</li>
                            <li><strong>TOSCA Test Suite</strong> certified professional</li>
                            <li>Agile team player with <strong>In-sprint automation</strong></li>
                            <li>Strong knowledge in <strong>Core Java, REST API & Microservices</strong> testing</li>
                            <li>Hands-on with <strong>GIT, JIRA, Jenkins</strong> & CI/CD integration</li>
                        </ul>
                    </div>

                    <div className="about-stats reveal reveal-delay-3">
                        <div className="stat-item">
                            <div className="stat-number">{data.stats.years_experience}</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">{data.stats.completed_projects}</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">{data.stats.hours_worked}</div>
                            <div className="stat-label">Hours Worked</div>
                        </div>
                    </div>

                    <div className="about-columns reveal reveal-delay-4">
                        <div className="about-column">
                            <div className="about-column-icon">🔧</div>
                            <h3 className="about-column-title">Automation</h3>
                            <p className="about-column-text">
                                Expert in Selenium, BDD, and test framework development with end-to-end automation capabilities.
                            </p>
                        </div>
                        <div className="about-column">
                            <div className="about-column-icon">⚙️</div>
                            <h3 className="about-column-title">CI/CD</h3>
                            <p className="about-column-text">
                                Jenkins, TeamCity integration, build pipeline setup with continuous integration expertise.
                            </p>
                        </div>
                        <div className="about-column">
                            <div className="about-column-icon">🤝</div>
                            <h3 className="about-column-title">Teamwork</h3>
                            <p className="about-column-text">
                                Agile team player with cross-functional collaboration, client demos, and knowledge sharing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
