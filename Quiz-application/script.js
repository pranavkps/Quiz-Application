
// var quest = document.querySelector('.ques');
const question = [
    {
        q: "1. Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
        a: "getClass()",
        b: "intern()",
        c: "getName()",
        d: "toString()",
        correct: "c",
    },
    {
        q: "2. If three threads trying to share a single object at the same time, which condition will arise in this scenario?",
        a: "Time-lapse",
        b: "Critical situation",
        c: "Race condition",
        d: "Recursion",
        correct: "c",
    },
    {
        q: "3. Which of the following modifiers can be used for a variable so that it can be accessed by any thread or a part of a program?",
        a: "global",
        b: "transient",
        c: "volatile",
        d: "default",
        correct: "c",
    },
    {
        q: "4. Which of the following statements is correct regarding the object-oriented programming concept in Python?",
        a: "Classes are real-world entities while objects are not real",
        b: "Objects are real-world entities while classes are not real",
        c: "Both objects and classes are real-world entities",
        d: "All of the above",
        correct: "b",
    },
    {
        q: "5. Which of the following functions is a built-in function in python language?",
        a: "val()",
        b: "print()",
        c: "printf()",
        d: "none of the above",
        correct: "b",
    },
    {
        q: "6. Which of the following variables takes precedence over the others if the names are the same?",
        a: "Global variable",
        b: "The Local element",
        c: "The two of the above",
        d: "none of the above",
        correct: "b",
    },
    {
        q: "7. When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
        a: "Prints an exception error",
        b: "Prints an Overflow error",
        c: "Displays Infinity",
        d: "Prints the value as such",
        correct: "c",
    },
    {
        q: "8. Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
        a: "toExponential()",
        b: "toFixed()",
        c: "toPrecision()",
        d: "toLocaleString()",
        correct: "b",
    },
    {
        q: "9. Which of the following number object function returns the value of the number?",
        a: "valueOf()",
        b: "toString()",
        c: "toLocaleString()",
        d: "toPrecision()",
        correct: "b",
    },
    {
        q: "10. Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
        a: "slice()",
        b: "split()",
        c: "substr()",
        d: "search()",
        correct: "c",
    }
];

var i=0;
var score = 0;
var current = 0;

const visit = [];

var ele = document.getElementsByName('answer');


function getSelected() {
    let answer = 0;

    for(x = 0; x < ele.length; x++) {
        if(ele[x].checked)
            answer = ele[x].value;
    }
    return answer
}

function prev(){
    if(i==0) return;
    else  i--;

    for(var x=0 ; x<ele.length; x++)
            ele[x].checked = false;

        document.querySelector('.ques').innerHTML = question[i].q;
        document.querySelector('#a_text').innerHTML = question[i].a;
        document.querySelector('#b_text').innerHTML = question[i].b;
        document.querySelector('#c_text').innerHTML = question[i].c;
        document.querySelector('#d_text').innerHTML = question[i].d;
        

    if(i==question.length-1){
        document.querySelector('.final').style.display = 'block';
        document.querySelector('#submit').style.display ='none';
    }else{
        document.querySelector('.final').style.display = 'none';
        document.querySelector('#submit').style.display ='block';
    }

}
function cl(){
    for(x = 0; x < ele.length; x++) {
        ele[x].checked = false;
    }

}
function next(){
    if(i >=question.length-1) return;//i=0;
    else i++;

        for(var x=0;x<ele.length;x++)
            ele[x].checked = false;
    
    document.querySelector('.ques').innerHTML = question[i].q;
    document.querySelector('#a_text').innerHTML = question[i].a;
    document.querySelector('#b_text').innerHTML = question[i].b;
    document.querySelector('#c_text').innerHTML = question[i].c;
    document.querySelector('#d_text').innerHTML = question[i].d;

    if(i==question.length-1){
        document.querySelector('.final').style.display = 'block';
        document.querySelector('#submit').style.display ='none';
    }else{
        document.querySelector('.final').style.display = 'none';
        document.querySelector('#submit').style.display ='block';
    }

}
function check(){
    
    const answer = getSelected();

    if(answer==0)
        return ;

    let c = 0;

    for(let x=0;x<visit.length;x++){
        if(visit[x] == i){
            c++; break;
        }
    }
    if(c==0){
        visit[current++]=i;
        if(answer) {
            if(answer == question[i].correct) {
                score++;
            }
        }
        alert("YOUR ANSWER OF Q-"+(i+1)+" HAS BEEN LOCKED..!");
    }else{
        alert("YOU SAVED THIS ANSWER PREVIOUSLY");
    } 
}


function res(){

    check();

    document.querySelector('.result-f').style.display ='block';
    document.querySelector('.f-res').innerHTML = `
    <h4>ThankYou For Attempting QuizZ.....</h4> <br><br>
    <h2>YOUR SCORE IS -----   ${score} </h2>`;
}