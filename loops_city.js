//Loop City Exercise

//Mommy I can count to 100
for (var count = 0; count <= 100 ; count++) {
  console.log("I can count Mommy watch! " + count)
}

//Noah's Arc
for (var animalCount = 0; animalCount <= 5; animalCount++) {
  console.log("There are "+ animalCount + " many animals in Noah's Arc" )
}

//Hip Hip Array
var partyAnimals = ["Monkeys", "Pigs", "Mouses", "Kangaroos ", "Fishes", "Penguins"];
var adjective = [" swinging in trees", " eat mud", " tiny", " have a hole in their tummy", " make a blob blob sound", " quacking"]

for (var i in partyAnimals) {
  console.log(partyAnimals[i] + " are" + adjective[i])
}

//Merlin's Battle Weapon
var weaponChest = ["Mace", "Sorcerer's Stone", "Exalibur"];

var hero = {
  wizard : "Merlin",
  weapon : weaponChest[1],
  power : 30
};

function war(weapon) {
  if(weapon == "Sorcerer's Stone"){
    console.log(hero.wizard + " shall slay the dragon with the " + weapon);
  }
  else{
    weapon="Sorcerer's Stone";
    console.log(hero.wizard + " is ready for war with the " + weapon);
  }
}


war(hero.weapon);
