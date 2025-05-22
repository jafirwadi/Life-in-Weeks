function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var userInput = Number(prompt("Enter your age to know how many days, weeks and months remaining if you live 90 years"));
    var lifeSpanDays = (365*90);
    var lifeSpanWeeks = (52*90);
    var lifeSpanYears = (12*90);
    var x = 365*userInput;
    var y = 52*userInput;
    var z = 12*userInput;

    alert("You have " + (lifeSpanDays - x) + " days, " + (lifeSpanWeeks - y) + " weeks, and " + (lifeSpanYears - z) + " months left.");
    console.log("You have " + (lifeSpanDays - x) + " days, " + (lifeSpanWeeks - y) + " weeks, and " + (lifeSpanYears - z) + " months left." );
    
/*************Don't change the code below**********/
}

lifeInWeeks();