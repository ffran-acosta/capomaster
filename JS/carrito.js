import productosDisponibles from '../data/db-productos.js'
import renderCarrito from './carrito-render.js';

document.addEventListener("DOMContentLoaded", () => {
    const buttonCompra = document.querySelectorAll(".buttonCompra");

        if (localStorage.carrito){
            renderCarrito()
        }

        buttonCompra.forEach((button) => {
            button.addEventListener("click", (event) => {
                const productId = parseInt(event.target.getAttribute("id"));
                const productFind = productosDisponibles.find((producto) => producto.id === productId);
                if (productFind) {
                    if (!localStorage.carrito) {
                        localStorage.setItem("carrito", JSON.stringify([{ ...productFind, cantidad: 1 }]));
                    } else {
                        const carrito = JSON.parse(localStorage.carrito)
                        const existeEnCarrito = carrito.find(element => element.id === productFind.id);
                        if (existeEnCarrito) {
                            carrito.map(element => {
                                if (element.id === existeEnCarrito.id) {
                                    existeEnCarrito.cantidad++
                                } return element
                            })
                            localStorage.setItem("carrito", JSON.stringify(carrito));
                        } else {
                            carrito.push({ ...productFind, cantidad: 1 });
                            localStorage.setItem("carrito", JSON.stringify(carrito))
                        }
                    }
                }
                renderCarrito()
            });
        });

    const cantidadSpan = document.querySelectorAll(".cantidad-span")

    const buttonResta = document.querySelectorAll(".buttonResta");
    buttonResta.forEach((button) => {
        button.addEventListener("click", (event) => {
            const buttonId = parseInt(event.target.getAttribute("id"));
            const carrito = JSON.parse(localStorage.carrito)
            carrito.map(element => {
                if (element.id === buttonId) {
                    element.cantidad--
                    cantidadSpan.forEach(span => {
                        const spanId = parseInt(span.getAttribute("id"));
                        if (spanId == buttonId) {
                            span.innerText = element.cantidad
                        }
                    })
                } return element
            })
            localStorage.setItem("carrito", JSON.stringify(carrito));
            
        });
    })

    const buttonSuma = document.querySelectorAll(".buttonSuma");
    buttonSuma.forEach((button) => {
        button.addEventListener("click", (event) => {
            const buttonId = parseInt(event.target.getAttribute("id"));
            const carrito = JSON.parse(localStorage.carrito)
            carrito.map(element => {
                if (element.id === buttonId) {
                    element.cantidad++
                    cantidadSpan.forEach(span => {
                        const spanId = parseInt(span.getAttribute("id"));
                        if (spanId == buttonId) {
                            span.innerText = element.cantidad
                        }
                    })
                } return element
            })
            localStorage.setItem("carrito", JSON.stringify(carrito));
        });      
    })
})
