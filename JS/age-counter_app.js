let dynAge = document.getElementById("dynamic_age");
function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2];
  return (
    number +
    " " +
    titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  );
}
function birthDateToAge(x) {
  let n = new Date(),
    b = new Date(x),
    age = n.getFullYear() - b.getFullYear();
  return n.setFullYear(1972) < b.setFullYear(1972) ? age - 1 : age;
}

dynAge.textContent = declOfNum(birthDateToAge("1992-01-29"), [
  "years old",
  "years old",
  "years old",
]);
