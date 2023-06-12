function mostrarMedicos() {
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if(localMedicos){
        medicos = JSON.parse(localMedicos)
    }
    const tablaMedicos = document.getElementById("tabla-medicos")
    const cuerpoTabla = tablaMedicos.getElementsByTagName("tbody")[0]
    medicos.forEach(medico => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombresMedico = fila.insertCell()
        let celdaApellidosMedico = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaTelefono = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()

        celdaNombresMedico.textContent = medico.nombresMedico
        celdaApellidosMedico.textContent = medico.apellidosMedico
        celdaNumeroCedula.textContent = medico.numeroCedula
        celdaConsultorio.textContent = medico.consultorio
        celdaTelefono.textContent = medico.telefono
        celdaCorreo.textContent = medico.correo
        celdaEspecialidad.textContent = medico.especialidad
    });
}

mostrarMedicos()