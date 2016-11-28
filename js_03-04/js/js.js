var wrapper = document.querySelector('.wrapper');

var title = document.createElement('h1');
title.innerHTML = 'Тест по программированию';
wrapper.appendChild(title);

var form = document.createElement('form');
wrapper.appendChild(form);
form.action = 'test';

var question_1 = document.createElement('div');
question_1.classList.add('question');
question_1.innerHTML = '<h2>Вопрос №1 </h2>';
wrapper.appendChild(question_1);

var question_2 = document.createElement('div');
question_2.classList.add('question');
question_2.innerHTML = '<h2>Вопрос №2 </h2>';
wrapper.appendChild(question_2);

var question_3 = document.createElement('div');
question_3.classList.add('question');
question_3.innerHTML = '<h2>Вопрос №3 </h2>';
wrapper.appendChild(question_3);

var button =  document.createElement('button');
button.innerHTML = 'проверить';
wrapper.appendChild(button);