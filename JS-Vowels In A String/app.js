//! SELECTORS:
const textarea = document.querySelector("#vowelstextarea");
const message = document.querySelector(".messagearea");
const btn = document.querySelector("button");

//! ADDEVENT LISTENER:
btn.addEventListener("click", () => {
  message.innerHTML = vowels(textarea.value);
});

//! FUNCTION:
const vowels = (sentence) => {
  let sent = sentence.toLowerCase();
  let counter = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (
      sent[i] == "a" ||
      sent[i] == "e" ||
      sent[i] == "i" ||
      sent[i] == "u" ||
      sent[i] == "o"
    ) {
      counter++;
    }
  }
  return `There are ${counter} vowels in ${sent} `;
};
