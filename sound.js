// var sounds = {
//    88 : 'alarm', // key 'x'

// };
var sounds = {};

var notes = ["a","b","bb","c","cc","d","e","eb","f","g","gg"];
for (var i =65; i<=90; i++){
	sounds[i] = 'piano-' + notes[Math.floor(Math.random()*notes.length)]
}
console.log(sounds)


document.onkeydown = function(e) {
    var soundId = sounds[e.keyCode];
    if (soundId) document.getElementById(soundId).play();
    else console.log("key not mapped : code is", e.keyCode);
}