// navbar dropdown
// menu dropdown
const dropdownIcon = document.getElementById("dropdown-icon");
const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownList = document.querySelectorAll('.dropdown-list');
const Zone = document.getElementById("zone");

dropdownIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
    dropdownList.forEach(list => {
        list.addEventListener('click', ()=> {
            dropdownMenu.classList.toggle('hidden');
        })
    })
    Zone.addEventListener('mouseleave',()=>{        
        setTimeout(() => {
            // code to be executed after a delay
            dropdownMenu.classList.toggle('hidden');
        }, 2000);

        });
    })

// services dropdown
const dropdown2Icon = document.getElementById("dropdown2-icon");
const dropdown2Menu = document.getElementById("dropdown2-menu");
const dropdown2List = document.querySelectorAll('.dropdown2-list');
const zone2 = document.getElementById("zone2");
dropdown2Icon.addEventListener('click', () => {
    dropdown2Menu.classList.toggle('hidden');
    dropdown2List.forEach(list => {
        list.addEventListener('click', ()=> {
            dropdown2Menu.classList.toggle('hidden');
        })
    })
    zone2.addEventListener('mouseleave',()=>{        
        setTimeout(() => {
            // code to be executed after a delay
            dropdown2Menu.classList.toggle('hidden');
        }, 2000);

        });
});

// mobile nav-bar
const navMenu = document.getElementById('nav-menu');
const navBar = document.getElementById('nav-bar');
navMenu.addEventListener('click', ()=> {
    navBar.classList.toggle('hidden');
    navMenu.classList.toggle("ri-close-large-line")
})

const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(link => {
    link.addEventListener('click', ()=> {
        navBar.classList.toggle('hidden');
        navMenu.classList.toggle("ri-close-large-line")
    })
})


window.addEventListener('scroll', ()=> {
    const header = document.getElementById('header')
    this.scrollY >= 58 ? header.classList.add('header-shadow') : header.classList.remove('header-shadow');
})