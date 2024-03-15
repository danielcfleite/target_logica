const StringToReverse = "Hello World!";

function reverseString(string) {
  if (string === "") {
    return "";
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

const result = reverseString(StringToReverse);
console.log(result);
