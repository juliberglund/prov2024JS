// 3. Filtrera namn (2p)
// Skriv en funktion, filter names, som tar en array med namn och en bokstav
// som input och returnerar en ny array med de namn som börjar med bokstaven.
// funktionen behöver bara hantera en stor bokstav som input

// Exempel:
// filterNames(["John", "Mary", "Peter", "Jane"], "J") // Returnerar ["John", "Jane"]
// filterNames(["John", "Mary", "Peter", "Jane"], "P") // Returnerar ["Peter"]
// filterNames(["John", "Mary", "Peter", "Jane"], "X") // Returnerar []

function filterNames(names, letter) {
  names = names.toLowerCase();
  letter = letter.toLowerCase();

  // Beräkna min längd av de två strängarna för att undvika att gå utanför gränserna
  let minLength = Math.min(names.length, letter.length);

  // Räkna antalet gemensamma bokstäver på samma position
  let count = 0;
  for (let i = 0; i < minLength; i++) {
    if (names[i] === letter[i]) {
      count++;
    }
  }

  return count;
}

module.exports = filterNames;
