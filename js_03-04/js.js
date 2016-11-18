var element = document.createElement('div');
element.classList.add('box');
element.innerHTML = 'created element';

var wrapper = document.querySelector('.wrapper');

// wrapper.appendChild(element);
// wrapper.insertBefore(element, wrapper.children[1]);

var list = wrapper.querySelector('ul');
wrapper.replaceChild(element, list);