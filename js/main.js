$(document).ready(function(){

    $('#postLabel_submit').click(function() {
        
        var senderName = $('#postLabel_senderName').val();
        var senderAddress = $('#postLabel_senderAddress').val();
        var recieverName = $('#postLabel_recieverName').val();
        var recieverAddress = $('#postLabel_recieverAddress').val();

        console.log(senderName + " " + senderAddress+ " " + recieverName + " " + recieverAddress);

        var doc = new jsPDF();

        doc.text('Hello world!', 10, 10);
        doc.output('dataurlnewwindow');        

    });

});