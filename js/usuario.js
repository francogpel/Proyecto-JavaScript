// BOTON INICIAR SESION
const botonLogin = document.getElementById("login");

botonLogin.onclick = async () => {
  const { value: email } = await Swal.fire({
    title: "INICIAR SESIÓN",
    input: "email",
    inputLabel: "Ingresar correo electrónico",
    inputPlaceholder: "correo..."
  });

  if (email) {
    const { value: password } = await Swal.fire({
      title: "CONTRASEÑA",
      input: "password",
      inputLabel: "Ingresar contraseña",
      inputPlaceholder: "contraseña...",
      inputAttributes: {
        maxlength: 10,
        autocapitalize: "off",
        autocorrect: "off"
      }
    });

    if (password) {
    

      // Ocultar botones de inicio de sesión y registro
      botonLogin.style.display = "none";
      document.getElementById("singup").style.display = "none";

      // Mostrar el nombre del usuario logueado
      const nombreUs = email.split("@")[0];
      const nombreUsuario = document.getElementById("usuario");
      nombreUsuario.innerHTML = nombreUs;
    }
  }
};

// BOTON REGISTRARSE
const botonSingup = document.getElementById("singup");

botonSingup.onclick = async () => {
  const { value: email } = await Swal.fire({
    title: "REGISTRAR USUARIO",
    input: "email",
    inputLabel: "Ingresar correo electrónico",
    inputPlaceholder: "correo..."
  });

  if (email) {
    const inputOptions = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          "1": "Personal",
          "2": "Comercial"
        });
      });
    });

    const { value: selec } = await Swal.fire({
      title: "Tipo de uso",
      input: "radio",
      inputOptions: inputOptions,
      inputValidator: value => {
        if (!value) {
          return "Debes elegir algo!";
        }
      }
    });

    if (selec) {
      const { value: password } = await Swal.fire({
        title: "CONTRASEÑA",
        input: "password",
        inputLabel: "Ingresar contraseña",
        inputPlaceholder: "contraseña...",
        inputAttributes: {
          maxlength: 10,
          autocapitalize: "off",
          autocorrect: "off"
        }
      });

      if (password) {
// si el registro se realiza correctamente:
const nombreUsuario = email.split("@")[0]; // el nombre de usuario es el mismo que la parte del correo antes del @
Swal.fire({
  title: "Usuario registrado!",
  text: `Bienvenido, ${nombreUsuario}!`,
  icon: "success"
});

// Ocultamos los botones de login y registro
botonLogin.style.display = "none";
botonSingup.style.display = "none";

//nombre del usuario logueado
const usuarioLogueado = document.getElementById("usuario");
usuarioLogueado.innerHTML = `Bienvenido ${nombreUsuario}`;

}
}
}
};