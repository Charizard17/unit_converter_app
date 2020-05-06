document.getElementById("output").style.visibility = "hidden";

document.getElementById("kgInput").addEventListener("input", function (e) {
  document.getElementById("output").style.visibility = "visible";

  let kg = e.target.value;

  document.getElementById("gramsOutput").innerHTML = kg * 1000;

  document.getElementById("poundsOutput").innerHTML = kg * 2.2046;

  document.getElementById("ozOutput").innerHTML = kg * 35274;
});