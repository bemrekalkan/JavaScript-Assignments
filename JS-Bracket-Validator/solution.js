//! SOLUTION - 1

function brc(str) {
  const stack = [];
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0) {
        return false;
      } else if (stack.pop() !== char) {
        return false;
      }
    }
  }
  return true;
}

console.log(brc("{()}[]"));

//! SOLUTION - 2

const bracketValidator = (bracket) => {
  if (
    bracket.includes("()") ||
    bracket.includes("[]") ||
    bracket.includes("{}")
  ) {
    while (
      bracket.includes("()") ||
      bracket.includes("[]") ||
      bracket.includes("{}")
    ) {
      bracket = bracket.replace("()", "").replace("[]", "").replace("{}", "");
    }
    return bracket === "";
  } else {
    return false;
  }
};

let brac = "{(())[]{}}";
console.log(bracketValidator(brac));

//! SOLUTION - 3

const isValid = function (s) {
  const stack = [];
  const characters = { ")": "(", "}": "{", "]": "[" };
  for (const char of s) {
    if (!characters[char]) {
      stack.push(char);
    } else if (stack.pop() !== characters[char]) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("[()}]"));
