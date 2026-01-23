const pantalla = document.querySelector('#pantalla');
const botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonPulsado = boton.textContent;

        // 1. Botón C: Limpiar la pantalla por completo
        if (boton.id === "C") {
            pantalla.textContent = "0";
            return; // Salimos de la función para que no ejecute lo de abajo
        }

        // 2. Botón Borrar (⌫): Borrar el último carácter
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        // 3. Lógica para escribir números
        // Filtramos: Si no es un botón de operación especial, escribimos
        if (boton.id !== "igual" && boton.id !== "CE" && !boton.classList.contains("gris")) {
             if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
                pantalla.textContent = botonPulsado;
            } else {
                pantalla.textContent += botonPulsado;
            }
        }
    });
});