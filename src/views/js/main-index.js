import { updateClock } from "../../utils/tiempo-lugar-fecha.js";

updateClock();
setInterval(updateClock, 1000)

import { updateLocation } from "../../utils/tiempo-lugar-fecha.js";

window.addEventListener("load", () => {
    updateLocation();
});