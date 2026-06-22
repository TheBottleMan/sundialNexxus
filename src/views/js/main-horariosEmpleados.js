import {
  renderCalendar,
  mesAnterior,
  mesSiguiente,
} from "../../utils/tiempo-lugar-fecha.js";

renderCalendar();

document.getElementById("mes-anterior").addEventListener("click", mesAnterior);

document
  .getElementById("mes-siguiente")
  .addEventListener("click", mesSiguiente);
