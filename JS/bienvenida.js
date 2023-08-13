const bienvenidaAlUsuario = nombre => {
    app.innerHTML =
    `<h1 class='title text-center'>Bienvenido  ${nombre}</h1>
    <div class="my-3 login-input">
        <button id="button-inicio"><a href="./products.html">Continuar</a></button>
    </div>`
}

export default bienvenidaAlUsuario;