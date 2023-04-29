const keyHTML = `
  <div class="key">
    <span class="key__value">q</span>
  </div>
`;

const inputHTML = `
  <div class="container">
    <input class="textarea" type="textarea" />
  </div>
`;

const keyboardContainer = document.querySelector(".keyboard-container");

keyboardContainer.insertAdjacentHTML("afterbegin", inputHTML);
keyboardContainer.insertAdjacentHTML("beforeend", keyHTML);

const inputEl = document.querySelector(".textarea");

document.addEventListener("keydown", (e) => {
  console.log(e);

  if (e.ctrlKey && e.altKey) {
    document.querySelector(".key span").textContent =
      document.querySelector(".key span").textContent === "q" ? "й" : "q";
  }

  if (e.key === "q") {
    inputEl.value += e.key;
  }
});
