$(document).ready(function(){

    var sendList = [];
    var noti = 0;

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
        var myList = {
            'senderName': $('#postLabel_senderName').val(),
            'senderAddress' : $('#postLabel_senderAddress').val(),
            'recieverName' : $('#postLabel_recieverName').val(),
            'recieverAddress' : $('#postLabel_recieverAddress').val()
        }
        
        sendList.push(myList);
        var getTable = $('.listRecipient').children()[0]
        var getBody = $(getTable).children()[0]
        var getLength = sendList.length;
        var tableTemplate = '<tr><td>' + $('#postLabel_senderName').val() + '</td><td>' + $('#postLabel_recieverName').val()  + '</td></tr>'
        $(getBody).append(tableTemplate);
        $('#postLabel_senderName').val('');
        $('#postLabel_senderAddress').val('');
        $('#postLabel_recieverName').val('');
        $('#postLabel_recieverAddress').val('')
        $('#postLabel_listLengthNumber').empty();
        $('#postLabel_listLengthNumber').append(getLength);
        $('#postLabel_notiList').toggle();
        noti = 1;
    });

    $('#postLabel_openNameList').click(function() {
        $('.listRecipient').css('display','block');
        $('.listRecipient').focus();
        if(noti == 1){
            $('#postLabel_notiList').toggle();
        }
        noti = 0;
    });

    $('.listRecipient').blur(function() {
        $('.listRecipient').css('display','none');
    });

});