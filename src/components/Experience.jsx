import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

function formatDate(dateStr) {
    if (!dateStr) return '';
    const [year, month] = dateStr.split('-');
    const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month)] || ''} ${year}`;
}

function CodeIcon() {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
    );
}

function Experience({ data }) {
    const sectionRef = useScrollReveal();

    return (
        <section className="experience" id="experience" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title dark reveal">Experience</h2>

                <div className="timeline">
                    {data.work_experience.map((job, index) => (
                        <div className={`timeline-item reveal reveal-delay-${Math.min(index + 1, 5)}`} key={index}>
                            <div className="timeline-icon">
                                <CodeIcon />
                            </div>
                            <div className="timeline-card">
                                <h3 className="timeline-position">{job.position}</h3>
                                <p className="timeline-company">{job.company}</p>
                                <ul className="timeline-description">
                                    {job.responsibilities.slice(0, 3).map((resp, i) => (
                                        <li key={i}>{resp}</li>
                                    ))}
                                </ul>
                                <p className="timeline-date">
                                    {formatDate(job.start_date)} – {job.end_date === 'Present' ? 'Present' : formatDate(job.end_date)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
