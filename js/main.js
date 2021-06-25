$(document).ready(function(){

    var sendList = [];
    var noti = 0;

    $('#postLabel_submit').click(function() {

        var doc = new jsPDF();

        var startPosY = 20;
        var startPosX = 10;

        var shiftDown = 0;
        var shiftRight = 0;
        var splitRow = 3;
        var splitPage = 7;

        for(let i = 0;i < sendList.length; i++){

            doc.setFont('Sarabun-ExtraBold', 'normal');
            doc.setFontSize(12);
            doc.text(startPosX + shiftRight, (startPosY) + shiftDown, 'ชื่อผู้ส่ง', {
                maxWidth: 70
            });
            doc.setFontSize(12);
            doc.text(startPosX + shiftRight, (startPosY+10) + shiftDown, 'ที่อยู่ผู้ส่ง', {
                maxWidth: 70
            });
            doc.setFont('Sarabun-Regular', 'normal');
            doc.setFontSize(12);
            doc.text((startPosX + 19) + shiftRight, (startPosY) + shiftDown, sendList[i].senderName, {
                maxWidth: 70
            });
            doc.setFontSize(12);
            doc.text((startPosX + 19) + shiftRight, (startPosY+10) + shiftDown, sendList[i].senderAddress, {
                maxWidth: 70
            });

            doc.setFont('Sarabun-ExtraBold', 'normal');
            doc.setFontSize(12);
            doc.text(startPosX + shiftRight, (startPosY + 30) + shiftDown, 'ชื่อผู้รับ', {
                maxWidth: 70
            });
            doc.setFontSize(12);
            doc.text(startPosX + shiftRight, (startPosY + 40) + shiftDown, 'ที่อยู่ผู้รับ', {
                maxWidth: 70
            });
            doc.setFont('Sarabun-Regular', 'normal');
            doc.setFontSize(12);
            doc.text((startPosX + 19) + shiftRight, (startPosY + 30) + shiftDown, sendList[i].recieverName, {
                maxWidth: 70
            });
            doc.setFontSize(12);
            doc.text((startPosX + 19) + shiftRight, (startPosY + 40) + shiftDown, sendList[i].recieverAddress, {
                maxWidth: 70
            });

            if(i == splitRow){
                shiftDown = 0;
                shiftRight = 100;
                splitRow += 8
            }else if(i == splitPage){
                doc.addPage();
                shiftDown = 0;
                shiftRight = 0;
                splitPage += 8
            }else{
                shiftDown += 60
            }

        }

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
        if($('#postLabel_notiList').css('display') == 'none'){
            $('#postLabel_notiList').toggle();
            noti = 1;
        }

    });

    $('#postLabel_openNameList').click(function() {
        $('.listRecipient').toggle();
        if($('#postLabel_notiList').css('display') == 'block'){
            $('#postLabel_notiList').toggle();
            noti = 0;
        }
    });

    $(document).on("click", function(event){
        if(event.target.className != 'listRecipient' && event.target.id != 'postLabel_openNameList'){
            $('.listRecipient').css('display','none');
        }
    })

});