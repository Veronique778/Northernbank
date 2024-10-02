
let section_item5 = document.querySelector('.mycard')
section_item5.addEventListener('click', function() {
    alert('Who are you?')
})

document.addEventListener('DOMContentLoaded', function () {
    let changeThemeButton3 = document.querySelector("#themeToggle3");

    function change_theme3() {
        let body = document.querySelector('body'); 
        let currentTheme = body.getAttribute('data-theme'); 

        if (currentTheme === 'light') {
            body.style.backgroundImage = 'url("img/MacBook Pro 16_ - 2 (1).png")';
            changeThemeButton3.innerHTML = '<i class="bi bi-moon"></i>'; 
            body.setAttribute('data-theme', 'dark'); 
        } else {
            body.style.backgroundImage = 'url("img/MacBook Pro 16_ - 2 (2).png")';
            changeThemeButton3.innerHTML = '<i class="bi bi-brightness-high"></i> '; 
            body.setAttribute('data-theme', 'light'); 
        }

        body.style.backgroundSize = 'cover';
    }

    // Назначаем обработчик события для кнопки смены темы
    changeThemeButton3.addEventListener('click', change_theme3);

    // Устанавливаем начальную тему
    document.querySelector('body').setAttribute('data-theme', 'light');
});
