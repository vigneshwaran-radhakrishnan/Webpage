// Footer: "Last updated" date and copyright year.
// GitHub Pages sends a Last-Modified header with each deploy, which the browser exposes as document.lastModified.
(function () {
    var d = new Date(document.lastModified);
    var el = document.getElementById('last-updated');
    if (el && !isNaN(d)) {
        el.textContent = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    var y = document.getElementById('copy-year');
    if (y) { y.textContent = new Date().getFullYear(); }
})();

// Footer: total visit count from GoatCounter's public counter.
// Shows nothing if the counter is unavailable (setting off, network blocks it, offline).
(function () {
    var el = document.getElementById('visit-count');
    if (!el || !window.fetch) { return; }
    fetch('https://vigneshwaran.goatcounter.com/counter/TOTAL.json')
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) {
            if (d && d.count) {
                el.textContent = 'Visits: ' + d.count;
                el.hidden = false;
            }
        })
        .catch(function () {});
})();
