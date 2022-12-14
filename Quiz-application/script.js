
// var quest = document.querySelector('.ques');
const question = [{q :"1. Only one film has ever won all five of the main Oscars (film, actor, actress, screenplay, and director)",t : "True",f : "False", right :"f"},
{q : "2. The Clampett Family struck oil near their home in the Ozarks before moving to Beverly Hills in the 1960's",t :"True",f : "False", right :"t"},
{q :"3. Filming for the Netflix show 'Money Heist' took place at the actual Royal Mint of Spain in Madrid",t : "True",f : "False", right :"f"},
{q :"4. Use of pointers is not a Java feature ",t : "True",f : "False",right : "t"},
{q :"5. The Volkswagen Beetle sold over 52 million models between 1937 and 2003",t : "True",f : "False", right :"f"},
{q :"6. Last Christmas by Wham reached number one in the UK during the 1984 festive season",t : "True",f : "False", right :"f"},
{q :"7. If you add the two numbers on the opposite sides of a dice together, the answer is always 7",t : "True",f : "False",right :"t"},
{q :"8. The Channel Tunnel between Britain and France is the longest rail tunnel in the world",t : "True",f : "False",right :"f"},
{q :"9. The world’s longest coastline is in China.",t : "True",f : "False",right :"f"},
{q :"10. The speed of the average human sneeze can be measured up to 100 miles an hour.",t : "True",f : "False",right :"t"}];

var i=0;
var score = 0;
var current = 0;

const visit = [];

var ele = document.getElementsByName('answer');

// var name_user = document.getElementsByName('name');

// document.getElementsById()

function getSelected() {
    let answer = 0;

    for(x = 0; x < ele.length; x++) {
        if(ele[x].checked)
            answer = ele[x].value;
    }
    // alert(answer);
    return answer
}

function prev(){
    if(i==0) i=question.length-1;
    else  i--;

    for(var x=0;x<ele.length;x++)
            ele[x].checked = false;

    document.querySelector('.ques').innerHTML = question[i].q;
    document.querySelector('#a_text').innerHTML = question[i].t;
    document.querySelector('#b_text').innerHTML = question[i].f;

    if(i==9){
        document.querySelector('.final').style.display = 'block';
        document.querySelector('#submit').style.display ='none';
    }else{
        document.querySelector('.final').style.display = 'none';
        document.querySelector('#submit').style.display ='block';
    }

}
function next(){
    if(i >=question.length-1) i=0;
    else i++;

        for(var x=0;x<ele.length;x++)
            ele[x].checked = false;
    
    document.querySelector('.ques').innerHTML = question[i].q;
    document.querySelector('#a_text').innerHTML = question[i].t;
    document.querySelector('#b_text').innerHTML = question[i].f;

    if(i==9){
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
            if(answer == question[i].right) {
                score += 1;//alert(score);
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