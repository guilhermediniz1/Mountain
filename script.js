let mountainFront = document.getElementById("mountainFront")

window.addEventListener('scroll', () => {
    var value = window.scrollY;

    mountainFront.style.bottom = value * 0.1 + 'px'
})
