$(document).ready(function(){

    $('#postLabel_submit').click(function() {
        
        var senderName = $('#postLabel_senderName').val();
        var senderAddress = $('#postLabel_senderAddress').val();
        var recieverName = $('#postLabel_recieverName').val();
        var recieverAddress = $('#postLabel_recieverAddress').val();

        console.log(senderName + " " + senderAddress+ " " + recieverName + " " + recieverAddress);

        var doc = new jsPDF();

        var startPosY = 20;
        var startPosX = 10;

        doc.setFont('Sarabun-ExtraBold', 'normal');
        doc.setFontSize(12);
        doc.text(startPosX, startPosY, 'ชื่อผู้ส่ง', {
            maxWidth: 70
        });
        doc.setFontSize(12);
        doc.text(startPosX, startPosY+10, 'ที่อยู่ผู้ส่ง', {
            maxWidth: 70
        });
        doc.setFont('Sarabun-Regular', 'normal');
        doc.setFontSize(12);
        doc.text(startPosX + 19, startPosY, senderName, {
            maxWidth: 70
        });
        doc.setFontSize(12);
        doc.text(startPosX + 19, startPosY+10, senderAddress, {
            maxWidth: 70
        });

        doc.setFont('Sarabun-ExtraBold', 'normal');
        doc.setFontSize(12);
        doc.text(startPosX, startPosY + 30, 'ชื่อผู้รับ', {
            maxWidth: 70
        });
        doc.setFontSize(12);
        doc.text(startPosX, startPosY + 40, 'ที่อยู่ผู้รับ', {
            maxWidth: 70
        });
        doc.setFont('Sarabun-Regular', 'normal');
        doc.setFontSize(12);
        doc.text(startPosX + 19, startPosY + 30, recieverName, {
            maxWidth: 70
        });
        doc.setFontSize(12);
        doc.text(startPosX + 19, startPosY + 40, recieverAddress, {
            maxWidth: 70
        });


        doc.output('dataurlnewwindow','myPdf.pdf');        

    });

    $('#postLabel_save').click(function() {
        console.log("moo");
    });

});