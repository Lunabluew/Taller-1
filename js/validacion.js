//Nombre y apellido ^[a-zA-ZÁ-ÿ\s]{1,40}
//num doc y telefono ^\d{7,10}$
//correo ^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$

//PASSWORD  ^(?=.^\d)(?=.*[#$%@])(?=*a-z)(?=.^*[A-Z]).{8,}$

const reglas={
    textos:/^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    numeros:/^[0-9]{7,10}$/,
    correo:/^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:/^(?=.+\d)(?=.*[#$%@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
}


//acceder al formulario
let form=document.getElementById("frm-usuario");
let campos=document.querySelectorAll("#frm-usuario input")

//Agregar listener de evento submit al formulario que se envia
form.addEventListener('submit',e=>{
    e.preventDefault();//evitar que se envie el formulario para realizar las validaciones
    alert("se envio el formulario");
})

//input
const validarInput=(regla,input,grupo)=>{
if (regla.test(input.value)) {
    document.getElementById(`g-${grupo}`).classList.remove("error");
    document.getElementById(`g-${grupo}`).classList.add("success");
    document.querySelector(`#g-${grupo} i`).classList.add("fa-circle-check");
    document.querySelector(`#g-${grupo} i`).classList.remove("fa-circle-exclamation");
    document.querySelector(`#g-${grupo} .msn-error`).classList.remove("msn-error-visible");
}else{
    document.getElementById(`g-${grupo}`).classList.add("error");
    document.getElementById(`g-${grupo}`).classList.remove("success");
    document.querySelector(`#g-${grupo} i`).classList.remove("fa-circle-check");
    document.querySelector(`#g-${grupo} i`).classList.add("fa-circle-exclamation");
    document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible');
}
}





const validarCampos=(e)=>{
    console.log("se genero un evento sobre el campo"+e.target.name);
    switch (e.target.name){
        case "grupo":
            if (reglas.numeros.test(e.target.value)) {

                document.getElementById("g-grupo").classList.remove("error");
                document.getElementById("g-grupo").classList.add("success");
                document.querySelector("#g-grupo i").classList.add("fa-circle-check");
                document.querySelector("#g-grupo i").classList.remove("fa-circle-exclamation");
                document.querySelector("#g-grupo .msn-error").classList.remove("msn-error-visible");
            }else{
                document.getElementById("g-grupo").classList.add("error");
                document.getElementById("g-grupo").classList.remove("success");
                document.querySelector("#g-grupo i").classList.remove("fa-circle-check");
                document.querySelector("#g-grupo i").classList.add("fa-circle-exclamation");
                document.querySelector("#g-grupo .msn-error").classList.add('msn-error-visible');
                
            }
            
        break;
        case "nombre":

        break;
        case "apellido":
        
        break;
        case "telefono":
        
        break;
        case "correo":
                    
        break;
        case "password":


        default:
        break;
        
    
       
    }

}


campos.forEach((campo)=>{
    campo.addEventListener("keyup",validarCampos);
    campo.addEventListener("blur",validarCampos);
});