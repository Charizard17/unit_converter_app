document.getElementById("output").style.visibility = "hidden";

document.getElementById("mInput").addEventListener("input", function (e) {
  document.getElementById("output").style.visibility = "visible";

  let m = e.target.value;

  document.getElementById("cmOutput").innerHTML = m * 1000;

  document.getElementById("feetOutput").innerHTML = m * 3.28084;

  document.getElementById("inchOutput").innerHTML = m * 39.3701;

  document.getElementById("yardOutput").innerHTML = m * 1.09361;
});