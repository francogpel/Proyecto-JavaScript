// BOTON INICIAR SESION
const botonLogin = document.getElementById("login")

botonLogin.onclick = async () =>  {
    const { value: email } = await Swal.fire({
        title: 'INICIAR SESION',
        input: 'email',
        inputLabel: 'Ingresar correo electronico',
        inputPlaceholder: 'correo...'
      })
      
      if (email) {
        const { value: password } = await Swal.fire({
            title: 'CONTRASEÑA',
            input: 'password',
            inputLabel: 'Ingresar contraseña',
            inputPlaceholder: 'contraseña...',
            inputAttributes: {
              maxlength: 10,
              autocapitalize: 'off',
              autocorrect: 'off'
            }
          })
          
      }
}

// BOTON REGISTRARSE

const botonSingup = document.getElementById("singup")

botonSingup.onclick = async () =>   {
    const { value: email } = await Swal.fire({
        title: 'REGISTRAR USUARIO',
        input: 'email',
        inputLabel: 'Ingresar correo electronico',
        inputPlaceholder: 'correo...',
        
      })
      
      if (email) {
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                '1': 'Personal',
                '2': 'Comercial'
                
              })
            }, )
          })
          
          const { value: selec } = await Swal.fire({
            title: 'Tipo de uso',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: (value) => {
              if (!value) {
                return 'You need to choose something!'
              }
            }
          })
          
          if (selec) {
            const { value: password } = await Swal.fire({
                title: 'CONTRASEÑA',
                input: 'password',
                inputLabel: 'Ingresar contraseña',
                inputPlaceholder: 'contraseña...',
                inputAttributes: {
                  maxlength: 10,
                  autocapitalize: 'off',
                  autocorrect: 'off'
                }
              })

              if (password) {
                Swal.fire(
                    'USUARIO REGISTRADO!',
                    'Ve a tu casilla de correo para verificar tu cuenta!',
                    'success'
                  )
              }
          }
      }
      
}