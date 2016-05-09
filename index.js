// document.getElementByClassName("container");
//$(".container");

var machete = window.jQuery;
machete.get('http://swapi.co/api/planets',function (data) {
	 //debugger //hacer una pausa en la linea de codigo

	 var planets = data.results;

	 machete(".container").append("<table><tr>");

	 var content = ""

	 for(var x in planets)
	 	content += "<tr>"+
	 			       "<td>"+planets[x].name+"</td>"+
	 			       "<td>"+planets[x].gravity+"</td>"+
	 			   "</tr>";

	 machete(".container").append("<table class=\"planetas\"><th>Nombre</th><th>Gravedad</th>"+content+"</table>");

	 //planets.results.forEach(callback, function (var){
	 //	console.log("Info: "+var[0]);
	 //});
});

