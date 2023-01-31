const features = document.getElementById('features')
const dropFeatures = document.getElementById('ul-features');
const arrowDownFeature = document.getElementById('arrow-down-feature')
const company = document.getElementById('company')
const dropCompany = document.querySelector('.drop-company')
const arrowDownCompany = document.getElementById('arrow-down-company')
const menuIcon = document.querySelector('.menu-icon')
const x = document.querySelector('.x')
const navList = document.querySelector('.nav-list')
const activeClass = "active"
const rollBackClass = "rollback"

features.addEventListener('click', function () {
    if (dropFeatures.style.display == 'none') {
        dropFeatures.style.display = ('flex')
        features.style.color = ('var(--almost-black)')
        arrowDownFeature.src = "images/icon-arrow-up.svg"
    } else {
        dropFeatures.style.display = ('none')
        arrowDownFeature.src = "images/icon-arrow-down.svg"
        features.style.color = ('var(--medium-gray)')
    }
}) 

function handleClick() {
    if (navList.classList.toggle == activeClass) {
        navList.classList.toggle(rollBackClass)
    } else {
        navList.classList.toggle(activeClass)
    }
}

company.onclick = function () {
    if (dropCompany.style.display == 'none') {
        dropCompany.style.display = ('flex')
        company.style.color = ('var(--almost-black)')
        arrowDownCompany.src = "images/icon-arrow-up.svg"
    } else {
        dropCompany.style.display = ('none')
        arrowDownCompany.src = "images/icon-arrow-down.svg"
        company.style.color = ('var(--medium-gray)')
    }
}

menuIcon.onclick = handleClick
x.onclick = handleClick