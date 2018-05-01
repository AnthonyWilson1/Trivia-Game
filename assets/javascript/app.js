var timeRemaining = 30;

var intervalId;

var correct = 0

var incorrect = 0

var unanswered = 0

var set1 = []

var set2 = []

var set3 = []

var triviaGame = {

questionOne: "Question One: Which Suits character never went to law school?",

questionTwo: "Question Two: Which law school is attended by Pearson-Hartman associates?",

questionThree: "Question Three: What is the name of the paralegal Mike falls in love with?",

answerOne: ["Mike", "Harvey", "Scotty", "Louis "],

answerTwo: ["Harvard", "Yale", "Duke", "Columbia"],

answerThree: ["Rachel", "Donna", "Jessica", "Pam"],

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
    $(input).attr("id", answer);
    $(input).attr("name", "answerKey");
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
    $("<form>").attr("id","form1");
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
    $(button).attr("type", "button");
    $(button).attr("id", "submit");
    $(button).addClass("btn")
    $(button).addClass("btn-primary")
    $(button).addClass("btn-sm")
    $(".rSeven").append(button);
},

begin: function () {
    $(".beg").remove();
},
end: function () {
    $(".end").empty();
    var h = $("<h3>")
    var h2 = $("<h3>")
    var h3 = $("<h3>")
    var h4 = $("<h3>")
    h.text("All Done !");
    h2.text("Correct: " + correct);
    h3.text("Inorrect: " + incorrect);
    h4.text("Unanswered: " + unanswered);
    $(".rSix").append(h);
    $(".rThree").append(h2);
    $(".rFour").append(h3);
    $(".rFive").append(h4);

}

};

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(intervalId);
}

function decrement() {
    timeRemaining--;
    $(".rSix").html("<h3>" + "Timer:" + timeRemaining + "</h3>");
    if (timeRemaining === 0) {
        stop();
        alert("Time Up!");
        checked();
        scoreOne();
        scoreTwo();
        scoreThree();
        triviaGame.end();
      }
    else {
        return;
    }
}

function checked() {
    var check = document.getElementsByName("answerKey");
        for ( i = 0; i < 4; i++) {
            var ans = check[i].value;
            if (check[i].checked) {
                set1.push(ans);
            }
        }
        for ( i = 4; i < 8; i++) {
            var ans = check[i].value;
            if (check[i].checked) {
                set2.push(ans);
            }
        }
        for ( i = 8; i < 12; i++) {
            var ans = check[i].value;
            if (check[i].checked) {
                set3.push(ans);
            }
        }
    }

function scoreOne() {
    if (set1.includes("Mike")) {
        correct++;
    }
    else if (!set1.length) {
        unanswered++;
    }
    else {
        incorrect++;
    }
}
function scoreTwo() {
    if (set2.includes("Harvard")) {
        correct++;
    }
    else if (!set2.length) {
        unanswered++;
    }
    else {
        incorrect++;
    }
}
function scoreThree() {
    if (set3.includes("Rachel")) {
        correct++;
    }
    else if (!set3.length) {
        unanswered++;
    }
    else {
        incorrect++;
    }
}

$(".btn").click(function() {
    triviaGame.begin();
    triviaGame.insertTimer();
    triviaGame.insertQuestionOne();
    triviaGame.insertQuestionTwo();
    triviaGame.insertQuestionThree();
    triviaGame.insertButton();  
})

$(".btn").on("click", run);

$(document).on('click','#submit', function(){
    checked();
    scoreOne();
    scoreTwo();
    scoreThree();
    stop();
    triviaGame.end();
    console.log(correct);
    console.log(incorrect);
    console.log(unanswered);
    console.log(set1);
    console.log(set2);
    console.log(set3);
 }) 


