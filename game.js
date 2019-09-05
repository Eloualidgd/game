function play(obj) {
    var object = ["Scissors", "Rock", "Paper"];

    //console.log(object[obj]);

    var play = [
        ["Ace tied" , "You have lost" , "You've won"],
        ["You've won", "Ace tied" , "You have lost" ],
        ["You have lost" ,"You've won" , "Ace Tied"]
            ];
    var counter_pc = 0 ;
    var counter_player = 0;

    /*var play = [
        ["Ace tied: 0,0", "You have lost: 0,1", "You've won: 1,0"],
        ["You've won: 1,0", "Ace tied: 0,0", "You have lost: 0,1"],
        ["You have lost: 0,1", "You've won: 1,0", "Ace tied: 0,0"]
    ];*/


    var enemy = Math.floor(Math.random() * 3);
    console.log(object[obj]);
    console.log(object[enemy]);
    console.log(play[obj][enemy]);
    document.getElementById("Player").innerHTML = object[obj];
    document.getElementById("Enemy").innerHTML = object[enemy];
    document.getElementById("Result").innerHTML = play[obj][enemy];
    //document.getElementById("Human").innerHTML = counter_player;
    //document.getElementById("Computer").innerHTML = counter_pc;



    if (document.getElementById("Human").innerHTML == "You've won") {
        counter_player= +1;
    }else {

    }
}