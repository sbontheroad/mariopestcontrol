document.querySelector(".btn-bobomb").addEventListener("click", function () {
    var bobombs = Number(document.querySelector("#bobombInput").value) * 8;
    var goombas = Number(document.querySelector("#goombaNum").value) * 12;
    var cheeps = Number(document.querySelector("#cheepsInput").value) * 11;
    var fullTotal = bobombs + goombas + cheeps;
    document.querySelector("#bobombTotal").innerHTML = "That will cost you " + bobombs + " coins";
    document.querySelector("#fullTotal").innerHTML = "You will owe a total of " + fullTotal;
});

document.querySelector(".btn-goomba").addEventListener("click", function () {
    var bobombs = Number(document.querySelector("#bobombInput").value) * 8;
    var goombas = Number(document.querySelector("#goombaNum").value) * 12;
    var cheeps = Number(document.querySelector("#cheepsInput").value) * 11;
    var fullTotal = bobombs + goombas + cheeps;
    document.querySelector("#goombaTotal").innerHTML = "That will cost you " + goombas + " coins";
    document.querySelector("#fullTotal").innerHTML = "You will owe a total of " + fullTotal;
});

document.querySelector(".btn-cheep").addEventListener("click", function () {
    var bobombs = Number(document.querySelector("#bobombInput").value) * 8;
    var goombas = Number(document.querySelector("#goombaNum").value) * 12;
    var cheeps = Number(document.querySelector("#cheepsInput").value) * 11;
    var fullTotal = bobombs + goombas + cheeps;
    document.querySelector("#cheepTotal").innerHTML = "That will cost you " + cheeps + " coins";
    document.querySelector("#fullTotal").innerHTML = "You will owe a total of " + fullTotal;
});

