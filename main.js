let mensaje = document.getElementById("mensaje");
let mensajeEncriptado = document.getElementById("mensajeEncriptado");

const encriptarMensaje = (event) => {
    event.preventDefault();

    let letrasMensaje = [];

    for (let i = 0; i < mensaje.value.length; i++) {
        letrasMensaje.push(mensaje.value[i]);
    }

    let encriptador = ''
    for (let letra in letrasMensaje) {
        switch (letrasMensaje[letra].toLowerCase()) {
            case "a":
                encriptador += 'ai'
                console.log('as')
                break;

            case "e":
                encriptador += 'enter'
                break;
            
            case "i":
                encriptador += 'imes'
                break;
            
            case "o":
                encriptador += 'ober'
                break;
            
            case "u" :
                encriptador += 'ufat'
                break;

            default:
                encriptador += letrasMensaje[letra]
        }

    }
    console.log(encriptador)
    mensajeEncriptado.value = encriptador.toLowerCase();
};


const desEncriptarMensaje = () => {

}