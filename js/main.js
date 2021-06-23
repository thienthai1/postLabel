$(document).ready(function(){

    $('#postLabel_submit').click(function() {
        
        var senderName = $('#postLabel_senderName').val();
        var senderAddress = $('#postLabel_senderAddress').val();
        var recieverName = $('#postLabel_recieverName').val();
        var recieverAddress = $('#postLabel_recieverAddress').val();

        console.log(senderName + " " + senderAddress+ " " + recieverName + " " + recieverAddress);

        var doc = new jsPDF();

        doc.setFont('Sarabun-ExtraBold', 'normal');
        doc.setFontSize(12);
        doc.text(10, 20, 'ชื่อผู้ส่ง', {
            maxWidth: 70
        });
        doc.setFontSize(12);
        doc.text(10, 30, 'ที่อยู่ผู้ส่ง', {
            maxWidth: 70
        });
        doc.setFont('Sarabun-Regular', 'normal');
        doc.setFontSize(12);
        doc.text(29, 20, senderName, {
            maxWidth: 70
        });
        doc.setFontSize(12);
        doc.text(29, 30, senderAddress, {
            maxWidth: 70
        });

        doc.setFont('Sarabun-ExtraBold', 'normal');
        doc.setFontSize(12);
        doc.text(10, 50, 'ชื่อผู้รับ', {
            maxWidth: 70
        });
        doc.setFontSize(12);
        doc.text(10, 60, 'ที่อยู่ผู้รับ', {
            maxWidth: 70
        });
        doc.setFont('Sarabun-Regular', 'normal');
        doc.setFontSize(12);
        doc.text(29, 50, recieverName, {
            maxWidth: 70
        });
        doc.setFontSize(12);
        doc.text(29, 60, recieverAddress, {
            maxWidth: 70
        });


        doc.output('dataurlnewwindow','myPdf.pdf');        

    });

});