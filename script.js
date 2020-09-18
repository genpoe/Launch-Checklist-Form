// Write your JavaScript code here!

window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*6);
         div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
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
      } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
         alert("Please enter valid Pilot and Copilot names");
         event.preventDefault();
         console.log("it runs")
      }
      console.log(typeof(copilotName.value))

      let faultyItems = document.getElementById("faultyItems");
      faultyItems.style.visibility = "visible";

      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`
      pilotStatus.style.color = "green";
      copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`
      copilotStatus.style.color = 'green';

      let fuelStatus = document.getElementById("fuelStatus");
      fuelStatus.style.color = 'green';
      let launchBool = true;
      if (fuelLevel.value < 10000) {
         fuelStatus.innerHTML = "Fuel level too low for launch.";
         fuelStatus.style.color = 'red';
         launchBool = false;
      }
      
      let cargoStatus = document.getElementById("cargoStatus");
      cargoStatus.style.color = 'green';
      if (cargoMass.value > 10000) {
         cargoStatus.innerHTML = "Cargo level too high for launch."
         cargoStatus.style.color = 'red';
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
