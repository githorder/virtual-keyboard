// const keystrokes = [
//   {
//     Backquote: { en: "`", ru: "ё" },
//     Digit1: {
//       en: { val: "1", shiftVal: "!" },
//       ru: { val: "1", shiftVal: "!" },
//     },
//     Digit2: { en: "2", ru: "2" },
//     Digit3: { en: "3", ru: "3" },
//     Digit4: { en: "4", ru: "4" },
//     Digit5: { en: "5", ru: "5" },
//     Digit6: { en: "6", ru: "6" },
//     Digit7: { en: "7", ru: "7" },
//     Digit8: { en: "8", ru: "8" },
//     Digit9: { en: "9", ru: "9" },
//     Digit0: { en: "0", ru: "0" },
//     Minus: { en: "-", ru: "-" },
//     Equal: { en: "=", ru: "=" },
//     Backspace: { en: "Backspace", ru: "Backspace" },
//   },
//   {
//     Tab: { en: "Tab", ru: "Tab" },
//     KeyQ: { en: "q", ru: "й" },
//     KeyW: { en: "w", ru: "ц" },
//     KeyE: { en: "e", ru: "у" },
//     KeyR: { en: "r", ru: "к" },
//     KeyT: { en: "t", ru: "е" },
//     KeyY: { en: "y", ru: "н" },
//     KeyU: { en: "u", ru: "г" },
//     KeyI: { en: "i", ru: "ш" },
//     KeyO: { en: "o", ru: "щ" },
//     KeyP: { en: "p", ru: "з" },
//     BracketLeft: { en: "[", ru: "х" },
//     BracketRight: { en: "]", ru: "ъ" },
//     Backslash: { en: "\\", ru: "\\" },
//     Delete: { en: "Del", ru: "Del" },
//   },
//   {
//     CapsLock: { en: "CapsLock", ru: "CapsLock" },
//     KeyA: { en: "a", ru: "ф" },
//     KeyS: { en: "s", ru: "ы" },
//     KeyD: { en: "d", ru: "в" },
//     KeyF: { en: "f", ru: "а" },
//     KeyG: { en: "g", ru: "п" },
//     KeyH: { en: "h", ru: "р" },
//     KeyJ: { en: "j", ru: "о" },
//     KeyK: { en: "k", ru: "л" },
//     KeyL: { en: "l", ru: "д" },
//     Semicolon: { en: ";", ru: "ж" },
//     Quote: { en: "'", ru: "э" },
//     Enter: { en: "Enter", ru: "Enter" },
//   },
//   {
//     ShiftLeft: { en: "Shift", ru: "Shift" },
//     KeyZ: { en: "z", ru: "я" },
//     KeyX: { en: "x", ru: "ч" },
//     KeyC: { en: "c", ru: "с" },
//     KeyV: { en: "v", ru: "м" },
//     KeyB: { en: "b", ru: "и" },
//     KeyN: { en: "n", ru: "т" },
//     KeyM: { en: "m", ru: "ь" },
//     Comma: { en: ",", ru: "б" },
//     Period: { en: ".", ru: "ю" },
//     Slash: { en: "/", ru: "." },
//     ArrowUp: { en: "▲", ru: "▲" },
//     ShiftRight: { en: "Shift", ru: "Shift" },
//   },
//   {
//     ControlLeft: { en: "Ctrl", ru: "Ctrl" },
//     Win: { en: "Win", ru: "Win" },
//     AltLeft: { en: "Alt", ru: "Alt" },
//     Space: { en: " ", ru: " " },
//     ArrowLeft: { en: "◄", ru: "◄" },
//     ArrowDown: { en: "▼", ru: "▼" },
//     ArrowRight: { en: "►", ru: "►" },
//     ControlRight: { en: "Ctrl", ru: "Ctrl" },
//   },
// ];

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

let lang = "en";
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

app.insertAdjacentHTML("beforeend", titleHTML);
app.insertAdjacentHTML("beforeend", inputHTML);
app.insertAdjacentHTML("beforeend", keyboardHTML);

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
  } else if (
    !e.ctrlKey &&
    !e.altKey &&
    e.key !== "Delete" &&
    e.key !== "Backspace" &&
    e.key !== "Enter"
  ) {
    inputEl.value += keyPressed ? keyPressed.textContent : "";
  }
});

document.addEventListener("keyup", (e) => {
  const keyPressed = document.querySelector(`#key-${e.code}`);
  const inputEl = document.querySelector(".textarea");
  let caretStartPosition = inputEl.selectionStart;

  if (e.key === "Backspace") {
    inputEl.value = inputEl.value.slice(0, caretStartPosition - 1);
  } else if (e.key === "CapsLock") {
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
  } else if (e.key === "Delete") {
    let currentText = inputEl.value;
    inputEl.value =
      currentText.slice(0, caretStartPosition - 1) +
      currentText.slice(caretStartPosition + 1);
  }

  keyPressed?.classList.remove("key_active");
});
