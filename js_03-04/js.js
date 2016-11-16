var element = document.querySelectorAll('.menu-item a');
console.log("element[2].innerHTML ", element[2].innerHTML);
element[2].innerHTML = 'some text';
console.log( element[2].setAttribute('href')) ;