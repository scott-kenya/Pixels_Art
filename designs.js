// Select color input
// Select size input
let height, size, color;


$('#sizePicker').submit( function(event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height , width);
})
// When size is submitted by the user, call makeGrid()


function makeGrid(x,y) {
	$('tr').remove();

for (let i = 1; i <= x; i++) {
	$('#pixelCanvas').append('<tr id = table' + i + '></tr>');

for (let j = 1; j <= y; j++) {
	$('#table' + i ).append('<td></td>');
	}}

	$('td').click(function addColor(){
		color = $('#colorPicker').val()
	

	if($(this).attr('style')){
		$(this).removeAttr('style')
	}
	else{
		$(this).attr('style', 'background-color:' + color);
	}
	})
}


