document.getElementById("output").style.visibility = "hidden";

document.getElementById("mInput").addEventListener("input", function (e) {
  document.getElementById("output").style.visibility = "visible";

  let m = e.target.value;

  document.getElementById("cmOutput").innerHTML = m * 1000;

  document.getElementById("feetOutput").innerHTML = m * 3.28084;

  document.getElementById("inchOutput").innerHTML = m * 39.3701;

  document.getElementById("yardOutput").innerHTML = m * 1.09361;
});

function changeCentimeter() {
  document.getElementById("mInput").placeholder = "Enter Centimeter";

  document.getElementById("mInput").addEventListener("input", function (e) {
    document.getElementById("output").style.visibility = "visible";

    let cm = e.target.value;

    document.getElementById("cmh4").innerText = "Meter";
    document.getElementById("cmOutput").innerHTML = cm / 1000;

    document.getElementById("feeth4").innerText = "Feet";
    document.getElementById("feetOutput").innerHTML = cm * 3.28084 / 1000;
    
    document.getElementById("inchh4").innerText = "Inch";
    document.getElementById("inchOutput").innerHTML = cm * 39.3701 / 1000;

    document.getElementById("yardh4").innerText = "Yard";
    document.getElementById("yardOutput").innerHTML = cm * 1.09361 / 1000;
  });
}

function changeFeet() {
  document.getElementById("mInput").placeholder = "Enter Feet";

  document.getElementById("mInput").addEventListener("input", function (e) {
    document.getElementById("output").style.visibility = "visible";

    let feet = e.target.value;

    document.getElementById("cmh4").innerText = "Centimeter";
    document.getElementById("cmOutput").innerHTML = feet * 30.48;

    document.getElementById("feeth4").innerText = "Meter";
    document.getElementById("feetOutput").innerHTML = feet * 0.3048;
    
    document.getElementById("inchh4").innerText = "Inch";
    document.getElementById("inchOutput").innerHTML = feet * 12;

    document.getElementById("yardh4").innerText = "Yard";
    document.getElementById("yardOutput").innerHTML = feet * 0.333333;
  });
}

function changeInch() {
  document.getElementById("mInput").placeholder = "Enter Inch";

  document.getElementById("mInput").addEventListener("input", function (e) {
    document.getElementById("output").style.visibility = "visible";

    let inch = e.target.value;

    document.getElementById("cmh4").innerText = "Centimeter";
    document.getElementById("cmOutput").innerHTML = inch * 2.54;

    document.getElementById("feeth4").innerText = "Feet";
    document.getElementById("feetOutput").innerHTML = inch * 0.0833333;
    
    document.getElementById("inchh4").innerText = "Meter";
    document.getElementById("inchOutput").innerHTML = inch * 0.0254;

    document.getElementById("yardh4").innerText = "Yard";
    document.getElementById("yardOutput").innerHTML = inch * 0.027778;
  });
}

function changeYard() {
  document.getElementById("mInput").placeholder = "Enter Yard";

  document.getElementById("mInput").addEventListener("input", function (e) {
    document.getElementById("output").style.visibility = "visible";

    let yard = e.target.value;

    document.getElementById("cmh4").innerText = "Centimeter";
    document.getElementById("cmOutput").innerHTML = yard * 91.44;

    document.getElementById("feeth4").innerText = "Feet";
    document.getElementById("feetOutput").innerHTML = yard * 3;
    
    document.getElementById("inchh4").innerText = "Inch";
    document.getElementById("inchOutput").innerHTML = yard * 36;

    document.getElementById("yardh4").innerText = "Meter";
    document.getElementById("yardOutput").innerHTML = yard * 0.9144;
  });
}