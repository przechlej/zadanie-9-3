var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();
var textReplace = text.replace("Velociraptor", dinosaur);
console.log(textReplace.substring(0, text.lenght / 2));