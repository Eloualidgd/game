document.getElementById("user-score").innerHTML = 0;
document.getElementById("comp-score").innerHTML = 0;

function play(obj) {
    var object = ["Scissors", "Rock", "Paper"];

    //console.log(object[obj]);

    var play = [
        ["Ace Tied !!" , "You have lost !!" , "You've won !!"],
        ["You've won !!", "Ace Tied !!" , "You have lost !!" ],
        ["You have lost !!" ,"You've won !!" , "Ace Tied !!"]
            ];



    var enemy = Math.floor(Math.random() * 3);
 /*   console.log(object[obj]);
    console.log(object[enemy]);
    console.log(play[obj][enemy]); */
    document.getElementById("Player").innerHTML = object[obj];
    document.getElementById("Enemy").innerHTML = object[enemy];
    document.getElementById("Result").innerHTML = play[obj][enemy];
    //document.getElementById("Human").innerHTML = counter_player;
    //document.getElementById("Computer").innerHTML = counter_pc;


    var userscore = document.getElementById("user-score").innerHTML ;
    var compscore = document.getElementById("comp-score").innerHTML ;
    var result = document.getElementById("Result");



    if(result.innerHTML == "You have lost !!"){
        compscore++ ;
    }

    if(result.innerHTML == "You've won !!") {
        userscore++;
    }


    console.log(userscore);
    console.log(compscore);


}