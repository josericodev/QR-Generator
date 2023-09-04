function generateQRCode() {
    var text = document.getElementById('text-input').value;
    var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "http://jindo.dev.naver.com/collie",
    width: 10,
    height: 10,
    colorDark : "#123123",
    colorLight : "#ccc",
    correctLevel : QRCode.CorrectLevel.H
    });
}