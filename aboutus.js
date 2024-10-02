
let section_item2 = document.querySelector('.mycard')
section_item2.addEventListener('click', function() {
    alert('Who are you?')
})



document.addEventListener('DOMContentLoaded', function () {
    let changeThemeButton2 = document.querySelector("#themeToggle2");

    function change_theme2() {
        let body = document.querySelector('body'); 
        let currentTheme = body.getAttribute('data-theme'); 

        if (currentTheme === 'light') {
            body.style.backgroundImage = 'url("img/MacBook Pro 16_ - 2 (1).png")';
            changeThemeButton2.innerHTML = '<i class="bi bi-moon"></i>'; 
            body.setAttribute('data-theme', 'dark'); 
        } else {
            body.style.backgroundImage = 'url("img/MacBook Pro 16_ - 2 (2).png")';
            changeThemeButton2.innerHTML = '<i class="bi bi-brightness-high"></i>'; 
            body.setAttribute('data-theme', 'light'); 
        }

        body.style.backgroundSize = 'cover';
    }

    // Назначаем обработчик события для кнопки смены темы
    changeThemeButton2.addEventListener('click', change_theme2);

    // Устанавливаем начальную тему
    document.querySelector('body').setAttribute('data-theme', 'light');
});