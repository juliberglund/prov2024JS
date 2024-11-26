// 2. Bokstävers position i strängar (3p)
// Skriv en funktion equalLetterPositions som räknar ut hur många bokstäver som
// är på samma position i två strängar. Funktionen ska räkna stor och liten bokstav
// som samma bokstav.

// Exempel:
// equalLetterPositions("go", "DO") // Returnerar 1 (o och O är på samma position i båda strängarna)
// equalLetterPositions("hello", "world") // Returnerar 1 (l är på samma position i båda strängarna)
// equalLetterPositions("detsamma", "detta") // Returnerar 4 (d, e, t, a är på samma position i båda strängarna)

function equalLetterPositions(str1, str2) {
  // Din kod här
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Beräkna den kortaste längden för att undvika att gå utanför strängarnas gränser
  const minLength = Math.min(str1.length, str2.length);

  // Räkna lika bokstäver på samma position
  let count = 0;
  for (let i = 0; i < minLength; i++) {
    if (str1[i] === str2[i]) {
      count++;
    }
  }

  return count;
}

module.exports = equalLetterPositions;
