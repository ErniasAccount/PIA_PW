var listaUsuarios = [];

function captura(Username,pass){

   var nuevousuario={
    usuario:Username,
    contraseña:pass

   };console.log(Username,pass);
   console.log(nuevousuario);
   listaUsuarios.push(nuevousuario);
   localStorageUsuarios(listaUsuarios);
   }

    function getUsuario(){
        var storedList= localStorage.getItem("localListaUsuarios");
        if(storedList == null){
            listaUsuarios = [];
            
        }
else{
    listaUsuarios = JSON.parse(storedList);
}

        return listaUsuarios;
    }
function localStorageUsuarios(plist){
    localStorage.setItem("localListaUsuarios", JSON.stringify(plist));
    
}


function login(){
    var user="admin";
    var pass=123;

    if(document.form.contra.value== pass && document.form.usuario.value==user){
        window.location= "PaginaPrincipal.html"; }
        else{
        alert("porfavor introduce el usuario o contraseña correcto.");
        }
   
}

