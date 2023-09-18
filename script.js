
let mostrarTela = (digit) => {
  let res = document.querySelector("#res");
  if (res.innerHTML.length <= 13) {
    res.innerHTML += digit;
  }
};

AC.addEventListener("click", () => {
  res.innerHTML = "";
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

