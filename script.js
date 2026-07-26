const form = document.getElementById("sum-form");
const resultEl = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const c = Number(document.getElementById("c").value);

  if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
    resultEl.textContent = "Introduce tres números válidos.";
    resultEl.classList.add("error");
    return;
  }

  resultEl.classList.remove("error");
  resultEl.textContent = `Resultado: ${a + b + c}`;
});
