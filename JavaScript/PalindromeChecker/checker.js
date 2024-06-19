window.onload = (ev) => {
  const formElement = document.getElementById("text-form");
  formElement.addEventListener("submit", updatePalindromeStatus);
};

function checkIfPalindrome(text) {
  // Checks if Palindrome or not
  let reversedString = text;
  reversedString = reversedString.split("").reverse().join("");
  return reversedString === text;
}

function updatePalindromeStatus(event) {
  event.preventDefault();
  const result = document.getElementById("text-check-result");
  const inputText = document.getElementById("text");
  result.innerText = `${inputText.value} is palindrome: ${
    checkIfPalindrome(inputText.value) ? "True" : "False"
  }`;
}
