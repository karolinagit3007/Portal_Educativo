// Contador animado para estadísticas
const counters = document.querySelectorAll('.stat-number');
const speed = 200; // Velocidad del contador

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
