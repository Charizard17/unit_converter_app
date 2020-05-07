document.getElementById("output").style.visibility = "hidden";

document.getElementById("kgInput").addEventListener("input", function (e) {
  document.getElementById("output").style.visibility = "visible";

  let kg = e.target.value;

  document.getElementById("gramsOutput").innerHTML = kg * 1000;

  document.getElementById("poundsOutput").innerHTML = kg * 2.2046;

  document.getElementById("ozOutput").innerHTML = kg * 35274;
});

function changeGrams() {
  document.getElementById("kgInput").placeholder = "Enter Grams";

  document.getElementById("kgInput").addEventListener("input", function (e) {
    document.getElementById("output").style.visibility = "visible";

    let gram = e.target.value;

    document.getElementById("gramsh4").innerText = "Kilograms";
    document.getElementById("gramsOutput").innerHTML = gram / 1000;

    document.getElementById("poundsh4").innerText = "Pounds";
    document.getElementById("poundsOutput").innerHTML = (gram * 2.2046) / 1000;

    document.getElementById("ouncesh4").innerText = "Ounces";
    document.getElementById("ozOutput").innerHTML = (gram * 35274) / 1000;
  });
}

function changePounds() {
  document.getElementById("kgInput").placeholder = "Enter Pounds";

  document.getElementById("kgInput").addEventListener("input", function (e) {
    document.getElementById("output").style.visibility = "visible";

    let pound = e.target.value;
    
    document.getElementById("gramsh4").innerText = "Grams";
    document.getElementById("gramsOutput").innerHTML = pound * 453.592;

    document.getElementById("poundsh4").innerText = "Kilograms";
    document.getElementById("poundsOutput").innerHTML = pound * 0.453592;

    document.getElementById("ouncesh4").innerText = "Ounces";
    document.getElementById("ozOutput").innerHTML = pound * 16;
  });
}

function changeOunces() {
  document.getElementById("kgInput").placeholder = "Enter Ounces";

  document.getElementById("kgInput").addEventListener("input", function (e) {
    document.getElementById("output").style.visibility = "visible";

    let ounce = e.target.value;
    
    document.getElementById("gramsh4").innerText = "Grams";
    document.getElementById("gramsOutput").innerHTML = ounce * 28.3495;

    document.getElementById("poundsh4").innerText = "Kilograms";
    document.getElementById("poundsOutput").innerHTML = ounce * 0.0283495;

    document.getElementById("ouncesh4").innerText = "Pounds";
    document.getElementById("ozOutput").innerHTML = ounce * 0.0625;
  });
}
