/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const btnConvert = document.getElementById("btn-Convert");
const numData =  document.getElementById("numContainer");
let lengthData = document.getElementById("length-data");
let volumeData = document.getElementById("volume-data");
let massData = document.getElementById("mass-data");
const feet = 3.281;
const gallon = 0.264;
const pound = 2.204;

btnConvert.addEventListener("click", function(){
   let data = numData.value;
   let lenConvert = `${data} meters = ${(data * feet).toFixed(3)} feet | ${data} feet = ${(data / feet).toFixed(3)} meters`;
   console.log(lenConvert);
   let volConvert = `${data} liters = ${(data * gallon).toFixed(3)} gallons | ${data} gallons = ${(data / gallon).toFixed(3)} liters`;
   console.log(volConvert);
   let massConvert = `${data} kilos = ${(data * pound).toFixed(3)} pounds | ${data} pounds = ${(data / pound).toFixed(3)} kilos`;
   console.log(massConvert);
   
   lengthData.innerHTML = lenConvert;
   volumeData.innerHTML = volConvert;
   massData.innerHTML = massConvert;
   
   
   
});
