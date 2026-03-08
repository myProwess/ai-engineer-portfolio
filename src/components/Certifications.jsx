import { useScrollReveal } from '../hooks/useScrollReveal';
import './Certifications.css';

function GithubIcon() {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
    );
}

function ExternalLinkIcon() {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function Certifications({ data }) {
    const sectionRef = useScrollReveal();

    // Build cards from certifications and github repos
    const cards = [];

    // Add GitHub projects
    if (data.personal_info.links.github) {
        data.personal_info.links.github.forEach((url, idx) => {
            const repoName = url.split('/').filter(Boolean).pop().replace('.git', '').replace(/-/g, ' ');

            let displayTitle = repoName.charAt(0).toUpperCase() + repoName.slice(1);
            if (url.includes('ai-gold-price-tracker')) displayTitle = 'AI Gold Price Tracker';
            if (url.includes('ai-importance-app')) displayTitle = 'Importance of AI';

            cards.push({
                title: displayTitle,
                description: `Open source project hosted on GitHub`,
                icon: '💻',
                tags: ['GitHub', 'Open Source'],
                githubUrl: url,
                liveUrl: null,
            });
        });
    }

    // Add certifications
    data.certifications.forEach((cert) => {
        cards.push({
            title: cert.name,
            description: cert.issuer ? `Certified by ${cert.issuer}` : 'Professional certification in test automation',
            icon: '🏆',
            tags: ['Certification', 'TOSCA'],
            githubUrl: null,
            liveUrl: null,
        });
    });

    // Add portfolio
    if (data.personal_info.links.portfolio) {
        cards.push({
            title: 'Portfolio Website',
            description: 'Personal portfolio showcasing projects and experience',
            icon: '🌐',
            tags: ['Web', 'Portfolio'],
            githubUrl: null,
            liveUrl: data.personal_info.links.portfolio,
        });
    }

    return (
        <section className="certifications" id="projects" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title light reveal">Projects & Certifications</h2>

                <div className="cert-grid">
                    {cards.map((card, idx) => (
                        <div className={`cert-card reveal reveal-delay-${Math.min(idx + 1, 5)}`} key={idx}>
                            <div className="cert-card-illustration">
                                <span className="cert-card-icon">{card.icon}</span>
                            </div>
                            <div className="cert-card-content">
                                <div className="cert-card-tags">
                                    {card.tags.map((tag, i) => (
                                        <span className="cert-tag" key={i}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className="cert-card-title">{card.title}</h3>
                                <p className="cert-card-description">{card.description}</p>
                                <div className="cert-card-links">
                                    {card.githubUrl && (
                                        <a href={card.githubUrl} target="_blank" rel="noopener noreferrer" className="cert-link" title="GitHub">
                                            <GithubIcon /> <span>GitHub</span>
                                        </a>
                                    )}
                                    {card.liveUrl && (
                                        <a href={card.liveUrl} target="_blank" rel="noopener noreferrer" className="cert-link" title="Live">
                                            <ExternalLinkIcon /> <span>Live</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                {data.education && data.education.length > 0 && (
                    <div className="education-section reveal reveal-delay-2">
                        <h2 className="section-title light" style={{ marginTop: '40px' }}>Education</h2>
                        {data.education.map((edu, idx) => (
                            <div className="education-card" key={idx}>
                                <div className="education-icon">🎓</div>
                                <h3 className="education-degree">{edu.degree} in {edu.field_of_study}</h3>
                                <p className="education-field">{edu.institution}</p>
                                {edu.end_date && <p className="education-year">{edu.end_date}</p>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Certifications;
