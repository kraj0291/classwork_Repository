//HIDING WORK
document.getElementById('hide').addEventListener('click',function(){
	document.getElementById('movie-list').classList.toggle('hidden');
});


//deleting work
document.querySelectorAll('.delete').forEach((item)=>{
	item.addEventListener('click',function(){
		document.querySelector('#movie-list ul').removeChild(this.parentElement);
	});
});


//adding a title
document.getElementById("add-button").addEventListener('click',function(e){
	e.preventDefault();
	var newInput = document.getElementById('new-movie-name').value;
	if(newInput.length!==0){
		var newLI = document.createElement("LI");             
		var newName = document.createElement("SPAN");
		newName.classList.add('name');
		var newDel =  document.createElement("SPAN"); 
		newDel.classList.add('delete');

		newName.appendChild(document.createTextNode(newInput));
		newDel.appendChild(document.createTextNode('delete'));

		newLI.appendChild(newName);
		newLI.appendChild(newDel);

		document.querySelector('#movie-list>ul').appendChild(newLI);

		newDel.addEventListener('click',function(){
			document.querySelector('#movie-list ul').removeChild(this.parentElement);
		});		

		document.getElementById('new-movie-name').value=null;
	}

});