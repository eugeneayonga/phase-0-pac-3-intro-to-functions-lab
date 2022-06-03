function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    const spy = string.toUpperCase(); 
    console.log(spy);
}

function logWhisper(string) {
    const spy = string.toLowerCase(); 
    console.log(spy);
}

function sayHiToHeadphonedRoommate(string) {
    const stringOne = "hello"
    const stringTwo = "I can\'t hear you!"
    const stringThree = "YES INDEED!"
    const stringFour = "I would love to!"
    if (string.toLowerCase(string) === string) {
        return stringTwo;
    }
    else if (string.toUpperCase(string) === string) {
        return stringThree;
    }
    else if ("Let's have dinner together!" === string) {
        return stringFour;
    }
}
