"use strict";
function login(username, password, isAdmin) {
    if (username === "" || password === "") {
        return "Campos requeridos";
    }
    if (username === "admin" && password === "1234" && isAdmin === true) {
        return "Bienvenido Administrador";
    }
    if (username === "user" && password === "pass") {
        return "Bienvenido Usuario";
    }
    return "Credenciales inválidas";
}
console.log(login("admin", "1234", true));
console.log(login("user", "pass", false));
console.log(login("", "1234", false));
console.log(login("test", "1234", false));
