import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

// Map skill names to representative emoji icons
const skillIcons = {
    'Core Java': '☕',
    'SQL': '🗃️',
    'HTML': '🌐',
    'CSS': '🎨',
    'Selenium': '🔬',
    'TestNG': '🧪',
    'BDD': '📋',
    'Cucumber': '🥒',
    'POM': '📐',
    'Hybrid Framework': '🔗',
    'REST API': '🔌',
    'Bootstrap': '🅱️',
    'SOAPUI': '🧹',
    'Jenkins': '🏗️',
    'TeamCity': '🏙️',
    'Eclipse': '🌑',
    'IntelliJ': '💡',
    'UFT': '🛠️',
    'Perfecto Mobile': '📱',
    'TOSCA': '🎯',
    'HP ALM': '📊',
    'JIRA': '📌',
    'RALLY': '🏁',
    'GIT': '🔀',
    'BonoboGit': '🐒',
    'Openshift': '🔴',
    'Testrail': '🛤️',
    'MySQL': '🐬',
    'Typescript': '🔷',
    'Playwright': '🎭',
    'Visual Studio Code': '💻',
    'GitHub': '🐙',
};

function Skills({ data }) {
    const sectionRef = useScrollReveal();

    const categories = [
        { title: 'Languages', items: data.skills.languages },
        { title: 'Frameworks & Libraries', items: data.skills.frameworks_and_libraries },
        { title: 'Tools & Platforms', items: data.skills.tools_and_platforms },
    ];

    return (
        <section className="skills" id="skills" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title light reveal">Skills</h2>

                <div className="skills-categories">
                    {categories.map((category, catIdx) => (
                        <div key={catIdx} className="reveal reveal-delay-1">
                            <h3 className="skills-category-title">{category.title}</h3>
                            <div className="skills-grid">
                                {category.items.map((skill, idx) => (
                                    <div
                                        className={`skill-item reveal reveal-delay-${Math.min((idx % 4) + 1, 5)}`}
                                        key={idx}
                                        title={skill}
                                    >
                                        <span className="skill-icon">
                                            {skillIcons[skill] || '⚙️'}
                                        </span>
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
