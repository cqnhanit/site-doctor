window.addEventListener('scroll', (e) => {
    console.log(e.target.scrollY,)
    if( window.scrollY > 80) {
        document.getElementById('header_contact').classList.add('d-none');
        document.getElementById('header').classList.add('bg-black');
    } else {
        document.getElementById('header_contact').classList.remove('d-none');
        document.getElementById('header').classList.remove('bg-black');
    }
});
