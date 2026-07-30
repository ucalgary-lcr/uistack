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
  #TOOLBOX-JS
\*------------------------------------*/

/**
 * when user clicks on toolbox button, open/close content
 * with smooth transition and proper accessibility handling.
 */

function initToolbox() {
  var buttonToolbox = document.getElementsByClassName("js-toolbox__button")[0];
  var contentToolbox = document.getElementsByClassName("js-toolbox__content")[0];
  
  if (buttonToolbox && contentToolbox) {
    var toolboxLists = contentToolbox.querySelectorAll('.c-header__toolbox-links-list, .c-header__toolbox-topsites-list');
    
    // Find the submenu toggle item and its elements
    var submenuToggleItem = contentToolbox.querySelector('.has-submenu');
    var dropdownLink = submenuToggleItem ? submenuToggleItem.querySelector('.c-header__toolbox-topsites-link') : null;
    var submenuLinks = submenuToggleItem ? submenuToggleItem.querySelectorAll('.c-header__toolbox-topsites-list-two a') : [];
    
    // Set ARIA attributes
    buttonToolbox.setAttribute('aria-expanded', 'false');
    buttonToolbox.setAttribute('aria-controls', 'toolbox-content');
    buttonToolbox.setAttribute('aria-haspopup', 'true');
    contentToolbox.setAttribute('id', 'toolbox-content');
    contentToolbox.setAttribute('aria-hidden', 'true');
    contentToolbox.setAttribute('role', 'region');
    contentToolbox.setAttribute('aria-label', 'Toolbox menu');
    
    // Function to check if parent toolbox is open
    function isParentOpen() {
      return contentToolbox.classList.contains('js-toolbox__content--open');
    }
    
    // Function to toggle submenu
    function toggleSubmenu() {
      if (!isParentOpen()) return;
      
      var isActive = submenuToggleItem.classList.toggle('has-submenu--active');
      if (dropdownLink) {
        dropdownLink.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      }
      
      // Set tabindex for submenu links based on submenu state
      submenuLinks.forEach(function(link) {
        link.setAttribute('tabindex', isActive ? '0' : '-1');
      });
      
      // Focus the first submenu link when opened
      if (isActive) {
        setTimeout(function() {
          var firstSubmenuLink = submenuToggleItem.querySelector('.c-header__toolbox-topsites-list-two a:not(.c-header__toolbox-topsites-item-two--back a)');
          if (firstSubmenuLink) {
            firstSubmenuLink.focus();
          }
        }, 100);
      }
    }
    
    // Function to close submenu
    function closeSubmenu() {
      submenuToggleItem.classList.remove('has-submenu--active');
      if (dropdownLink) {
        dropdownLink.setAttribute('aria-expanded', 'false');
      }
      submenuLinks.forEach(function(link) {
        link.setAttribute('tabindex', '-1');
      });
      // Return focus to the dropdown button
      if (dropdownLink) {
        dropdownLink.focus();
      }
    }
    
    // Function to setup submenu close handlers
    function setupSubmenuCloseHandlers() {
      // Close submenu when clicking outside
      document.addEventListener('click', function(event) {
        if (!submenuToggleItem) return;
        
        var isClickInsideSubmenu = submenuToggleItem.contains(event.target);
        var isClickOnDropdownLink = event.target === dropdownLink;
        var isClickOnToolboxButton = event.target === buttonToolbox || buttonToolbox.contains(event.target);
        var isClickInsideToolboxContent = contentToolbox.contains(event.target);
        
        if (!isClickInsideSubmenu && !isClickOnDropdownLink && !isClickOnToolboxButton && !isClickInsideToolboxContent) {
          closeSubmenu();
        }
      });
      
      // Back button handler
      var backButton = submenuToggleItem ? submenuToggleItem.querySelector('.c-header__toolbox-topsites-item-two--back') : null;
      if (backButton) {
        backButton.addEventListener('click', function(event) {
          event.preventDefault();
          closeSubmenu();
        });
      }
      
      // Escape key handler
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && submenuToggleItem && submenuToggleItem.classList.contains('has-submenu--active')) {
          closeSubmenu();
        }
      });
    }
    
    // Set initial tabindex for submenu links
    submenuLinks.forEach(function(link) {
      link.setAttribute('tabindex', '-1');
    });
    
    // Set initial tabindex for dropdown link
    if (dropdownLink) {
      dropdownLink.setAttribute('tabindex', '0');
      dropdownLink.setAttribute('aria-expanded', 'false');
    }
    
    // Keyboard support for the main toolbox button
    buttonToolbox.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
    
    // Main toolbox button click handler
    buttonToolbox.onclick = function(e) {
      e.stopPropagation();
      var isOpen = contentToolbox.classList.contains("js-toolbox__content--open");
      
      if (isOpen) {
        closeToolbox();
      } else {
        openToolbox();
      }
    };
    
    // Function to close toolbox with animation
    function closeToolbox() {
      var isOpen = contentToolbox.classList.contains("js-toolbox__content--open");
      
      if (isOpen) {
        // First close all submenus
        closeSubmenu();
        
        // Then close the toolbox
        contentToolbox.classList.remove("js-toolbox__content--open");
        buttonToolbox.classList.remove("js-toolbox__button--open");
        buttonToolbox.setAttribute('aria-expanded', 'false');
        contentToolbox.setAttribute('aria-hidden', 'true');
        
        // Return focus to the button
        buttonToolbox.focus();
        
        // Wait for animation to complete, THEN apply display none
        setTimeout(function() {
          toolboxLists.forEach(function(list) {
            list.style.display = 'none';
          });
        }, 500);
      }
    }
    
    // Function to open toolbox
    function openToolbox() {
      toolboxLists.forEach(function(list) {
        list.style.display = 'flex';
      });
      
      requestAnimationFrame(function() {
        contentToolbox.classList.add("js-toolbox__content--open");
        buttonToolbox.classList.add("js-toolbox__button--open");
        buttonToolbox.setAttribute('aria-expanded', 'true');
        contentToolbox.setAttribute('aria-hidden', 'false');
        
        // Focus the first link after opening
        setTimeout(function() {
          var firstLink = contentToolbox.querySelector('.c-header__toolbox-links-link, .c-header__toolbox-topsites-link');
          if (firstLink) {
            firstLink.focus();
          }
        }, 100);
      });
    }
    
    // Setup submenu functionality if it exists
    if (submenuToggleItem && dropdownLink) {
      
      // Click handler for dropdown link
      dropdownLink.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        toggleSubmenu();
      });
      
      // Keyboard support for dropdown link (Enter and Space)
      dropdownLink.addEventListener('keydown', function(event) {
        if ((event.key === 'Enter' || event.key === ' ') && isParentOpen()) {
          event.preventDefault();
          event.stopPropagation();
          toggleSubmenu();
        }
      });
      
      // Setup submenu close handlers
      setupSubmenuCloseHandlers();
      
      // Handle focus trapping within submenu
      submenuToggleItem.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
          var isActive = submenuToggleItem.classList.contains('has-submenu--active');
          if (isActive) {
            var links = submenuToggleItem.querySelectorAll('.c-header__toolbox-topsites-list-two a');
            var firstLink = links[0];
            var lastLink = links[links.length - 1];
            
            if (event.shiftKey && document.activeElement === firstLink) {
              // Shift+Tab on first link should go back to dropdown button
              event.preventDefault();
              dropdownLink.focus();
            } else if (!event.shiftKey && document.activeElement === lastLink) {
              // Tab on last link should cycle to first link
              event.preventDefault();
              firstLink.focus();
            }
          }
        }
      });
    }
    
    // ESCAPE KEY: Close toolbox when Escape key is pressed
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        // Check if toolbox is open
        if (contentToolbox.classList.contains("js-toolbox__content--open")) {
          closeToolbox();
          e.preventDefault(); // Prevent any default Escape behavior
        }
      }
    });
  }
}


/*------------------------------------*\
  #ONCLICKS
\*------------------------------------*/

/**
 * when user clicks on a button open content and
 * display open styles.
 */

window.onload = function() {
  // Initialize toolbox with improved handling
  initToolbox();

  // gets 'js-alert__button' and 'js-alert__content'.
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

  // js-toolbox__content. removes 'js-toolbox__content--open' class.
  // Check if click is NOT on the toolbox button AND NOT inside the toolbox content
  var toolboxBtn = document.getElementsByClassName("js-toolbox__button")[0];
  var toolboxContent = document.getElementsByClassName("js-toolbox__content")[0];
  
  // Check if the click target is inside the toolbox content
  var isClickInsideToolbox = toolboxContent && toolboxContent.contains(event.target);
  var isClickOnToolboxButton = toolboxBtn && toolboxBtn.contains(event.target);
  
  // Only close if click is outside both the button AND the content
  if (!isClickOnToolboxButton && !isClickInsideToolbox) {
    if (toolboxContent && toolboxContent.classList.contains("js-toolbox__content--open")) {
      // Close all submenus first
      var submenus = toolboxContent.querySelectorAll('.has-submenu--active');
      submenus.forEach(function(submenu) {
        submenu.classList.remove('has-submenu--active');
      });
      
      // Remove the open class to trigger the animation
      toolboxContent.classList.remove("js-toolbox__content--open");
      
      // Update ARIA attributes
      if (toolboxBtn) {
        toolboxBtn.setAttribute('aria-expanded', 'false');
        toolboxBtn.classList.remove("js-toolbox__button--open");
      }
      toolboxContent.setAttribute('aria-hidden', 'true');
      
      // Apply display none AFTER animation completes
      var lists = toolboxContent.querySelectorAll('.c-header__toolbox-links-list, .c-header__toolbox-topsites-list');
      setTimeout(function() {
        lists.forEach(function(list) {
          list.style.display = 'none';
        });
      }, 500);
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
 * currently commented out as ucalgary no longer uses
 * a sticky nav row on any screen size 20251210.
 */

/*
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
*/

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