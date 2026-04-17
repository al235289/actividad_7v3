window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const height = window.innerHeight;
    let progress = Math.min(scroll / height, 1);
    const fastProg = Math.pow(progress, 0.4);

    const earth = document.getElementById('earth-img');
    const sun = document.getElementById('sun-img');
    const moon = document.getElementById('moon-img');
    const mark = document.getElementById('mark-img');
    const asteroids = document.getElementById('layer-asteroids');

    // TIERRA: Se vuelve invisible al 70% del scroll del viewport
    earth.style.transform = `scale(${1 - fastProg * 0.9}) translateY(${scroll * 1.5}px)`;
    earth.style.opacity = progress > 0.7 ? 0 : 1 - (progress * 1.4);

    // SOL: Muere rápido
    sun.style.transform = `scale(${1 - fastProg * 0.8}) translate(${scroll * 0.2}px, -${scroll * 0.1}px)`;
    sun.style.opacity = progress > 0.6 ? 0 : 1 - (progress * 1.6);

    // LUNA: Muere rápido
    moon.style.transform = `scale(${1 - fastProg * 0.7}) translateX(${scroll * 0.4}px)`;
    moon.style.opacity = progress > 0.7 ? 0 : 1 - (progress * 1.4);

    // MARK: Se desvanece antes de que el bloque negro lo toque
    const scaleMark = 1 + (fastProg * 13);
    mark.style.transform = `scale(${scaleMark}) translateY(-${scroll * 0.4}px)`;
    // Si el scroll pasa de 0.7, Mark se desvanece rápido
    mark.style.opacity = progress > 0.7 ? (1 - progress) * 4 : 1;

    // ASTEROIDES: Desaparición total
    asteroids.style.transform = `translateY(${scroll * 2.5}px)`;
    asteroids.style.opacity = progress > 0.6 ? 0 : 1 - (progress * 1.6);
});