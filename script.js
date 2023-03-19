let playerScore = 0;
let computerScore = 0;
let winplayer=document.querySelector("#leftplayer");
let wincomputer=document.querySelector("#rightplayer");
let indications=document.querySelector("#indicator");
let hideplayarea=document.querySelector("#old-div");
let showresult=document.querySelector("#new-div");
let rulesshow=document.querySelector(".rulebox");
let onlyrule=document.querySelector(".rules");
let ruleandnext=document.querySelector(".nextarea");
let paper=document.getElementById("#cpaper");

let scissor=document.getElementById("#cscissor");
let leftcircles=document.getElementById("lcircle")
let rightcircles=document.getElementById("rcircle");
var d=document.getElementById("drock");

let plscore=localStorage.getItem('#pscore') || 0;
 let clscore=localStorage.getItem('#cscore') || 0;
document.querySelector("#pscore").innerText=plscore;
document.querySelector("#cscore").innerText=clscore;


function play(playerChoice)
{
  const options = ['rock', 'paper', 'scissor'];
  const computerChoice = options[Math.floor(Math.random() * options.length)];
    lrock.style.display="none";
              rrock.style.display="none";
    lscissor.style.display="none";
     rscissor.style.display="none";
     lpaper.style.display="none";
     rpaper.style.display="none";
  
     c1.style.display="block";
     c2.style.display="block";
     c3.style.display="block";
     b1.style.display="block";
     b2.style.display="block";
     b3.style.display="block";

   showresult.style.display="block";
 hideplayarea.style.display="none";
line01.style.position="absolute";
line01.style.top="140px";

line02.style.position="absolute"
line02.style.left="330px";
line03.style.position="absolute";
line03.style.left="470px";

leftcircles.style.display="none";
rightcircles.style.display="none";
document.getElementById('t6').innerHTML='AGAINST PC';


  if (playerChoice === computerChoice) {
    document.getElementById('t5').innerHTML='TIE UP';
    document.getElementById('t6').innerHTML=' ';
//  t5.style.position="relative";
//   t5.style.top="-10px";

  rightcircles.style.display="block";
  leftcircles.style.display="block";
c1.style.display="none";
c2.style.display="none";
c3.style.display="none";
b1.style.display="none";
b2.style.display="none";
b3.style.display="none";
      } 
      else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
      ) 
      {      
   onlyrule.style.display="none";
   ruleandnext.style.display="block";
        plscore++;



       localStorage.setItem('#pscore', plscore);

       plscore=localStorage.getItem('#pscore');

document.querySelector("#pscore").innerText=plscore;


        leftcircles.style.display="block";
        rightcircles.style.display="block";
document.getElementById('t5').innerHTML='YOU WIN';


      } else {
        clscore++;



        localStorage.setItem('#cscore', clscore);
 
        plscore=localStorage.getItem('#cscore');
 
 document.querySelector("#cscore").innerText=clscore;



        rightcircles.style.display="block";
        leftcircles.style.display="block";
        document.getElementById('t5').innerHTML='YOU LOST';      }

     if(playerChoice==='rock')  
{
  lrock.style.display="block";}
  
  if(computerChoice==='rock')
     {
  rrock.style.display="block";
}
if(playerChoice==='scissor')   
{
lscissor.style.display="block";
}

if(computerChoice==='scissor'){
rscissor.style.display="block";
}

if(playerChoice==='paper')  
{
 lpaper.style.display="block";
}

if(computerChoice==='paper'){
  rpaper.style.display="block";
}}

function closebtn()
{  rulesshow.style.display="none";
}
function rules()
{
  rulesshow.style.display="block";}

  function nextbtn() {
  window.open("index1.html");
}

function showplayarea()
{  onlyrule.style.display="block";
ruleandnext.style.display="none";
  hideplayarea.style.display="block";
  showresult.style.display="none";
  }

function firstpage()
{
  window.open("index.html");
}
