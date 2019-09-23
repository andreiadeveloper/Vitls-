const html = document.getElementsByTagName('html')[0];
const navigation = html.querySelector('#header-navigation');
const navigationLink = navigation.querySelector('#navigation-link');
const navigationContainer = navigation.querySelector('#navigation-container');
const sticky = navigation.offsetTop;

function showMobileNav(elem) {
  if (elem.className === "navigation") {
    elem.className += " open";
  } else {
    elem.className = "navigation";
  }
}

function stickyNav(elm) {
  if (window.pageYOffset >= (sticky + 300) ) {
    elm.classList.add("sticky")
  } else {
    elm.classList.remove("sticky");
  }
}

window.onload = function () { 
  html.classList.add('js');

  navigationLink.addEventListener('click', function() {
    showMobileNav(navigationContainer);
  });
}

window.onscroll = function() {
  stickyNav(navigation);
}