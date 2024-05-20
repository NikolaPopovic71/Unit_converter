function performConversion() {
  var inputNumber = parseFloat(document.getElementById("inputValue").value);
  var decimals = parseInt(document.getElementById("decimalPlaces").value);
  var result;

  // Example conversion, replace with your actual conversion logic
  result = convertUnits(inputNumber); // Assume convertUnits is your conversion function

  // Format result to the selected number of decimal places
  result = result.toFixed(decimals);

  // Display the result somewhere on your page or handle as needed
  console.log(result); // For debugging, replace with actual display logic
}

document.getElementById("inputValue").addEventListener("input", function () {
  var value = this.value;
  // Check if the value matches a pattern that allows numbers with up to four decimal places
  if (!value.match(/^\d*(\.\d{0,9})?$/)) {
    // If not, fix the value to conform to the required format
    this.value = parseFloat(value).toFixed(9);
  }
});

const conversions = {
  "°C to °F": (input) => (input * 9) / 5 + 32,
  "°F to °C": (input) => ((input - 32) * 5) / 9,
  "m to ft": (input) => input / 0.3048,
  "ft to m": (input) => input * 0.3048,
  "km to mi": (input) => input / 1.609344,
  "mi to km": (input) => input * 1.609344,
  "jutro to ar": (input) => input * 57.55,
  "ar to jutro": (input) => input / 57.55,
  "lanac to ar": (input) => input * 71.92,
  "ar to lanac": (input) => input / 71.92,
  "dulum to ar": (input) => input * 10.0,
  "ar to dulum": (input) => input / 10.0,
  "g to oz": (input) => input / 28.34952,
  "oz to g": (input) => input * 28.34952,
  "g to lb": (input) => input / 453.59237,
  "lb to g": (input) => input * 453.59237,
  "L to bbl": (input) => input * 0.0062898108,
  "bbl to L": (input) => input * 158.98729493,
  "atm to bar": (input) => input * 1.01325,
  "bar to atm": (input) => input * 0.9869232667,
  "m/s to km/h": (input) => input * 3.6,
  "km/h to m/s": (input) => input * 0.2777777778,
  "km/h to mi/h": (input) => input * 0.6213711922,
  "mi/h to km/h": (input) => input * 1.609344,
};

function performConversion(input, conversionType) {
  var decimals = parseInt(document.getElementById("decimalPlaces").value);
  if (conversions[conversionType]) {
    var result = conversions[conversionType](input);
    return result.toFixed(decimals);
  }
  return "Invalid conversion type";
}

document.querySelector(".buttons").addEventListener("click", function (event) {
  if (event.target.classList.contains("frequent-conversion")) {
    // Remove active class from all buttons
    document.querySelectorAll(".frequent-conversion").forEach((btn) => {
      btn.classList.remove("active");
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });

    // Mark clicked button as active
    event.target.classList.add("active");
    event.target.style.backgroundColor = "#177b4d";
    event.target.style.color = "white";

    convertToSelectedUnit();
  }
});

function convertToSelectedUnit() {
  var inputNumber = parseFloat(document.getElementById("inputValue").value);
  if (isNaN(inputNumber)) {
    document.getElementById("conversionResult").innerText =
      "Please enter a valid number.";
    return;
  }
  var activeButton = document.querySelector(".frequent-conversion.active");
  var result = performConversion(inputNumber, activeButton.innerText);
  var resultElement = document.getElementById("conversionResult");
  resultElement.innerText = `${inputNumber} ${activeButton.innerText} is ${result}`;
  resultElement.scrollIntoView({ behavior: "smooth", block: "end" });
}

document.getElementById("resetButton").addEventListener("click", function () {
  document.getElementById("inputValue").value = ""; // Clears the input field
  document.getElementById("decimalPlaces").selectedIndex = 0; // Resets the dropdown to the default state
  document.getElementById("conversionResult").innerText = ""; // Clears the conversion result

  document
    .querySelectorAll(".frequent-conversion")
    .forEach((btn) => (btn.style.backgroundColor = ""));
});

function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function filterFunction() {
  var input, filter, ul, li, p, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  p = div.getElementsByTagName("p");
  for (i = 0; i < p.length; i++) {
    txtValue = p[i].textContent || p[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      p[i].style.display = "";
    } else {
      p[i].style.display = "none";
    }
  }
}

function todayDate() {
  var d = new Date();
  var n = d.getFullYear() + "  ";
  return (document.getElementById("date").innerHTML = n);
}
