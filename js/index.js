$(document).ready(function(){
  $(".btnFotoActa").click(function(){

    generar_actaImagen();
   });


   function generar_actaImagen(){

      
    $objetivo = document.querySelector("#acta");
    $contenedorCanvas = document.querySelector("#contenedor_img_acta"); // En dónde ponemos el elemento canvas

    html2canvas($objetivo,{
       dpi: window.devicePixelRatio*1,
        scale:1.5,
        width:1100,
        heigth:1800,

    }) // Llamar a html2canvas y pasarle el elemento
    .then(canvas => {
            // Cuando se resuelva la promesa traerá el canvas
            $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
            let enlace = document.createElement('a');
	          //  window.devicePixelRatio();
      
            // Convertir la imagen a Base64
            enlace.href = canvas.toDataURL();
            // Hacer click en él
            enlace.click();
      });
    }



});
