// function checkDriverage(age) {
//     if (age > 18) {
//         return "Powering On. Enjoy the ride!";
//     } else if (age == 18) {
//         return "Congratulations on your first year of driving. Enjoy the ride!";
//     } else {
//         return "Sorry, you are too young to drive this car. Powering off";
//     }
// }

// alert(checkDriverage(17));


// var checkDriverage2 = function(age) {
//     if (age > 18) {
//         return "Powering On. Enjoy the ride!";
//     } else if (age == 18) {
//         return "Congratulations on your first year of driving. Enjoy the ride!";
//     } else {
//         return "Sorry, you are too young to drive this car. Powering off";
//     }
// }

// alert(checkDriverage2(25))


var fb = {
    username: "Mayor",
    password: "francis",
};

var dataBase = [{
    username: "Mayor",
    password: "francis"
}];

var newsFeed = [{
        username: "Mayor",
        timeline: "Javasript is dope"
    },
    {
        username: "Christianah",
        timeline: "Am a senior web developer"
    },
    {
        username: "Thelma",
        timeline: "Te-amor is my nickname"
    }
];

var userNamePrompt = prompt("Enter name");
var passwordPrompt = prompt("Input password");

function signIn(user, psw) {
    if (user == dataBase[0].username && psw == dataBase[0].password) {
        console.log(newsFeed);
    } else {
        alert("sorry, incorrect username and password");
    }
}

signIn(userNamePrompt, passwordPrompt);


var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javvascript",
    "eat healthy"
];

var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
    todos.pop();
}

var counterOne = 10;
while (counterOne > 0) {
    console.log(counterOne);
    counterOne--;
}