
var score,roundScore,activePlayer,gamePlaying;

init();

var lastdice;


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying)
    {
        
        var dice1= Math.floor(Math.random()*6)+1;
        var dice2= Math.floor(Math.random()*6)+1;
        //display result
        var diceDOM1=document.querySelector('#dice-1');
        diceDOM1.style.display='block';
        diceDOM1.src='dice-'+dice1+'.png';
        var diceDOM2=document.querySelector('#dice-2');
        diceDOM2.style.display='block';
        diceDOM2.src='dice-'+dice2+'.png';
        //Updating value
        //challenge 3
        if(dice1!=1 && dice2!=1){
            //add to round
            roundScore= roundScore+dice1+dice2;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
    
        }else{
            nextPlayer();
        }



       //challenge1
        /*if(dice==6 && lastdice==6){
            score[activePlayer]=0;
            document.querySelector('#score-'+activePlayer).textContent='0';
            nextPlayer();
        }else if(dice!=1 ){
            //add to round
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
    
        }
        else{
            //nextplayer
            nextPlayer();
        }
        lastdice= dice;
        */
    }
   
});

//hold button
document.querySelector('.btn-hold').addEventListener('click',function(){

if(gamePlaying)
 {
       //write here
       //add score to global score
       var winingscore;
       var finalscore= document.getElementById('finalScore').value;
        if(finalscore){
            winingscore=finalscore;
        }else{
            winingscore=10;
        }

       score[activePlayer]+=roundScore;

       //update uI
       document.querySelector('#score-'+ activePlayer).textContent= score[activePlayer];

       //check if player win the game
       if(score[activePlayer]>=winingscore)
       {
           document.querySelector('#name-'+activePlayer).textContent='winner!!!';
           document.querySelector('.dice').style.display='none';
           document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
           document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

           var setwinnerscore =score[activePlayer];
           document.querySelector('#lastplayerscore').textContent='last player winning score'+setwinnerscore;
           gamePlaying= false;
           
       }
       else
       {
           nextPlayer();
        } 
 }

});

//new game

document.querySelector('.btn-new').addEventListener('click',init);

//next player function
function nextPlayer(){
        activePlayer==0?activePlayer=1:activePlayer=0;
        roundScore=0;
        document.querySelector('#current-0').textContent='0';
        document.querySelector('#current-1').textContent='0';
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('#dice-1').style.display='none';
        document.querySelector('#dice-2').style.display='none';
}

function init(){
    score=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying= true;
    document.querySelector('#lastplayerscore').textContent='Last player winning score 100'
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#dice-2').style.display='none';
    document.getElementById('score-0').textContent= '0';
    document.getElementById('score-1').textContent= '0';
    document.getElementById('current-0').textContent= '0';
    document.getElementById('current-1').textContent= '0';
    document.getElementById('name-0').textContent='PLAYER-1';
    document.getElementById('name-1').textContent='PLAYER-2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
