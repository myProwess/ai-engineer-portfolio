import { useEffect, useRef } from 'react';
import './Hero.css';

function Hero({ data }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createParticles() {
            particles = [];
            const count = Math.floor((canvas.width * canvas.height) / 12000);
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.5,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    alpha: Math.random() * 0.5 + 0.2,
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(156, 174, 214, ${p.alpha})`;
                ctx.fill();
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(156, 174, 214, ${0.1 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationId = requestAnimationFrame(animate);
        }

        resize();
        createParticles();
        animate();

        window.addEventListener('resize', () => {
            resize();
            createParticles();
        });

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    const handleExplore = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const titleLines = data.personal_info.title.split('\n');

    return (
        <section className="hero" id="hero">
            <canvas ref={canvasRef} className="hero-particles" />

            <div className="hero-content">
                <h1 className="hero-greeting">
                    Hi, I'm <span className="hero-name">{data.personal_info.name}</span>,
                </h1>
                <p className="hero-role">
                    {titleLines.join(' ')}
                </p>
                <div className="hero-location">
                    <span className="hero-flag">🇮🇳</span>
                    <span>{data.personal_info.location} 📍</span>
                </div>
                <button className="hero-explore-btn" onClick={handleExplore}>
                    Explore
                </button>
                <a href={`mailto:${data.personal_info.email}`} className="hero-email">
                    {data.personal_info.email}
                </a>
            </div>

            <div className="hero-scroll-indicator">
                <div className="hero-scroll-dot" />
            </div>
        </section>
    );
}

export default Hero;
