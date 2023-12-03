// <!-- animation script code  -->

  
    // Options for the Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    // Callback function to handle intersections
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // You can add additional logic or styles here if needed
            }
        });
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe each pop-up element
    document.querySelectorAll('.pop-up').forEach(popUp => {
        observer.observe(popUp);
    });

