const menuLink  = document.querySelectorAll(".menu__link");
for(const link of menuLink) {
  link.onclick = function(e) {
    const sub = link.parentElement.querySelector(".menu_sub");
    if(sub){
      e.preventDefault();
      sub.classList.toggle("menu_active");
    };
  };
}


// const subMenus = [...document.querySelectorAll(".menu_sub")];

// subMenus.forEach((subMenu) => {
//     const menuItem = subMenu.closest(".menu__item");
//     const subMenuLinks = menuItem.querySelectorAll(".menu__link");
    
//     subMenuLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       if (subMenu.contains(e.target)) {
//         return
//       }
      
//       e.preventDefault();
//       const activeMenu = document.querySelector(".menu_active");
//       if (activeMenu && activeMenu !== subMenu) {
//         activeMenu.classList.remove("menu_active");
//       }
//       subMenu.classList.toggle("menu_active");
//     });
//   });
// });

