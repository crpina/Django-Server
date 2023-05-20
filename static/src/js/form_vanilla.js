// inputs con warnings
const idInput = document.getElementById("id-producto");
const idTextInput = document.getElementById("id-producto-text");

const nombreInput = document.getElementById("nombre");
const nombreTextInput = document.getElementById("nombre-text");

const porcentajeInput = document.getElementById("porcentaje");
const porcentajeTextInput = document.getElementById("porcentaje-text");

const causaInput = document.getElementById("causa");
const causaTextInput = document.getElementById("causa-text");

const form = document.getElementById("form1");

// estilos de validacion
const textInvalid = ["text-red-600", "block"]
const textValid = ["hidden"]
const inputValid = ["focus:ring-green-500", "focus:border-green-500"]
const inputInvalid = ["focus:ring-red-500", "focus:border-red-500"]

// funciones
function checkId() {
    const id = Number(idInput.value);
    if (typeof id !== "number" || isNaN(id) || id <= 0) {
        idTextInput.classList.add(...textInvalid);
        idTextInput.classList.remove(...textValid);
        idInput.classList.remove(...inputValid)
        idInput.classList.add(...inputInvalid)
        return false;
    } else {
        idInput.classList.add(...inputValid)
        idTextInput.classList.add(...textValid);
        idTextInput.classList.remove(...textInvalid);
        idInput.classList.remove(...inputInvalid)
        return true;
    }
}

function checkNombre() {
    const nombre = String(nombreInput.value)
    if (typeof nombre !== "string" || nombre.length <= 0) {
        nombreTextInput.classList.add(...textInvalid);
        nombreTextInput.classList.remove(...textValid);
        nombreInput.classList.remove(...inputValid)
        nombreInput.classList.add(...inputInvalid)
        return false;
    } else {
        nombreInput.classList.add(...inputValid)
        nombreTextInput.classList.add(...textValid);
        nombreTextInput.classList.remove(...textInvalid);
        nombreInput.classList.remove(...inputInvalid)
        return true;
    }
}

function checkPorcentaje() {
    const porcentaje = Number(porcentajeInput.value);
    if (typeof porcentaje !== "number" || isNaN(porcentaje) || porcentaje < 0 || porcentaje > 100) {
        porcentajeTextInput.classList.add(...textInvalid);
        porcentajeTextInput.classList.remove(...textValid);
        porcentajeInput.classList.remove(...inputValid)
        porcentajeInput.classList.add(...inputInvalid)
        return false;
    } else {
        porcentajeInput.classList.add(...inputValid)
        porcentajeTextInput.classList.add(...textValid);
        porcentajeTextInput.classList.remove(...textInvalid);
        porcentajeInput.classList.remove(...inputInvalid)
        return true;
    }
}

function checkCausa() {
    const causa = String(causaInput.value)
    if (typeof causa !== "string" || causa.length <= 0) {
        causaTextInput.classList.add(...textInvalid);
        causaTextInput.classList.remove(...textValid);
        causaInput.classList.remove(...inputValid)
        causaInput.classList.add(...inputInvalid)
        return false;
    } else {
        causaInput.classList.add(...inputValid)
        causaTextInput.classList.add(...textValid);
        causaTextInput.classList.remove(...textInvalid);
        causaInput.classList.remove(...inputInvalid)
        return true;
    }
}

// eventos
idInput.addEventListener("focusout", () => {
    checkId()
})

nombreInput.addEventListener("focusout", () => {
    checkNombre()
})

porcentajeInput.addEventListener("focusout", () => {
    checkPorcentaje()
})

causaInput.addEventListener("focusout", () => {
    checkCausa()
})

idInput.addEventListener("input", () => {
    checkId()
})

nombreInput.addEventListener("input", () => {
    checkNombre()
})

porcentajeInput.addEventListener("input", () => {
    checkPorcentaje()
})

causaInput.addEventListener("input", () => {
    checkCausa()
})

 // form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const bId = checkId();
    const bNombre = checkNombre();
    const bPorcentaje = checkPorcentaje();
    const bCausa = checkCausa();
    if (bId && bNombre && bPorcentaje && bCausa) {
        Swal.fire({
            title: 'Exito!',
            text: 'Se ha registrado el descuento',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
        form.reset()
    }
})
