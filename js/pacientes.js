function mostrarPacientes() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if(localPacientes){
        pacientes = JSON.parse(localPacientes)
    }
    const tablaPacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]
   
    pacientes.forEach(paciente =>{
        let fila = cuerpoTabla.insertRow()
        const celdaNombresPaciente = fila.insertCell()
        celdaNombresPaciente.textContent = paciente.nombresPaciente
        const celdaApellidosPaciente = fila.insertCell()
        celdaApellidosPaciente.textContent = paciente.apellidosPaciente
        const celdaCedulasPaciente = fila.insertCell()
        celdaCedulasPaciente.textContent = paciente.numeroCedula
        const celdaEdadesPaciente = fila.insertCell()
        celdaEdadesPaciente.textContent = paciente.edad
        const celdaTelefonoPaciente = fila.insertCell()
        celdaTelefonoPaciente.textContent = paciente.telefono
        const celdaEspecialidadPaciente = fila.insertCell()
        celdaEspecialidadPaciente.textContent = paciente.especialidad
        const celdaDoctorPaciente = fila.insertCell()
        celdaDoctorPaciente.textContent = "Por asignar"

    });
}

mostrarPacientes()