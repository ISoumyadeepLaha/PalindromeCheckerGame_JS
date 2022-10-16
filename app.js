let btn = document.getElementById("check");
btn.addEventListener("click", () => {
  let inputValue = document.querySelector("#inputValue").value;
  let reverseValue = inputValue.toString().split("").reverse().join("");
  let strValue = inputValue.toString();

  if (inputValue == "") {
    document.getElementById("result").innerHTML =
      "Please, enter a word or number ";
  } else {
    if (strValue == reverseValue) {
      document.getElementById("result").innerHTML = "Yes!, It's a Palindrome";
    } else {
      document.getElementById("result").innerHTML = "Nope!, not a Palindrome";
    }
  }
});
