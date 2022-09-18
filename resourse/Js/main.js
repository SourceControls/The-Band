

// đóng mở ticket model
var buyTicketBtns = document.querySelectorAll(".js-buyticket-btn");
var buyModal = document.querySelector(".modal");
var buyModalContent = document.querySelector(".js-modal-content");
var closeModalBtn = document.querySelector(".modal-btn-close");

function showBuyModal(){
  buyModal.classList.add("show-modal");
  buyModalContent.classList.add("show-modal-content");
}

function closeBuyModal(){
  buyModal.classList.remove("show-modal");
  
}

for(var btn of buyTicketBtns){
  btn.addEventListener("click", showBuyModal);
}
closeModalBtn.addEventListener("click", closeBuyModal);
buyModal.addEventListener("click", closeBuyModal);
buyModalContent.addEventListener("click", function (event){event.stopPropagation()});

// menu mobile
var header = document.getElementById("header");
var headerHeight = window.getComputedStyle(document.getElementById("header")).height;
var menuButton = document.getElementById("menu-button");
var nav =  document.getElementById("nav");
menuButton.onclick = function(){
  var currentHeaderHeight = window.getComputedStyle(header).height;
  if(currentHeaderHeight != headerHeight){  //hide
    header.style.removeProperty("height") ;
    nav.style.removeProperty("width") ;
    
  }else{  //show
    header.style.height = "auto";
    nav.style.width = "100%";
  }
}

//close when click menu item
var menuItems = document.querySelectorAll("#nav li a");

menuItems.forEach(element => {
 { 
    element.onclick = function(event){
      if(this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')){//nếu không có subnav thì đóng nav lại
        event.preventDefault();
      }else{ 
         header.style.removeProperty("height") ;
         nav.style.removeProperty("width") ;
      } 

    }
  }

});

// đóng mở ticket model
