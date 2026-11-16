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
