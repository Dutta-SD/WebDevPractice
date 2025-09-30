const WORD_COLLECTION = [
  "the",
  "and",
  "was",
  "for",
  "are",
  "but",
  "not",
  "you",
  "all",
  "any",
  "can",
  "had",
  "her",
  "his",
  "one",
  "our",
  "out",
  "say",
  "see",
  "she",
  "who",
  "get",
  "now",
  "him",
  "way",
  "new",
  "two",
  "use",
  "man",
  "day",
];

const elementId = "all-words-to-type";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const testWords = shuffleArray(WORD_COLLECTION);

let totalNumber = 0;
testWords.forEach((element) => {
  totalNumber += element.length;
});

const characterStatuses = Array(totalNumber).fill(0);

const wordsElement = document.getElementById(elementId);

wordsElement.innerHTML = "<b>" + testWords.join("</b> • <b>");
+"</b>";
