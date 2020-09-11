// Write your JavaScript code here!

window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">
         `
      })
   });

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
