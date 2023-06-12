const formulario = document.getElementById("registro-pacientes")
const nombresPaciente  = document.getElementById("nombresPaciente")
const apellidosPaciente = document.getElementById("apellidosPaciente")
const numerCedula = document.getElementById("numeroCedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")


formulario.addEventListener("submit", function (event){
    event.preventDefault();

    const paciente = {
        nombresPaciente: nombresPaciente.value,
        apellidosPaciente: apellidosPaciente.value,
        numeroCedula: numeroCedula.value,
        edad: edad.value,
        telefono: telefono.value,
        especialidad: especialidad.value
    }
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if(localPacientes){
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formulario.reset()
    alert("Paciente Registrado Con Exito")
})

// console.log(nombresPaciente.value);