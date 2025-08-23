/*------------------------------------*\
****************************************
  
  JAVASCRIPT-FUNCTIONS

  * use this js file to add javascript 
  * functions when needed. do not use for any
  * other purpose.

  use 'js-' namespace for classes or ids that
  are in html purely for functionality only.

  developed by the dev team, libraries 
  and cultural resources, university of
  calgary 2020.

****************************************
\*------------------------------------*/





/*------------------------------------*\
  #ONCLICKS
\*------------------------------------*/

/**
 * when user clicks on a button open content and
 * display open styles.
 */

window.onload = function() {
  // gets 'js-toolbox__button' and 'js-toolbox__content'.
  var buttonToolbox = document.getElementsByClassName("js-toolbox__button")[0];
  var contentToolbox = document.getElementsByClassName("js-toolbox__content")[0];
  // when 'js-toolbox__button' is clicked open 'js-toolbox__content'.
  buttonToolbox.onclick = function() {
    contentToolbox.classList.toggle("js-toolbox__content--open");
    buttonToolbox.classList.toggle("js-toolbox__button--open");
  }
  // var buttonToolbox = document.getElementsByClassName("js-toolbox__button");
  // var contentToolbox = document.getElementsByClassName("js-toolbox__content");

  // Array.from(buttonToolbox).forEach(bt =>
  //   bt.onclick = function() {
  //     Array.from(contentToolbox).forEach(ct =>
  //       ct.classList.toggle("js-toolbox__content")
  //       );
  //     bt.classList.toggle("js-toolbox__button");
  //   });

  // gets 'js-alert__button' and 'js-alert__content'.
  // var buttonAlert = document.getElementsByClassName("js-alert__button")[0];
  // var contentAlert = document.getElementsByClassName("js-alert__content")[0];
  // when 'js-alert__button' is clicked open 'js-alert__content'.
  // buttonAlert.onclick = function() {
  //   contentAlert.classList.toggle("js-alert__content--open");
  //   buttonAlert.classList.toggle("js-alert__button--open");
  // }
  var buttonAlert = document.getElementsByClassName("js-alert__button");
  var contentAlert = document.getElementsByClassName("js-alert__content");
  Array.from(buttonAlert).forEach(ba =>
    ba.onclick = function() {
      Array.from(contentAlert).forEach(ca =>
        ca.classList.toggle("js-alert__content--open")
        );
      ba.classList.toggle("js-alert__button--open");
    });


/* NEED TO REWRITE TO WORK WITH QUERY SELECTOR INSTEAD
  // gets 'js-c-alert__button' and 'js-c-alert__content'.
  var buttonCAlert = document.getElementsByClassName("js-c-alert__button")[0];
  var contentCAlert = document.getElementsByClassName("js-c-alert__content")[0];
  // when 'js-c-alert__button' is clicked open 'js-c-alert__content'.
  buttonCAlert.onclick = function() {
    contentCAlert.classList.toggle("js-c-alert__content--open");
    buttonCAlert.classList.toggle("js-c-alert__button--open");
  }
*/

  // gets 'js-main-menu__button' and 'js-main-menu__content'.
  var buttonMainMenu = document.getElementsByClassName("js-main-menu__button")[0];
  var contentMainMenu = document.getElementsByClassName("js-main-menu__content")[0];
  // when 'js-main-menu__button' is clicked open 'js-main-menu__content'.
  buttonMainMenu.onclick = function() {
    contentMainMenu.classList.toggle("js-main-menu__content--open");
    buttonMainMenu.classList.toggle("js-main-menu__button--open");
  }
  // var buttonMainMenu = document.getElementsByClassName("js-main-menu__button");
  // var contentMainMenu = document.getElementsByClassName("js-main-menu__content");
  // Array.from(buttonMainMenu).forEach(bmm => 
  //   bmm.onclick = function() {
  //     Array.from(contentMainMenu).forEach(cmm =>
  //       cmm.classList.toggle("js-main-menu__content")
  //     );
  //     bmm.classList.toggle("js-main-menu__button");
  //   });



  // gets 'js-dropdown__button' and 'js-dropdown__content'.
  //var buttonDropDown = document.getElementsByClassName("js-dropdown__button")[0];
  var buttonDropDown = document.getElementsByClassName("js-dropdown__button");
  //var contentDropDown = document.getElementsByClassName("js-dropdown__content")[0];
  var contentDropDown = document.getElementsByClassName("js-dropdown__content");
  // when 'js-dropdown__button' is clicked open 'js-dropdown__content'.
  Array.from(buttonDropDown).forEach(btn =>
    btn.onclick = function() {
    Array.from(contentDropDown).forEach(cd =>
      cd.classList.toggle("js-dropdown__content--open")
    );
    btn.classList.toggle("js-dropdown__button--open");
  });

  // gets 'js-share__button' and 'js-share__content'.
  // var buttonShare = document.getElementsByClassName("js-share__button")[0];
  // var contentShare = document.getElementsByClassName("js-share__content")[0];
  var buttonShare = document.getElementsByClassName("js-share__button");
  var contentShare = document.getElementsByClassName("js-share__content");
  // when 'js-share__button' is clicked open 'js-share__content'.

  Array.from(buttonShare).forEach(bs =>
    bs.onclick = function() {
      Array.from(contentShare).forEach(cs =>
        cs.classList.toggle("js-share__content--open")
      );
      bs.classList.toggle("js-share__button--open");
  });

  // buttonShare.onclick = function() {
  //   contentShare.classList.toggle("js-share__content--open");
  //   buttonShare.classList.toggle("js-share__button--open");
  // }
};





/*------------------------------------*\
  #EVENT-LISTENERS-ONCLICKS
\*------------------------------------*/

/**
 * when user clicks anywhere outside of button content, close content.
 */

window.addEventListener("click", function(event) {
  // js-alert__content. removes 'js-alert__content-open' class.
  if (!event.target.matches(".js-alert__button")) {
    var alerts = document.getElementsByClassName("js-alert__content");
    var i;
    for (i = 0; i < alerts.length; i++) {
      var openAlert = alerts[i];
      if (openAlert.classList.contains("js-alert__content--open")) {
        openAlert.classList.remove("js-alert__content--open");
      }
    }
    // js-alert__button. removes 'js-alert__button--open' class.
    var alertBtn = document.getElementsByClassName("js-alert__button");
    var i;
    for (i = 0; i < alertBtn.length; i++) {
      var openAlertBtn = alertBtn[i];
      if (openAlertBtn.classList.contains("js-alert__button--open")) {
        openAlertBtn.classList.remove("js-alert__button--open");
      }
    }
  }
  
  /*
  // js-main-menu__content. removes 'js-main-menu__content--open' class.
  if (!event.target.matches(".js-main-menu__button")) {
    var mainMenu = document.getElementsByClassName("js-main-menu__content");
    var i;
    for (i = 0; i < mainMenu.length; i++) {
      var openMainMenu = mainMenu[i];
      if (openMainMenu.classList.contains("js-main-menu__content--open")) {
        openMainMenu.classList.remove('js-main-menu__content--open');
      }
    }
    // js-main-menu__button. removes 'js-main-menu__button--open' class.
    var mainMenuBtn = document.getElementsByClassName("js-main-menu__button");
    var i;
    for (i = 0; i < mainMenuBtn.length; i++) {
      var openMainMenuBtn = mainMenuBtn[i];
      if (openMainMenuBtn.classList.contains("js-main-menu__button--open")) {
        openMainMenuBtn.classList.remove("js-main-menu__button--open");
      }
    }
  }
  */

  // js-share__content. removes 'js-share__content--open' class.
  if (!event.target.matches(".js-share__button")) {
    var share = document.getElementsByClassName("js-share__content");
    var i;
    for (i = 0; i < share.length; i++) {
      var openShare = share[i];
      if (openShare.classList.contains("js-share__content--open")) {
        openShare.classList.remove("js-share__content--open");
      }
    }
    // js-share__button. removes 'js-share__button--open' class.
    var shareBtn = document.getElementsByClassName("js-share__button");
    var i;
    for (i = 0; i < shareBtn.length; i++) {
      var openShareBtn = shareBtn[i];
      if (openShareBtn.classList.contains("js-share__button--open")) {
        openShareBtn.classList.remove("js-share__button--open");
      }
    }
  }
});





/*------------------------------------*\
  #STICKY-ROW-NAV-JS
\*------------------------------------*/

/**
 * when the user scrolls the page, execute myFunction
 * currently commented out due to conflicts and testing
 * required.
 */

window.onscroll = function() {myFunction()};

// gets the nav row in the header.
var headerRowNav = document.getElementsByClassName("c-header__row-nav")[0];

// gets the offset position of the nav row.
var sticky = headerRowNav.offsetTop;

// adds and removes js-sticky class to the nav row at scroll position.
function myFunction() {
  if (window.pageYOffset > sticky) {
    headerRowNav.classList.add("js-sticky");
  } else {
    headerRowNav.classList.remove("js-sticky");
  }
}





/*------------------------------------*\
  #MULTI-LEVEL-NAV-DROPDOWNS-JS
\*------------------------------------*/

/**
 * when the user clicks a menu item with a sublist,
 * open and close sublist.
 */

/* THIS WORKS FOR ONCLICK DROPDOWNS BUT ONLY ON ONE ITEM, NEED TO EXPAND TO
 * ALLOW ANY CLASS TO BE CLICKED ON TARGETED IN EACH INSTANCE.

var headerMainNavItem = document.getElementsByClassName("js-nav-dropdown")[0];
var headerMainNavItemSub = document.getElementsByClassName("c-header__main-nav-list-two")[0];

headerMainNavItem.addEventListener("click", function(e) {
  if (headerMainNavItemSub.classList.contains("js-nav-dropdown--open")){
    headerMainNavItemSub.classList.add("js-nav-dropdown--close");
    headerMainNavItemSub.classList.remove("js-nav-dropdown--open");
  } else {
    headerMainNavItemSub.classList.add("js-nav-dropdown--open");
    headerMainNavItemSub.classList.remove("js-nav-dropdown--close");
  }
}, false);

*/

const menu = document.querySelector(".has-menu");
const items = document.querySelectorAll(".has-submenu");

/* activate submenu */
function toggleItem() {
  if (this.classList.contains("has-submenu--active")) {
    this.classList.remove("has-submenu--active");
  } else if (menu.querySelector(".has-submenu--active")) {
    menu.querySelector(".has-submenu--active").classList.remove("has-submenu--active");
    this.classList.add("has-submenu--active");
  } else {
    this.classList.remove("is-not-animated");
    this.classList.add("has-submenu--active");
  }
}

/* close submenu from anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".has-submenu--active")) {
    menu.querySelector(".has-submenu--active").classList.remove("has-submenu--active");
  }
}

/* event listeners */
for (let item of items) {
  if (item.querySelector("ul[aria-label]")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}

document.addEventListener("click", closeSubmenu, false);





/*------------------------------------*\
  #ACCORDIONS-JS
\*------------------------------------*/

/**
 * when user clicks on an accordion title, open and close panel content.
 */

const accordionButtons = document.querySelectorAll('.c-accordion__button');
const accordionSections = document.querySelectorAll('.c-accordion__panel');

accordionSections.forEach(section =>  {
  section.setAttribute('aria-hidden', true)
  section.classList.remove('js-accordion__panel--open')
})

accordionButtons.forEach(button => {
  button.setAttribute('aria-expanded', false);
  
  const expanded = button.getAttribute('aria-expanded');
  const number = button.getAttribute('id').split('-').pop();
  const associatedSection = document.getElementById(`c-accordion__panel-${number}`)
 
  button.addEventListener('click', () => {
    
    button.classList.toggle('js-accordion__button--open');
    associatedSection.classList.toggle('js-accordion__panel--open');
    if (button.classList.contains('js-accordion__button--open')) {
      button.setAttribute('aria-expanded', true);
      associatedSection.setAttribute('aria-hidden', false);
    } else {
      button.setAttribute('aria-expanded', false);
      associatedSection.setAttribute('aria-hidden', true);
    }
  })
})

/*------------------------------------*\
  #MODAL-JS
\*------------------------------------*/

var modalBtns = [...document.querySelectorAll(".c-modal__btn")];
modalBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  }
});

var closeBtns = [...document.querySelectorAll(".c-modal__close")];
closeBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest('.c-modal');
    modal.style.display = "none";
  }
});

window.onclick = function(event) {
  if (event.target.className === "c-modal") {
    event.target.style.display = "none";
  }
}

/*------------------------------------*\
  #IMAGE-MODAL-JS
\*------------------------------------*/

var imgModalBtns = [...document.querySelectorAll(".c-modal__image--btn")];
imgModalBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";

    var imgUrl = btn.getAttribute('src');
    var imgAlt = btn.getAttribute('alt');
    
    document.querySelector('.c-modal__image').setAttribute('src', imgUrl);
    document.querySelector('.c-modal__image').setAttribute('alt', imgAlt);
    
  }
});

var imgCloseBtns = [...document.querySelectorAll(".c-modal__image--close")];
imgCloseBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest('.c-modal__image--container');
    modal.style.display = "none";
  }
});

window.onclick = function(event) {
  if (event.target.className === "c-modal__image--container") {
    event.target.style.display = "none";
  }
}

/*------------------------------------*\
  #IMAGE-GALLERY-JS
\*------------------------------------*/

var imgGalleryBtns = [...document.querySelectorAll(".c-img-gallery__img")];
imgGalleryBtns.forEach(function(btn){
  btn.onclick = function() {
    var popup = btn.getAttribute('data-popup');
    document.getElementById(popup).style.display = "block";

    var imgPopup = btn.getAttribute('src');
    var imgCaptionPopup = btn.getAttribute('data-caption');
    var imgCaptionAlt = btn.getAttribute('alt');
    document.querySelector('.c-img-gallery__image--popup').setAttribute('src', imgPopup);
    document.querySelector('.c-img-gallery__image--popup').setAttribute('alt', imgCaptionAlt);

    if(imgCaptionPopup){
      document.querySelector('.c-img-gallery__image--caption').innerHTML = "<div class='c-img-gallery__image--caption-content'><p>" + imgCaptionPopup + "</p></div>";
    }else{
      document.querySelector('.c-img-gallery__image--caption').innerHTML = "";
    };
    
    
  }
});

var imgCloseBtns = [...document.querySelectorAll(".c-img-gallery__image--close")];
imgCloseBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest('.c-img-gallery__image--container');
    modal.style.display = "none";
  }
});

window.onclick = function(event) {
  if (event.target.className === "c-img-gallery__image--container") {
    event.target.style.display = "none";
  }
}

/*------------------------------------*\
  #MAGNIFIER-GLASS-JS
\*------------------------------------*/

function magnify(zoom) {
  var images;
  images = document.querySelectorAll(('.c-img__zoom'));

  images.forEach(img =>
  {
    var glass, w, h, bw;

    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);

    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);

    function moveMagnifier(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /* Set the position of the magnifier glass: */
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /* Display what the magnifier glass "sees": */
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }

    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  });

}

magnify(3);

