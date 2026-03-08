import { useEffect, useRef, useCallback } from 'react';

export function useScrollReveal(options = {}) {
    const ref = useRef(null);

    const handleIntersect = useCallback((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, {
            threshold: options.threshold || 0.1,
            rootMargin: options.rootMargin || '0px 0px -50px 0px',
        });

        const elements = ref.current?.querySelectorAll('.reveal');
        if (elements) {
            elements.forEach((el) => observer.observe(el));
        }

        return () => observer.disconnect();
    }, [handleIntersect, options.threshold, options.rootMargin]);

    return ref;
}
