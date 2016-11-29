var wrapper = document.querySelector('.wrapper');

var title = document.createElement('h1');
title.innerHTML = 'Тест по программированию';
wrapper.appendChild(title);

var form = document.createElement('form');
wrapper.appendChild(form);
form.action = 'test';

var lbl = ('label');

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
button.innerHTML = 'Проверить мои результаты';
wrapper.appendChild(button);
wrapper.button.classList.add("btn");
wrapper.button.classList.add("btn-info");

var createDOM = {
    counter:0,
    body:document.body,
    title:document.createElement("h4"),
    div:document.createElement("div"),
    form:document.createElement("form"),
    button:document.createElement("button"),
    createDocument: function() {
        this.body.insertBefore(this.div,this.body.children[0]);
        this.div.classList.add("container");
        this.div.appendChild(this.title);
        this.title.innerHTML = "Тест по программированию";
        this.div.appendChild(this.form);
        this.form.action = "test";
    },

    createQuiz:function(questions){
        console.log(questions);
        for (var i = 0; i < questions.length; i++ ){
            var createQuestionDiv = document.createElement("div");
            createQuestionDiv.classList.add("question");
            var createQuestionTitle = document.createElement("b");
            createQuestionTitle.innerHTML = questions[i].question;
            var createQuestionLabel;
            var createQuestionCheckbox;
            this.form.appendChild(createQuestionDiv);
            createQuestionDiv.appendChild(createQuestionTitle);
            this.counter++;
            for (var j = 0; j < questions[i].options.length; j++ ){
                createQuestionLabel = document.createElement('label');
                createQuestionLabel.innerHTML = ' ' + questions[i].options[j];
                createQuestionDiv.appendChild(createQuestionLabel);
                createQuestionCheckbox = document.createElement("input");
                createQuestionCheckbox.type = "checkbox";
                createQuestionCheckbox.setAttribute('id',('question#'+ this.counter + '-answer#' + (j+1)) );
                createQuestionLabel.insertBefore(createQuestionCheckbox,createQuestionLabel.firstChild);
            }
        }
    },
    createButton:function(name){
        this.form.appendChild(this.button);
        this.button.classList.add("btn");
        this.button.classList.add("btn-info");
        this.button.innerHTML = name;
    }
};


var questionsArray = [
    {
        question: 'Вопрос №1',
        nameOfElements: 'groupAnswers1',
        options: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        multiReturn: true
    },
    {
        question: 'Вопрос №2',
        nameOfElements: 'groupAnswers2',
        options: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        multiReturn: true
    },
    {
        question: 'Вопрос №3',
        nameOfElements: 'groupAnswers3',
        options: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        multiReturn: false
    }
];


createDOM.createDocument();
createDOM.createQuiz(questionsArray);
createDOM.createButton('Проверить мои результаты');