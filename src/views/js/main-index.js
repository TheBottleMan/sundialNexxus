import { updateClock } from "../../utils/tiempo-lugar-fecha.js";

updateClock();
setInterval(updateClock, 1000);

import { updateLocation } from "../../utils/tiempo-lugar-fecha.js";

window.addEventListener("load", () => {
  updateLocation();
});

//Avisos de entrada y salida.

// Botones de apertura
const startWorkBtn = document.getElementById("startWork");
const endWorkBtn = document.getElementById("endWork");

// Tarjetas emergentes
const startWorkCard = document.getElementById("startWorkCard");
const endWorkCard = document.getElementById("endWorkCard");

// Botones de cierre
const startCloseBtn = document.getElementById("startCardClose");
const endCloseBtn = document.getElementById("endCardClose");


// Abrir tarjeta de Entrada
startWorkBtn.addEventListener("click", () => {
    startWorkCard.classList.add("open");
});


// Cerrar tarjeta de Entrada
startCloseBtn.addEventListener("click", () => {
    startWorkCard.classList.remove("open");
});


// Abrir tarjeta de Salida
endWorkBtn.addEventListener("click", () => {
    endWorkCard.classList.add("open");
});


// Cerrar tarjeta de Salida
endCloseBtn.addEventListener("click", () => {
    endWorkCard.classList.remove("open");
});