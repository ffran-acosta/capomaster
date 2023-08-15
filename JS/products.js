import productosDisponibles from '../data/db-productos.js'

document.addEventListener("DOMContentLoaded", () => {
    // HTML ELEMENTS
    const contenedor = document.querySelector("#container-productos");
    const buttonFilter = document.querySelectorAll(".buttonFilter");

    // MOSTRAR TODOS LOS PRODUCTOS
    productosDisponibles.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("card", "m-3")
        div.style.width = "18rem"
        div.innerHTML =
            `
            <img src=${producto.image} class="card-img-top" alt="...">
            <div class="card-body" id = ${producto.id}>
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: ${producto.precio}.</p>
                <a href="#" class="btn btn-primary buttonCompra" id = ${producto.id}>Agregar al carrito</a>
            </div>
            `
        contenedor.appendChild(div)
    });

    // MOSTRAR PRODUCTOS FILTRADOS
    buttonFilter.forEach((button) => {
        button.addEventListener("click", (event) => {
            const catProduct = event.target.getAttribute("id");
            const catFind = productosDisponibles.filter((producto) => producto.categoria === catProduct);
            ///Limpiar contenedor
            contenedor.innerHTML = ``;
            catFind.forEach((producto) => {
                const div = document.createElement("div");
                div.classList.add("card", "m-3")
                div.style.width = "18rem"

                div.innerHTML =
                    `
                    <img src=${producto.image} class="card-img-top">
                    <div class="card-body" id = ${producto.id}>
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio: ${producto.precio}.</p>
                        <a href="#" class="btn btn-primary buttonCompra" id = ${producto.id}>Agregar al carrito</a>
                    </div>
                    `
                contenedor.appendChild(div)
            });
        })
    })
})








