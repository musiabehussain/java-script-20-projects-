var menu_items = document.querySelectorAll(".menu");


Array.from(menu_items).forEach(function(menu){
  menu.addEventListener("click", function(){
    this.classList.toggle("active")
  });
});