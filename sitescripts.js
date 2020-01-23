function show() 
{
	document.getElementById("About").style.display = "block";
	document.getElementById("sendUp").style.display = "block";
}

function hide() 
{
	var tab2 = document.getElementById("About");
	if(tab2.style.display == "block"){
		document.getElementById("About").style.display = "none";
	}
	document.getElementById("sendUp").style.display = "none";
}
