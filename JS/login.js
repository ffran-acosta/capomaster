import db from '../data/db-user.js'

let user = {
    usuario: '',
    contraseña: '',
}

const buttonLogin = document.getElementById("login-button");
const form = document.querySelector("form")
const inputs = document.querySelectorAll("input");

buttonLogin.addEventListener("click", (event) => {
    event.preventDefault();
    const userFind = db.find((registro) => user.usuario === registro.usuario && user.contraseña === registro.contraseña)
    if (!userFind) {
        alert("Contraseña o usuario incorrecto");
        form.reset();
        return
    }
    window.location.href = '/pages/products.html'
    localStorage.setItem("usuario", JSON.stringify(userFind));
});

inputs.forEach((elemento) => {
    elemento.addEventListener("input", ({ target }) => {
        const { value, name } = target;
        user = {
            ...user,
            [name]: value
        }
    })
})