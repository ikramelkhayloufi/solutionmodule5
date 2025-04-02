var names = ["John", "Alice", "Jane", "Michael", "Jasmine"];

// Boucle à travers chaque nom
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  // Vérifier si le nom commence par 'j' ou 'J'
  if (firstLetter === "j") {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}
