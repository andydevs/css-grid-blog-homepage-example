"use strict";

function onBodyLoad() {
  var element = document.getElementsByTagName('h1')[0];
  console.log(element);
  element.addEventListener('click', function (event) {
    element.classList.add('bigboi');
    element.innerHTML = 'OYEEEEE';
  });
}
//# sourceMappingURL=main.js.map
