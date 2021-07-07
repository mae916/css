window.onload = function() {
  document.querySelector(".show_menu").onclick =
  function(){
    const sideMenu = document.querySelector(".side_menu")
    sideMenu.classList.add("on")
  };

  /*메뉴 닫기*/
  document.querySelector(".close_menu").onclick = function() {
    const sideMenu = document.querySelector(".side_menu");
    sideMenu.classList.remove("on")

  };
};
