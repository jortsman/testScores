var total = 0;
var entryCount = 0;
var entry;
do {
  entry = prompt('Enter a test score\n' + "or enter 999 to end your entries", 999);
  entry = parseInt(entry);
  if (entry >= 0 && entry <= 100) {
    total = total + entry;
    entryCount++;
  } else if (entry != 999) {
    alert('You need to enter a number between 0 and 100 to get your average score.');
  }
} while (entry != 999);
var average = total/entryCount;
average = parseInt(average);
alert('Your test scores average is: ' + average);
