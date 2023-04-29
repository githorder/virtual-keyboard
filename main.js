const app = document.createElement("div");
app.classList.add("app");

document.body.append(app);

const titleHTML = `<h1 class="title">RSS Virtual keyboard</h1>`;

const keyHTML = `
  <div class="key">
    <span class="key__value">q</span>
  </div>
`;

const inputHTML = `
  <div class="container">
    <textarea type="textarea" class="textarea" cols="50" rows="5"></textarea>
  </div>
`;

app.insertAdjacentHTML("beforeend", titleHTML);
app.insertAdjacentHTML("beforeend", inputHTML);
app.insertAdjacentHTML("beforeend", keyHTML);

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
