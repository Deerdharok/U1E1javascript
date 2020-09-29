//ejecuto usando node js


const fs = require('fs') 
fs.readFile('prueba.txt', 'utf-8', (err, data) => { 
	if (err) throw err; 

	lines = data.replace('[',"").replace(']',"").replace('\r',"").split('\n')
	//lines =data.replace('[',"").replace(']',"").replace('\n',",").split(',')
		
	for(var i = 0;i < lines.length;i++){

		if (lines[i]=='\r') {
			lines.splice(i,1)
			i=i-1
		}
	}
	var reference_array = lines[0].split(',')
	var array = lines[1].split(' ')
	array.sort(function(a, b) {
		return reference_array.indexOf(a) - reference_array.indexOf(b);
	});
	console.log(array); 
	
	
}) 


