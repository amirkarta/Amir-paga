// Mobile nav toggle for small screens
(function(){
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger-icon');
    if(!nav || !hamburger) return;

    hamburger.addEventListener('click', function(e){
        e.preventDefault();
        nav.classList.toggle('nav-open');
    });

    // Close nav when a link is clicked
    const links = nav.querySelectorAll('a');
    links.forEach(link => link.addEventListener('click', () => {
        if(nav.classList.contains('nav-open')) nav.classList.remove('nav-open');
    }));

    // Close nav on outside click (for mobile)
    document.addEventListener('click', function(e){
        if(!nav.contains(e.target) && nav.classList.contains('nav-open')){
            nav.classList.remove('nav-open');
        }
    });
})();
