var newDom;
newDom = {
    body: document.body,
    div: document.createElement('div'),
    title: document.createElement('h1'),
    form: document.createElement('form'),
    button: document.createElement('button'),
    createDom: function () {
        this.body.insertBefore(this.div, this.body.children[0]);
        this.div.classList.add('container');
        this.div.appendChild(this.title);
        this.title.innerHTML = 'Тест по программированию';
        this.div.appendChild(this.form);
    },
    createQuiz: function () {
        for (var i = 1; i <= 3; i++ ){
            var createQuestionDiv = document.createElement("div");
            createQuestionDiv.classList.add("question");
            var createQuestionTitle = document.createElement("b");
            createQuestionTitle.innerHTML = i +'. Вопрос №'+ i ;
            var createQuestionLabel;
            var createQuestionCheckbox;
            this.form.appendChild(createQuestionDiv);
            createQuestionDiv.appendChild(createQuestionTitle);
            this.counter++;
            for (var j = 1; j <= 3; j++ ){
                createQuestionLabel = document.createElement('label');
                createQuestionLabel.innerHTML = 'Вариант ответа';
                createQuestionDiv.appendChild(createQuestionLabel);
                createQuestionCheckbox = document.createElement("input");
                createQuestionCheckbox.type = "checkbox";
                createQuestionCheckbox.setAttribute('id',('question#'+ this.counter + '-answer#' + (j+1)) );
                createQuestionLabel.insertBefore(createQuestionCheckbox,createQuestionLabel.firstChild);
            }
        }

    }
};
newDom.createDom();
newDom.createQuiz();