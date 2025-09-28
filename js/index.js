// console.log('Hola mundo desde index.js');
// $(".txtRazonSocial").click( function(){
//   console.log('Acción ejecutada!')
// })










const fecha = new Date();

$("#txtFecha").val(fecha.toLocaleDateString());

  $(".btnFotoActa").click(function(){

    console.log("Generar imagen del acta");
    let  sot = $("#sot").val();
    generar_actaImagen(sot);
    let  texto = $("#razon_social").val();
    navigator.clipboard.writeText(texto);
    console.log('Contenido copiado al portapapeles');
  
   });


   function generar_actaImagen(sot){
          $objetivo = document.querySelector("#acta");
          $contenedorCanvas = document.querySelector("#contenedor_img_acta"); // En dónde ponemos el elemento canvas

          html2canvas($objetivo,{
              dpi    : window.devicePixelRatio*1,
              scale  :1.5,
              width  :990,
              heigth :1800,
          }).then(canvas => {
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


// TODO: Caja busqueda nombre y dni tecnico ::::::::::::::::::::::::

const tecnicos = [
    {
        nombre: "ANGEL EDINSON BENITO MORA 00000000",
        dni: "23569863" ,
    },{
        nombre: "APARICIO MENESES ANTHONY WALTER",
        dni: "" ,
    },{
        nombre: "ARAPA BERNEDO RAUL ROSSEL ",
        dni: "23569863" ,
    },{
        nombre: "CASTILLO CHALLA JAIME JUNNIOR ",    
        dni: "23569863" ,
    },{
        nombre: "FLORES FLORES JULIO ALBERTO ",    
        dni: "23569863" ,
    },{
        nombre: "GARCIA SARCA CRISTIAN IVAN ",    
        dni: "23569863" ,
    },{
        nombre: "ILLANES CHAMBI JHON RONALD ",    
        dni: "23569863" ,
    },{
        nombre: "MAMANI LOPEZ JULIO ELIAS ",    
        dni: "23569863" ,
    },{
        nombre: "OLLACHICA BAUTISTA ROSBERT ALCIDES ",    
        dni: "23569863" ,
    },{
        nombre: "SALOMON VALDEZ PACOHUANACO ",    
        dni: "23569863" ,
    },{
        nombre: "TENUCO CALDERON ROY DARIO ",    
        dni: "23569863" ,
    },{
        nombre: "TICONA AQUIMA JONATHAN DIEG ",    
        dni: "23569863" ,
    },{
        nombre: "TITO GUERRA VICTOR MANUEL ",    
        dni: "23569863" ,
    },{
        nombre: "TORRES HUAMANI YERON",    
        dni: "23569863" ,
    }
    ,{
        nombre: "VARGAYA QUISPE GENNODY YOEL ",    
        dni: "23569863" ,
    },{
        nombre: "VICTOR JHONY SAIRE QUISPE ",    
        dni: "23569863" ,
    }
];

const nombres = tecnicos.map(tecnico => tecnico.nombre);

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("txtNombreTecnico");
const inputBoxDNI = document.getElementById("txtDniTecnico");


inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;

    if(input.length) {
        result = nombres.filter(
            
                (keyword)=>{
                            return keyword.toLowerCase().includes(input.toLowerCase());
                        }
        );
        console.log(result);
    }
    display(result);
    if(!result.length) {
        resultsBox.innerHTML = "";
    }
} 


function display(result) {
     
        const content = result.map((list)=>{
             
            return "<li onclick=selectedInputNombres(this)>" + list.trim() + "</li>";
        });
        resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectedInputNombres(list){
    inputBox.value = list.innerHTML;
    nombresDni = inputBox.value;
    let dni = nombresDni.slice(nombresDni.length- 8, nombresDni.length);
    let nombresCompletos =  nombresDni.slice(0, nombresDni.length-8)


    // console.log(removeTags(''));;


    inputBox.value = nombresCompletos;
    inputBoxDNI.value = dni; 
    resultsBox.innerHTML = "";

}

// TODO: FILTRO codigo de solucuion:::::::::::::::::::::::::::::::::::::::::


const arrayCodigosSolucion = [
    "Control Remoto no funciona EQ01",
    "Cambio de EXTENSOR WIFI - MESH EQ02",
    "EMTA por Cambio de tecnología / Fidelización EQ04",
    "ONT/EMTA - Problemas con el equipo EQ05",
    "ONT/EMTA - Problemas con el equipo + Cambio de Acometida EQ06",
    "ONT/EMTA - Problemas con el equipo + cambio de Cable interno EQ07",
    "STB problema del equipo + Cambio de Acometida EQ08",
    "STB problema del equipo EQ09",
    "STB problema del equipo + cambio de Cable interno EQ10",
    "TELEFONO problema del equipo EQ11",
    "ONT/EMTA - Problemas con el equipo - NEGOCIO + IP FIJA EQ12",
    "EMTA Cambio por tecnología / Fidelización - NEGOCIO + IP FIJA EQ13",
    "Cambio de Equipo -Tormenta Eléctrica EQ14",
    "",
    "MANIPULACION CLIENTE - Televisor /Control Remoto/Android TV desprogramados  AB01",
    "MANIPULACION CLIENTE - Cliente desconfiguró equipo ONT/EMTA AB02",
    "MANIPULACION CLIENTE - Cliente modificó red interna AB03",
    "MANIPULACION CLIENTE - Comparte señal a otras personas/ varias PCs conectadas (Cabina) AB04",
    "MANIPULACION CLIENTE - Equipo telefónico desconfigurado o mal conectado AB05",
    "MANIPULACION CLIENTE - Equipos desconectados o problemas con las tomas eléctricas AB06",
    "PROB. CLIENTE - No cuenta con minutos para llamar AB07",
    "PROB. CLIENTE - Problemas con Equipos propiedad del cliente AB08",
    "PROB. CLIENTE - Reinstalacion por incendio, remodelacion o construccion AB09",
    "",
    "Configuracion Avanzada (3 a Más Equipos) FI02",
    "Configuración de Puertos EMTA/ ONT FI03",
    "Problema de cobertura WIFI FI06",
    "Pruebas de servicios integrales FI07",
    "Reinicio manual de ONT/EMTA FI08",
    "Instalación/Configuración - Extensor WIFI - MESH FI09",
    "Reactivacion de servicios Internet y/o telefonia FI10",
    "Envio de comandos/reactivacion de servicios-TV FI11",
    "Configuracion Wifi equipos Claro FI12",
    "Configuracion Wifi equipos cliente FI13",
    "",
    "CONMUTACION - Llamadas no se concretan a ciertos números determinados DE01",
    "CONMUTACION - Operadora indica que numero no existe (llamada entrante). DE02",
    "CONMUTACION - Problemas con SVA (Central Virtual, hunting, etc) DE03",
    "DERIVADO PEXT - Degradación del servicio DE04",
    "DERIVADO PEXT - Sin Servicio / Averia Masiva DE05",
    "DERIVADO PEXT - Niveles RF Altos / Bajos DE06",
    "DERIVADO PEXT - Intermitencia / Pérdida de paquetes DE07",
    "DERIVADO PEXT - Mala Señal DE08",
    "Derivado a segundo nivel DE09",
    "",
    "Conector mar preparado IN01",
    "INSPECCION TECNICA (Verificación de servicio contratado) IN02",
    "Mala distribucion de equipos y/o cables o reutilizacion de cableado existente IN03",
    "",
    "Cambio o reposición de cables Patch RCA/HDMI/UTP/JUMPER OPTICO PC01",
    "Cambio de acometida PC02",
    "Cambio de acometida + Cambio de cables internos PC03",
    "Cambio de cables internos (Coaxial, Telefónico, UTP) PC04",
    "Cambio de Fuente equipo terminal PC05",
    "Conector óptico sucio PC06",
    "Conectores flojos PC07",
    "Reacomodo de acometida PC08",
    "Roseta telefonica averiada PC09",
    "Roseta OPTICA averiada PC10",
    "Reacomodo Acometida - Autoinstalación PC12",
    "Conectores y/o divisores sulfayadops PC13",
    "",
    "Cliente esta Ausente MO01",
    "Cliente dará de baja el servicio MO02",
    "Cliente informa Servicio conforme-visita técnica MO03",
    "No Hay facilidades tecnicas MO04",
    "",
    "Acometida desconectada  del TAP/FAT TE10",
   

];


const listaCodSolucion = document.getElementById("lista_cod_solucion");
const codSolucion = document.getElementById("txtCodSolucion1");
const  descripcionCodSolucion = document.getElementById("txtDescripCodSolucion1");


codSolucion.onkeyup = function() {
    let result = [];
    let input = codSolucion.value;

    if(input.length) {
        result = arrayCodigosSolucion.filter(
            
                (keyword)=>{
                            return keyword.toLowerCase().includes(input.toLowerCase());
                        }
        );
        console.log(result);
    }
    mostrarResultado(result);
    if(!result.length) {
        listaCodSolucion.innerHTML = "";
    }
} 


function mostrarResultado(result) {
     
        const content = result.map((list)=>{
             
            return "<li onclick=seleccionCodSolucion(this)>" + list.trim() + "</li>";
        });
        listaCodSolucion.innerHTML = "<ul>" + content.join('') + "</ul>";
}




function seleccionCodSolucion(list){
    codSolucion.value = list.innerHTML;
    cadenaCodSolucion = codSolucion.value;
    let codigo = cadenaCodSolucion.slice(cadenaCodSolucion.length- 4, cadenaCodSolucion.length);


    let descripcionCodigo =  cadenaCodSolucion.slice(0, cadenaCodSolucion.length-4)
    

    codSolucion.value = codigo;
    descripcionCodSolucion.value =descripcionCodigo; 
    listaCodSolucion.innerHTML = "";

}
