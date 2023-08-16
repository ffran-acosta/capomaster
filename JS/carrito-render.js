const renderCarrito = () => {
    const tableCarrito = document.querySelector("#carritoRow");
    tableCarrito.innerHTML = "";
    JSON.parse(localStorage.carrito).forEach(producto => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                        <th id=${producto.id} scope="row">${producto.id}</th>
                        <td>${producto.nombre}</td>
                        <td>$ ${producto.precio}</td>
                        <td>
                            <button type="button" class="btn btn-primary btn-sm buttonResta" id=${producto.id}> - </button>
                                <span id=${producto.id} class='cantidad-span'>${producto.cantidad}</span>
                            <button type="button" class="btn btn-primary btn-sm buttonSuma" id=${producto.id}> + </button>
                        </td>
                        <td>$ ${producto.cantidad * producto.precio}</td>
                    `
        tableCarrito.appendChild(tr);
    });
}

export default renderCarrito