
var score,roundScore,activePlayer,gamePlaying;

init();



document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying)
    {
        
        var dice= Math.floor(Math.random()*6)+1;
        //display result
        var diceDOM=document.querySelector('.dice');
        diceDOM.style.display='block';
        diceDOM.src='dice-'+dice+'.png';
        //Updating value
        if(dice!==1){
            //add to round
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
    
        }
        else{
            //nextplayer
            nextPlayer();
        }
    }
   
});

//hold button
document.querySelector('.btn-hold').addEventListener('click',function(){

if(gamePlaying)
 {
       //write here
       //add score to global score

       score[activePlayer]+=roundScore;

       //update uI
       document.querySelector('#score-'+ activePlayer).textContent= score[activePlayer];

       //check if player win the game
       if(score[activePlayer]>=100)
       {
           document.querySelector('#name-'+activePlayer).textContent='winner!!!';
           document.querySelector('.dice').style.display='none';
           document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
           document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
           
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
}

function init(){
    score=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying= true;
    document.querySelector('#dice-1').style.display='none';
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
