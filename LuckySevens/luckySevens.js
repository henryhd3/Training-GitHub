function playL7(){

// Starting Bet = startBet
// # of rolls = roll
// Max amount of money = maxMoney
// highest roll = maxRoll
// current bet = bet
// highest amount of money reached = winnings

var bet = Number(document.forms["luckySevens"]["bet"].value);

// If bet is $0 or under, error
if(bet<=0){
  alert('Error! You"re broke.');
    document.forms["luckySevens"]["bet"].value = "";
	  document.forms["luckySevens"]["bet"].focus();
  return false;
}

var roll = 0; //Die Rolls

var array = [bet]; // Array for tracking bets

// The actual game
// as long as 'money' is >= $1 we still playing (not betting cents)
for(var money = bet; money >= 1; roll++){

  rollDice1 = Math.floor(Math.random() * 6) + 1; //Die rolling fcn without the fcn
  rollDice2 = Math.floor(Math.random() * 6) + 1; //Die rolling fcn without the fcn

// Loop for the game
 if (Number(rollDice1+rollDice2) == 7){
   money+=4;
   array[array.length] = money;
 }
 else{
   money=money-1;
   array[array.length] = money;
 }
}

// Getting the max amount of money had in the game
 var maxMoney = 0;
 for(var i=0; i<array.length; i++){
   if(array[i] > maxMoney){
     maxMoney = array[i];
   }
 }



// Display the results and all

document.getElementById("results").style.display = "block";
document.getElementById("startBet").innerText = ("$" + bet);
document.getElementById("rollTotal").innerText = roll;
document.getElementById("winnings").innerText = ("$" + maxMoney);
document.getElementById("maxRoll").innerText = array.indexOf(maxMoney);
document.getElementById("placeBet").innerText = "Play Again";
document.forms["luckySevens"]["bet"].focus();

return false;
}
