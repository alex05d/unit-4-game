// assign variable crystal as an object
crystal = {
    redCrystal:
    {
        color: "Red",
        value: 0
    },
    blueCrystal:
    {
        color: "Blue",
        value: 0

    },
    purpleCrystal:
    {
        color: "Purple",
        value: 0
    },
    greenCrystal:
    {
        color: "Green",
        value: 0
    }

};

// creat a variable
var randomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var crystalNumber = function () {
    return Math.floor(Math.random() * 12 + 1) + 1;
};


var win = 0;
var losses = 0;
var target = 0;
var score = 0;

target = randomNum(19, 120);

var start = function () {
    score = 0;
    target = randomNum(19, 120);
    crystal.redCrystal.value = crystalNumber();
    crystal.blueCrystal.value = crystalNumber();
    crystal.purpleCrystal.value = crystalNumber();
    crystal.greenCrystal.value = crystalNumber();
    $("#randomText").html(target);
    $("#total").html(score);
};

var values = function (crystal) {
    score = score + crystal.value;
    $("#total").html(score);

    checkWin();


};



var checkWin = function () {
    if (score > target) {
        losses++;
        $("#lossesText").html(losses);
        alert("YOU LOSE");
        start();
    }
    if (score === target) {
        win++;
        $("#winsText").html(win);
        alert(" YOU WON!");
        start();
    }

};







start();
// event listener

$("#red").on("click", function () {
    values(crystal.redCrystal);
});
$("#green").click(function () {
    values(crystal.greenCrystal);
});
$("#blue").click(function () {
    values(crystal.blueCrystal);
});
$("#purple").click(function () {
    values(crystal.purpleCrystal);
});

