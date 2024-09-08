const prompt=require("prompt-sync")({sigint:true}); 

// Ask the user what type of fuel they use
let fuelType = prompt("What type of fuel do you use? (e.g., Gasoline, Diesel, Electric)");

// Output the result in the console
console.log("You use: " + fuelType);

