// Contendrá el QR.
var qrcode;

// Obtenemos los inputs y sus valores.
var inputTextQR = document.querySelector('#text-input');
var valueText = "No data";
var inputColorQR = document.querySelector('#inputColorQR');
var valueColorQR = "#000000";
var inputColorFondoQR = document.querySelector('#inputColorFondoQR');
var valueColorFondoQR = "#ffffff";

// Obtenemos los botones.
var btnGenerarQR = document.querySelector("#btnGenerarQR");
var btnSaveQR = document.querySelector("#btnSaveQR");

// Lanzamos los listener de los inputs.
inputTextQR.addEventListener(("input"), function(e) {
    valueText = e.target.value.trim();
    btnGenerarQR.disabled = valueText.length > 0 ? false : true;
})

inputColorQR.addEventListener(("change"), e => {
    valueColorQR = e.target.value;
});

inputColorFondoQR.addEventListener(("change"), e => {
    valueColorFondoQR = e.target.value;
    console.log(valueColorFondoQR)
});

// Lanzamos los listener de las acciones de los botones.
btnGenerarQR.addEventListener(("click"), generateQRCode);
btnSaveQR.addEventListener(("click"), saveQRCode);

function generateQRCode() {
    console.log(valueColorQR, " ", valueColorFondoQR)
    // Vacíamos el contenedor.
    document.getElementById("qrcode").innerHTML = "";

    try {
        // Generamos el contenedor con la info proporcionada.
        qrcode = new QRCode(document.getElementById("qrcode"), {
        text: valueText,
        width: 250,
        height: 250,
        colorDark : valueColorQR,
        colorLight : valueColorFondoQR,
        correctLevel : QRCode.CorrectLevel.H
        });

        // Mostramos el botón de generar save imagen.
        btnSaveQR.classList.remove("d-none");

        // Lanzamos modal
        Swal.fire(
            '¡Good job!',
            'El código QR se ha generado correctamente!',
            'success'
        )
    }

    catch (error) {
        Swal.fire(
            '¡Error!',
            'Ha occurido un error al generar el código QR',
            'error'
        )
    }
}

function saveQRCode() {
    // Obtén el canvas del código QR
    var canvas = document.getElementById('qrcode').getElementsByTagName('canvas')[0];
    
    try {
        // Crea una URL de datos desde el canvas
        var qrImageData = canvas.toDataURL('image/png');
            
        // Crea un enlace dinámico para descargar la imagen
        var link = document.createElement('a');
        link.href = qrImageData;
        link.download = 'codigo_qr.png';
        link.click();

        // Lanzamos modal
        Swal.fire(
            '¡Good job!',
            'La imagen QR se ha generado correctamente!',
            'success'
        )
    }

    catch (error) {
        Swal.fire(
            '¡Error!',
            'Ha occurido un error al generar la imagen',
            'error'
        )
    }
}




