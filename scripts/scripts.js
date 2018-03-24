(function () {
    var footerDate = document.getElementById('date');
    footerDate.textContent = new Date().getFullYear();

    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
    });

    // Toggle button
    document.querySelector('.toggle-button').addEventListener('click', () => {
        slideout.toggle();
    });

    // Servive Worker
    // if ('serviceWorker' in navigator) {
    //     navigator.serviceWorker
    //         .register('./service-worker.js', {scope: './'})
    //         .then(registration => console.log('Service Worker Registered')
    //         )
    //         .catch(err => console.error(`Service worker failed to register ${err}`));
    // }
})();