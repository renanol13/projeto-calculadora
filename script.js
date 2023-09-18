let res = document.querySelector("#res");
let cond = "";

let mostrarTela = (digit) => {
  cond += digit;
  if (cond.length <= 13) {
    res.innerHTML = cond;
  }
};

AC.addEventListener("click", () => {
  res.innerHTML = "";
  cond = "";
});

result.addEventListener("click", () => {
  try {
    msg = eval(res.innerHTML);
    res.innerHTML = msg;
  } catch (error) {
    alert("[ERRO!] Verifique Sua entrada!");
  }
});

const delet = () => {
  res.innerHTML = res.innerHTML.slice(0, -1);
};
