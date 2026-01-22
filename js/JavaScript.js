const pantalla = document.getElementById("pantalla");
    const btn_uno = document.getElementById("boton_uno");
    const btn_dos = document.getElementById("boton_dos");
    const btn_tres = document.getElementById("boton_tres");
    const btn_cuatro = document.getElementById("boton_cuatro");
    const btn_cinco = document.getElementById("boton_cinco");
    const btn_seis= document.getElementById("boton_seis");
    const btn_siete= document.getElementById("boton_siete");
    const btn_ocho = document.getElementById("boton_ocho");
    const btn_nueve = document.getElementById("boton_nueve");

    
    const btn_menos = document.getElementById("boton_menos");
    const btn_mult = document.getElementById("boton_mult");
    const btn_divi = document.getElementById("boton_divi");

    var numero1 = 0;
    var numero2 = 0;
    var operacion;
    const igual = document.getElementById("igual");


    var numeros = document.getElementById("numeros");

    document.addEventListener("DOMContentLoaded", () => {

    
        if(btn_uno){
            btn_uno.addEventListener("click", () => {
                const texto = document.getElementById("pantalla");
                texto.textContent = "1";
            });
        }


        if(btn_dos){
            btn_dos.addEventListener("click", () => {
                const texto = document.getElementById("pantalla");
                texto.textContent = "2";
            });
        }
                            

        if(btn_tres){
            btn_tres.addEventListener("click", () => {
                const texto = document.getElementById("pantalla");
                texto.textContent = "3";
            });
        }


        if(btn_cuatro){
            btn_cuatro.addEventListener("click", () => {
                const texto = document.getElementById("pantalla");
                texto.textContent = "4";
            });
        }

        if(btn_cinco){
            btn_cinco.addEventListener("click", () => {
                const texto = document.getElementById("pantalla");
                texto.textContent = "5";
            });
        }


        if(btn_seis){
            btn_seis.addEventListener("click", () => {
                const texto = document.getElementById("pantalla");
                texto.textContent = "6";
            });
        }
                            

        if(btn_siete){
            btn_siete.addEventListener("click", () => {
                const texto = document.getElementById("pantalla");
                texto.textContent = "7";
            });
        }


        if(btn_ocho){
            btn_ocho.addEventListener("click", () => {
                const texto = document.getElementById("pantalla");
                texto.textContent = "8";
            });
        }

        if(btn_nueve){
            btn_nueve.addEventListener("click", () => {
                const texto = document.getElementById("pantalla");
                texto.textContent = "9";
            });
        }





    });