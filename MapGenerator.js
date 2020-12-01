function NameGen(){
	var rng = 
		[
		Math.floor(Math.random()*4),
		Math.floor(Math.random()*3),
		Math.floor(Math.random()*4)
		]

	var namndel1 = ["Magic ","Mythical ","Legendary ","Epic "]; 
	var namndel2 = ["Hallway ","Stairs ", "Corridor "];
	var namndel3 = ["Stars ","Planets ","Suns ","Gods "];
	var name = namndel1[rng[0]] + namndel2[rng[1]] + "of " + namndel3[rng[2]];
	return name;
}

function RoomGen(){
	var namnrng = Math.floor(Math.random()*6)
	var roomnamn = allanamn[namnrng];
	var envmentrng = Math.floor(Math.random()*4)
	var envments = ["Stone","Grass","Gravel","Dirt"] 
	var envment = envments[envmentrng];
	var room = [roomnamn,envment];
	return room;
}

function Location(){
	var positionrng = Math.floor(Math.random()*6)
}

var allanamn = [];
for(let i = 0; i <= 5; i++){
	allanamn.push(NameGen());
}

var allaroom = [];
for (let i = 0; i <= 5; i++){
	allaroom.push(RoomGen());
}

console.log(allaroom);
