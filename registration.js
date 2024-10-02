let home = document.querySelector(".home");
home.addEventListener("click", function() {
    window.location.assign('index.html');
});

let submit = document.querySelector('.submit');
submit.addEventListener("click", function() {
    window.location.assign('index.html');
});

let section_item = document.querySelector('.mycard');
section_item.addEventListener('click', function() {
    alert('Who are you?');
});

let aboutus = document.querySelector(".aboutus");
aboutus.addEventListener("click", function() {
    window.location.assign('aboutus.html');
});

