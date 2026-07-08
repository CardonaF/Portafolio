const boton = document.getElementById("btnProyecto");

boton.addEventListener("click", function(){

    document
        .getElementById("proyectos")
        .scrollIntoView({

            behavior:"smooth"

        });

});