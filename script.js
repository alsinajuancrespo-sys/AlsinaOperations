const form = document.getElementById("sum-form");
const resultEl = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    resultEl.textContent = "Introduce dos números válidos.";
    resultEl.classList.add("error");
    return;
  }

  resultEl.classList.remove("error");
  resultEl.textContent = `Resultado: ${a + b}`;
});
