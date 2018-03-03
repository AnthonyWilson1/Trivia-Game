var timeRemaining = 60

var intervalId;

var correct = 0

var incorrect = 0

var unanswered = 0

var triviaGame = {

questionOne: "Question One: Which Suits character never went to law school?",

questionTwo: "Question Two: Which law school is attended by Pearson-Hartman associates?",

questionThree: "Question Three: What is the name of the paralegal Mike falls in love with?",

answerOne: ["Mike", "Harvey", "Scotty", "Louis "],

answerTwo: [
    "Harvard",
    "Yale",
    "Duke",
    "Columbia",
],

answerThree: [
    "Rachel",
    "Donna",
    "Jessica",
    "Pam",
],

insertTimer: function () {
    $(".rSix").append("<h3>Timer:</h3>");
    var timer = $("<h3>");
    timer.append(timeRemaining);
    $(".rSix").append(timer);
},

formatQuestion: function (question) {
    var h = $("<h3>");
    h.text(question);
    return h;
},

formatInput: function (answer) {
    var input = $("<input>");
    $(input).attr("type", "radio");
    $(input).attr("id", "answerOChoice");
    $(input).attr("name", "answerKeyOne");
    $(input).attr("value", answer);
    return input;
},

formatLabel: function (answer) {
    var label = $("<label>");
    label.text(answer);
    return label;
},

insertQuestionOne: function () {
    var form = $("<form>");
    var div = $("<div>");
    var qOne = this.formatQuestion(this.questionOne);
    var iOne = this.formatInput(this.answerOne[0]);
    var iTwo = this.formatInput(this.answerOne[1]);
    var iThree = this.formatInput(this.answerOne[2]);
    var iFour = this.formatInput(this.answerOne[3]);
    var lOne = this.formatLabel(this.answerOne[0]);
    var lTwo = this.formatLabel(this.answerOne[1]);
    var lThree = this.formatLabel(this.answerOne[2]);
    var lFour = this.formatLabel(this.answerOne[3]);
    div.append(lOne);
    div.append(iOne);
    div.append(lTwo);
    div.append(iTwo);
    div.append(lThree);
    div.append(iThree);
    div.append(lFour);
    div.append(iFour);
    form.append(qOne);
    form.append(div);
    $(".rThree").append(form);
},

insertQuestionTwo: function () {
    var form = $("<form>");
    var div = $("<div>");
    var qOne = this.formatQuestion(this.questionTwo);
    var iOne = this.formatInput(this.answerTwo[0]);
    var iTwo = this.formatInput(this.answerTwo[1]);
    var iThree = this.formatInput(this.answerTwo[2]);
    var iFour = this.formatInput(this.answerTwo[3]);
    var lOne = this.formatLabel(this.answerTwo[0]);
    var lTwo = this.formatLabel(this.answerTwo[1]);
    var lThree = this.formatLabel(this.answerTwo[2]);
    var lFour = this.formatLabel(this.answerTwo[3]);
    div.append(lOne);
    div.append(iOne);
    div.append(lTwo);
    div.append(iTwo);
    div.append(lThree);
    div.append(iThree);
    div.append(lFour);
    div.append(iFour);
    form.append(qOne);
    form.append(div);
    $(".rFour").append(form);
},

insertQuestionThree: function () {
    var form = $("<form>");
    var div = $("<div>");
    var qOne = this.formatQuestion(this.questionThree);
    var iOne = this.formatInput(this.answerThree[0]);
    var iTwo = this.formatInput(this.answerThree[1]);
    var iThree = this.formatInput(this.answerThree[2]);
    var iFour = this.formatInput(this.answerThree[3]);
    var lOne = this.formatLabel(this.answerThree[0]);
    var lTwo = this.formatLabel(this.answerThree[1]);
    var lThree = this.formatLabel(this.answerThree[2]);
    var lFour = this.formatLabel(this.answerThree[3]);
    div.append(lOne);
    div.append(iOne);
    div.append(lTwo);
    div.append(iTwo);
    div.append(lThree);
    div.append(iThree);
    div.append(lFour);
    div.append(iFour);
    form.append(qOne);
    form.append(div);
    $(".rFive").append(form);
},

insertButton: function () {
    var button = $("<button>");
    button.text("Submit")
    $(button).attr("type", "submit");
    $(button).addClass("btn")
    $(button).addClass("btn-primary")
    $(button).addClass("buttonTwo")
    $(".rSeven").append(button);
},

begin: function () {
    $(".beg").remove();
},

};

//////////////////////////////////////////////////////////////////
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function stop() {
    clearInterval(intervalId);
};

function decrement() {
    timeRemaining--;
    $(".rSix").html("<h3>" + "Timer:" + timeRemaining + "</h3>");
    if (timeRemaining === 0) {
        stop();
        alert("Time Up!");
      }
};

/////////////////////////////////////////////////////////////////
$(".btn").click(function() {
    triviaGame.begin();
    triviaGame.insertTimer();
    triviaGame.insertQuestionOne();
    triviaGame.insertQuestionTwo();
    triviaGame.insertQuestionThree();
    triviaGame.insertButton();
});

$(".btn").on("click", run);


