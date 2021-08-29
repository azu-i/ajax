
$(function() {
 	$.ajax({
 		type: 'GET',
 		url: 'htmlBuilder/topHtmlBuilder.html',
 		dataType: 'html',
 		success: function(data){
 			$('#sample2').append(data);
 		},
 		error:function(){
 			alert('失敗');
 		}

 	});
});

function insert(inputwords){
	$.ajax({
		type: 'POST',
		url: 'insert/insert.php',
		data:{inputwords : inputwords}
	})
}



$(document).on('click', '.inputOuter', function(){
	var inputwords = [];
	$('input[name="nicknames[]"]').each(function(i) {
    inputwords.push($('input[name="nicknames[]"]').eq(i).val());
  });
	$.ajax({
		type: 'POST',
		url: 'insert/insert.php',
		data:{'inputwords' : inputwords}
	});

});


$(document).on("click", "#js-inputAdder", function() {
    var input_data = document.createElement('input');
    input_data.type = 'text';
    input_data.name = 'nicknames[]';
    var parent = document.getElementById('DBConnector');
    parent.appendChild(input_data);
});


