function show() 
{
	document.getElementById("About").style.display = "block";
	document.getElementById("sendUp").style.display = "block";
}
function show2() 
{
	document.getElementById("Projects").style.display = "block";
	document.getElementById("sendUp").style.display = "block";
}
function hide() 
{
	var tab1 = document.getElementById("Projects");
	var tab2 = document.getElementById("About");
	if(tab1.style.display == "block"){
		document.getElementById("Projects").style.display = "none";	
	}
	if(tab2.style.display == "block"){
		document.getElementById("About").style.display = "none";
	}
	document.getElementById("sendUp").style.display = "none";
}
