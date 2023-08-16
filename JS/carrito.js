import productosDisponibles from '../data/db-productos.js'

document.addEventListener("DOMContentLoaded", () => {

    const tableCarrito = document.querySelector("#carritoRow");
    const buttonCompra = document.querySelectorAll(".buttonCompra");

        if (localStorage.carrito){
            tableCarrito.innerHTML = "";
            JSON.parse(localStorage.carrito).forEach(producto => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                        <th id=${producto.id} scope="row">${producto.id}</th>
                        <td>${producto.nombre}</td>
                        <td>$ ${producto.precio}</td>
                        <td><button type="button" class="btn btn-primary btn-sm buttonResta" id=${producto.id}>- </button>${producto.cantidad}<button type="button" class="btn btn-primary btn-sm buttonSuma" id=${producto.id}> +</button></td>
                        <td>$ ${producto.cantidad * producto.precio}</td>
                    `
                tableCarrito.appendChild(tr);
            });
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

                const carritoParaRender = JSON.parse(localStorage.getItem("carrito"))
                tableCarrito.innerHTML = "";
                carritoParaRender.forEach(producto => {
                    const tr = document.createElement("tr");
                    tr.innerHTML = `
                        <th id=${producto.id} scope="row">${producto.id}</th>
                        <td>${producto.nombre}</td>
                        <td>$ ${producto.precio}</td>
                        <td><button type="button" class="btn btn-primary btn-sm buttonResta" id=${producto.id}>- </button>${producto.cantidad}<button type="button" class="btn btn-primary btn-sm buttonSuma" id=${producto.id}> +</button></td>
                        <td>$ ${producto.cantidad * producto.precio}</td>
                    `
                    tableCarrito.appendChild(tr);
                });
            });
        });

    const buttonResta = document.querySelectorAll(".buttonResta");
    buttonResta.forEach((button) => {
        button.addEventListener("click", (event) => {
            const buttonId = parseInt(event.target.getAttribute("id"));
            const carrito = JSON.parse(localStorage.carrito)
            carrito.map(element => {
                if (element.id === buttonId) {
                    element.cantidad--
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
                } return element
            })
            localStorage.setItem("carrito", JSON.stringify(carrito));
        });      
    })

})
