console.log('script works')
let displayNav = true

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const menuIconsContainer = document.getElementById("menu_icons_container")
const hiddenElements = document.querySelectorAll('.hidden')
var links = document.querySelectorAll(".phone_nav_contents a");

hiddenElements.forEach((el) => observer.observe(el))

const openNav = document.getElementById('open_nav')
const closeNav = document.getElementById('close_nav')
// const openNav = document.querySelectorAll('.open_icon')
const phoneNav = document.getElementById('phone_nav')

const openIcon = "<img src='./assests/menu.svg' id='open_nav' class='open_icon' />"
const closeIcon = "<img src='./assests/close.svg' id='open_nav' class='open_icon' />"

links.forEach(function (link) {
    link.addEventListener("click", function () {
        openNav.style.display = 'flex'
        closeNav.style.display = 'none'
        phoneNav.style.transform = 'translateY(-120%)'
    });
});

closeNav.addEventListener('click', function () {
    console.log('close clicked')
    openNav.style.display = 'flex'
    closeNav.style.display = 'none'
    phoneNav.style.transform = 'translateY(-120%)'
})

openNav.addEventListener('click', function () {
    phoneNav.style.transform = 'translateY(0%)'
    closeNav.style.display = 'flex'
    openNav.style.display = 'none'
    // displayNav ? menuIconsContainer.innerHTML = closeIcon : menuIconsContainer.innerHTML = openIcon
    // displayNav = !displayNav
})