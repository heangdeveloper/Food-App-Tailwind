const iconBerger = document.querySelector('#iconBerger');
const menu = document.querySelector('#menu');

iconBerger.addEventListener('click', function() {
    // console.log('Your click Icon Humberger');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

// Dropdown

const openDropdown = document.querySelector('#openDropdown');
const menuDropdown = document.querySelector('#menuDropdown');

openDropdown.addEventListener('click', function() {
    if (menuDropdown.classList.contains('hidden')) {
        menuDropdown.classList.remove('hidden')
    } else {
        menuDropdown.classList.add('hidden')
    }
})