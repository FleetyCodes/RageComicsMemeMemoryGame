////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//variables

//this is the set of images
const imagesMap = new Map([
    [0, "images/cards/happy.png"],
    [1, "images/cards/smile.png"],
    [2, "images/cards/suspicious.png"],
    [3, "images/cards/motherofgod.png"],
    [4, "images/cards/derpina.png"],
    [5, "images/cards/rageface.png"],
    [6, "images/cards/likeaboss.png"],
    [7, "images/cards/lol.png"]
]);

//the game's map
var gameSet = [];
var foundCards = [];
var openedCards = [];

var numOfOpenedCards = 0;
var numOfClicks = 0;
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
function changeImage(imageNumber) {
    numOfClicks++;
    document.getElementById("leftBoxContent").innerHTML = "Number of clicks: " + numOfClicks;

    if (gameSet.length == 0) {
        newGame(false);
    }

    var imgElement = document.getElementById(imageNumber);

    if (numOfOpenedCards == 2) {
        if (openedCards[1] == openedCards[3]) {
            foundCards.push(openedCards[0]);
            foundCards.push(openedCards[2]);
            var image = document.getElementById(openedCards[0]);
            image.style.opacity = 0.3;
            image = document.getElementById(openedCards[2]);
            image.style.opacity = 0.3;
        }

        var imgElementToReset = document.getElementsByClassName('image');
        for (var i = 0; i < imgElementToReset.length; i++) {
            if (!foundCards.includes(imgElementToReset[i].id)) {
                imgElementToReset[i].src = 'images/cards/cardback.jpg';
            }
        }
        numOfOpenedCards = 0;
        openedCards = [];
    }


    if (imgElement.src.endsWith('cardback.jpg')) {
        for (var i = 0; i <= 15; i++) {
            if (imageNumber === 'image' + i) {
                openedCards.push('image' + i);
                openedCards.push(gameSet.at(i));
                imgElement.src = imagesMap.get(gameSet.at(i));
            }
        }
        numOfOpenedCards++;
    }
}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function newGame(buttonpushed) {
	var imgElementToReset = document.getElementsByClassName('image');
	for(var i=0; i<imgElementToReset.length; i++){
		imgElementToReset[i].style.opacity = 1;
	}
		
    numOfClicks = 0;
    document.getElementById("leftBoxContent").innerHTML = "Number of clicks: " + numOfClicks;
    numOfOpenedCards = 0;
    if (buttonpushed) {
        alert("New Game Started");
    }

    gameSet = [];
    openedCards = [];
    foundCards = [];

    //set every card to starting/turned state
    var imgElement = document.getElementsByClassName('image');
    for (var i = 0; i < imgElement.length; i++) {
        imgElement[i].src = 'images/cards/cardback.jpg';
    }


    tmpGameSet1 = [];
    for (var i = 0; i < imagesMap.size; i++) {
        var numberOk = false;
        do {
            var randomNmbr = getRandomInt(imagesMap.size);
            if (!tmpGameSet1.includes(randomNmbr)) {
                tmpGameSet1.push(randomNmbr);
                numberOk = true;
            }
        } while (!numberOk)
    }


    tmpGameSet2 = [];
    for (var i = 0; i < imagesMap.size; i++) {
        var numberOk = false;
        do {
            var randomNmbr = getRandomInt(imagesMap.size);
            if (!tmpGameSet2.includes(randomNmbr)) {
                tmpGameSet2.push(randomNmbr);
                numberOk = true;
            }
        } while (!numberOk)
    }

    gameSet = tmpGameSet1.concat(tmpGameSet2);

    for (var i = 0; i < gameSet.length; i++) {
        console.log(gameSet[i]);
    }
}

//formatted with https://beautifier.io/