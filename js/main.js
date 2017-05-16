function validateForm(){

	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var email = document.getElementById('input-email').value;
	var contra = document.getElementById('input-password').value;
	var bici = document.getElementsByClassName('form-control').value;

	//un span por contenedor
	var contenedorNombre = document.getElementsByClassName('input-box')[0];
	var contenedorApellido = document.getElementsByClassName('input-box')[1];
	var contenedorEmail = document.getElementsByClassName('input-box')[2];
	var contenedorContra = document.getElementsByClassName('input-box')[3];
	var contenedorBici = document.getElementsByClassName('input-box')[4];
	

	//errores
	var campoObligatorio = document.createElement('span');
	campoObligatorio.innerHTML = "Campo obligatorio";
	
	var sinMayuscula = document.createElement('span');
	sinMayuscula.innerHTML = "La primera letra debe ser en mayuscula";

	var conNumeros = document.createElement('span');
	conNumeros.innerHTML = "Nombre debe contener letras de la a A la Z";

	var sinEmail = document.createElement('span');
	sinEmail.innerHTML = "Debe ser un correo valido <b>name@domain.com</b>"

	var malContra = document.createElement('span');
	malContra.innerHTML = "Tu contraseña no puede ser password"

	var malContraDos = document.createElement('span');
	malContraDos.innerHTML = "Tu contraseña no puede ser numeros correlativos";

	var malContraTres = document.createElement('span');
	malContraTres.innerHTML = "Tu contraseña debe tener 6 carácteres";

	//validación nombre
	if (nombre.length == "0"){
		contenedorNombre.appendChild(campoObligatorio);
	} else if(nombre.charAt(0) != nombre.charAt(0).toUpperCase()){
		contenedorNombre.appendChild(sinMayuscula);
	} else if (!/[A-Z][a-z]+/.test(nombre)){
		contenedorNombre.appendChild(conNumeros);
	}

	//validación apellido
	if (apellido == ""){
		contenedorApellido.appendChild(campoObligatorio);
	} else if(apellido.charAt(0) != apellido.charAt(0).toUpperCase()){
		contenedorApellido.appendChild(sinMayuscula);
	} else if (!/[A-Z][a-z]+/.test(apellido)){
		contenedorApellido.appendChild(conNumeros);
	}

	//validacion correo
	if (email == ""){
		contenedorEmail.appendChild(campoObligatorio);
	} else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
		contenedorEmail.appendChild(sinEmail);
	} 

	//validacion contraseña
	if (contra == "") {
		contenedorContra.appendChild(campoObligatorio);
	} else if (contra == "password") {
		contenedorContra.appendChild(malContra);
	} else if (!/[1,2,3,4,5,6][0,9,8,7,5,4]+/.test(contra)) {
		contenedorContra.appendChild(malContraDos);
	} else if(contra.length > 6){
		contenedorContra.appendChild(malContraTres);
	}

	//validacion bicis
	if (bici == "" || bici == "0"){
		contenedorBici.appendChild(campoObligatorio);
	}
}
