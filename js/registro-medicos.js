// Se obtienen los campos del formulario
const formularioRegistro = document.getElementById("registro-medicos")
const nombre = document.getElementById("nombresMedico")
const apellido = document.getElementById("apellidosMedico")
const cedula = document.getElementById("numeroCedula")
const numeroConsultorio = document.getElementById("consultorio")
const telefono = document.getElementById("telefono")
const correo = document.getElementById("correo")
const especialidad = document.getElementById("especialidad")

// Se le da una funcion al boton submit del formulario
formularioRegistro.addEventListener("submit", function(event){
    event.preventDefault()
    // Se crea el objeto medico para guardar los valores que ingresan en el formulario
    const medico = {
        nombresMedico: nombresMedico.value,
        apellidosMedico: apellidosMedico.value,
        numeroCedula: numeroCedula.value,
        consultorio: consultorio.value,
        telefono: telefono.value,
        correo: correo.value,
        especialidad: especialidad.value
    }
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos){
        medicos = JSON.parse(localMedicos)
    }
    medicos.push(medico)
    localStorage.setItem("medicos", JSON.stringify(medicos))
    formularioRegistro.reset()
    alert("Medico registrado con exito")
})