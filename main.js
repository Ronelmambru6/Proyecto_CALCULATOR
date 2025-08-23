const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
let expresion = '';

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        
        if (boton.id === "c") {
        pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error inesperado!") {
                pantalla.textContent = "0";
                expresion = '';
            } else {

                pantalla.textContent = pantalla.textContent.slice(0, -1);
                expresion = expresion.slice(0, -1)
            }
            return;
        }

        if (boton.id === "porCiento") {
            expresion += "*0.01"
            pantalla.textContent = '%';
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(expresion);
                expresion = pantalla.textContent;
            } catch  {
                pantalla.textContent = "Error inesperado!"
                expresion = '';
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error inesperado!") {
            pantalla.textContent = botonApretado;
            expresion = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
            expresion += botonApretado;
        } 
    })
})