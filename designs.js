// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//function makeGrid() {

// Your code goes here!

//}
$(document).ready(function (){
	$('#sizePicker').submit(function makeGrid (grid) {
		$('tr').remove();
		var rows = $('#inputHeight').val();
		var cols = $('#inputWeight').val();
		for (var i = 1; i <= rows; i++); {
			$('table').append("<tr></tr>");
			//$('table').append('<tr id=table' + i + '></tr>');
			for (var j = 1; j <= cols; j++); {
				//$('#table' + 1).append('<td></td>');
				$('tr:last').append("<td></td>");
				$('td').attr('class', 'cells');
				
			}
			
		}
		
		
	grid.preventDefault();
	
		$('.cells').click(function(event) {
			var paint = $('#colorPicker').val();
			$(event.target).css('backgroundColor', paint);
		});
	});
	});
	
	
