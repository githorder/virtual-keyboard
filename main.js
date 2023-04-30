const keystrokes = [
  {
    Backquote: { en: "`", ru: "ё" },
    Digit1: { en: "1", ru: "1" },
    Digit2: { en: "2", ru: "2" },
    Digit3: { en: "3", ru: "3" },
    Digit4: { en: "4", ru: "4" },
    Digit5: { en: "5", ru: "5" },
    Digit6: { en: "6", ru: "6" },
    Digit7: { en: "7", ru: "7" },
    Digit8: { en: "8", ru: "8" },
    Digit9: { en: "9", ru: "9" },
    Digit0: { en: "0", ru: "0" },
    Minus: { en: "-", ru: "-" },
    Equal: { en: "=", ru: "=" },
    Backspace: { en: "Backspace", ru: "Backspace" },
  },
  {
    Tab: { en: "Tab", ru: "Tab" },
    KeyQ: { en: "q", ru: "й" },
    KeyW: { en: "w", ru: "ц" },
    KeyE: { en: "e", ru: "у" },
    KeyR: { en: "r", ru: "к" },
    KeyT: { en: "t", ru: "е" },
    KeyY: { en: "y", ru: "н" },
    KeyU: { en: "u", ru: "г" },
    KeyI: { en: "i", ru: "ш" },
    KeyO: { en: "o", ru: "щ" },
    KeyP: { en: "p", ru: "з" },
    BracketLeft: { en: "[", ru: "х" },
    BracketRight: { en: "]", ru: "ъ" },
    Backslash: { en: "\\", ru: "\\" },
    Delete: { en: "Del", ru: "Del" },
  },
  {
    CapsLock: { en: "CapsLock", ru: "CapsLock" },
    KeyA: { en: "a", ru: "ф" },
    KeyS: { en: "s", ru: "ы" },
    KeyD: { en: "d", ru: "в" },
    KeyF: { en: "f", ru: "а" },
    KeyG: { en: "g", ru: "п" },
    KeyH: { en: "h", ru: "р" },
    KeyJ: { en: "j", ru: "о" },
    KeyK: { en: "k", ru: "л" },
    KeyL: { en: "l", ru: "д" },
    Semicolon: { en: ";", ru: "ж" },
    Quote: { en: "'", ru: "э" },
    Enter: { en: "Enter", ru: "Enter" },
  },
  {
    ShiftLeft: { en: "Shift", ru: "Shift" },
    KeyZ: { en: "z", ru: "я" },
    KeyX: { en: "x", ru: "ч" },
    KeyC: { en: "c", ru: "с" },
    KeyV: { en: "v", ru: "м" },
    KeyB: { en: "b", ru: "и" },
    KeyN: { en: "n", ru: "т" },
    KeyM: { en: "m", ru: "ь" },
    Comma: { en: ",", ru: "б" },
    Period: { en: ".", ru: "ю" },
    Slash: { en: "/", ru: "." },
    ArrowUp: { en: "▲", ru: "▲" },
    ShiftRight: { en: "Shift", ru: "Shift" },
  },
  {
    ControlLeft: { en: "Ctrl", ru: "Ctrl" },
    Win: { en: "Win", ru: "Win" },
    AltLeft: { en: "Alt", ru: "Alt" },
    Space: { en: " ", ru: " " },
    ArrowLeft: { en: "◄", ru: "◄" },
    ArrowDown: { en: "▼", ru: "▼" },
    ArrowRight: { en: "►", ru: "►" },
    ControlRight: { en: "Ctrl", ru: "Ctrl" },
  },
];

let lang = "en";

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
    }">${keystrokesArr[j][lang]}</div>
    `;
  }

  keysRow.insertAdjacentHTML("beforeend", keyHTML);
  keyboardEl.append(keysRow);
}

const inputEl = document.querySelector(".textarea");

document.addEventListener("keydown", (e) => {
  e.preventDefault();

  console.log(e);
  const keyPressed = document.querySelector(`#key-${e.code}`);
  keyPressed.classList.add("key_active");

  if (e.ctrlKey && e.altKey) {
    lang = lang === "en" ? "ru" : "en";
    let keyIndex = 0;

    for (let i = 0; i < keystrokes.length; i++) {
      keystrokesArr = Object.values(keystrokes[i]);
      keyCodes = Object.keys(keystrokes[i]);

      for (let j = 0; j < keystrokesArr.length; j++) {
        document.querySelectorAll(".key")[keyIndex].textContent =
          keystrokesArr[j][lang];

        keyIndex++;
      }
    }

    return;
  } else if (e.key === "Backspace") {
    inputEl.value = inputEl.value.slice(0, inputEl.value.length - 1);
    return;
  } else if (
    !e.ctrlKey &&
    !e.altKey &&
    !e.shiftKey &&
    e.key !== "CapsLock" &&
    e.key !== "Tab"
  ) {
    console.log(e);

    inputEl.value += keyPressed.textContent;
  }
});

document.addEventListener("keyup", (e) => {
  const keyPressed = document.querySelector(`#key-${e.code}`);
  keyPressed.classList.remove("key_active");
});
