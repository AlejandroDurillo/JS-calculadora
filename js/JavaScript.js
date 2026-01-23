const pantalla = document.querySelector('#pantalla');
const botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonPulsado = boton.textContent.trim();

        
        if (boton.id === "C") {
            pantalla.textContent = "0";
            return; 
        }

       
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return; 
        }

       
        if (botonPulsado === ".") {
            if (!pantalla.textContent.includes(".")) {
                pantalla.textContent += ".";
            }
            return; 
        }

        
        if (!isNaN(botonPulsado) && botonPulsado !== "") {
            if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
                pantalla.textContent = botonPulsado;
            } else {
                pantalla.textContent += botonPulsado;
            }
            return; 
        }
        
        
      
    });
});