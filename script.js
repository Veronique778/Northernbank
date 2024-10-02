let registration = document.querySelector(".registration")
registration.addEventListener("click", function(){
    window.location.assign('registration.html')
}
)
let registration1 = document.querySelector(".registration1")
registration1.addEventListener("click", function(){
    window.location.assign('registration.html')
}
)
let section_item = document.querySelector('.mycard')
section_item.addEventListener('click', function() {
    alert('Who are you?')
})

let aboutus = document.querySelector(".aboutus")
aboutus.addEventListener("click", function(){
    window.location.assign('aboutus.html')
}
)

let aboutus2 = document.querySelector('.us');
aboutus2.addEventListener("click", function() {
    window.location.assign('aboutus.html');
});



function change_theme() {
    let body = document.querySelector('body'); 
    let currentTheme = body.getAttribute('data-theme'); 

    if (currentTheme === 'light') {
        body.style.backgroundImage = 'url("img/MacBook Pro 16_ - 2.png")';
        changeThemeButton.innerHTML = '<i class="bi bi-moon"></i>'; 
        body.setAttribute('data-theme', 'dark'); 
    } else {
        body.style.backgroundImage = 'url("img/MacBook Pro 16_ - 1 (1).png")';
        changeThemeButton.innerHTML = '<i class="bi bi-brightness-high"></i>'; 
        body.setAttribute('data-theme', 'light'); 
    }

    body.style.backgroundSize = 'cover';
}

let changeThemeButton = document.querySelector("#themeToggle");
changeThemeButton.addEventListener('click', change_theme);

document.querySelector('body').setAttribute('data-theme', 'light');
