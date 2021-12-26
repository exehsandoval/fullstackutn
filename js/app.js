const { nombre } = require("ci-info");
const { mensaje } = require("statuses");


let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let mensaje = document.getElementById('mensaje');


contenedor.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let formData = {
        nombre: nombre.value,
        email: email.value,
        mensaje: mensaje.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload == function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email enviado')
            nombre.value = '';
            email.value = '' ;
            mensaje.value = '' ;
        }else{
            alert('A veces me equivoco!')
        }
    }
     
    xhr.send(JSON.stringify(formData));

})