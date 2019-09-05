

function play(obj) {
    var object = ["Scissors" , "Rock" , "Paper" ] ;

    //console.log(object[obj]);

    var play =
        [ ["Ace tied" , "You have lost" , "You've won"],
        ["You've won", "Ace tied" , "You have lost" ],
        ["You have lost" ,"You've won" , "Ace Tied"]
            ];

    var enemy = Math.floor(Math.random() *3);
    console.log(object[obj]);
    console.log(object[enemy]);
    console.log(play[obj][enemy]);
    document.getElementById("Player").innerHTML = object[obj];
    document.getElementById("Enemy").innerHTML = object[enemy];
    document.getElementById("Result").innerHTML = play[obj][enemy];
    
}