window.addEventListener('scroll', (e) => {
    console.log(e.target.scrollY,)
    if( window.scrollY > 80) {
        document.getElementById('header_contact').classList.add('d-none');
        document.getElementById('header').classList.add('bg-black');
    } else {
        document.getElementById('header_contact').classList.remove('d-none');
        document.getElementById('header').classList.remove('bg-black');
    }

    if( window.scrollY > window.innerHeight) {
        document.getElementById('btnBackToTop').classList.remove('d-none');
    } else {
        document.getElementById('btnBackToTop').classList.add('d-none');
    }
});

function backToTop() {
    window.scrollTo({top: 0, behavior:'smooth'})
}

function onClickSettings() {
    document.getElementById('settingBlock').classList.remove('d-none')
}

function onChangeTheme(theme) {
    if(theme) {
        console.log('theme', theme)
        document.getElementsByTagName('body')[0].classList = [theme];
        document.getElementById('settingBlock').classList.add('d-none')
    }
}
