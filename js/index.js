// console.log('Hola mundo desde index.js');
// $(".txtRazonSocial").click( function(){
//   console.log('Acción ejecutada!')
// })

// const today = new Date()
// today.toLocaleDateString() // de acuerdo a tu idioma local
//  // formato fecha en Colombia, por ejemplo 9/1/2021

const fecha = new Date();
// console.log(fecha.toLocaleDateString()); // Salida de ejemplo: 24/9/2025
// console.log(fecha.toLocaleTimeString()); // Salida de ejemplo: 6:00:00
$("#txtFecha").val(fecha.toLocaleDateString());

  $(".btnFotoActa").click(function(){
    console.log("Generar imagen del acta");
  
  let  sot = $("#sot").val();
    // alert("Se generará la imagen del acta, por favor espere...");
    generar_actaImagen(sot);



 let  texto = $("#razon_social").val();

   
  navigator.clipboard.writeText(texto);
  console.log('Contenido copiado al portapapeles');
   
     










   });


   function generar_actaImagen(sot){

      
    $objetivo = document.querySelector("#acta");
    $contenedorCanvas = document.querySelector("#contenedor_img_acta"); // En dónde ponemos el elemento canvas

    html2canvas($objetivo,{
       dpi: window.devicePixelRatio*1,
        scale:1.5,
        width:990,
        heigth:1800,

    }) // Llamar a html2canvas y pasarle el elemento
    .then(canvas => {
            // Cuando se resuelva la promesa traerá el canvas
            $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
            let enlace = document.createElement('a');
	          //  window.devicePixelRatio();
      var aleatorio = Math.random()
                // return false;
                enlace.download = sot +"."+"png"
            // Convertir la imagen a Base64
            enlace.href = canvas.toDataURL();
            // Hacer click en él
            enlace.click();
      });

  
    }




// const fecha = new Date();
// console.log(fecha.toLocaleDateString()); // Salida de ejemplo: 24/9/2025
// console.log(fecha.toLocaleTimeString()); // Salida de ejemplo: 6:00:00


//  let texto = document.getElementById('razon_social').innerHTML;


