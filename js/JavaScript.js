// 1. MEMORIA DE LA CALCULADORA
let valorAnterior = "";
let operacionActual = null;
let reiniciarPantalla = false;

const pantalla = document.querySelector('#pantalla');
const botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonPulsado = boton.textContent.trim();

        
        if (boton.id === "C" || boton.id === "CE") {
            pantalla.textContent = "0";
            valorAnterior = "";
            operacionActual = null;
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
            if (reiniciarPantalla) {
                pantalla.textContent = "0.";
                reiniciarPantalla = false;
                return;
            }
            if (!pantalla.textContent.includes(".")) {
                pantalla.textContent += ".";
            }
            return;
        }

        if (!isNaN(botonPulsado) && botonPulsado !== "") {
            if (pantalla.textContent === "0" || reiniciarPantalla) {
                pantalla.textContent = botonPulsado;
                reiniciarPantalla = false;
            } else {
                pantalla.textContent += botonPulsado;
            }
            return;
        }

        const operadores = ["+", "−", "X", "/"];
        if (operadores.includes(botonPulsado)) {
            valorAnterior = pantalla.textContent;
            operacionActual = botonPulsado;
            reiniciarPantalla = true;
            return;
        }

        if (boton.id === "igual") {
            if (operacionActual === null || reiniciarPantalla) return;

            let num1 = parseFloat(valorAnterior);
            let num2 = parseFloat(pantalla.textContent);
            let resultado = 0;

            if (operacionActual === "+") resultado = num1 + num2;
            if (operacionActual === "−") resultado = num1 - num2;
            if (operacionActual === "X") resultado = num1 * num2;
            if (operacionActual === "/") {
                resultado = num2 === 0 ? "Error!" : num1 / num2;
            }

            pantalla.textContent = resultado;
            operacionActual = null;
            reiniciarPantalla = true; 
            return;
        }



        if (boton.id === "1x") {
    let valor = parseFloat(pantalla.textContent);
    if (valor === 0) {
        pantalla.textContent = "Error!";
    } else {
        pantalla.textContent = 1 / valor;
    }
    reiniciarPantalla = true;
    return;
}

    if (boton.id === "x2") {
        let valor = parseFloat(pantalla.textContent);
        pantalla.textContent = Math.pow(valor, 2); 
        reiniciarPantalla = true;
        return;
    }


    if (boton.id === "vx") {
        let valor = parseFloat(pantalla.textContent);
        if (valor < 0) {
            pantalla.textContent = "Error!"; 
        } else {
            pantalla.textContent = Math.sqrt(valor);
        }
        reiniciarPantalla = true;
        return;
    }


    });
});