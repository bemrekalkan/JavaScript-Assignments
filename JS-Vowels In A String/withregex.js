//! SELECTORS:
const textarea = document.querySelector("#vowelstextarea");
const message = document.querySelector(".messagearea");
const btn = document.querySelector("button");

//! ADDEVENT LISTENER:
btn.addEventListener("click", () => {
  message.innerHTML = vowelRegex(textarea.value);
});

//! REGEX FUNCTION:
const vowelRegex = (str) => {
  let newStr = str.match(/[aeiou]/gi);
  return newStr === null
    ? `There are no vowels in ${str}`
    : `There are ${newStr.length} vowels in ${str} `;
};
