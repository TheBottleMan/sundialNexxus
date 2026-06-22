//Función del reloj virtual en tiempo real

export function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

// Función para encontrar la ubicación del usuario

export async function updateLocation() {
  const currentLocation = document.querySelector("#currentLocation");

  currentLocation.textContent = "Obteniendo ubicación...";

  if (!navigator.geolocation) {
    currentLocation.textContent = "Geolocalización no soportada";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
        );

        const data = await response.json();

        const city =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.county ||
          "Ubicación desconocida";

        const country = data.address.country;

        currentLocation.textContent = `${city}, ${country}`;
      } catch (error) {
        console.error(error);
        currentLocation.textContent = "Error obteniendo ubicación";
      }
    },

    (error) => {
      console.error(error);

      switch (error.code) {
        case error.PERMISSION_DENIED:
          currentLocation.textContent = "Permiso denegado";
          break;

        case error.POSITION_UNAVAILABLE:
          currentLocation.textContent = "Ubicación no disponible";
          break;

        case error.TIMEOUT:
          currentLocation.textContent = "Tiempo agotado";
          break;

        default:
          currentLocation.textContent = "Error desconocido";
      }
    },
  );
}

//Función para el calendario en horariosEmpleados, es posible usarlo en algún otro caso si es necesario

//Definiendo los meses del año
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let fechaActual = new Date();

export function renderCalendar() {
  const grid = document.getElementById("grid-calendario");
  const titulo = document.getElementById("titulo-mes");

  grid.innerHTML = "";

  const año = fechaActual.getFullYear();
  const mes = fechaActual.getMonth();

  titulo.textContent = `${meses[mes]} ${año}`;

  const primerDia = new Date(año, mes, 1).getDay();

  const diasMes = new Date(año, mes + 1, 0).getDate();

  for (let i = 0; i < primerDia; i++) {
    const vacio = document.createElement("div");
    vacio.classList.add("dia-vacio");

    grid.appendChild(vacio);
  }

  for (let dia = 1; dia <= diasMes; dia++) {
    const boton = document.createElement("button");

    boton.classList.add("dia-calendario");

    boton.textContent = dia;

    boton.addEventListener("click", () => {
      document
        .querySelectorAll(".dia-calendario")
        .forEach((d) => d.classList.remove("activo"));

      boton.classList.add("activo");
    });

    grid.appendChild(boton);
  }
  console.log(document.getElementById("grid-calendario"));
}

//Funciones de las flechas del calendario

export function mesAnterior() {
  fechaActual.setMonth(fechaActual.getMonth() - 1);

  renderCalendar();
}

export function mesSiguiente() {
  fechaActual.setMonth(fechaActual.getMonth() + 1);

  renderCalendar();
}
