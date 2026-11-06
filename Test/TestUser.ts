function login(username: string, password: string, isAdmin: boolean): void
{
    if (username === "" || password === "") {
        console.log("Campos requeridos"); 
        return;
    }
    
    if (username === "admin" && password === "1234" && isAdmin === true) {
        console.log("Bienvenido Administrador");
        return;
    }

    if (username === "user" && password === "pass") {
        console.log("Bienvenido Usuario");
        return;
    }

    if (username === "user" && password !== "pass") {
        console.log("Contraseña incorrecta");
        return;
    }   

    if (username !== "user" && password === "pass") {
        console.log("Usuario incorrecto");
        return;
    } 

    else {
        console.log("Credenciales inválidas");
        return;
    }
}
login("", "1234", false);
//login("admin", "1234", true);
//login("user", "pass", false);
//login("user", "2345", true);
//login("User", "pass", true);
//login("test", "1234", false);