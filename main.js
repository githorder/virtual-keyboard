const keystrokes = [
  {
    Backquote: {
      en: { val: "`", shiftVal: "~" },
      ru: { val: "ё", shiftVal: "Ё" },
    },
    Digit1: {
      en: { val: "1", shiftVal: "!" },
      ru: { val: "1", shiftVal: "!" },
    },
    Digit2: {
      en: { val: "2", shiftVal: "@" },
      ru: { val: "2", shiftVal: '"' },
    },
    Digit3: {
      en: { val: "3", shiftVal: "#" },
      ru: { val: "3", shiftVal: "№" },
    },
    Digit4: {
      en: { val: "4", shiftVal: "$" },
      ru: { val: "4", shiftVal: ";" },
    },
    Digit5: {
      en: { val: "5", shiftVal: "%" },
      ru: { val: "5", shiftVal: "%" },
    },
    Digit6: {
      en: { val: "6", shiftVal: "^" },
      ru: { val: "6", shiftVal: ":" },
    },
    Digit7: {
      en: { val: "7", shiftVal: "&" },
      ru: { val: "7", shiftVal: "?" },
    },
    Digit8: {
      en: { val: "8", shiftVal: "*" },
      ru: { val: "8", shiftVal: "*" },
    },
    Digit9: {
      en: { val: "9", shiftVal: "(" },
      ru: { val: "9", shiftVal: "(" },
    },
    Digit0: {
      en: { val: "0", shiftVal: ")" },
      ru: { val: "0", shiftVal: ")" },
    },
    Minus: { en: { val: "-", shiftVal: "_" }, ru: { val: "-", shiftVal: "_" } },
    Equal: { en: { val: "=", shiftVal: "+" }, ru: { val: "=", shiftVal: "+" } },
    Backspace: {
      en: { val: "Backspace", shiftVal: "Backspace" },
      ru: { val: "Backspace", shiftVal: "Backspace" },
    },
  },
  {
    Tab: {
      en: { val: "Tab", shiftVal: "Tab" },
      ru: { val: "Tab", shiftVal: "Tab" },
    },
    KeyQ: { en: { val: "q", shiftVal: "Q" }, ru: { val: "й", shiftVal: "Й" } },
    KeyW: { en: { val: "w", shiftVal: "W" }, ru: { val: "ц", shiftVal: "Ц" } },
    KeyE: { en: { val: "e", shiftVal: "E" }, ru: { val: "у", shiftVal: "У" } },
    KeyR: { en: { val: "r", shiftVal: "R" }, ru: { val: "к", shiftVal: "К" } },
    KeyT: { en: { val: "t", shiftVal: "T" }, ru: { val: "е", shiftVal: "Е" } },
    KeyY: { en: { val: "y", shiftVal: "Y" }, ru: { val: "н", shiftVal: "Н" } },
    KeyU: { en: { val: "u", shiftVal: "U" }, ru: { val: "г", shiftVal: "Г" } },
    KeyI: { en: { val: "i", shiftVal: "I" }, ru: { val: "ш", shiftVal: "Ш" } },
    KeyO: { en: { val: "o", shiftVal: "O" }, ru: { val: "щ", shiftVal: "Щ" } },
    KeyP: { en: { val: "p", shiftVal: "P" }, ru: { val: "з", shiftVal: "З" } },
    BracketLeft: {
      en: { val: "[", shiftVal: "{" },
      ru: { val: "х", shiftVal: "Х" },
    },
    BracketRight: {
      en: { val: "]", shiftVal: "}" },
      ru: { val: "ъ", shiftVal: "Ъ" },
    },
    Backslash: {
      en: { val: "\\", shiftVal: "|" },
      ru: { val: "\\", shiftVal: "/" },
    },
    Delete: {
      en: { val: "Del", shiftVal: "Del" },
      ru: { val: "Del", shiftVal: "Del" },
    },
  },
  {
    CapsLock: {
      en: { val: "CapsLock", shiftVal: "CapsLock" },
      ru: { val: "CapsLock", shiftVal: "CapsLock" },
    },
    KeyA: { en: { val: "a", shiftVal: "A" }, ru: { val: "ф", shiftVal: "Ф" } },
    KeyS: { en: { val: "s", shiftVal: "S" }, ru: { val: "ы", shiftVal: "Ы" } },
    KeyD: { en: { val: "d", shiftVal: "D" }, ru: { val: "в", shiftVal: "В" } },
    KeyF: { en: { val: "f", shiftVal: "F" }, ru: { val: "а", shiftVal: "А" } },
    KeyG: { en: { val: "g", shiftVal: "G" }, ru: { val: "п", shiftVal: "П" } },
    KeyH: { en: { val: "h", shiftVal: "H" }, ru: { val: "р", shiftVal: "Р" } },
    KeyJ: { en: { val: "j", shiftVal: "J" }, ru: { val: "о", shiftVal: "О" } },
    KeyK: { en: { val: "k", shiftVal: "K" }, ru: { val: "л", shiftVal: "Л" } },
    KeyL: { en: { val: "l", shiftVal: "L" }, ru: { val: "д", shiftVal: "Д" } },
    Semicolon: {
      en: { val: ";", shiftVal: ":" },
      ru: { val: "ж", shiftVal: "Ж" },
    },
    Quote: { en: { val: "'", shiftVal: '"' }, ru: { val: "э", shiftVal: "Э" } },
    Enter: {
      en: { val: "Enter", shiftVal: "Enter" },
      ru: { val: "Enter", shiftVal: "Enter" },
    },
  },
  {
    ShiftLeft: {
      en: { val: "Shift", shiftVal: "Shift" },
      ru: { val: "Shift", shiftVal: "Shift" },
    },
    KeyZ: { en: { val: "z", shiftVal: "Z" }, ru: { val: "я", shiftVal: "Я" } },
    KeyX: { en: { val: "x", shiftVal: "X" }, ru: { val: "ч", shiftVal: "Ч" } },
    KeyC: { en: { val: "c", shiftVal: "C" }, ru: { val: "с", shiftVal: "С" } },
    KeyV: { en: { val: "v", shiftVal: "V" }, ru: { val: "м", shiftVal: "М" } },
    KeyB: { en: { val: "b", shiftVal: "B" }, ru: { val: "и", shiftVal: "И" } },
    KeyN: { en: { val: "n", shiftVal: "N" }, ru: { val: "т", shiftVal: "Т" } },
    KeyM: { en: { val: "m", shiftVal: "M" }, ru: { val: "ь", shiftVal: "Ь" } },
    Comma: { en: { val: ",", shiftVal: "<" }, ru: { val: "б", shiftVal: "Б" } },
    Period: {
      en: { val: ".", shiftVal: ">" },
      ru: { val: "ю", shiftVal: "Ю" },
    },
    Slash: { en: { val: "/", shiftVal: "?" }, ru: { val: ".", shiftVal: "," } },
    ArrowUp: {
      en: { val: "▲", shiftVal: "▲" },
      ru: { val: "▲", shiftVal: "▲" },
    },
    ShiftRight: {
      en: { val: "Shift", shiftVal: "Shift" },
      ru: { val: "Shift", shiftVal: "Shift" },
    },
  },
  {
    ControlLeft: {
      en: { val: "Ctrl", shiftVal: "Ctrl" },
      ru: { val: "Ctrl", shiftVal: "Ctrl" },
    },
    Win: {
      en: { val: "Win", shiftVal: "Win" },
      ru: { val: "Win", shiftVal: "Win" },
    },
    AltLeft: {
      en: { val: "Alt", shiftVal: "Alt" },
      ru: { val: "Alt", shiftVal: "Alt" },
    },
    Space: { en: { val: " ", shiftVal: " " }, ru: { val: " ", shiftVal: " " } },
    AltRight: {
      en: { val: "Alt", shiftVal: "Alt" },
      ru: { val: "Alt", shiftVal: "Alt" },
    },
    ArrowLeft: {
      en: { val: "◄", shiftVal: "◄" },
      ru: { val: "◄", shiftVal: "◄" },
    },
    ArrowDown: {
      en: { val: "▼", shiftVal: "▼" },
      ru: { val: "▼", shiftVal: "▼" },
    },
    ArrowRight: {
      en: { val: "►", shiftVal: "►" },
      ru: { val: "►", shiftVal: "►" },
    },
    ControlRight: {
      en: { val: "Ctrl", shiftVal: "Ctrl" },
      ru: { val: "Ctrl", shiftVal: "Ctrl" },
    },
  },
];

let lang = localStorage.getItem("lang")
  ? localStorage.getItem("lang")
  : localStorage.setItem("lang", "en");
let isCaps = false;

const app = document.createElement("div");
app.classList.add("app");
document.body.append(app);

const titleHTML = `<h1 class="title">RSS Virtual keyboard</h1>`;

const inputHTML = `
  <div class="textarea-container">
    <textarea type="textarea" class="textarea" cols="50" rows="5"></textarea>
  </div>
`;

const keyboardHTML = `<div class="keyboard"></div>`;

const footerContainer = document.createElement("div");
const footerTitleHTML = `<p>The keyboard is created in the Linux OS</p>`;
const footerSubTitleHTML = `<p>To change language layout press Ctrl + Alt</p>`;
footerContainer.insertAdjacentHTML("beforeend", footerTitleHTML);
footerContainer.insertAdjacentHTML("beforeend", footerSubTitleHTML);

app.insertAdjacentHTML("beforeend", titleHTML);
app.insertAdjacentHTML("beforeend", inputHTML);
app.insertAdjacentHTML("beforeend", keyboardHTML);
app.append(footerContainer);

const keyboardEl = document.querySelector(".keyboard");

let keystrokesArr;
let keyCodes;

for (let i = 0; i < keystrokes.length; i++) {
  keystrokesArr = Object.values(keystrokes[i]);
  keyCodes = Object.keys(keystrokes[i]);
  let keysRow;
  let keyHTML = "";

  for (let j = 0; j < keystrokesArr.length; j++) {
    keysRow = document.createElement("div");
    keysRow.classList.add("key-row");

    keyHTML += `
      <div id="key-${keyCodes[j]}" class="key ${
      keyCodes[j] === "CapsLock" ||
      keyCodes[j] === "Backspace" ||
      keyCodes[j] === "Enter" ||
      keyCodes[j] === "Delete" ||
      keyCodes[j] === "Tab" ||
      keyCodes[j] === "ShiftLeft" ||
      keyCodes[j] === "ShiftRight" ||
      keyCodes[j] === "Space"
        ? "key_symbol"
        : ""
    }">${keystrokesArr[j][lang].val}</div>
    `;
  }

  keysRow.insertAdjacentHTML("beforeend", keyHTML);
  keyboardEl.append(keysRow);
}

const inputEl = document.querySelector(".textarea");

document.addEventListener("keydown", (e) => {
  e.preventDefault();

  const keyPressed = document.querySelector(`#key-${e.code}`);
  keyPressed?.classList.add("key_active");

  if (e.ctrlKey && e.altKey) {
    lang = lang === "en" ? "ru" : "en";
    localStorage.setItem("lang", lang);
    let keyIndex = 0;

    for (let i = 0; i < keystrokes.length; i++) {
      keystrokesArr = Object.values(keystrokes[i]);
      keyCodes = Object.keys(keystrokes[i]);

      for (let j = 0; j < keystrokesArr.length; j++) {
        document.querySelectorAll(".key")[keyIndex].textContent =
          isCaps &&
          keystrokesArr[j][lang].val !== "Backspace" &&
          keystrokesArr[j][lang].val !== "Del" &&
          keystrokesArr[j][lang].val !== "Tab" &&
          keystrokesArr[j][lang].val !== "CapsLock" &&
          keystrokesArr[j][lang].val !== "Enter" &&
          keystrokesArr[j][lang].val !== "Shift" &&
          keystrokesArr[j][lang].val !== "Ctrl" &&
          keystrokesArr[j][lang].val !== "Win" &&
          keystrokesArr[j][lang].val !== "Alt"
            ? keystrokesArr[j][lang].val.toUpperCase()
            : keystrokesArr[j][lang].val;

        keyIndex++;
      }
    }

    return;
  } else if (e.key === "CapsLock") {
    let keyIndex = 0;

    for (let i = 0; i < keystrokes.length; i++) {
      keystrokesArr = Object.values(keystrokes[i]);
      keyCodes = Object.keys(keystrokes[i]);

      for (let j = 0; j < keystrokesArr.length; j++) {
        document.querySelectorAll(".key")[keyIndex].textContent =
          !isCaps &&
          keystrokesArr[j][lang].val !== "Backspace" &&
          keystrokesArr[j][lang].val !== "Del" &&
          keystrokesArr[j][lang].val !== "Tab" &&
          keystrokesArr[j][lang].val !== "CapsLock" &&
          keystrokesArr[j][lang].val !== "Enter" &&
          keystrokesArr[j][lang].val !== "Shift" &&
          keystrokesArr[j][lang].val !== "Ctrl" &&
          keystrokesArr[j][lang].val !== "Win" &&
          keystrokesArr[j][lang].val !== "Alt"
            ? keystrokesArr[j][lang].val.toUpperCase()
            : keystrokesArr[j][lang].val;

        keyIndex++;
      }
    }

    isCaps = isCaps ? false : true;
  } else if (e.key === "Shift") {
    let keyIndex = 0;

    for (let i = 0; i < keystrokes.length; i++) {
      keystrokesArr = Object.values(keystrokes[i]);
      keyCodes = Object.keys(keystrokes[i]);

      for (let j = 0; j < keystrokesArr.length; j++) {
        document.querySelectorAll(".key")[keyIndex].textContent =
          isCaps &&
          keystrokesArr[j][lang].val !== "Backspace" &&
          keystrokesArr[j][lang].val !== "Del" &&
          keystrokesArr[j][lang].val !== "Tab" &&
          keystrokesArr[j][lang].val !== "CapsLock" &&
          keystrokesArr[j][lang].val !== "Enter" &&
          keystrokesArr[j][lang].val !== "Shift" &&
          keystrokesArr[j][lang].val !== "Ctrl" &&
          keystrokesArr[j][lang].val !== "Win" &&
          keystrokesArr[j][lang].val !== "Alt"
            ? keystrokesArr[j][lang].shiftVal.toLowerCase()
            : keystrokesArr[j][lang].shiftVal;
        keyIndex++;
      }
    }
  } else if (e.key === "Tab") {
    inputEl.value += keyPressed ? "    " : "";
  } else if (e.key === "Enter") {
    inputEl.value += keyPressed ? "\n" : "";
  } else if (e.key === "Backspace") {
    let startPosition = inputEl.selectionStart;
    let endPosition = inputEl.selectionEnd;

    inputEl.value =
      startPosition !== endPosition
        ? inputEl.value.slice(0, startPosition) +
          inputEl.value.slice(endPosition)
        : inputEl.value.slice(0, startPosition - 1) +
          inputEl.value.slice(startPosition);

    inputEl.selectionEnd =
      startPosition !== endPosition ? startPosition : startPosition - 1;
  } else if (e.key === "Delete") {
    let startPosition = inputEl.selectionStart;

    inputEl.value =
      inputEl.value.slice(0, startPosition) +
      inputEl.value.slice(startPosition + 1);

    inputEl.selectionEnd = startPosition;
  } else if (e.key === "ArrowLeft") {
    inputEl.selectionStart -= 1;
    inputEl.selectionEnd -= 1;
    inputEl.focus();
  } else if (e.key === "ArrowRight") {
    inputEl.selectionStart += 1;
    inputEl.selectionEnd += 1;
    inputEl.focus();
  } else if (
    !e.ctrlKey &&
    !e.altKey &&
    e.key !== "Delete" &&
    e.key !== "Backspace" &&
    e.key !== "Enter"
  ) {
    let startPosition = inputEl.selectionStart;
    let endPosition = inputEl.selectionEnd;

    inputEl.value = keyPressed
      ? inputEl.value.slice(0, startPosition) +
        keyPressed.textContent +
        inputEl.value.slice(startPosition)
      : "";

    inputEl.selectionEnd = startPosition + 1;
  }
});

document.addEventListener("keyup", (e) => {
  const keyPressed = document.querySelector(`#key-${e.code}`);

  if (e.key === "CapsLock") {
    !isCaps ? keyPressed?.classList.remove("key_active") : null;
    return;
  } else if (e.key === "Shift") {
    let keyIndex = 0;

    for (let i = 0; i < keystrokes.length; i++) {
      keystrokesArr = Object.values(keystrokes[i]);
      keyCodes = Object.keys(keystrokes[i]);

      for (let j = 0; j < keystrokesArr.length; j++) {
        document.querySelectorAll(".key")[keyIndex].textContent =
          isCaps &&
          keystrokesArr[j][lang].val !== "Backspace" &&
          keystrokesArr[j][lang].val !== "Del" &&
          keystrokesArr[j][lang].val !== "Tab" &&
          keystrokesArr[j][lang].val !== "CapsLock" &&
          keystrokesArr[j][lang].val !== "Enter" &&
          keystrokesArr[j][lang].val !== "Shift" &&
          keystrokesArr[j][lang].val !== "Ctrl" &&
          keystrokesArr[j][lang].val !== "Win" &&
          keystrokesArr[j][lang].val !== "Alt"
            ? keystrokesArr[j][lang].val.toUpperCase()
            : keystrokesArr[j][lang].val;

        keyIndex++;
      }
    }
  }
  keyPressed?.classList.remove("key_active");
});

document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("mousedown", (e) => {
    e.preventDefault();

    const keyPressed = e.target;
    keyPressed?.classList.add("key_active");

    if (keyPressed.textContent === "CapsLock") {
      let keyIndex = 0;

      for (let i = 0; i < keystrokes.length; i++) {
        keystrokesArr = Object.values(keystrokes[i]);
        keyCodes = Object.keys(keystrokes[i]);

        for (let j = 0; j < keystrokesArr.length; j++) {
          document.querySelectorAll(".key")[keyIndex].textContent =
            !isCaps &&
            keystrokesArr[j][lang].val !== "Backspace" &&
            keystrokesArr[j][lang].val !== "Del" &&
            keystrokesArr[j][lang].val !== "Tab" &&
            keystrokesArr[j][lang].val !== "CapsLock" &&
            keystrokesArr[j][lang].val !== "Enter" &&
            keystrokesArr[j][lang].val !== "Shift" &&
            keystrokesArr[j][lang].val !== "Ctrl" &&
            keystrokesArr[j][lang].val !== "Win" &&
            keystrokesArr[j][lang].val !== "Alt"
              ? keystrokesArr[j][lang].val.toUpperCase()
              : keystrokesArr[j][lang].val;

          keyIndex++;
        }
      }

      isCaps = isCaps ? false : true;
    } else if (keyPressed.textContent === "Shift") {
      let keyIndex = 0;

      for (let i = 0; i < keystrokes.length; i++) {
        keystrokesArr = Object.values(keystrokes[i]);
        keyCodes = Object.keys(keystrokes[i]);

        for (let j = 0; j < keystrokesArr.length; j++) {
          document.querySelectorAll(".key")[keyIndex].textContent =
            isCaps &&
            keystrokesArr[j][lang].val !== "Backspace" &&
            keystrokesArr[j][lang].val !== "Del" &&
            keystrokesArr[j][lang].val !== "Tab" &&
            keystrokesArr[j][lang].val !== "CapsLock" &&
            keystrokesArr[j][lang].val !== "Enter" &&
            keystrokesArr[j][lang].val !== "Shift" &&
            keystrokesArr[j][lang].val !== "Ctrl" &&
            keystrokesArr[j][lang].val !== "Win" &&
            keystrokesArr[j][lang].val !== "Alt"
              ? keystrokesArr[j][lang].shiftVal.toLowerCase()
              : keystrokesArr[j][lang].shiftVal;
          keyIndex++;
        }
      }
    } else if (keyPressed.textContent === "Tab") {
      inputEl.value += keyPressed ? "    " : "";
    } else if (keyPressed.textContent === "Enter") {
      inputEl.value += keyPressed ? "\n" : "";
    } else if (keyPressed.textContent === "Backspace") {
      let startPosition = inputEl.selectionStart;
      let endPosition = inputEl.selectionEnd;

      inputEl.value =
        startPosition !== endPosition
          ? inputEl.value.slice(0, startPosition) +
            inputEl.value.slice(endPosition)
          : inputEl.value.slice(0, startPosition - 1) +
            inputEl.value.slice(startPosition);

      inputEl.selectionEnd =
        startPosition !== endPosition ? startPosition : startPosition - 1;
    } else if (keyPressed.textContent === "Del") {
      let startPosition = inputEl.selectionStart;

      inputEl.value =
        inputEl.value.slice(0, startPosition) +
        inputEl.value.slice(startPosition + 1);

      inputEl.selectionEnd = startPosition;
    } else if (keyPressed.textContent === "◄") {
      inputEl.selectionStart -= 1;
      inputEl.selectionEnd -= 1;
      inputEl.focus();
    } else if (keyPressed.textContent === "►") {
      inputEl.selectionStart += 1;
      inputEl.selectionEnd += 1;
      inputEl.focus();
    } else if (
      keyPressed.textContent !== "Ctrl" &&
      keyPressed.textContent !== "Alt" &&
      keyPressed.textContent !== "Delete" &&
      keyPressed.textContent !== "Backspace" &&
      keyPressed.textContent !== "Enter" &&
      keyPressed.textContent !== "Win"
    ) {
      let startPosition = inputEl.selectionStart;

      inputEl.value = keyPressed
        ? inputEl.value.slice(0, startPosition) +
          keyPressed.textContent +
          inputEl.value.slice(startPosition)
        : "";

      inputEl.selectionEnd = startPosition + 1;
    }
  });

  key.addEventListener("mouseup", (e) => {
    const keyPressed = e.target;

    if (keyPressed.textContent === "CapsLock") {
      !isCaps ? keyPressed?.classList.remove("key_active") : null;
      return;
    } else if (keyPressed.textContent === "Shift") {
      let keyIndex = 0;

      for (let i = 0; i < keystrokes.length; i++) {
        keystrokesArr = Object.values(keystrokes[i]);
        keyCodes = Object.keys(keystrokes[i]);

        for (let j = 0; j < keystrokesArr.length; j++) {
          document.querySelectorAll(".key")[keyIndex].textContent =
            isCaps &&
            keystrokesArr[j][lang].val !== "Backspace" &&
            keystrokesArr[j][lang].val !== "Del" &&
            keystrokesArr[j][lang].val !== "Tab" &&
            keystrokesArr[j][lang].val !== "CapsLock" &&
            keystrokesArr[j][lang].val !== "Enter" &&
            keystrokesArr[j][lang].val !== "Shift" &&
            keystrokesArr[j][lang].val !== "Ctrl" &&
            keystrokesArr[j][lang].val !== "Win" &&
            keystrokesArr[j][lang].val !== "Alt"
              ? keystrokesArr[j][lang].val.toUpperCase()
              : keystrokesArr[j][lang].val;

          keyIndex++;
        }
      }
    }
    keyPressed?.classList.remove("key_active");
  });
});
