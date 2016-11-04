var arr = [ 'X' , 'O'];
var cur = 1;
var board = [ 0,0,0,0,0,0,0,0,0];
var mag_15 = [ 8,1,6,3,5,7,4,9,2 ];
var mag_015 = [ 0.8,0.1,0.6,0.3,0.5,0.7,0.4,0.9,0.2];
window.onload = function () {

    var b = document.querySelectorAll(".box");
    for(var i=0; i<b.length; i++)
    {
		b[i].addEventListener("click",function()
		{
			var cur_val = this.innerHTML;
		 	if( cur_val === '' )
				{
					this.innerHTML = arr[cur%2];
					var x = this.getAttribute('id');
					if ( arr[cur%2]=='X')
					board[x-1]=mag_15[x-1];
					else
					board[x-1]=mag_015[x-1];
					++cur;
					checkwin();
				}
				//console.log(board);
		});
	}

}
 

function checkwin() {
	var result = new Array();
	var row1 = 0,row2 = 0,row3 = 0;
	for( var i=0; i<3; i++ )
	{
		row1 += board[i];
		row2 += board[i+3];
		row3 += board[i+6];
	}
	var col1 = 0, col2 = 0, col3 = 0;
	for( var i=0; i<9; i+=3)
	{
		col1 += board[i];
		col2 += board[i+1];
		col3 += board[i+2];
	}
	var diag1 = 0 , diag2 = 0;
	for( var k=0; k<9; k+=4 )
		diag1 += board[k];
	for( var k=0; k<9; k+=2 )
		diag2 += board[k];
	result.push(row1,row2,row3,col1,col2,col3,diag1,diag2);
	console.log("chek:" + result );

	if ( result.indexOf(1.5)!= -1 )
			alert("Player O won");
	else if ( result.indexOf(15)!= -1 )
			alert("Player X Won");
}