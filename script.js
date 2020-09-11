// Write your JavaScript code here!

window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required.");
         event.preventDefault();
      } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Please enter valid Fuel Level and Cargo Mass.");
         event.preventDefault();
      }

      let faultyItems = document.getElementById("faultyItems");
      faultyItems.style.visibility = "visible";

      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`
      copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`

      let fuelStatus = document.getElementById("fuelStatus");
      let launchBool = true;
      if (fuelLevel.value < 10000) {
         fuelStatus.innerHTML = "Fuel level too low for launch.";
         launchBool = false;
      }
      
      let cargoStatus = document.getElementById("cargoStatus");
      if (cargoMass.value > 10000) {
         cargoStatus.innerHTML = "Cargo level too high for launch."
         launchBool = false;
      }
      
      let launchStatus = document.getElementById("launchStatus");
      if (!launchBool) {
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red";
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch"
         launchStatus.style.color = "green";
      }
   });

});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
