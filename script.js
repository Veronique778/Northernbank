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
    let body = document.querySelector('body')
    // Тут умовний оператор
    if (current_background == 'url(img/MacBook Pro 16_ - 1 (1).png)') {
      current_background = 'url(img/MacBook Pro 16_ - 2.png)'
  } else {
      current_background = 'url(img/MacBook Pro 16_ - 1 (1).png)'
  }
  header.style.background = current_background
  header.style.backgroundSize = 'cover'
}



let change_theme_button =  document.querySelector("#themeToggle")
let current_background = 'url(img/MacBook Pro 16_ - 2.png)'
change_theme_button.addEventListener('click', change_theme)


