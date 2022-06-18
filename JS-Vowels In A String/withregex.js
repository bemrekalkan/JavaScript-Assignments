//! SELECTORS:
const textarea = document.querySelector("#vowelstextarea");
const message = document.querySelector(".messagearea");
const btn = document.querySelector("button");

//! ADDEVENT LISTENER:
btn.addEventListener("click", () => {
  message.innerHTML = vowels(textarea.value);
});

const vowelRegex = (str) => {
  let newStr = str.match(/[aeiou]/gi);
  return newStr;
};
