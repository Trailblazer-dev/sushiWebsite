// navbar dropdown
// menu dropdown
const dropdownIcon = document.getElementById("dropdown-icon");
const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownList = document.querySelectorAll('.dropdown-list');

dropdownIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
    dropdownList.forEach(list => {
        list.addEventListener('click', ()=> {
            dropdownMenu.classList.toggle('hidden');
        })
    })
});
// services dropdown
const dropdown2Icon = document.getElementById("dropdown2-icon");
const dropdown2Menu = document.getElementById("dropdown2-menu");
const dropdown2List = document.querySelectorAll('.dropdown2-list');

dropdown2Icon.addEventListener('click', () => {
    dropdown2Menu.classList.toggle('hidden');
    dropdown2List.forEach(list => {
        list.addEventListener('click', ()=> {
            dropdown2Menu.classList.toggle('hidden');
        })
    })
});